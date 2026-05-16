import { createRootRoute, HeadContent, Outlet, Scripts, ScrollRestoration } from '@tanstack/react-router'
import appCss from '../app.css?url'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import NewsletterModal from '../components/ui/NewsletterModal'
import NotificationToast from '../components/ui/NotificationToast'

export const Route = createRootRoute({
  head: () => ({
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'shortcut icon', href: '/images/logo/favicon.ico', type: 'image/x-icon' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' as const },
    ],
    meta: [
      { charSet: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { title: 'Anon - eCommerce Website' },
    ],
    scripts: [
      { type: 'module', src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js' },
      { noModule: true, src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-white overflow-x-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <NewsletterModal />
        <NotificationToast />
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
