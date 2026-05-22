'use client'

import { useRef, useState } from 'react'
import { blogPosts } from '../../data/nocte-mock'

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'
const CARD_W = 320
const GAP = 16

function BlogCard({
  post,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  post: typeof blogPosts[number]
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  return (
    <a
      href={`/blog/${post.slug}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        width: CARD_W,
        textDecoration: 'none',
        backgroundColor: 'var(--nocte-surface-1)',
        border: '1px solid var(--nocte-border)',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Image */}
      <div style={{ height: 220, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover"
          style={{
            transform: isHovered ? 'scale(1.04)' : 'scale(1)',
            transition: `transform 600ms ${EASE}`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 14,
            left: 14,
            fontFamily: 'var(--nocte-sans)',
            fontSize: 10,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#FAFAFA',
            backgroundColor: 'rgba(10,10,10,0.55)',
            padding: '3px 8px',
          }}
        >
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: '20px 20px 18px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--nocte-serif)',
            fontSize: 17,
            fontWeight: 400,
            color: 'var(--nocte-black)',
            lineHeight: 1.35,
            marginBottom: 10,
            textDecoration: isHovered ? 'underline' : 'none',
            textDecorationColor: 'var(--nocte-gray-mid)',
            textUnderlineOffset: 3,
            transition: `text-decoration 120ms`,
          }}
        >
          {post.title}
        </p>
        <p
          style={{
            fontFamily: 'var(--nocte-sans)',
            fontSize: 13,
            color: 'var(--nocte-gray-mid)',
            lineHeight: 1.55,
            marginBottom: 18,
            flex: 1,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.description}
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--nocte-border)',
            paddingTop: 14,
          }}
        >
          <span className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>
            {post.readTime}
          </span>
          <span
            style={{
              fontFamily: 'var(--nocte-sans)',
              fontSize: 14,
              color: 'var(--nocte-black)',
              transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
              transition: `transform 250ms ${EASE}`,
              display: 'inline-block',
            }}
          >
            &rarr;
          </span>
        </div>
      </div>
    </a>
  )
}

export default function BlogCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: dir === 'left' ? -(CARD_W + GAP) * 2 : (CARD_W + GAP) * 2,
      behavior: 'smooth',
    })
  }

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
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--nocte-border)',
            paddingBottom: 20,
            marginBottom: 36,
          }}
        >
          <div>
            <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)', marginBottom: 8 }}>
              INSIGHTS
            </p>
            <h2
              style={{
                fontFamily: 'var(--nocte-serif)',
                fontSize: 'clamp(1.4rem, 2vw, 1.75rem)',
                fontWeight: 400,
                color: 'var(--nocte-black)',
                lineHeight: 1.2,
              }}
            >
              Wholesale Insights &amp; Trends
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a
              href="/blog"
              style={{
                fontFamily: 'var(--nocte-sans)',
                fontSize: 12,
                letterSpacing: '0.06em',
                color: 'var(--nocte-gray-mid)',
                textDecoration: 'underline',
                textUnderlineOffset: 3,
              }}
            >
              VIEW ALL
            </a>
            {/* Scroll arrows — desktop only */}
            <div className="hidden lg:flex" style={{ gap: 6 }}>
              <button
                onClick={() => scroll('left')}
                className="nocte-btn-secondary"
                style={{ padding: '6px 12px', fontSize: 14, lineHeight: 1 }}
                aria-label="Scroll left"
              >
                &#8592;
              </button>
              <button
                onClick={() => scroll('right')}
                className="nocte-btn-secondary"
                style={{ padding: '6px 12px', fontSize: 14, lineHeight: 1 }}
                aria-label="Scroll right"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: GAP,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            paddingBottom: 4,
          }}
          // Hide webkit scrollbar via className trick (Tailwind scrollbar-hide not needed)
          className="[&::-webkit-scrollbar]:hidden"
        >
          {blogPosts.map(post => (
            <BlogCard
              key={post.id}
              post={post}
              isHovered={hoveredId === post.id}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
