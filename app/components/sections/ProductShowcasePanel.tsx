import { Link } from '@tanstack/react-router'
import { products, getSupplierById } from '../../data/nocte-mock'

export default function ProductShowcasePanel() {
  const featured = products.slice(0, 4)

  return (
    <div className="mb-6">
      <h3
        className="nocte-label mb-4 pb-2"
        style={{ borderBottom: '1px solid var(--nocte-border)' }}
      >
        Best Sellers
      </h3>

      <div className="flex flex-col gap-4">
        {featured.map((product) => {
          const supplier = getSupplierById(product.supplierId)
          return (
            <Link
              key={product.id}
              to="/products/$id"
              params={{ id: product.id }}
              className="flex items-center gap-3 nocte-link-dim"
            >
              <div
                className="shrink-0 w-[75px] h-[75px] overflow-hidden"
                style={{ border: '1px solid var(--nocte-border)' }}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
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
                  €{product.tiers[0].unitPrice.toFixed(2)} / unit
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
