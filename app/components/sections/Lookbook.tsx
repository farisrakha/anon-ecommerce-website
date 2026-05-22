'use client'

import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { lookbookItems, getProductById } from '../../data/nocte-mock'

// Heights are tuned so each 4-col column sums to 1060px (+ 2×12px gaps = 1084px total)
// Col 0 (i%4=0, items 0,4,8):  380+400+280 = 1060
// Col 1 (i%4=1, items 1,5,9):  340+360+360 = 1060
// Col 2 (i%4=2, items 2,6,10): 320+360+380 = 1060
// Col 3 (i%4=3, items 3,7,11): 400+340+320 = 1060
const heightPattern = [380, 340, 320, 400, 400, 360, 360, 340, 280, 360, 380, 320]
const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

function LookbookItem({
  item,
  i,
  hoveredId,
  setHoveredId,
}: {
  item: (typeof lookbookItems)[number]
  i: number
  hoveredId: string | null
  setHoveredId: (id: string | null) => void
}) {
  const product = getProductById(item.productId)
  const isHovered = hoveredId === item.id

  return (
    <div
      style={{ position: 'relative', height: heightPattern[i], overflow: 'hidden', flexShrink: 0 }}
      onMouseEnter={() => setHoveredId(item.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
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
            background:
              'linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)',
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
  )
}

export default function Lookbook() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  // Pre-assign items to columns by index so distribution is deterministic
  const indexed = lookbookItems.map((item, i) => ({ item, i }))
  const cols4 = [0, 1, 2, 3].map(col => indexed.filter(({ i }) => i % 4 === col))
  const cols2 = [0, 1].map(col => indexed.filter(({ i }) => i % 2 === col))

  const props = { hoveredId, setHoveredId }

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

        {/* Mobile: single column */}
        <div className="flex flex-col gap-3 sm:hidden">
          {indexed.map(({ item, i }) => (
            <LookbookItem key={item.id} item={item} i={i} {...props} />
          ))}
        </div>

        {/* Tablet: 2 explicit columns */}
        <div className="hidden sm:flex lg:hidden gap-3">
          {cols2.map((col, ci) => (
            <div key={ci} className="flex-1 flex flex-col gap-3">
              {col.map(({ item, i }) => (
                <LookbookItem key={item.id} item={item} i={i} {...props} />
              ))}
            </div>
          ))}
        </div>

        {/* Desktop: 4 explicit columns — heights pre-balanced to 1060px each */}
        <div className="hidden lg:flex gap-3">
          {cols4.map((col, ci) => (
            <div key={ci} className="flex-1 flex flex-col gap-3">
              {col.map(({ item, i }) => (
                <LookbookItem key={item.id} item={item} i={i} {...props} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
