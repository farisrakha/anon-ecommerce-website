import { products, suppliers } from '../../data/nocte-mock'

const stats = [
  { value: String(products.length), label: 'Products across all collections' },
  { value: String(suppliers.length), label: 'Curated suppliers worldwide' },
  { value: 'Net-30/60', label: 'Standard payment terms' },
]

export default function QuickStats() {
  return (
    <section
      style={{
        backgroundColor: 'var(--nocte-surface-1)',
        borderBottom: '1px solid var(--nocte-border)',
      }}
    >
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="flex flex-col sm:flex-row">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 py-8 px-4 sm:px-8${i > 0 ? ' border-t sm:border-t-0 sm:border-l' : ''}`}
              style={i > 0 ? { borderColor: 'var(--nocte-border)' } : {}}
            >
              <p
                style={{
                  fontFamily: 'var(--nocte-serif)',
                  fontSize: 28,
                  fontWeight: 400,
                  color: 'var(--nocte-black)',
                  marginBottom: 4,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p
                className="nocte-label"
                style={{ color: 'var(--nocte-gray-mid)' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
