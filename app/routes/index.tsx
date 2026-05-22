'use client'

import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useMemo, useCallback } from 'react'
import {
  products,
  suppliers,
  collections,
  getSupplierById,
  calcMargin,
} from '../data/nocte-mock'
import HeroMinimal from '../components/sections/HeroMinimal'
import QuickStats from '../components/sections/QuickStats'
import FilterSidebar from '../components/sections/FilterSidebar'
import SeasonalCollections from '../components/sections/SeasonalCollections'
import CuratedCollections from '../components/sections/CuratedCollections'
import Lookbook from '../components/sections/Lookbook'

function parseArr(v: unknown): string[] {
  if (Array.isArray(v)) return (v as unknown[]).filter((x): x is string => typeof x === 'string')
  if (typeof v === 'string') return v.split(',').filter(Boolean)
  return []
}


export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>) => ({
    season:      (search.season as string)                         ?? '',
    locations:   parseArr(search.locations),
    materials:   parseArr(search.materials),
    leadTime:    (search.leadTime as string)                       ?? '',
    reorderFreq: (search.reorderFreq as string)                    ?? '',
    marginMin:   search.marginMin != null ? Number(search.marginMin) : 40,
    marginMax:   search.marginMax != null ? Number(search.marginMax) : 80,
    rating:      search.rating != null ? Number(search.rating) : 0,
    moqMin:      search.moqMin != null ? Number(search.moqMin) : 0,
    moqMax:      search.moqMax != null ? Number(search.moqMax) : 5000,
    sort:        (search.sort as string)                           ?? 'newest',
    view:        (search.view as string)                           ?? 'grid',
  }),
  component: HomePage,
})

type Filters = ReturnType<typeof Route.useSearch>

function HomePage() {
  const urlFilters = Route.useSearch()
  const navigate = useNavigate()

  // Local state mirrors URL — keeps UI snappy while URL updates asynchronously
  const [filters, setFiltersState] = useState<Filters>(urlFilters)

  const setFilters = useCallback((next: Partial<Filters>) => {
    const merged = { ...filters, ...next }
    setFiltersState(merged)
    navigate({ to: '/', search: merged, replace: true } as Parameters<typeof navigate>[0])
  }, [filters, navigate])

  const clearAll = useCallback(() => {
    const reset: Filters = {
      season: '', locations: [], materials: [], leadTime: '',
      reorderFreq: '', marginMin: 40, marginMax: 80, rating: 0,
      moqMin: 0, moqMax: 5000, sort: filters.sort, view: filters.view,
    }
    setFiltersState(reset)
    navigate({ to: '/', search: reset, replace: true } as Parameters<typeof navigate>[0])
  }, [filters.sort, filters.view, navigate])

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const activeContentFilters = [
    filters.season,
    ...filters.locations,
    ...filters.materials,
    filters.leadTime,
    filters.reorderFreq,
    filters.rating > 0 ? '1' : '',
    filters.marginMin > 40 || filters.marginMax < 80 ? '1' : '',
    filters.moqMin > 0 || filters.moqMax < 5000 ? '1' : '',
  ].filter(Boolean).length

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      if (filters.season && p.collectionId !== filters.season) return false
      if (filters.locations.length) {
        const s = getSupplierById(p.supplierId)
        if (!s || !filters.locations.includes(s.location.country)) return false
      }
      if (filters.materials.length && !filters.materials.includes(p.material)) return false
      if (filters.leadTime && p.leadTime !== filters.leadTime) return false
      if (filters.reorderFreq) {
        const s = getSupplierById(p.supplierId)
        if (!s || s.reorderFrequency !== filters.reorderFreq) return false
      }
      const margin = calcMargin(p.tiers[0].unitPrice, p.suggestedRetail)
      if (margin < filters.marginMin || margin > filters.marginMax) return false
      if (filters.rating > 0) {
        const s = getSupplierById(p.supplierId)
        if (!s || s.rating < filters.rating) return false
      }
      const minOrderTotal = p.tiers[0].unitPrice * p.tiers[0].minQty
      if (minOrderTotal < filters.moqMin || minOrderTotal > filters.moqMax) return false
      return true
    })
  }, [filters])

  return (
    <main>
      <HeroMinimal />

      {/* Mobile filter button */}
      <div
        className="lg:hidden px-4 py-3 flex items-center justify-between"
        style={{ backgroundColor: 'var(--nocte-surface-2)', borderBottom: '1px solid var(--nocte-border)' }}
      >
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="nocte-btn-secondary flex items-center gap-2"
          style={{ fontSize: 12 }}
        >
          FILTERS
          {activeContentFilters > 0 && (
            <span
              className="nocte-badge"
              style={{ backgroundColor: 'var(--nocte-black)', color: '#FAFAFA', fontSize: 10 }}
            >
              {activeContentFilters}
            </span>
          )}
        </button>
        <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>
          {filteredProducts.length} products
        </p>
      </div>

      <section id="catalog" style={{ backgroundColor: 'var(--nocte-surface-1)' }}>
        <div className="max-w-[1350px] mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
          <aside className="shrink-0 hidden lg:block" style={{ width: 260 }}>
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              onClearAll={clearAll}
              products={products}
              suppliers={suppliers}
              collections={collections}
              mobileOpen={mobileFiltersOpen}
              onMobileClose={() => setMobileFiltersOpen(false)}
            />
          </aside>
          <div className="flex-1 min-w-0">
            <SeasonalCollections
              collections={collections}
              filteredProducts={filteredProducts}
              allProducts={products}
              filters={filters}
              onFilterChange={setFilters}
              onClearAll={clearAll}
            />
          </div>
        </div>
      </section>

      <QuickStats />
      <CuratedCollections />
      <Lookbook />
    </main>
  )
}
