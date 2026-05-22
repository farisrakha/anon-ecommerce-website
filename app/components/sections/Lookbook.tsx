'use client'

import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { lookbookItems, getProductById } from '../../data/nocte-mock'

const heightPattern = [400, 280, 360, 340, 440, 280, 320, 400, 280, 360, 440, 320]
const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

export default function Lookbook() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section
      style={{
        backgroundColor: 'var(--nocte-surface-1)',
        borderTop: '1px solid var(--nocte-border)',
      }}
    >
      <div className="max-w-[1350px] mx-auto px-4" style={{ paddingTop: 72, paddingBottom: 72 }}>
        {/* Header */}
        <div
          className="flex items-end justify-between"
          style={{ borderBottom: '1px solid var(--nocte-border)', paddingBottom: 20, marginBottom: 32 }}
        >
          <h2
            style={{
              fontFamily: 'var(--nocte-serif)',
              fontSize: 'clamp(1.4rem, 2vw, 1.75rem)',
              fontWeight: 400,
              color: 'var(--nocte-black)',
              lineHeight: 1.2,
            }}
          >
            Lookbook
          </h2>
          <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>
            SEASONAL EDITORIAL
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-4" style={{ columnGap: 12 }}>
          {lookbookItems.map((item, i) => {
            const product = getProductById(item.productId)
            const isHovered = hoveredId === item.id

            return (
              <div
                key={item.id}
                className="break-inside-avoid"
                style={{ marginBottom: 12 }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div style={{ position: 'relative', height: heightPattern[i], overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={product?.name ?? 'Lookbook'}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{
                      transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                      transition: `transform 600ms ${EASE}`,
                    }}
                  />

                  {product && (
                    <Link
                      to="/products/$id"
                      params={{ id: product.id }}
                      aria-label={`View ${product.name}`}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: 20,
                        background: 'linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)',
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
                        transition: `opacity 280ms ${EASE}, transform 280ms ${EASE}`,
                        textDecoration: 'none',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'var(--nocte-sans)',
                          fontSize: 11,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.6)',
                          marginBottom: 6,
                        }}
                      >
                        {product.category}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--nocte-serif)',
                          fontSize: 20,
                          fontWeight: 400,
                          color: '#FAFAFA',
                          lineHeight: 1.2,
                          marginBottom: 14,
                        }}
                      >
                        {product.name}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p style={{ fontFamily: 'var(--nocte-sans)', fontSize: 13, fontWeight: 500, color: '#FAFAFA' }}>
                          &euro;{product.tiers[0].unitPrice.toFixed(0)} / unit
                        </p>
                        <span
                          style={{
                            fontFamily: 'var(--nocte-sans)',
                            fontSize: 11,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'var(--nocte-black)',
                            backgroundColor: '#FAFAFA',
                            padding: '5px 10px',
                          }}
                        >
                          View Product
                        </span>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
