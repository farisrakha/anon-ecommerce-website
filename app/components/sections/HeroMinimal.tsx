export default function HeroMinimal() {
  return (
    <section style={{ backgroundColor: 'var(--nocte-black)', padding: '56px 0 48px' }}>
      <div className="max-w-[1350px] mx-auto px-4 md:px-8">
        <p
          className="nocte-label mb-4"
          style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.12em' }}
        >
          NOCTE WHOLESALE
        </p>
        <h1
          className="mb-4 leading-tight"
          style={{
            fontFamily: 'var(--nocte-serif)',
            fontSize: 'clamp(1.6rem, 3vw, 2.8rem)',
            fontWeight: 400,
            color: '#FAFAFA',
            maxWidth: 680,
          }}
        >
          Wholesale collections for boutique owners and retailers.
        </h1>
        <p
          className="mb-8"
          style={{
            fontFamily: 'var(--nocte-sans)',
            fontSize: 15,
            color: 'rgba(255,255,255,0.55)',
            maxWidth: 480,
          }}
        >
          Curated suppliers. Transparent pricing. Net-30/60 terms.
        </p>
        <a href="#catalog" className="nocte-btn-primary" style={{ fontSize: 12 }}>
          START BROWSING
        </a>
      </div>
    </section>
  )
}
