const slides = [
  {
    id: 1,
    image: '/images/banner-1.jpg',
    alt: "women's latest fashion sale",
    subtitle: 'New season',
    title: "Women's latest\nfashion edit",
    price: '20',
  },
  {
    id: 2,
    image: '/images/banner-2.jpg',
    alt: 'modern sunglasses',
    subtitle: 'Accessories',
    title: 'Modern\nsunglasses',
    price: '15',
  },
  {
    id: 3,
    image: '/images/banner-3.jpg',
    alt: 'new fashion summer sale',
    subtitle: 'Summer edit',
    title: 'New fashion\nsummer sale',
    price: '29.99',
  },
]

export default function BannerCarousel() {
  return (
    <div style={{ backgroundColor: 'var(--nocte-surface-2)' }} className="py-6">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="banner-slider-container flex overflow-x-auto gap-4 has-scrollbar snap-x snap-mandatory">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="banner-slider-item relative flex-none w-full overflow-hidden"
              style={{ minWidth: '100%' }}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-[200px] xs:h-[280px] md:h-[360px] object-cover"
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-16">
                <p className="nocte-label mb-3">{slide.subtitle}</p>
                <h2
                  className="mb-4 max-w-[280px] leading-tight"
                  style={{
                    fontFamily: 'var(--nocte-serif)',
                    color: 'var(--nocte-black)',
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    fontWeight: 400,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {slide.title}
                </h2>
                <p className="text-fs-8 mb-5" style={{ color: 'var(--nocte-gray-mid)', fontFamily: 'var(--nocte-sans)' }}>
                  Starting at ${slide.price}
                </p>
                <a href="#" className="nocte-btn-primary">
                  Shop now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
