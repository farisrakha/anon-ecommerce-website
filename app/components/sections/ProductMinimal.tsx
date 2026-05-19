import { newArrivals, trending, topRated } from '../../data/products'
import type { Product } from '../../types'

function ShowcaseItem({ product }: { product: Product }) {
  return (
    <div className="flex items-center gap-3 py-3" style={{ borderBottom: '1px solid var(--nocte-border)' }}>
      <a href="#" className="shrink-0 w-[70px] h-[70px] overflow-hidden" style={{ border: '1px solid var(--nocte-border)' }}>
        <img src={product.image} alt={product.title} width={70} height={70} className="w-full h-full object-cover" />
      </a>
      <div className="min-w-0">
        <a href="#">
          <h4
            className="text-fs-8 mb-1 line-clamp-2 nocte-link-dim"
            style={{ fontFamily: 'var(--nocte-sans)', fontWeight: 400 }}
          >
            {product.title}
          </h4>
        </a>
        <a
          href="#"
          className="text-fs-9 nocte-link-mid"
          style={{ fontFamily: 'var(--nocte-sans)' }}
        >
          {product.category}
        </a>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-fs-8" style={{ color: 'var(--nocte-black)', fontFamily: 'var(--nocte-sans)', fontWeight: 500 }}>
            ${product.price.toFixed(2)}
          </p>
          <del className="text-fs-9" style={{ color: 'var(--nocte-gray-mid)', fontFamily: 'var(--nocte-sans)' }}>
            ${product.originalPrice.toFixed(2)}
          </del>
        </div>
      </div>
    </div>
  )
}

function ShowcaseGroup({ title, products }: { title: string; products: Product[] }) {
  const half = Math.ceil(products.length / 2)
  const firstGroup = products.slice(0, half)
  const secondGroup = products.slice(half)

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
      <div className="flex overflow-x-auto has-scrollbar">
        <div className="flex-none w-full min-w-full px-4">
          {firstGroup.map((p) => <ShowcaseItem key={p.id} product={p} />)}
        </div>
        {secondGroup.length > 0 && (
          <div className="flex-none w-full min-w-full px-4">
            {secondGroup.map((p) => <ShowcaseItem key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProductMinimal() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 mb-6">
      <ShowcaseGroup title="New Arrivals" products={newArrivals} />
      <ShowcaseGroup title="Trending" products={trending} />
      <ShowcaseGroup title="Top Rated" products={topRated} />
    </div>
  )
}
