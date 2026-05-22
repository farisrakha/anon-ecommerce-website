'use client'

import { Link } from '@tanstack/react-router'
import { getProductsByCollection, getSupplierById, calcMargin } from '../../data/nocte-mock'

export default function SeasonProducts({ collectionId }: { collectionId: string }) {
  const products = getProductsByCollection(collectionId)

  if (products.length === 0) {
    return (
      <p style={{ fontFamily: 'var(--nocte-sans)', fontSize: 14, color: 'var(--nocte-gray-mid)' }}>
        No products in this collection.
      </p>
    )
  }

  return (
    <div>
      <h2
        style={{
          fontFamily: 'var(--nocte-serif)',
          fontSize: 22,
          fontWeight: 400,
          color: 'var(--nocte-black)',
          marginBottom: 28,
        }}
      >
        Products in this collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {products.map(product => {
          const supplier = getSupplierById(product.supplierId)
          const margin = calcMargin(product.tiers[0].unitPrice, product.suggestedRetail)
          return (
            <Link key={product.id} to="/products/$id" params={{ id: product.id }}>
              <div className="nocte-card overflow-hidden flex flex-col h-full">
                <div className="overflow-hidden" style={{ height: 240 }}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-1 flex-1">
                  <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>{product.category}</p>
                  <h3
                    style={{
                      fontFamily: 'var(--nocte-serif)',
                      fontSize: 18,
                      fontWeight: 400,
                      color: 'var(--nocte-black)',
                      lineHeight: 1.3,
                    }}
                  >
                    {product.name}
                  </h3>
                  <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>{product.material}</p>
                  {supplier && (
                    <p className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>{supplier.name}</p>
                  )}
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <p style={{ fontFamily: 'var(--nocte-sans)', fontSize: 14, fontWeight: 500, color: 'var(--nocte-black)' }}>
                      &euro;{product.tiers[0].unitPrice.toFixed(0)} / unit
                    </p>
                    <span className="nocte-badge">{margin}% margin</span>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
