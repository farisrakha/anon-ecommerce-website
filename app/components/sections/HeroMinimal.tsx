export default function HeroMinimal() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'clamp(560px, 72vh, 720px)',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--nocte-black)',
      }}
    >
      {/* Full-bleed grayscale image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="/images/hero.jpg"
          alt="NOCTE editorial"
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%)', objectPosition: 'center 30%' }}
          fetchpriority="high"
        />
      </div>

      {/* Gradient: full black left → transparent right */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.88) 38%, rgba(10,10,10,0.35) 68%, rgba(10,10,10,0) 100%)',
        }}
      />
      {/* Mobile: heavier overlay so text stays legible on small screens */}
      <div
        className="lg:hidden"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10,10,10,0.45)',
        }}
      />

      {/* Content */}
      <div
        className="relative max-w-[1350px] mx-auto px-4 md:px-8 w-full"
        style={{ paddingTop: 72, paddingBottom: 72 }}
      >
        <div style={{ maxWidth: 580 }}>
          <p
            className="nocte-label mb-5"
            style={{ color: 'rgba(255,255,255,0.42)', letterSpacing: '0.14em' }}
          >
            NOCTE WHOLESALE
          </p>
          <h1
            className="mb-5 leading-tight"
            style={{
              fontFamily: 'var(--nocte-serif)',
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 400,
              color: '#FAFAFA',
              lineHeight: 1.15,
            }}
          >
            Wholesale collections for boutique owners and retailers.
          </h1>
          <p
            className="mb-10"
            style={{
              fontFamily: 'var(--nocte-sans)',
              fontSize: 16,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
              maxWidth: 420,
            }}
          >
            Curated suppliers. Transparent pricing. Net-30/60 terms.
          </p>
          <a href="#catalog" className="nocte-btn-primary" style={{ fontSize: 12 }}>
            START BROWSING
          </a>
        </div>
      </div>
    </section>
  )
}
