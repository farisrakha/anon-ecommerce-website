'use client'

import { useState } from 'react'

export default function NewsletterModal() {
  const [closed, setClosed] = useState(false)

  if (closed) return null

  return (
    <div className="modal" onClick={(e) => { if (e.target === e.currentTarget) setClosed(true) }}>
      <div className="modal-container">
        <button className="modal-close-btn" onClick={() => setClosed(true)} aria-label="Close newsletter">
          <ion-icon name="close-outline" />
        </button>

        <div className="hidden md:block w-[400px] shrink-0">
          <img
            src="/images/newsletter.png"
            alt="subscribe newsletter"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-8 min-w-0">
          <div className="mb-6">
            <h3 className="text-fs-2 font-semibold text-eerie-black mb-3">Subscribe Newsletter.</h3>
            <p className="text-fs-7 text-sonic-silver leading-relaxed">
              Subscribe the <b>Anon</b> to get latest products and discount update.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full border border-cultured rounded-sm-custom px-4 py-3 text-fs-7 outline-none focus:border-salmon-pink mb-4"
            />
            <button
              type="submit"
              className="w-full bg-salmon-pink text-white font-semibold py-3 rounded-sm-custom hover:bg-bittersweet transition-colors duration-200 text-fs-7 uppercase tracking-wide"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
