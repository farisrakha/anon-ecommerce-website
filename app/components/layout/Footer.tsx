const brandDirectory = [
  {
    title: 'Fashion',
    links: ['T-shirt', 'Shirts', 'Shorts & jeans', 'Jacket', 'Dress & frock', 'Innerwear', 'Hosiery'],
  },
  {
    title: 'Footwear',
    links: ['Sport', 'Formal', 'Boots', 'Casual', 'Cowboy shoes', 'Safety shoes', 'Party wear shoes', 'Branded', 'Firstcopy', 'Long shoes'],
  },
  {
    title: 'Jewellery',
    links: ['Necklace', 'Earrings', 'Couple rings', 'Pendants', 'Crystal', 'Bangles', 'Bracelets', 'Nosepin', 'Chain'],
  },
  {
    title: 'Cosmetics',
    links: ['Shampoo', 'Bodywash', 'Facewash', 'Makeup kit', 'Liner', 'Lipstick', 'Perfume', 'Body soap', 'Scrub', 'Hair gel'],
  },
]

const navColumns = [
  {
    title: 'Categories',
    links: ['Fashion', 'Electronic', 'Cosmetic', 'Health', 'Watches'],
  },
  {
    title: 'Products',
    links: ['Prices drop', 'New products', 'Best sales', 'Contact us', 'Sitemap'],
  },
  {
    title: 'Company',
    links: ['Delivery', 'Legal Notice', 'Terms and conditions', 'About us', 'Secure payment'],
  },
  {
    title: 'Services',
    links: ['Prices drop', 'New products', 'Best sales', 'Contact us', 'Sitemap'],
  },
]

export default function Footer() {
  return (
    <footer className="pb-20 lg:pb-0">
      {/* Brand directory */}
      <div className="py-8" style={{ backgroundColor: 'var(--nocte-surface-1)', borderTop: '1px solid var(--nocte-border)' }}>
        <div className="max-w-[1350px] mx-auto px-4">
          <h2 className="nocte-label mb-6">Brand directory</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandDirectory.map((section) => (
              <div key={section.title}>
                <h3 className="text-fs-8 mb-3" style={{ color: 'var(--nocte-gray-light)', fontFamily: 'var(--nocte-sans)' }}>{section.title}</h3>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {section.links.map((link, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-fs-8 nocte-link-mid"
                      style={{ fontFamily: 'var(--nocte-sans)' }}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nav columns */}
      <div className="py-10" style={{ backgroundColor: 'var(--nocte-surface-1)', borderTop: '1px solid var(--nocte-border)' }}>
        <div className="max-w-[1350px] mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {navColumns.map((col) => (
            <ul key={col.title}>
              <li className="mb-4">
                <h2 className="nocte-label">{col.title}</h2>
              </li>
              {col.links.map((link) => (
                <li key={link} className="mb-2">
                  <a
                    href="#"
                    className="text-fs-8 nocte-link-mid"
                    style={{ fontFamily: 'var(--nocte-sans)' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}

          <ul>
            <li className="mb-4">
              <h2 className="nocte-label">Contact</h2>
            </li>
            <li className="flex gap-2 mb-3">
              <ion-icon name="location-outline" style={{ color: 'var(--nocte-gray-mid)' }} class="text-base shrink-0 mt-0.5" />
              <address className="text-fs-8 not-italic leading-relaxed" style={{ color: 'var(--nocte-gray-mid)', fontFamily: 'var(--nocte-sans)' }}>
                419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
              </address>
            </li>
            <li className="flex gap-2 mb-3">
              <ion-icon name="call-outline" style={{ color: 'var(--nocte-gray-mid)' }} class="text-base shrink-0" />
              <a href="tel:+6079368058" className="text-fs-8 nocte-link-mid" style={{ fontFamily: 'var(--nocte-sans)' }}>(607) 936-8058</a>
            </li>
            <li className="flex gap-2">
              <ion-icon name="mail-outline" style={{ color: 'var(--nocte-gray-mid)' }} class="text-base shrink-0" />
              <a href="mailto:example@gmail.com" className="text-fs-8 nocte-link-mid" style={{ fontFamily: 'var(--nocte-sans)' }}>example@gmail.com</a>
            </li>
          </ul>

          <ul>
            <li className="mb-4">
              <h2 className="nocte-label">Follow Us</h2>
            </li>
            <li>
              <ul className="flex gap-2">
                {[
                  { icon: 'logo-facebook', label: 'Facebook' },
                  { icon: 'logo-twitter', label: 'Twitter' },
                  { icon: 'logo-linkedin', label: 'LinkedIn' },
                  { icon: 'logo-instagram', label: 'Instagram' },
                ].map(({ icon, label }) => (
                  <li key={icon}>
                    <a
                      href="#"
                      aria-label={label}
                      className="w-11 h-11 flex items-center justify-center text-base nocte-social-icon"
                    >
                      <ion-icon name={icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="py-4" style={{ backgroundColor: 'var(--nocte-surface-3)', borderTop: '1px solid var(--nocte-border)' }}>
        <div className="max-w-[1350px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <img src="/images/payment.png" alt="payment method" height={28} className="h-7" />
          <p className="text-fs-9" style={{ color: 'var(--nocte-gray-mid)', fontFamily: 'var(--nocte-sans)' }}>
            Copyright &copy; <a href="#" className="nocte-link-light" style={{ fontFamily: 'var(--nocte-sans)' }}>Anon</a> all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
