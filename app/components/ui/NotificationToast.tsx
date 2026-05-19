'use client'

import { useState } from 'react'

export default function NotificationToast() {
  const [closed, setClosed] = useState(false)

  if (closed) return null

  return (
    <div className="notification-toast">
      <button
        className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center nocte-link-mid"
        onClick={() => setClosed(true)}
        aria-label="Close notification"
      >
        <ion-icon name="close-outline" />
      </button>

      <div className="w-20 h-16 shrink-0 overflow-hidden">
        <img
          src="/images/products/jewellery-1.jpg"
          alt="Rose Gold Earrings"
          width={80}
          height={70}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="min-w-0">
        <p className="text-fs-9 mb-1" style={{ color: 'var(--nocte-gray-mid)', fontFamily: 'var(--nocte-sans)' }}>Someone just bought</p>
        <p className="text-fs-8 mb-1" style={{ color: 'var(--nocte-black)', fontFamily: 'var(--nocte-sans)' }}>Rose Gold Earrings</p>
        <p className="text-fs-9" style={{ color: 'var(--nocte-gray-mid)', fontFamily: 'var(--nocte-sans)' }}>
          <time dateTime="PT2M">2 minutes</time> ago
        </p>
      </div>
    </div>
  )
}
