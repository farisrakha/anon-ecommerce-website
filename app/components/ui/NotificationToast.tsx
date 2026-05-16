'use client'

import { useState } from 'react'

export default function NotificationToast() {
  const [closed, setClosed] = useState(false)

  if (closed) return null

  return (
    <div className="notification-toast">
      <button
        className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center text-sonic-silver hover:text-eerie-black"
        onClick={() => setClosed(true)}
        aria-label="Close notification"
      >
        <ion-icon name="close-outline" />
      </button>

      <div className="w-20 h-16 shrink-0 rounded overflow-hidden">
        <img
          src="/images/products/jewellery-1.jpg"
          alt="Rose Gold Earrings"
          width={80}
          height={70}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="min-w-0">
        <p className="text-fs-9 text-sonic-silver mb-1">Someone in new just bought</p>
        <p className="text-fs-8 font-semibold text-eerie-black mb-1">Rose Gold Earrings</p>
        <p className="text-fs-9 text-sonic-silver">
          <time dateTime="PT2M">2 Minutes</time> ago
        </p>
      </div>
    </div>
  )
}
