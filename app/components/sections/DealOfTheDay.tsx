'use client'

import { useState, useEffect } from 'react'
import { dealProducts } from '../../data/products'
import StarRating from '../ui/StarRating'

const DEAL_END = new Date(Date.now() + 360 * 24 * 60 * 60 * 1000)

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
      <h2 className="text-fs-4 font-semibold text-eerie-black mb-4 pb-2 border-b border-cultured">
        Deal of the day
      </h2>

      <div className="flex overflow-x-auto has-scrollbar gap-4">
        {dealProducts.map((product) => {
          const totalSold = product.sold + product.available
          const soldPercent = Math.round((product.sold / totalSold) * 100)

          return (
            <div key={product.id} className="flex-none w-full sm:w-[calc(50%-8px)] border border-cultured rounded-md-custom overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <StarRating rating={product.rating} className="mb-2" />

                <a href="#">
                  <h3 className="text-fs-5 font-semibold text-eerie-black mb-2 hover:text-salmon-pink transition-colors">
                    {product.title}
                  </h3>
                </a>

                <p className="text-fs-8 text-sonic-silver leading-relaxed mb-4">{product.description}</p>

                <div className="flex items-center gap-3 mb-4">
                  <p className="text-fs-4 font-semibold text-salmon-pink">${product.price.toFixed(2)}</p>
                  <del className="text-fs-7 text-sonic-silver">${product.originalPrice.toFixed(2)}</del>
                </div>

                <button className="w-full bg-salmon-pink text-white text-fs-8 font-semibold py-3 rounded-sm-custom hover:bg-bittersweet transition-colors mb-4">
                  add to cart
                </button>

                <div className="mb-4">
                  <div className="flex justify-between text-fs-9 text-sonic-silver mb-2">
                    <span>already sold: <b>{product.sold}</b></span>
                    <span>available: <b>{product.available}</b></span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${soldPercent}%` }} />
                  </div>
                </div>

                <div>
                  <p className="text-fs-9 text-sonic-silver mb-3">Hurry Up! Offer ends in:</p>
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
