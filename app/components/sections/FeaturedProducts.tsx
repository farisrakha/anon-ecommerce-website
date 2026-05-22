'use client'

import { useState, useEffect, useRef } from 'react'
import { featuredCategories, featuredProducts } from '../../data/nocte-mock'
import type { FeaturedCategoryId } from '../../data/nocte-mock'

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'
const ROTATE_MS = 10_000

export default function FeaturedProducts() {
  const [activeId, setActiveId] = useState<FeaturedCategoryId>('shirt')
  const [animKey, setAnimKey] = useState(0)
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null)
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Intersection Observer — only rotate when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-rotate every 10s when in view
  useEffect(() => {
    if (!inView) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setActiveId(prev => {
        const idx = featuredCategories.findIndex(c => c.id === prev)
        const next = featuredCategories[(idx + 1) % featuredCategories.length].id
        return next
      })
      setAnimKey(k => k + 1)
    }, ROTATE_MS)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [inView])

  const switchCategory = (id: FeaturedCategoryId) => {
    if (id === activeId) return
    setActiveId(id)
    setAnimKey(k => k + 1)
    // Reset auto-rotate timer on manual tap
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (inView) {
      intervalRef.current = setInterval(() => {
        setActiveId(prev => {
          const idx = featuredCategories.findIndex(c => c.id === prev)
          const next = featuredCategories[(idx + 1) % featuredCategories.length].id
          return next
        })
        setAnimKey(k => k + 1)
      }, ROTATE_MS)
    }
  }

  const products = featuredProducts[activeId]

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: 'var(--nocte-surface-2)',
        borderBottom: '1px solid var(--nocte-border)',
      }}
    >
      <div className="max-w-[1350px] mx-auto px-4" style={{ paddingTop: 64, paddingBottom: 72 }}>

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <p className="nocte-label mb-3" style={{ color: 'var(--nocte-gray-mid)' }}>
            FEATURED
          </p>
          <div
            className="flex items-end justify-between"
            style={{ borderBottom: '1px solid var(--nocte-border)', paddingBottom: 20 }}
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
              Featured Styles
            </h2>

            {/* Category tabs */}
            <nav className="flex items-center gap-0" style={{ borderLeft: '1px solid var(--nocte-border)' }}>
              {featuredCategories.map(cat => {
                const active = cat.id === activeId
                return (
                  <button
                    key={cat.id}
                    onClick={() => switchCategory(cat.id)}
                    className="nocte-label"
                    style={{
                      padding: '6px 16px',
                      backgroundColor: active ? 'var(--nocte-black)' : 'transparent',
                      color: active ? '#FAFAFA' : 'var(--nocte-gray-mid)',
                      borderRight: '1px solid var(--nocte-border)',
                      cursor: 'pointer',
                      transition: `background-color 160ms ${EASE}, color 160ms ${EASE}`,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {cat.name}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Product grid — re-keyed on category change to re-trigger animation */}
        <div
          key={animKey}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full"
        >
          {products.map((product, i) => {
            const isHov = hoveredProductId === product.id
            return (
              <div key={product.id} className="w-full min-w-0">
                <a
                  href="#catalog"
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    opacity: 0,
                    animation: `fadeInUp 0.6s ease-out ${i * 150}ms forwards`,
                  }}
                  onMouseEnter={() => setHoveredProductId(product.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  {/* Image */}
                  <div style={{ overflow: 'hidden', aspectRatio: '3/4', marginBottom: 14 }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      style={{
                        transform: isHov ? 'scale(1.04)' : 'scale(1)',
                        transition: `transform 600ms ${EASE}`,
                      }}
                    />
                  </div>

                  {/* Text */}
                  <p
                    style={{
                      fontFamily: 'var(--nocte-serif)',
                      fontSize: 16,
                      fontWeight: 400,
                      color: 'var(--nocte-black)',
                      lineHeight: 1.3,
                      marginBottom: 4,
                      textDecoration: isHov ? 'underline' : 'none',
                      textUnderlineOffset: 3,
                      textDecorationColor: 'var(--nocte-gray-mid)',
                    }}
                  >
                    {product.name}
                  </p>
                  <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>
                    {product.origin}
                  </p>
                </a>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
