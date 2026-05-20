import { Link } from '@tanstack/react-router'
import { products, getSupplierById } from '../../data/nocte-mock'

export default function ProductGrid() {
  return (
    <div className="mb-6">
      <h2
        className="text-fs-4 mb-4 pb-2"
        style={{
          color: 'var(--nocte-black)',
          fontFamily: 'var(--nocte-serif)',
          fontWeight: 400,
          borderBottom: '1px solid var(--nocte-border)',
        }}
      >
        New Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => {
          const supplier = getSupplierById(product.supplierId)
          return (
            <Link
              key={product.id}
              to="/products/$id"
              params={{ id: product.id }}
              className="nocte-card overflow-hidden block"
            >
              {/* Placeholder image */}
              <div
                className="w-full aspect-square flex items-center justify-center"
                style={{ backgroundColor: 'var(--nocte-surface-3)' }}
              >
                <span
                  className="nocte-label text-center px-3"
                  style={{ color: 'var(--nocte-gray-mid)' }}
                >
                  {product.name}
                </span>
              </div>

              <div className="p-3 flex flex-col gap-2">
                <h3
                  className="text-fs-8 line-clamp-2 nocte-link-dim"
                  style={{ fontFamily: 'var(--nocte-sans)', fontWeight: 400 }}
                >
                  {product.name}
                </h3>

                <span className="nocte-badge self-start">{product.material}</span>

                {supplier && (
                  <span className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>
                    {supplier.name}
                  </span>
                )}

                <div className="mt-1">
                  <p
                    style={{
                      fontFamily: 'var(--nocte-sans)',
                      fontSize: 14,
                      fontWeight: 500,
                      color: 'var(--nocte-black)',
                    }}
                  >
                    €{product.tiers[0].unitPrice.toFixed(2)} / unit
                  </p>
                  <span className="nocte-label">MIN {product.tiers[0].minQty} UNITS</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
