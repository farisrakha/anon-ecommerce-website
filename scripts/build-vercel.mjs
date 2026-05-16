import { mkdir, cp, writeFile, rm } from 'node:fs/promises'
import { builtinModules } from 'node:module'
import { build } from 'esbuild'

const FUNC = '.vercel/output/functions/render.func'
const STATIC = '.vercel/output/static'

// Clean previous output so stale files don't linger between builds
await rm('.vercel/output', { recursive: true, force: true })
await mkdir(FUNC, { recursive: true })
await mkdir(STATIC, { recursive: true })

// Static assets: dist/client/ → .vercel/output/static/
await cp('dist/client', STATIC, { recursive: true })

// Re-bundle the SSR server as CJS so react-dom's require('util') calls work.
// ESM format creates a __require stub that can't satisfy dynamic CJS requires
// of Node.js built-ins; CJS format uses the real require() at runtime.
// Externalize all Node.js built-ins (both bare and node:-prefixed forms).
await build({
  entryPoints: ['dist/server/server.js'],
  bundle: true,
  format: 'cjs',
  platform: 'node',
  target: 'node20',
  outfile: `${FUNC}/server.cjs`,
  external: builtinModules.flatMap(m => [m, `node:${m}`]),
})

// Adapter: converts Vercel's Node.js IncomingMessage/ServerResponse to the
// Web Fetch Request/Response that TanStack Start's SSR handler expects.
// Uses CJS so it can require() the bundled server.cjs naturally.
await writeFile(`${FUNC}/render.cjs`, `\
'use strict'
const { pipeline } = require('node:stream/promises')
const { Readable } = require('node:stream')
const serverModule = require('./server.cjs')
const handler = serverModule.default

module.exports = async function render(req, res) {
  const proto = req.headers['x-forwarded-proto'] || 'https'
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost'
  const url = new URL(req.url, \`\${proto}://\${host}\`)
  const headers = new Headers()
  for (const [key, value] of Object.entries(req.headers)) {
    const vs = Array.isArray(value) ? value : [value]
    vs.forEach(v => { if (v) headers.append(key, v) })
  }
  const body = req.method !== 'GET' && req.method !== 'HEAD'
    ? Readable.toWeb(req) : undefined
  const webReq = new Request(url.toString(), {
    method: req.method,
    headers,
    body,
    ...(body ? { duplex: 'half' } : {}),
  })
  const response = await handler.fetch(webReq)
  res.statusCode = response.status
  response.headers.forEach((v, k) => res.setHeader(k, v))
  if (response.body) {
    await pipeline(Readable.fromWeb(response.body), res)
  } else {
    res.end()
  }
}
`)

// Tell Vercel to run this function with Node.js 20
await writeFile(`${FUNC}/.vc-config.json`, JSON.stringify({
  runtime: 'nodejs20.x',
  handler: 'render.cjs',
  launcherType: 'Nodejs',
}, null, 2))

// Route config: serve static files from CDN first, fall back to SSR function
await writeFile('.vercel/output/config.json', JSON.stringify({
  version: 3,
  routes: [
    { handle: 'filesystem' },
    { src: '/(.*)', dest: '/render' },
  ],
}, null, 2))

console.log('Vercel output written to .vercel/output/')
