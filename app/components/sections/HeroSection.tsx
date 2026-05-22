export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: 'clamp(440px, 65vh, 720px)' }}>
      <img
        src="/images/hero/hero-main.jpg"
        alt="NOCTE luxury wholesale"
        className="w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.10) 55%, transparent 100%)' }}
      />
      <div className="absolute bottom-0 left-0 p-8 md:p-14" style={{ maxWidth: 560 }}>
        <p className="nocte-label mb-4" style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.12em' }}>
          WHOLESALE
        </p>
        <h1
          className="mb-6 leading-none"
          style={{
            fontFamily: 'var(--nocte-serif)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 400,
            color: '#FAFAFA',
            letterSpacing: '-0.02em',
          }}
        >
          Luxury apparel<br />for independent<br />retailers.
        </h1>
        <a href="#collections" className="nocte-btn-primary" style={{ fontSize: 12 }}>
          BROWSE COLLECTIONS
        </a>
      </div>
    </section>
  )
}
