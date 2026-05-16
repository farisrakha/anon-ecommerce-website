const brandDirectory = [
  {
    title: 'Fashion :',
    links: ['T-shirt', 'Shirts', 'Shorts & jeans', 'Jacket', 'Dress & frock', 'Innerwear', 'Hosiery'],
  },
  {
    title: 'Footwear :',
    links: ['Sport', 'Formal', 'Boots', 'Casual', 'Cowboy shoes', 'Safety shoes', 'Party wear shoes', 'Branded', 'Firstcopy', 'Long shoes'],
  },
  {
    title: 'Jewellery :',
    links: ['Necklace', 'Earrings', 'Couple rings', 'Pendants', 'Crystal', 'Bangles', 'Bracelets', 'Nosepin', 'Chain', 'Earrings', 'Couple rings'],
  },
  {
    title: 'Cosmetics :',
    links: ['Shampoo', 'Bodywash', 'Facewash', 'Makeup kit', 'Liner', 'Lipstick', 'Perfume', 'Body soap', 'Scrub', 'Hair gel', 'Hair colors', 'Hair dye', 'Sunscreen', 'Skin lotion', 'Liner', 'Lipstick'],
  },
]

const navColumns = [
  {
    title: 'Popular Categories',
    links: ['Fashion', 'Electronic', 'Cosmetic', 'Health', 'Watches'],
  },
  {
    title: 'Products',
    links: ['Prices drop', 'New products', 'Best sales', 'Contact us', 'Sitemap'],
  },
  {
    title: 'Our Company',
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
      <div className="bg-cultured py-8">
        <div className="max-w-[1350px] mx-auto px-4">
          <h2 className="text-fs-5 font-semibold text-eerie-black mb-6">Brand directory</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandDirectory.map((section) => (
              <div key={section.title}>
                <h3 className="text-fs-7 font-semibold text-eerie-black mb-3">{section.title}</h3>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {section.links.map((link, i) => (
                    <a key={i} href="#" className="text-fs-8 text-sonic-silver hover:text-salmon-pink transition-colors">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-10 border-t border-cultured">
        <div className="max-w-[1350px] mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {navColumns.map((col) => (
            <ul key={col.title}>
              <li className="mb-4">
                <h2 className="text-fs-6 font-semibold text-eerie-black">{col.title}</h2>
              </li>
              {col.links.map((link) => (
                <li key={link} className="mb-2">
                  <a href="#" className="text-fs-8 text-sonic-silver hover:text-salmon-pink transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          ))}

          <ul>
            <li className="mb-4">
              <h2 className="text-fs-6 font-semibold text-eerie-black">Contact</h2>
            </li>
            <li className="flex gap-2 mb-3">
              <ion-icon name="location-outline" class="text-salmon-pink text-base shrink-0 mt-0.5" />
              <address className="text-fs-8 text-sonic-silver not-italic leading-relaxed">
                419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
              </address>
            </li>
            <li className="flex gap-2 mb-3">
              <ion-icon name="call-outline" class="text-salmon-pink text-base shrink-0" />
              <a href="tel:+6079368058" className="text-fs-8 text-sonic-silver hover:text-salmon-pink">(607) 936-8058</a>
            </li>
            <li className="flex gap-2">
              <ion-icon name="mail-outline" class="text-salmon-pink text-base shrink-0" />
              <a href="mailto:example@gmail.com" className="text-fs-8 text-sonic-silver hover:text-salmon-pink">example@gmail.com</a>
            </li>
          </ul>

          <ul>
            <li className="mb-4">
              <h2 className="text-fs-6 font-semibold text-eerie-black">Follow Us</h2>
            </li>
            <li>
              <ul className="flex gap-3">
                {[
                  { icon: 'logo-facebook', label: 'Facebook' },
                  { icon: 'logo-twitter', label: 'Twitter' },
                  { icon: 'logo-linkedin', label: 'LinkedIn' },
                  { icon: 'logo-instagram', label: 'Instagram' },
                ].map(({ icon, label }) => (
                  <li key={icon}>
                    <a href="#" aria-label={label} className="w-8 h-8 flex items-center justify-center rounded-full bg-cultured text-eerie-black hover:bg-salmon-pink hover:text-white transition-colors text-base">
                      <ion-icon name={icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-eerie-black py-4">
        <div className="max-w-[1350px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <img src="/images/payment.png" alt="payment method" height={28} className="h-7" />
          <p className="text-fs-9 text-white/70">
            Copyright &copy; <a href="#" className="text-salmon-pink hover:underline">Anon</a> all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
