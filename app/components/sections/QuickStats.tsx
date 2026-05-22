import { products, suppliers } from '../../data/nocte-mock'

const benefits = [
  {
    heading: `${products.length} Premium Products`,
    body: `Across all seasons from ${suppliers.length} vetted suppliers worldwide`,
  },
  {
    heading: 'Net-30/60 Payment Terms',
    body: 'Professional invoicing with flexible payment windows, no credit cards required',
  },
  {
    heading: 'Transparent Wholesale Pricing',
    body: 'See margins, MOQs, and lead times upfront — make informed decisions',
  },
]

export default function QuickStats() {
  return (
    <section style={{ borderBottom: '1px solid var(--nocte-border)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: 520 }}>

        {/* Left: text */}
        <div
          className="flex flex-col justify-center"
          style={{
            backgroundColor: 'var(--nocte-surface-2)',
            padding: 'clamp(40px, 6vw, 80px)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--nocte-serif)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)',
              fontWeight: 400,
              color: 'var(--nocte-black)',
              lineHeight: 1.2,
              marginBottom: 40,
            }}
          >
            Discover curated collections<br />with confidence.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {benefits.map(b => (
              <div key={b.heading}>
                <p
                  style={{
                    fontFamily: 'var(--nocte-serif)',
                    fontSize: 18,
                    fontWeight: 400,
                    color: 'var(--nocte-black)',
                    marginBottom: 6,
                    lineHeight: 1.3,
                  }}
                >
                  {b.heading}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--nocte-sans)',
                    fontSize: 14,
                    color: 'var(--nocte-gray-mid)',
                    lineHeight: 1.6,
                  }}
                >
                  {b.body}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 44 }}>
            <a
              href="#catalog"
              className="nocte-btn-primary"
              style={{ display: 'inline-block', fontSize: 11 }}
            >
              START BROWSING
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 360 }}>
          <img
            src="/images/quickstats-hero.jpg"
            alt="NOCTE wholesale platform"
            className="w-full h-full object-cover"
            style={{ position: 'absolute', inset: 0 }}
            loading="lazy"
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)',
            }}
          />
          <div style={{ position: 'absolute', bottom: 28, left: 28 }}>
            <p
              style={{
                fontFamily: 'var(--nocte-serif)',
                fontSize: 15,
                fontWeight: 400,
                color: '#FAFAFA',
              }}
            >
              Professional buyers trust NOCTE
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
