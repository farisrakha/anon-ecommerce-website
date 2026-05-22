'use client'

import { useState } from 'react'
import type { Product, Supplier, Collection } from '../../data/nocte-mock'
import RangeSlider from '../ui/RangeSlider'
import StarRating from '../ui/StarRating'

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

interface FilterSidebarProps {
  filters: Filters
  onChange: (next: Partial<Filters>) => void
  onClearAll: () => void
  products: Product[]
  suppliers: Supplier[]
  collections: Collection[]
  mobileOpen?: boolean
  onMobileClose?: () => void
}

function SectionHeader({ title, open, onToggle }: { title: string; open: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-3"
      style={{ borderBottom: '1px solid var(--nocte-border)' }}
    >
      <span className="nocte-label">{title}</span>
      <span style={{ color: 'var(--nocte-gray-mid)', fontSize: 14, lineHeight: 1 }}>
        {open ? '−' : '+'}
      </span>
    </button>
  )
}

export default function FilterSidebar({
  filters,
  onChange,
  onClearAll,
  products,
  suppliers,
  collections,
  mobileOpen = false,
  onMobileClose,
}: FilterSidebarProps) {
  const [open, setOpen] = useState({
    season: true,
    location: true,
    material: true,
    leadTime: true,
    reorderFreq: false,
    margin: true,
    rating: true,
    moq: false,
  })

  const toggle = (key: keyof typeof open) => setOpen(prev => ({ ...prev, [key]: !prev[key] }))

  // Derived option lists
  const locationCounts = suppliers.reduce<Record<string, number>>((acc, s) => {
    acc[s.location.country] = (acc[s.location.country] ?? 0) + 1
    return acc
  }, {})

  const materialCounts = products.reduce<Record<string, number>>((acc, p) => {
    acc[p.material] = (acc[p.material] ?? 0) + 1
    return acc
  }, {})

  const leadTimes = [...new Set(products.map(p => p.leadTime))]
  const reorderFreqs = [...new Set(suppliers.map(s => s.reorderFrequency))]

  // Active filter count (content filters only, not sort/view)
  const activeCount = [
    filters.season,
    ...filters.locations,
    ...filters.materials,
    filters.leadTime,
    filters.reorderFreq,
    filters.rating > 0 ? '1' : '',
    filters.marginMin > 40 || filters.marginMax < 80 ? '1' : '',
    filters.moqMin > 0 || filters.moqMax < 5000 ? '1' : '',
  ].filter(Boolean).length

  const sidebarContent = (
    <div style={{ fontFamily: 'var(--nocte-sans)' }}>
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-1" style={{ borderBottom: '1px solid var(--nocte-border)' }}>
        <div className="flex items-center gap-2">
          <span className="nocte-label">FILTERS</span>
          {activeCount > 0 && (
            <span
              className="nocte-badge"
              style={{ backgroundColor: 'var(--nocte-black)', color: '#FAFAFA', fontSize: 10 }}
            >
              {activeCount}
            </span>
          )}
        </div>
        {activeCount > 0 && (
          <button
            onClick={onClearAll}
            className="nocte-label"
            style={{ color: 'var(--nocte-gray-mid)', cursor: 'pointer' }}
          >
            CLEAR ALL
          </button>
        )}
      </div>

      {/* 1. Collection / Season */}
      <div className="mb-1">
        <SectionHeader title="COLLECTION" open={open.season} onToggle={() => toggle('season')} />
        {open.season && (
          <div className="py-3 flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="season"
                checked={filters.season === ''}
                onChange={() => onChange({ season: '' })}
                style={{ accentColor: 'var(--nocte-black)' }}
              />
              <span style={{ fontSize: 13, color: 'var(--nocte-black)' }}>All seasons</span>
            </label>
            {collections.map(c => (
              <label key={c.id} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="season"
                  checked={filters.season === c.id}
                  onChange={() => onChange({ season: c.id })}
                  style={{ accentColor: 'var(--nocte-black)' }}
                />
                <span style={{ fontSize: 13, color: 'var(--nocte-black)' }}>
                  {c.season} {c.title}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 2. Supplier Location */}
      <div className="mb-1">
        <SectionHeader title="SUPPLIER LOCATION" open={open.location} onToggle={() => toggle('location')} />
        {open.location && (
          <div className="py-3 flex flex-col gap-2">
            {Object.entries(locationCounts).map(([country, count]) => (
              <label key={country} className="flex items-center justify-between cursor-pointer" style={{ minWidth: 0 }}>
                <div className="flex items-center gap-2" style={{ minWidth: 0, overflow: 'hidden' }}>
                  <input
                    type="checkbox"
                    className="shrink-0"
                    checked={filters.locations.includes(country)}
                    onChange={e => {
                      const next = e.target.checked
                        ? [...filters.locations, country]
                        : filters.locations.filter(l => l !== country)
                      onChange({ locations: next })
                    }}
                    style={{ accentColor: 'var(--nocte-black)' }}
                  />
                  <span style={{ fontSize: 13, color: 'var(--nocte-black)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{country}</span>
                </div>
                <span className="nocte-label shrink-0" style={{ color: 'var(--nocte-gray-mid)', paddingLeft: 8 }}>{count}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 3. Material */}
      <div className="mb-1">
        <SectionHeader title="MATERIAL" open={open.material} onToggle={() => toggle('material')} />
        {open.material && (
          <div className="py-3 flex flex-col gap-2">
            {Object.entries(materialCounts).map(([mat, count]) => (
              <label key={mat} className="flex items-center justify-between cursor-pointer" style={{ minWidth: 0 }}>
                <div className="flex items-center gap-2" style={{ minWidth: 0, overflow: 'hidden' }}>
                  <input
                    type="checkbox"
                    className="shrink-0"
                    checked={filters.materials.includes(mat)}
                    onChange={e => {
                      const next = e.target.checked
                        ? [...filters.materials, mat]
                        : filters.materials.filter(m => m !== mat)
                      onChange({ materials: next })
                    }}
                    style={{ accentColor: 'var(--nocte-black)' }}
                  />
                  <span style={{ fontSize: 13, color: 'var(--nocte-black)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{mat}</span>
                </div>
                <span className="nocte-label shrink-0" style={{ color: 'var(--nocte-gray-mid)', paddingLeft: 8 }}>{count}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 4. Lead Time */}
      <div className="mb-1">
        <SectionHeader title="LEAD TIME" open={open.leadTime} onToggle={() => toggle('leadTime')} />
        {open.leadTime && (
          <div className="py-3 flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="leadTime"
                checked={filters.leadTime === ''}
                onChange={() => onChange({ leadTime: '' })}
                style={{ accentColor: 'var(--nocte-black)' }}
              />
              <span style={{ fontSize: 13, color: 'var(--nocte-black)' }}>Any lead time</span>
            </label>
            {leadTimes.map(lt => (
              <label key={lt} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="leadTime"
                  checked={filters.leadTime === lt}
                  onChange={() => onChange({ leadTime: lt })}
                  style={{ accentColor: 'var(--nocte-black)' }}
                />
                <span style={{ fontSize: 13, color: 'var(--nocte-black)' }}>{lt}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 5. Reorder Frequency */}
      <div className="mb-1">
        <SectionHeader title="REORDER FREQUENCY" open={open.reorderFreq} onToggle={() => toggle('reorderFreq')} />
        {open.reorderFreq && (
          <div className="py-3 flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="reorderFreq"
                checked={filters.reorderFreq === ''}
                onChange={() => onChange({ reorderFreq: '' })}
                style={{ accentColor: 'var(--nocte-black)' }}
              />
              <span style={{ fontSize: 13, color: 'var(--nocte-black)' }}>Any frequency</span>
            </label>
            {reorderFreqs.map(freq => (
              <label key={freq} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="reorderFreq"
                  checked={filters.reorderFreq === freq}
                  onChange={() => onChange({ reorderFreq: freq })}
                  style={{ accentColor: 'var(--nocte-black)' }}
                />
                <span style={{ fontSize: 13, color: 'var(--nocte-black)', textTransform: 'capitalize' }}>
                  {freq}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 6. Wholesale Margin */}
      <div className="mb-1">
        <SectionHeader title="WHOLESALE MARGIN" open={open.margin} onToggle={() => toggle('margin')} />
        {open.margin && (
          <div className="py-4">
            <RangeSlider
              min={40}
              max={80}
              value={[filters.marginMin, filters.marginMax]}
              onChange={([lo, hi]) => onChange({ marginMin: lo, marginMax: hi })}
              formatLabel={v => `${v}%`}
            />
          </div>
        )}
      </div>

      {/* 7. Supplier Rating */}
      <div className="mb-1">
        <SectionHeader title="SUPPLIER RATING" open={open.rating} onToggle={() => toggle('rating')} />
        {open.rating && (
          <div className="py-3 flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={filters.rating === 0}
                onChange={() => onChange({ rating: 0 })}
                style={{ accentColor: 'var(--nocte-black)' }}
              />
              <span style={{ fontSize: 13, color: 'var(--nocte-black)' }}>Any rating</span>
            </label>
            {[5, 4, 3, 2].map(r => (
              <label key={r} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  checked={filters.rating === r}
                  onChange={() => onChange({ rating: r })}
                  style={{ accentColor: 'var(--nocte-black)' }}
                />
                <div className="flex items-center gap-1">
                  <StarRating rating={r} />
                  {r < 5 && <span style={{ fontSize: 12, color: 'var(--nocte-gray-mid)' }}>+</span>}
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 8. Min Order Value */}
      <div className="mb-1">
        <SectionHeader title="MIN. ORDER VALUE" open={open.moq} onToggle={() => toggle('moq')} />
        {open.moq && (
          <div className="py-4">
            <RangeSlider
              min={0}
              max={5000}
              value={[filters.moqMin, filters.moqMax]}
              onChange={([lo, hi]) => onChange({ moqMin: lo, moqMax: hi })}
              formatLabel={v => `€${v}`}
            />
          </div>
        )}
      </div>
    </div>
  )

  // Desktop: sticky sidebar
  // Mobile: hidden by default, shown as fixed overlay when mobileOpen
  return (
    <>
      {/* Desktop sidebar */}
      <div
        className="hidden lg:block"
        style={{
          position: 'sticky',
          top: 80,
          maxHeight: 'calc(100vh - 100px)',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        {sidebarContent}
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          onClick={onMobileClose}
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-80 overflow-y-auto p-6"
            style={{ backgroundColor: 'var(--nocte-surface-1)' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="nocte-label">FILTERS</span>
              <button
                onClick={onMobileClose}
                style={{ color: 'var(--nocte-gray-mid)', fontSize: 20, lineHeight: 1 }}
              >
                ×
              </button>
            </div>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  )
}
