const slides = [
  {
    id: 1,
    image: '/images/banner-1.jpg',
    alt: "women's latest fashion sale",
    subtitle: 'Trending item',
    title: "Women's latest fashion sale",
    price: '20',
  },
  {
    id: 2,
    image: '/images/banner-2.jpg',
    alt: 'modern sunglasses',
    subtitle: 'Trending accessories',
    title: 'Modern sunglasses',
    price: '15',
  },
  {
    id: 3,
    image: '/images/banner-3.jpg',
    alt: 'new fashion summer sale',
    subtitle: 'Sale Offer',
    title: 'New fashion summer sale',
    price: '29.99',
  },
]

export default function BannerCarousel() {
  return (
    <div className="bg-cultured py-6">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="banner-slider-container flex overflow-x-auto gap-4 has-scrollbar snap-x snap-mandatory">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="banner-slider-item relative flex-none w-full rounded-md-custom overflow-hidden"
              style={{ minWidth: '100%' }}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-[200px] xs:h-[280px] md:h-[360px] object-cover"
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-16">
                <p className="text-fs-9 text-davys-gray font-semibold uppercase tracking-widest mb-2">{slide.subtitle}</p>
                <h2 className="text-fs-3 md:text-fs-1 font-bold text-eerie-black mb-3 max-w-[250px] leading-tight">{slide.title}</h2>
                <p className="text-fs-7 text-davys-gray mb-4">
                  starting at $ <b>{slide.price}</b>
                </p>
                <a
                  href="#"
                  className="inline-block bg-salmon-pink text-white text-fs-8 font-semibold px-5 py-2 rounded-sm-custom hover:bg-bittersweet transition-colors"
                >
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
