const navColumns = [
  {
    title: 'Collections',
    links: ['SS25 — Spring/Summer', 'FW25 — Fall/Winter', 'Pre-Fall 2025', 'Archive', 'New Arrivals'],
  },
  {
    title: 'Suppliers',
    links: ['Forma Milano', 'Atelier Brun', 'Tessile Nord', 'Casa Sevilla', 'Browse All'],
  },
  {
    title: 'Account',
    links: ['Sign In', 'Register as Buyer', 'My Orders', 'Saved Items', 'Account Settings'],
  },
  {
    title: 'Company',
    links: ['About NOCTE', 'How It Works', 'Terms & Conditions', 'Privacy Policy', 'Contact'],
  },
]

export default function Footer() {
  return (
    <footer className="pb-20 lg:pb-0">
      <div className="py-12" style={{ backgroundColor: 'var(--nocte-surface-2)', borderTop: '1px solid var(--nocte-border)' }}>
        <div className="max-w-[1350px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10">
          {navColumns.map(col => (
            <ul key={col.title}>
              <li className="mb-5">
                <h2 className="nocte-label">{col.title.toUpperCase()}</h2>
              </li>
              {col.links.map(link => (
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
        </div>
      </div>

      <div className="py-4" style={{ backgroundColor: 'var(--nocte-surface-3)', borderTop: '1px solid var(--nocte-border)' }}>
        <div className="max-w-[1350px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a href="/" aria-label="NOCTE home">
            <img src="/images/nocte-logo.png" alt="NOCTE" height={24} className="h-6 opacity-70" />
          </a>
          <div className="flex items-center gap-4">
            <ul className="flex gap-2">
              {[
                { icon: 'logo-instagram', label: 'Instagram' },
                { icon: 'logo-linkedin', label: 'LinkedIn' },
                { icon: 'logo-twitter', label: 'Twitter' },
              ].map(({ icon, label }) => (
                <li key={icon}>
                  <a href="#" aria-label={label} className="w-9 h-9 flex items-center justify-center text-sm nocte-social-icon">
                    <ion-icon name={icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-fs-9" style={{ color: 'var(--nocte-gray-mid)', fontFamily: 'var(--nocte-sans)' }}>
            &copy; 2025 NOCTE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
