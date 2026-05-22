'use client'

import { useState, useEffect } from 'react'
import { products } from '../../data/nocte-mock'
import StarRating from '../ui/StarRating'

const DEAL_END = new Date(Date.now() + 360 * 24 * 60 * 60 * 1000)

const dealItems = [
  {
    product: products[4], // Cashmere Blend Coat
    description: 'Premium cashmere blend in a relaxed tailored silhouette. Structured collar, clean seaming, seasonal exclusive.',
    sold: 28,
    available: 12,
    rating: 4.8,
  },
  {
    product: products[6], // Silk Slip Dress
    description: 'Fluid Italian silk in a minimalist slip silhouette. Adjustable straps, invisible hem, fully lined.',
    sold: 15,
    available: 21,
    rating: 4.9,
  },
]

function useCountdown(endDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, endDate.getTime() - Date.now())
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [endDate])

  return timeLeft
}

export default function DealOfTheDay() {
  const { days, hours, minutes, seconds } = useCountdown(DEAL_END)

  return (
    <div className="mb-6">
      <h2
        className="text-fs-4 mb-4 pb-2"
        style={{ color: 'var(--nocte-black)', fontFamily: 'var(--nocte-serif)', fontWeight: 400, borderBottom: '1px solid var(--nocte-border)' }}
      >
        Featured This Season
      </h2>

      <div className="flex overflow-x-auto has-scrollbar gap-4">
        {dealItems.map(({ product, description, sold, available, rating }) => {
          const totalSold = sold + available
          const soldPercent = Math.round((sold / totalSold) * 100)

          return (
            <div
              key={product.id}
              className="flex-none w-full sm:w-[calc(50%-8px)] overflow-hidden"
              style={{ border: '1px solid var(--nocte-border)', backgroundColor: 'var(--nocte-surface-1)' }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <StarRating rating={rating} className="mb-2" />

                <a href="#">
                  <h3
                    className="text-fs-5 mb-2 nocte-link-dim"
                    style={{ fontFamily: 'var(--nocte-serif)', fontWeight: 400 }}
                  >
                    {product.name}
                  </h3>
                </a>

                <p className="text-fs-8 leading-relaxed mb-4" style={{ color: 'var(--nocte-gray-mid)', fontFamily: 'var(--nocte-sans)' }}>
                  {description}
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <p className="text-fs-4" style={{ color: 'var(--nocte-black)', fontFamily: 'var(--nocte-sans)', fontWeight: 500 }}>
                    €{product.tiers[0].unitPrice.toFixed(2)}
                  </p>
                  <del className="text-fs-7" style={{ color: 'var(--nocte-gray-mid)', fontFamily: 'var(--nocte-sans)' }}>
                    RRP €{product.suggestedRetail.toFixed(2)}
                  </del>
                </div>

                <button className="nocte-btn-primary w-full mb-4">
                  Add to order
                </button>

                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="nocte-label">Ordered: <span style={{ color: 'var(--nocte-gray-light)' }}>{sold}</span></span>
                    <span className="nocte-label">Available: <span style={{ color: 'var(--nocte-gray-light)' }}>{available}</span></span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${soldPercent}%` }} />
                  </div>
                </div>

                <div>
                  <p className="nocte-label mb-3">Offer ends in:</p>
                  <div className="countdown-box">
                    {[
                      { value: days, label: 'Days' },
                      { value: hours, label: 'Hours' },
                      { value: minutes, label: 'Min' },
                      { value: seconds, label: 'Sec' },
                    ].map(({ value, label }) => (
                      <div key={label} className="countdown-item">
                        <span className="number">{String(value).padStart(2, '0')}</span>
                        <span className="label">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
