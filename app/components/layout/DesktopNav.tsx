export default function DesktopNav() {
  const dropdownItems: Record<string, string[]> = {
    "Men's": ['Shirt', 'Shorts & Jeans', 'Safety Shoes', 'Wallet'],
    "Women's": ['Dress & Frock', 'Earrings', 'Necklace', 'Makeup Kit'],
    'Jewelry': ['Earrings', 'Couple Rings', 'Necklace', 'Bracelets'],
    'Perfume': ['Clothes Perfume', 'Deodorant', 'Flower Fragrance', 'Air Freshener'],
  }

  const panelColumns = [
    {
      title: 'Electronics',
      items: ['Desktop', 'Laptop', 'Camera', 'Tablet', 'Headphone'],
      banner: '/images/electronics-banner-1.jpg',
      bannerAlt: 'headphone collection',
    },
    {
      title: "Men's",
      items: ['Formal', 'Casual', 'Sports', 'Jacket', 'Sunglasses'],
      banner: '/images/mens-banner.jpg',
      bannerAlt: "men's fashion",
    },
    {
      title: "Women's",
      items: ['Formal', 'Casual', 'Perfume', 'Cosmetics', 'Bags'],
      banner: '/images/womens-banner.jpg',
      bannerAlt: "women's fashion",
    },
    {
      title: 'Electronics',
      items: ['Smart Watch', 'Smart TV', 'Keyboard', 'Mouse', 'Microphone'],
      banner: '/images/electronics-banner-2.jpg',
      bannerAlt: 'mouse collection',
    },
  ]

  return (
    <nav className="hidden lg:block bg-salmon-pink">
      <div className="max-w-[1350px] mx-auto px-4">
        <ul className="flex items-center">

          <li className="desktop-nav-item">
            <a href="#" className="block px-5 py-3 text-white text-fs-7 font-medium hover:bg-bittersweet transition-colors">
              Home
            </a>
          </li>

          <li className="desktop-nav-item">
            <a href="#" className="block px-5 py-3 text-white text-fs-7 font-medium hover:bg-bittersweet transition-colors">
              Categories
            </a>
            <div className="dropdown-panel">
              <div className="grid grid-cols-4 gap-5">
                {panelColumns.map((col) => (
                  <ul key={col.title}>
                    <li className="mb-3">
                      <a href="#" className="text-fs-7 font-semibold text-eerie-black hover:text-salmon-pink">{col.title}</a>
                    </li>
                    {col.items.map((item) => (
                      <li key={item} className="mb-1">
                        <a href="#" className="text-fs-8 text-sonic-silver hover:text-salmon-pink transition-colors">{item}</a>
                      </li>
                    ))}
                    <li className="mt-2">
                      <a href="#">
                        <img src={col.banner} alt={col.bannerAlt} width={250} height={119} className="rounded-sm-custom w-full" />
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </li>

          {Object.entries(dropdownItems).map(([title, items]) => (
            <li key={title} className="desktop-nav-item">
              <a href="#" className="block px-5 py-3 text-white text-fs-7 font-medium hover:bg-bittersweet transition-colors">
                {title}
              </a>
              <ul className="dropdown-list">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="block px-5 py-2 text-fs-8 text-sonic-silver hover:text-salmon-pink hover:bg-cultured transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li className="desktop-nav-item">
            <a href="#" className="block px-5 py-3 text-white text-fs-7 font-medium hover:bg-bittersweet transition-colors">
              Blog
            </a>
          </li>

          <li className="desktop-nav-item">
            <a href="#" className="block px-5 py-3 text-white text-fs-7 font-medium hover:bg-bittersweet transition-colors">
              Hot Offers
            </a>
          </li>

        </ul>
      </div>
    </nav>
  )
}
