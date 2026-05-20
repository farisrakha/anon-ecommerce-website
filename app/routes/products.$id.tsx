'use client'

import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import StarRating from '../components/ui/StarRating'
import {
  products,
  getCollectionById,
  getSupplierById,
  getActiveTier,
  calcMargin,
} from '../data/nocte-mock'

export const Route = createFileRoute('/products/$id')({
  component: ProductDetailPage,
})

function ProductDetailPage() {
  const { id } = Route.useParams()
  const product = products.find(p => p.id === id)
  const collection = product ? getCollectionById(product.collectionId) : undefined
  const supplier = product ? getSupplierById(product.supplierId) : undefined

  const baseMin = product?.tiers[0].minQty ?? 6
  const [qty, setQty] = useState(baseMin)
  const [showMargin, setShowMargin] = useState(false)

  if (!product || !collection || !supplier) {
    return (
      <div className="max-w-[1350px] mx-auto px-4 py-24">
        <span className="nocte-label">PRODUCT NOT FOUND</span>
      </div>
    )
  }

  const activeTier = getActiveTier(product, qty)
  const orderTotal = qty * activeTier.unitPrice
  const margin = calcMargin(activeTier.unitPrice, product.suggestedRetail)
  const seasonalMin = supplier.moqValue
  const seasonalProgress = Math.min(100, Math.round((orderTotal / seasonalMin) * 100))

  function handleQtyBlur() {
    const step = product!.tiers[0].minQty
    setQty(Math.ceil(Math.max(1, qty) / step) * step)
  }

  const specs = [
    { key: 'MATERIAL', value: product.material },
    { key: 'CATEGORY', value: product.category },
    { key: 'LEAD TIME', value: product.leadTime },
  ]

  const marginRows = [
    { label: 'COST', value: `€${activeTier.unitPrice.toFixed(2)}` },
    { label: 'RETAIL', value: `€${product.suggestedRetail.toFixed(2)}` },
    { label: 'MARGIN', value: `${margin}%` },
  ]

  return (
    <main className="mb-20 lg:mb-0" style={{ backgroundColor: 'var(--nocte-surface-2)' }}>

      {/* ── Section 1: Header & Breadcrumb ── */}
      <section
        className="py-8"
        style={{
          borderBottom: '1px solid var(--nocte-border)',
          backgroundColor: 'var(--nocte-surface-1)',
        }}
      >
        <div className="max-w-[1350px] mx-auto px-4">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 mb-6 flex-wrap list-none p-0">
              <li>
                <Link to="/" className="nocte-label nocte-link-mid">COLLECTIONS</Link>
              </li>
              <li aria-hidden="true" className="nocte-label" style={{ color: 'var(--nocte-border)' }}>/</li>
              <li>
                <span className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>
                  {collection.season}
                </span>
              </li>
              <li aria-hidden="true" className="nocte-label" style={{ color: 'var(--nocte-border)' }}>/</li>
              <li aria-current="page">
                <span className="nocte-label" style={{ color: 'var(--nocte-black)' }}>
                  {product.name}
                </span>
              </li>
            </ol>
          </nav>

          {/* Title */}
          <h1
            className="text-4xl lg:text-5xl mb-4"
            style={{ letterSpacing: '-0.02em', fontWeight: 400 }}
          >
            {product.name}
          </h1>

          {/* Supplier + rating */}
          <div
            className="flex flex-wrap items-center gap-3 mb-5"
            aria-label={`Supplier: ${supplier.name}, rated ${supplier.rating} out of 5`}
          >
            <span
              style={{
                fontFamily: 'var(--nocte-sans)',
                fontSize: 14,
                color: 'var(--nocte-gray-mid)',
              }}
            >
              {supplier.name}
            </span>
            <span aria-hidden="true">
              <StarRating rating={supplier.rating} />
            </span>
            <span
              style={{
                fontFamily: 'var(--nocte-sans)',
                fontSize: 12,
                color: 'var(--nocte-gray-mid)',
              }}
              aria-hidden="true"
            >
              {supplier.rating}
            </span>
          </div>

          {/* Lead time badge */}
          <span className="nocte-badge">{product.leadTime}</span>
        </div>
      </section>

      {/* ── Section 2: Image + Product Info ── */}
      <section className="py-12" style={{ backgroundColor: 'var(--nocte-surface-1)' }}>
        <div className="max-w-[1350px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: Image placeholder */}
            <div>
              <div
                role="img"
                aria-label={`Product image placeholder for ${product.name}`}
                className="w-full flex items-center justify-center"
                style={{
                  aspectRatio: '3/4',
                  backgroundColor: 'var(--nocte-surface-3)',
                }}
              >
                <span
                  className="nocte-label text-center px-8"
                  style={{ color: 'var(--nocte-gray-mid)' }}
                  aria-hidden="true"
                >
                  {product.name}
                </span>
              </div>
              <div className="mt-3">
                <span className="nocte-badge">{product.material}</span>
              </div>
            </div>

            {/* Right: Specs */}
            <div className="flex flex-col justify-start pt-2">
              <h2
                className="text-3xl mb-8"
                style={{ letterSpacing: '-0.02em', fontWeight: 400 }}
              >
                {product.name}
              </h2>

              <dl className="flex flex-col gap-5">
                {specs.map(({ key, value }) => (
                  <div key={key} className="flex flex-col gap-1">
                    <dt className="nocte-label">{key}</dt>
                    <dd
                      style={{
                        fontFamily: 'var(--nocte-sans)',
                        fontSize: 14,
                        color: 'var(--nocte-black)',
                      }}
                    >
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <hr className="nocte-divider my-6" />

              <div className="flex flex-col gap-1">
                <span className="nocte-label">ORIGIN</span>
                <span
                  style={{
                    fontFamily: 'var(--nocte-sans)',
                    fontSize: 14,
                    color: 'var(--nocte-black)',
                  }}
                >
                  {supplier.location.region}, {supplier.location.country}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: MOQ Tier Table ── */}
      <section
        className="py-10"
        style={{
          borderTop: '1px solid var(--nocte-border)',
          backgroundColor: 'var(--nocte-surface-1)',
        }}
      >
        <div className="max-w-[1350px] mx-auto px-4">

          <div className="mb-4">
            <span className="nocte-label">WHOLESALE PRICING</span>
          </div>

          <div className="overflow-x-auto">
            <table className="nocte-table">
              <thead>
                <tr>
                  <th scope="col">QTY TIER</th>
                  <th scope="col">UNIT PRICE</th>
                  <th scope="col">MINIMUM ORDER</th>
                </tr>
              </thead>
              <tbody>
                {product.tiers.map((tier, i) => {
                  const isActive = activeTier.minQty === tier.minQty
                  return (
                    <tr
                      key={i}
                      aria-current={isActive ? 'true' : undefined}
                      style={{
                        backgroundColor: isActive ? 'var(--nocte-surface-3)' : undefined,
                      }}
                    >
                      <td style={{ fontWeight: isActive ? 500 : 400 }}>
                        {tier.minQty}+ units
                      </td>
                      <td style={{ fontWeight: isActive ? 500 : 400 }}>
                        €{tier.unitPrice.toFixed(2)}
                      </td>
                      <td style={{ fontWeight: isActive ? 500 : 400 }}>
                        €{(tier.minQty * tier.unitPrice).toFixed(2)}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Suggested retail */}
          <div className="mt-5 flex items-center gap-3">
            <span className="nocte-label">SUGGESTED RETAIL</span>
            <span
              style={{
                fontFamily: 'var(--nocte-sans)',
                fontSize: 14,
                color: 'var(--nocte-black)',
              }}
            >
              €{product.suggestedRetail.toFixed(2)}
            </span>
          </div>

          {/* Margin Calculator accordion */}
          <div
            className="mt-6"
            style={{ borderTop: '1px solid var(--nocte-border)' }}
          >
            <button
              type="button"
              onClick={() => setShowMargin(v => !v)}
              className="w-full flex items-center justify-between nocte-hover-bg-s3"
              style={{ minHeight: 44, paddingTop: 10, paddingBottom: 10 }}
              aria-expanded={showMargin}
              aria-controls="margin-calculator"
            >
              <span className="nocte-label">MARGIN CALCULATOR</span>
              <span
                className="nocte-label"
                aria-hidden="true"
                style={{ fontSize: 16, lineHeight: 1, width: 16, textAlign: 'center' }}
              >
                {showMargin ? '−' : '+'}
              </span>
            </button>

            <div
              id="margin-calculator"
              className={`accordion-content${showMargin ? ' open' : ''}`}
            >
              <dl className="flex flex-col gap-3 pt-1 pb-5">
                {marginRows.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between"
                    style={{ maxWidth: 320 }}
                  >
                    <dt className="nocte-label">{label}</dt>
                    <dd
                      style={{
                        fontFamily: 'var(--nocte-sans)',
                        fontSize: 14,
                        fontWeight: 500,
                        color: 'var(--nocte-black)',
                      }}
                    >
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Order Form ── */}
      <section
        className="py-10"
        style={{
          borderTop: '1px solid var(--nocte-border)',
          backgroundColor: 'var(--nocte-surface-1)',
        }}
      >
        <div className="max-w-[1350px] mx-auto px-4">

          {/* Qty + tier + total */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-10 mb-8">

            <div className="flex flex-col gap-2" style={{ maxWidth: 160 }}>
              <label className="nocte-label" htmlFor="order-qty">
                ORDER QUANTITY
              </label>
              <input
                id="order-qty"
                type="number"
                className="nocte-input"
                style={{ minHeight: 44 }}
                min={baseMin}
                step={baseMin}
                value={qty}
                onChange={e => setQty(parseInt(e.target.value, 10) || baseMin)}
                onBlur={handleQtyBlur}
                aria-describedby="order-tier-label"
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="nocte-label" id="order-tier-label">ACTIVE TIER</span>
              <span
                style={{
                  fontFamily: 'var(--nocte-sans)',
                  fontSize: 14,
                  color: 'var(--nocte-black)',
                }}
              >
                €{activeTier.unitPrice.toFixed(2)} / unit
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="nocte-label">ORDER TOTAL</span>
              <span
                style={{
                  fontFamily: 'var(--nocte-serif)',
                  fontSize: 28,
                  letterSpacing: '-0.02em',
                  color: 'var(--nocte-black)',
                }}
              >
                €{orderTotal.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Seasonal minimum callout */}
          <div
            className="mb-8 p-5"
            style={{
              backgroundColor: 'var(--nocte-surface-2)',
              border: '1px solid var(--nocte-border)',
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="nocte-label">SEASONAL MINIMUM</span>
              <span
                style={{
                  fontFamily: 'var(--nocte-sans)',
                  fontSize: 12,
                  color: 'var(--nocte-gray-mid)',
                }}
                aria-hidden="true"
              >
                {seasonalProgress}%
              </span>
            </div>

            <div
              role="progressbar"
              aria-valuenow={seasonalProgress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${seasonalProgress}% of seasonal minimum met`}
              className="progress-bar mb-3"
            >
              <div
                className="progress-fill"
                style={{
                  width: `${seasonalProgress}%`,
                  transition: 'width var(--nocte-transition)',
                }}
              />
            </div>

            <div className="flex items-center justify-between">
              <span
                style={{
                  fontFamily: 'var(--nocte-sans)',
                  fontSize: 13,
                  color: 'var(--nocte-black)',
                }}
              >
                €{orderTotal.toFixed(2)} of €{seasonalMin} with {supplier.name}
              </span>
              {seasonalProgress >= 100 && (
                <span className="nocte-badge">MINIMUM MET</span>
              )}
            </div>
          </div>

          {/* CTA */}
          <button
            type="button"
            className="nocte-btn-primary"
            style={{ padding: '14px 48px' }}
            aria-label={`Add ${qty} units of ${product.name} to order — €${orderTotal.toFixed(2)}`}
          >
            ADD TO ORDER
          </button>
        </div>
      </section>

    </main>
  )
}
