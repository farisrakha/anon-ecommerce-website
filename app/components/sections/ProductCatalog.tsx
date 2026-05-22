import { Link } from '@tanstack/react-router'
import type { Product } from '../../data/nocte-mock'
import { getSupplierById } from '../../data/nocte-mock'

interface Props { title: string; items: Product[] }

export default function ProductCatalog({ title, items }: Props) {
  return (
    <section className="py-16">
      <div className="max-w-[1350px] mx-auto px-4">
        <h2
          className="mb-8 pb-3"
          style={{
            fontFamily: 'var(--nocte-serif)',
            fontSize: 32,
            fontWeight: 400,
            color: 'var(--nocte-black)',
            borderBottom: '1px solid var(--nocte-border)',
          }}
        >
          {title}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(product => {
            const supplier = getSupplierById(product.supplierId)
            return (
              <Link
                key={product.id}
                to="/products/$id"
                params={{ id: product.id }}
                className="nocte-card overflow-hidden block"
              >
                <div className="overflow-hidden" style={{ height: 280 }}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <h3
                    className="leading-tight"
                    style={{ fontFamily: 'var(--nocte-serif)', fontSize: 17, fontWeight: 400, color: 'var(--nocte-black)' }}
                  >
                    {product.name}
                  </h3>
                  <span className="nocte-badge self-start">{product.material}</span>
                  {supplier && (
                    <span className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>{supplier.name}</span>
                  )}
                  <p style={{ fontFamily: 'var(--nocte-sans)', fontSize: 15, fontWeight: 500, color: 'var(--nocte-black)' }}>
                    €{product.tiers[0].unitPrice.toFixed(2)} / unit
                  </p>
                  <span className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>
                    MIN {product.tiers[0].minQty} UNITS
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
