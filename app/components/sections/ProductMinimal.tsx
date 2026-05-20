import { Link } from '@tanstack/react-router'
import { products, getSupplierById } from '../../data/nocte-mock'
import type { Product } from '../../data/nocte-mock'

function ShowcaseItem({ product }: { product: Product }) {
  const supplier = getSupplierById(product.supplierId)
  return (
    <Link
      to="/products/$id"
      params={{ id: product.id }}
      className="flex items-center gap-3 py-3 nocte-link-dim"
      style={{ borderBottom: '1px solid var(--nocte-border)' }}
    >
      {/* Placeholder thumbnail */}
      <div
        className="shrink-0 w-[70px] h-[70px] flex items-center justify-center overflow-hidden"
        style={{
          border: '1px solid var(--nocte-border)',
          backgroundColor: 'var(--nocte-surface-3)',
        }}
      >
        <span
          className="nocte-label text-center px-1"
          style={{ color: 'var(--nocte-gray-mid)', fontSize: 9 }}
        >
          {product.name.split(' ').slice(0, 2).join(' ')}
        </span>
      </div>

      <div className="min-w-0">
        <h4
          className="text-fs-8 mb-1 line-clamp-2"
          style={{ fontFamily: 'var(--nocte-sans)', fontWeight: 400, color: 'var(--nocte-black)' }}
        >
          {product.name}
        </h4>
        {supplier && (
          <span className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>
            {supplier.name}
          </span>
        )}
        <p
          className="mt-1"
          style={{
            fontFamily: 'var(--nocte-sans)',
            fontSize: 13,
            fontWeight: 500,
            color: 'var(--nocte-black)',
          }}
        >
          €{product.tiers[0].unitPrice.toFixed(2)}
        </p>
      </div>
    </Link>
  )
}

function ShowcaseGroup({ title, items }: { title: string; items: Product[] }) {
  return (
    <div className="flex-1 min-w-[220px] overflow-hidden" style={{ border: '1px solid var(--nocte-border)' }}>
      <h2
        className="text-fs-6 px-4 py-3"
        style={{
          color: 'var(--nocte-gray-light)',
          fontFamily: 'var(--nocte-sans)',
          fontWeight: 400,
          borderBottom: '1px solid var(--nocte-border)',
          backgroundColor: 'var(--nocte-surface-2)',
        }}
      >
        {title}
      </h2>
      <div className="px-4">
        {items.map((p) => <ShowcaseItem key={p.id} product={p} />)}
      </div>
    </div>
  )
}

export default function ProductMinimal() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 mb-6">
      <ShowcaseGroup title="New Arrivals" items={products.slice(0, 3)} />
      <ShowcaseGroup title="Trending"     items={products.slice(3, 6)} />
      <ShowcaseGroup title="Top Rated"    items={products.slice(6, 9)} />
    </div>
  )
}
