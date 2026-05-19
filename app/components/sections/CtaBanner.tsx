export default function CtaBanner() {
  return (
    <div className="relative overflow-hidden flex-1 min-h-[200px]">
      <img
        src="/images/cta-banner.jpg"
        alt="summer collection"
        className="w-full h-full object-cover absolute inset-0"
      />
      <a
        href="#"
        className="absolute inset-0 flex flex-col items-start justify-center p-8 nocte-cta-overlay"
      >
        <p className="nocte-label mb-2">25% Discount</p>
        <h2
          className="mb-2"
          style={{ fontFamily: 'var(--nocte-serif)', color: 'var(--nocte-white)', fontSize: '1.75rem', fontWeight: 400 }}
        >
          Summer collection
        </h2>
        <p className="text-fs-7 mb-5" style={{ color: 'var(--nocte-gray-light)', fontFamily: 'var(--nocte-sans)' }}>
          Starting at $10
        </p>
        <span className="nocte-btn-primary">Shop now</span>
      </a>
    </div>
  )
}
