import { collections } from '../../data/nocte-mock'

export default function FeaturedCollections() {
  return (
    <section className="py-16" style={{ backgroundColor: 'var(--nocte-surface-1)' }}>
      <div className="max-w-[1350px] mx-auto px-4">
        <h2
          className="mb-8"
          style={{ fontFamily: 'var(--nocte-serif)', fontSize: 32, fontWeight: 400, color: 'var(--nocte-black)' }}
        >
          Shop by Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map(c => (
            <a key={c.id} href="#" className="nocte-card overflow-hidden block">
              <div className="overflow-hidden" style={{ height: 200 }}>
                <img
                  src={c.heroImage}
                  alt={c.title}
                  className="w-full h-full object-cover"
                  style={{ transition: 'transform 280ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <div className="p-6">
                <p className="nocte-label mb-2" style={{ color: 'var(--nocte-gray-mid)' }}>{c.season}</p>
                <h3
                  className="mb-3"
                  style={{ fontFamily: 'var(--nocte-serif)', fontSize: 22, fontWeight: 400, color: 'var(--nocte-black)' }}
                >
                  {c.title}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="nocte-label">{c.itemCount} ITEMS</span>
                  <span className="nocte-label" style={{ color: 'var(--nocte-gray-mid)' }}>{c.leadTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
