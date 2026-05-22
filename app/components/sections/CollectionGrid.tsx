'use client'

import { Link } from '@tanstack/react-router'
import type { Collection, Product } from '../../data/nocte-mock'
import { getSupplierById, calcMargin } from '../../data/nocte-mock'
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

interface CollectionGridProps {
  collections: Collection[]
  filteredProducts: Product[]
  allProducts: Product[]
  filters: Filters
  onFilterChange: (next: Partial<Filters>) => void
  onClearAll: () => void
}

function CollectionCard({ collection, matchingProducts, view }: {
  collection: Collection
  matchingProducts: Product[]
  view: string
}) {
  const supplier = getSupplierById(collection.supplierId)
  const prices = matchingProducts.map(p => p.tiers[0].unitPrice)
  const priceMin = prices.length ? Math.min(...prices) : 0
  const priceMax = prices.length ? Math.max(...prices) : 0
  const margins = matchingProducts.map(p => calcMargin(p.tiers[0].unitPrice, p.suggestedRetail))
  const avgMargin = margins.length
    ? Math.round(margins.reduce((a, b) => a + b, 0) / margins.length)
    : 0

  if (view === 'list') {
    return (
      <div
        className="flex gap-4 p-4"
        style={{ border: '1px solid var(--nocte-border)', backgroundColor: 'var(--nocte-surface-1)' }}
      >
        <div className="shrink-0 overflow-hidden" style={{ width: 160, height: 120 }}>
          <img src={collection.heroImage} alt={collection.title} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="nocte-label mb-1" style={{ color: 'var(--nocte-gray-mid)' }}>{collection.season}</p>
          <h3
            className="mb-2 leading-tight"
            style={{ fontFamily: 'var(--nocte-serif)', fontSize: 20, fontWeight: 400, color: 'var(--nocte-black)' }}
          >
            {collection.title}
          </h3>
          {supplier && (
            <p className="nocte-label mb-2" style={{ color: 'var(--nocte-gray-mid)' }}>{supplier.name}</p>
          )}
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
            <span className="nocte-label">{matchingProducts.length} pieces</span>
            <span className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>{collection.leadTime}</span>
            {prices.length > 0 && (
              <span className="nocte-label">
                &euro;{priceMin.toFixed(0)}&ndash;&euro;{priceMax.toFixed(0)} / unit
              </span>
            )}
            <span className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>
              MOQ {collection.moqUnits} units
            </span>
            {avgMargin > 0 && (
              <span className="nocte-badge">{avgMargin}% margin</span>
            )}
          </div>
          <Link
            to="/products/$id"
            params={{ id: matchingProducts[0]?.id ?? 'prd-001' }}
            className="nocte-btn-primary"
            style={{ fontSize: 11 }}
          >
            VIEW COLLECTION
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div
      className="nocte-card overflow-hidden flex flex-col"
    >
      <div className="overflow-hidden" style={{ height: 200 }}>
        <img src={collection.heroImage} alt={collection.title} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>{collection.season}</p>
        <h3
          className="leading-tight"
          style={{ fontFamily: 'var(--nocte-serif)', fontSize: 20, fontWeight: 400, color: 'var(--nocte-black)' }}
        >
          {collection.title}
        </h3>
        {supplier && (
          <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>{supplier.name}</p>
        )}
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
          <span className="nocte-label">{matchingProducts.length} pieces</span>
          <span className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>{collection.leadTime}</span>
        </div>
        {prices.length > 0 && (
          <p style={{ fontFamily: 'var(--nocte-sans)', fontSize: 14, fontWeight: 500, color: 'var(--nocte-black)' }}>
            &euro;{priceMin.toFixed(0)}&ndash;&euro;{priceMax.toFixed(0)} / unit
          </p>
        )}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>
            MOQ {collection.moqUnits} units / &euro;{collection.moqValue}
          </span>
          {avgMargin > 0 && <span className="nocte-badge">{avgMargin}% margin</span>}
        </div>
        <div className="mt-auto pt-3">
          <Link
            to="/products/$id"
            params={{ id: matchingProducts[0]?.id ?? 'prd-001' }}
            className="nocte-btn-primary w-full text-center block"
            style={{ fontSize: 11 }}
          >
            VIEW COLLECTION
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function CollectionGrid({
  collections,
  filteredProducts,
  allProducts,
  filters,
  onFilterChange,
  onClearAll,
}: CollectionGridProps) {
  // Build active filter chips
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

      {/* Collection grid or empty state */}
      {collections.length === 0 ? (
        <div className="py-20 text-center">
          <p
            style={{ fontFamily: 'var(--nocte-sans)', fontSize: 15, color: 'var(--nocte-gray-mid)', marginBottom: 12 }}
          >
            No collections match your filters.
          </p>
          <button
            onClick={onClearAll}
            className="nocte-btn-secondary"
            style={{ fontSize: 11 }}
          >
            CLEAR ALL FILTERS
          </button>
        </div>
      ) : (
        <div
          className={
            filters.view === 'list'
              ? 'flex flex-col gap-3'
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          }
        >
          {collections.map(c => (
            <CollectionCard
              key={c.id}
              collection={c}
              matchingProducts={filteredProducts.filter(p => p.collectionId === c.id)}
              view={filters.view}
            />
          ))}
        </div>
      )}
    </div>
  )
}
