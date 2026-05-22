'use client'

import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { collections, getSupplierById } from '../../data/nocte-mock'

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

export default function CuratedCollections() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section
      style={{
        backgroundColor: 'var(--nocte-surface-2)',
        borderTop: '1px solid var(--nocte-border)',
      }}
    >
      <div className="max-w-[1350px] mx-auto px-4" style={{ paddingTop: 72, paddingBottom: 72 }}>

        {/* Header */}
        <div
          className="flex items-end justify-between"
          style={{ borderBottom: '1px solid var(--nocte-border)', paddingBottom: 20, marginBottom: 40 }}
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
            Curated Collections
          </h2>
          <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>
            SEASONAL WHOLESALE
          </p>
        </div>

        {/* Grid: 1 col mobile, 2 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--nocte-border)' }}>
          {collections.map(collection => {
            const supplier = getSupplierById(collection.supplierId)
            const isHovered = hoveredId === collection.id

            return (
              <Link
                key={collection.id}
                to="/collections/$id"
                params={{ id: collection.id }}
                aria-label={`View ${collection.title}`}
                style={{ display: 'block', position: 'relative', overflow: 'hidden', height: 400, textDecoration: 'none' }}
                onMouseEnter={() => setHoveredId(collection.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <img
                  src={collection.heroImage}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                  style={{
                    transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                    transition: `transform 600ms ${EASE}`,
                  }}
                />

                {/* Persistent scrim — always visible so text is legible */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.15) 55%, transparent 100%)',
                  }}
                />

                {/* Season badge — top left */}
                <div
                  style={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    fontFamily: 'var(--nocte-sans)',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.75)',
                    backgroundColor: 'rgba(0,0,0,0.35)',
                    padding: '4px 10px',
                  }}
                >
                  {collection.season}
                </div>

                {/* Bottom content */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '24px 24px 28px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--nocte-serif)',
                      fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                      fontWeight: 400,
                      color: '#FAFAFA',
                      lineHeight: 1.2,
                      marginBottom: 6,
                    }}
                  >
                    {collection.title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--nocte-sans)',
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.65)',
                      lineHeight: 1.4,
                      marginBottom: 16,
                    }}
                  >
                    {collection.tagline}
                  </p>
                  <div
                    className="flex items-center justify-between"
                    style={{
                      opacity: isHovered ? 1 : 0.75,
                      transition: `opacity 280ms ${EASE}`,
                    }}
                  >
                    <div className="flex items-center gap-5">
                      <span className="nocte-label" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        {collection.itemCount} ITEMS
                      </span>
                      <span className="nocte-label" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        {collection.leadTime}
                      </span>
                      {supplier && (
                        <span className="nocte-label" style={{ color: 'rgba(255,255,255,0.55)' }}>
                          {supplier.name}
                        </span>
                      )}
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--nocte-sans)',
                        fontSize: 11,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--nocte-black)',
                        backgroundColor: isHovered ? '#FAFAFA' : 'rgba(250,250,250,0.85)',
                        padding: '5px 12px',
                        transition: `background-color 200ms ${EASE}`,
                      }}
                    >
                      View Collection
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}
