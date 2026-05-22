import { collections } from '../../data/nocte-mock'

const subtitles: Record<string, string> = {
  'col-ss25': 'Discover our spring season',
  'col-fw25': 'Premium materials, wholesale pricing',
  'col-pf25': 'Now available for pre-order',
}

const ctas: Record<string, string> = {
  'col-ss25': 'EXPLORE',
  'col-fw25': 'SHOP NOW',
  'col-pf25': 'PRE-ORDER',
}

export default function BannerCarousel() {
  return (
    <section id="collections" className="py-12" style={{ backgroundColor: 'var(--nocte-surface-2)' }}>
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {collections.map(c => (
            <div key={c.id} className="relative overflow-hidden" style={{ height: 420 }}>
              <img src={c.heroImage} alt={c.title} className="w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)' }}
              />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="nocte-label mb-2" style={{ color: 'rgba(255,255,255,0.65)' }}>{c.season}</p>
                <h3
                  className="mb-3 leading-tight"
                  style={{ fontFamily: 'var(--nocte-serif)', fontSize: 22, fontWeight: 400, color: '#FAFAFA' }}
                >
                  {c.title}
                </h3>
                <p className="mb-4 text-sm" style={{ fontFamily: 'var(--nocte-sans)', color: 'rgba(255,255,255,0.65)' }}>
                  {subtitles[c.id]}
                </p>
                <a href="#" className="nocte-btn-primary" style={{ fontSize: 11 }}>{ctas[c.id]}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
