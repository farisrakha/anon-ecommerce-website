import { suppliers } from '../../data/nocte-mock'
import StarRating from '../ui/StarRating'

export default function FeaturedSuppliers() {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: 'var(--nocte-surface-2)', borderTop: '1px solid var(--nocte-border)' }}
    >
      <div className="max-w-[1350px] mx-auto px-4">
        <h2
          className="mb-8 pb-3"
          style={{
            fontFamily: 'var(--nocte-serif)',
            fontSize: 28,
            fontWeight: 400,
            color: 'var(--nocte-black)',
            borderBottom: '1px solid var(--nocte-border)',
          }}
        >
          Supplier Directory
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {suppliers.map(supplier => (
            <div
              key={supplier.id}
              className="p-5"
              style={{
                border: '1px solid var(--nocte-border)',
                backgroundColor: 'var(--nocte-surface-1)',
                transition: 'background-color var(--nocte-transition)',
              }}
            >
              <h3
                className="mb-1 leading-tight"
                style={{
                  fontFamily: 'var(--nocte-serif)',
                  fontSize: 18,
                  fontWeight: 400,
                  color: 'var(--nocte-black)',
                }}
              >
                {supplier.name}
              </h3>
              <p className="nocte-label mb-3" style={{ color: 'var(--nocte-gray-mid)' }}>
                {supplier.location.country}
              </p>
              <StarRating rating={supplier.rating} className="mb-3" />
              <p
                className="mb-3"
                style={{
                  fontFamily: 'var(--nocte-sans)',
                  fontSize: 12,
                  color: 'var(--nocte-gray-mid)',
                  lineHeight: 1.4,
                }}
              >
                {supplier.materials.slice(0, 3).join(', ')}
              </p>
              <div className="flex flex-col gap-1 mb-4">
                <span className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>
                  MOQ &euro;{supplier.moqValue}
                </span>
                <span className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>
                  {supplier.leadTime}
                </span>
              </div>
              <a href="#" className="nocte-btn-secondary w-full text-center block" style={{ fontSize: 11 }}>
                VIEW COLLECTIONS
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
