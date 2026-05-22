'use client'

import { createFileRoute, Link } from '@tanstack/react-router'
import { getCollectionById, getSupplierById } from '../data/nocte-mock'
import SeasonProducts from '../components/sections/SeasonProducts'

export const Route = createFileRoute('/collections/$id')({
  component: CollectionPage,
})

function CollectionPage() {
  const { id } = Route.useParams()
  const collection = getCollectionById(id)

  if (!collection) {
    return (
      <main style={{ padding: '80px 16px', textAlign: 'center', backgroundColor: 'var(--nocte-surface-1)' }}>
        <p style={{ fontFamily: 'var(--nocte-sans)', fontSize: 15, color: 'var(--nocte-gray-mid)', marginBottom: 20 }}>
          Collection not found.
        </p>
        <Link to="/" className="nocte-btn-secondary" style={{ fontSize: 11 }}>
          BACK TO CATALOG
        </Link>
      </main>
    )
  }

  const supplier = getSupplierById(collection.supplierId)

  return (
    <main>
      {/* Hero band */}
      <div style={{ position: 'relative', height: 400, overflow: 'hidden' }}>
        <img
          src={collection.heroImage}
          alt={collection.title}
          className="w-full h-full object-cover"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)',
          }}
        />
        <div style={{ position: 'absolute', bottom: 32, left: 0, right: 0 }}>
          <div className="max-w-[1350px] mx-auto px-4">
            <p
              className="nocte-label"
              style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 8, letterSpacing: '0.1em' }}
            >
              {collection.season}
            </p>
            <h1
              style={{
                fontFamily: 'var(--nocte-serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                fontWeight: 400,
                color: '#FAFAFA',
                lineHeight: 1.15,
              }}
            >
              {collection.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Info strip */}
      <div style={{ backgroundColor: 'var(--nocte-surface-2)', borderBottom: '1px solid var(--nocte-border)' }}>
        <div className="max-w-[1350px] mx-auto px-4 py-8 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
          <div>
            <p
              style={{
                fontFamily: 'var(--nocte-sans)',
                fontSize: 14,
                color: 'var(--nocte-gray-mid)',
                marginBottom: 4,
              }}
            >
              {collection.tagline}
            </p>
            {supplier && (
              <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>{supplier.name}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-8">
            {[
              { label: 'LEAD TIME', value: collection.leadTime },
              { label: 'MOQ',       value: `€${collection.moqValue}` },
              { label: 'MIN UNITS', value: String(collection.moqUnits) },
            ].map(stat => (
              <div key={stat.label}>
                <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)', marginBottom: 2 }}>{stat.label}</p>
                <p
                  style={{
                    fontFamily: 'var(--nocte-serif)',
                    fontSize: 18,
                    fontWeight: 400,
                    color: 'var(--nocte-black)',
                  }}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <section style={{ backgroundColor: 'var(--nocte-surface-1)' }}>
        <div className="max-w-[1350px] mx-auto px-4 py-12">
          <SeasonProducts collectionId={id} />
        </div>
      </section>

      {/* Back link */}
      <div
        style={{
          backgroundColor: 'var(--nocte-surface-2)',
          borderTop: '1px solid var(--nocte-border)',
          padding: '24px 16px',
        }}
      >
        <div className="max-w-[1350px] mx-auto">
          <Link to="/" className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>
            &larr; BACK TO ALL COLLECTIONS
          </Link>
        </div>
      </div>
    </main>
  )
}
