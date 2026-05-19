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
            <h3
              className="text-fs-2 mb-3"
              style={{ color: 'var(--nocte-white)', fontFamily: 'var(--nocte-serif)', fontWeight: 400 }}
            >
              Subscribe to NOCTE
            </h3>
            <p className="text-fs-7 leading-relaxed" style={{ color: 'var(--nocte-gray-mid)', fontFamily: 'var(--nocte-sans)' }}>
              New arrivals, exclusive access, and wholesale updates — no noise.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              required
              className="nocte-input mb-4"
            />
            <button type="submit" className="nocte-btn-primary w-full">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
