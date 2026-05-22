'use client'

import { Link } from '@tanstack/react-router'
import type { Collection, Product } from '../../data/nocte-mock'
import { getSupplierById } from '../../data/nocte-mock'
import { collections as allCollections } from '../../data/nocte-mock'

interface Filters {
  season: string
  locations: string[]
  materials: string[]
  leadTime: string
  reorderFreq: string
  marginMin: number
  marginMax: number
  rating: number
  moqMin: number
  moqMax: number
  sort: string
  view: string
}

interface SeasonalCollectionsProps {
  collections: Collection[]
  filteredProducts: Product[]
  allProducts: Product[]
  filters: Filters
  onFilterChange: (next: Partial<Filters>) => void
  onClearAll: () => void
}

function SeasonCard({ collection, cardProducts, view, dimmed }: {
  collection: Collection
  cardProducts: Product[]
  view: string
  dimmed: boolean
}) {
  const supplier = getSupplierById(collection.supplierId)

  if (view === 'list') {
    return (
      <div
        className="flex gap-4 p-4"
        style={{
          border: '1px solid var(--nocte-border)',
          backgroundColor: 'var(--nocte-surface-1)',
          opacity: dimmed ? 0.5 : 1,
          transition: 'opacity 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="shrink-0 overflow-hidden" style={{ width: 160, height: 120 }}>
          <img
            src={collection.heroImage}
            alt={collection.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="nocte-label mb-1" style={{ color: 'var(--nocte-gray-mid)' }}>{collection.season}</p>
          <h3
            className="mb-1 leading-tight"
            style={{ fontFamily: 'var(--nocte-serif)', fontSize: 20, fontWeight: 400, color: 'var(--nocte-black)' }}
          >
            {collection.title}
          </h3>
          <p
            className="mb-3"
            style={{ fontFamily: 'var(--nocte-sans)', fontSize: 13, color: 'var(--nocte-gray-mid)', lineHeight: 1.4 }}
          >
            {collection.tagline}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
            <span className="nocte-label">{cardProducts.length} items</span>
            <span className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>{collection.leadTime}</span>
            <span className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>
              MOQ &euro;{collection.moqValue}
            </span>
            {supplier && (
              <span className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>{supplier.name}</span>
            )}
          </div>
          <Link
            to="/collections/$id"
            params={{ id: collection.id }}
            className="nocte-btn-primary"
            style={{ fontSize: 11, pointerEvents: dimmed ? 'none' : 'auto' }}
          >
            EXPLORE {collection.season}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div
      className="nocte-card overflow-hidden flex flex-col"
      style={{
        opacity: dimmed ? 0.5 : 1,
        transition: 'opacity 200ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="overflow-hidden" style={{ height: 320 }}>
        <img
          src={collection.heroImage}
          alt={collection.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col gap-2 flex-1">
        <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>{collection.season}</p>
        <h3
          className="leading-tight"
          style={{ fontFamily: 'var(--nocte-serif)', fontSize: 24, fontWeight: 400, color: 'var(--nocte-black)' }}
        >
          {collection.title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--nocte-sans)',
            fontSize: 13,
            color: 'var(--nocte-gray-mid)',
            lineHeight: 1.5,
            marginBottom: 4,
          }}
        >
          {collection.tagline}
        </p>

        {/* Metric row */}
        <div
          className="grid grid-cols-3 mt-2"
          style={{ borderTop: '1px solid var(--nocte-border)', borderBottom: '1px solid var(--nocte-border)', padding: '14px 0' }}
        >
          <div style={{ paddingRight: 12, borderRight: '1px solid var(--nocte-border)' }}>
            <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)', marginBottom: 4 }}>ITEMS</p>
            <p style={{ fontFamily: 'var(--nocte-serif)', fontSize: 16, fontWeight: 400, color: 'var(--nocte-black)' }}>
              {cardProducts.length}
            </p>
          </div>
          <div style={{ paddingLeft: 12, paddingRight: 12, borderRight: '1px solid var(--nocte-border)' }}>
            <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)', marginBottom: 4 }}>LEAD TIME</p>
            <p style={{ fontFamily: 'var(--nocte-serif)', fontSize: 16, fontWeight: 400, color: 'var(--nocte-black)' }}>
              {collection.leadTime}
            </p>
          </div>
          <div style={{ paddingLeft: 12 }}>
            <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)', marginBottom: 4 }}>MOQ</p>
            <p style={{ fontFamily: 'var(--nocte-serif)', fontSize: 16, fontWeight: 400, color: 'var(--nocte-black)' }}>
              &euro;{collection.moqValue}
            </p>
          </div>
        </div>

        {supplier && (
          <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>{supplier.name}</p>
        )}

        <div className="mt-auto pt-3">
          <Link
            to="/collections/$id"
            params={{ id: collection.id }}
            className="nocte-btn-primary w-full text-center block"
            style={{ fontSize: 11, pointerEvents: dimmed ? 'none' : 'auto' }}
          >
            EXPLORE {collection.season}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function SeasonalCollections({
  collections,
  filteredProducts,
  allProducts,
  filters,
  onFilterChange,
  onClearAll,
}: SeasonalCollectionsProps) {
  // Build active filter chips (same logic as CollectionGrid)
  const chips: { label: string; onRemove: () => void }[] = []
  if (filters.season) {
    const col = allCollections.find(c => c.id === filters.season)
    chips.push({ label: col?.season ?? filters.season, onRemove: () => onFilterChange({ season: '' }) })
  }
  filters.locations.forEach(loc =>
    chips.push({ label: loc, onRemove: () => onFilterChange({ locations: filters.locations.filter(l => l !== loc) }) })
  )
  filters.materials.forEach(mat =>
    chips.push({ label: mat, onRemove: () => onFilterChange({ materials: filters.materials.filter(m => m !== mat) }) })
  )
  if (filters.leadTime) chips.push({ label: filters.leadTime, onRemove: () => onFilterChange({ leadTime: '' }) })
  if (filters.reorderFreq) chips.push({ label: filters.reorderFreq, onRemove: () => onFilterChange({ reorderFreq: '' }) })
  if (filters.marginMin > 40 || filters.marginMax < 80)
    chips.push({ label: `${filters.marginMin}%–${filters.marginMax}% margin`, onRemove: () => onFilterChange({ marginMin: 40, marginMax: 80 }) })
  if (filters.rating > 0)
    chips.push({ label: `${filters.rating}+ stars`, onRemove: () => onFilterChange({ rating: 0 }) })
  if (filters.moqMin > 0 || filters.moqMax < 5000)
    chips.push({ label: `€${filters.moqMin}–€${filters.moqMax} MOQ`, onRemove: () => onFilterChange({ moqMin: 0, moqMax: 5000 }) })

  // Per-card products: use collection.productIds so Summer shows its editorial products
  const getCardProducts = (collection: Collection) =>
    filteredProducts.filter(p => collection.productIds.includes(p.id))

  const allDimmed = collections.every(c => getCardProducts(c).length === 0)

  return (
    <div>
      {/* Controls bar */}
      <div
        className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6"
        style={{ borderBottom: '1px solid var(--nocte-border)' }}
      >
        <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>
          Showing {filteredProducts.length} of {allProducts.length} products
        </p>
        <div className="flex items-center gap-3">
          <select
            value={filters.sort}
            onChange={e => onFilterChange({ sort: e.target.value })}
            className="nocte-input"
            style={{ fontSize: 12, paddingTop: 6, paddingBottom: 6, cursor: 'pointer' }}
          >
            <option value="newest">Newest</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="marginDesc">Margin: High to Low</option>
          </select>
          <div className="flex" style={{ border: '1px solid var(--nocte-border)' }}>
            {(['grid', 'list'] as const).map(v => (
              <button
                key={v}
                onClick={() => onFilterChange({ view: v })}
                className="px-3 py-2"
                style={{
                  fontSize: 11,
                  fontFamily: 'var(--nocte-sans)',
                  letterSpacing: '0.06em',
                  backgroundColor: filters.view === v ? 'var(--nocte-black)' : 'transparent',
                  color: filters.view === v ? '#FAFAFA' : 'var(--nocte-gray-mid)',
                  cursor: 'pointer',
                }}
              >
                {v.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active filter chips */}
      {chips.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {chips.map(chip => (
            <button
              key={chip.label}
              onClick={chip.onRemove}
              aria-label={`Remove ${chip.label} filter`}
              className="nocte-badge flex items-center gap-1"
              style={{ cursor: 'pointer' }}
            >
              {chip.label}
              <span aria-hidden="true" style={{ fontSize: 12, lineHeight: 1 }}>&times;</span>
            </button>
          ))}
          <button
            onClick={onClearAll}
            className="nocte-label"
            style={{ color: 'var(--nocte-gray-mid)', cursor: 'pointer', padding: '0 4px' }}
          >
            CLEAR ALL
          </button>
        </div>
      )}

      {/* Seasonal grid — always shows all 4 seasons; dims cards with 0 matching products */}
      {allDimmed ? (
        <div className="py-20 text-center">
          <p style={{ fontFamily: 'var(--nocte-sans)', fontSize: 15, color: 'var(--nocte-gray-mid)', marginBottom: 12 }}>
            No products match your filters.
          </p>
          <button onClick={onClearAll} className="nocte-btn-secondary" style={{ fontSize: 11 }}>
            CLEAR ALL FILTERS
          </button>
        </div>
      ) : (
        <div
          className={
            filters.view === 'list'
              ? 'flex flex-col gap-3'
              : 'grid grid-cols-1 sm:grid-cols-2 gap-8'
          }
        >
          {collections.map(c => {
            const cardProducts = getCardProducts(c)
            return (
              <SeasonCard
                key={c.id}
                collection={c}
                cardProducts={cardProducts}
                view={filters.view}
                dimmed={cardProducts.length === 0}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
