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

  const linkStyle = { fontFamily: 'var(--nocte-sans)', fontSize: '13px', letterSpacing: '0.04em' }

  return (
    <nav className="hidden lg:block" style={{ backgroundColor: 'var(--nocte-surface-1)', borderBottom: '1px solid var(--nocte-border)' }}>
      <div className="max-w-[1350px] mx-auto px-4">
        <ul className="flex items-center">

          <li className="desktop-nav-item">
            <a
              href="#"
              className="block px-5 py-3 nocte-link-light"
              style={linkStyle}
            >
              Home
            </a>
          </li>

          <li className="desktop-nav-item">
            <a
              href="#"
              className="block px-5 py-3 nocte-link-light"
              style={linkStyle}
            >
              Categories
            </a>
            <div className="dropdown-panel">
              <div className="grid grid-cols-4 gap-5">
                {panelColumns.map((col) => (
                  <ul key={col.title}>
                    <li className="mb-3">
                      <a
                        href="#"
                        className="text-fs-7 nocte-link-dim"
                        style={{ fontFamily: 'var(--nocte-sans)' }}
                      >
                        {col.title}
                      </a>
                    </li>
                    {col.items.map((item) => (
                      <li key={item} className="mb-1">
                        <a
                          href="#"
                          className="text-fs-8 nocte-link-mid"
                          style={{ fontFamily: 'var(--nocte-sans)' }}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                    <li className="mt-3">
                      <a href="#">
                        <img src={col.banner} alt={col.bannerAlt} width={250} height={119} className="w-full" />
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </li>

          {Object.entries(dropdownItems).map(([title, items]) => (
            <li key={title} className="desktop-nav-item">
              <a
                href="#"
                className="block px-5 py-3 nocte-link-light"
                style={linkStyle}
              >
                {title}
              </a>
              <ul className="dropdown-list">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block px-5 py-2 text-fs-8"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li className="desktop-nav-item">
            <a
              href="#"
              className="block px-5 py-3 nocte-link-light"
              style={linkStyle}
            >
              Blog
            </a>
          </li>

          <li className="desktop-nav-item">
            <a
              href="#"
              className="block px-5 py-3 nocte-link-light"
              style={linkStyle}
            >
              New Arrivals
            </a>
          </li>

        </ul>
      </div>
    </nav>
  )
}
