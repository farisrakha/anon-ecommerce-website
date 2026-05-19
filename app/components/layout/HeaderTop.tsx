export default function HeaderTop() {
  return (
    <div className="py-2" style={{ backgroundColor: 'var(--nocte-surface-2)' }}>
      <div className="max-w-[1350px] mx-auto px-4 flex items-center justify-between gap-4">

        <ul className="hidden lg:flex items-center gap-3">
          {[
            { icon: 'logo-facebook', label: 'Facebook' },
            { icon: 'logo-twitter', label: 'Twitter' },
            { icon: 'logo-instagram', label: 'Instagram' },
            { icon: 'logo-linkedin', label: 'LinkedIn' },
          ].map(({ icon, label }) => (
            <li key={icon}>
              <a
                href="#"
                aria-label={label}
                className="flex nocte-link-mid"
              >
                <ion-icon name={icon} />
              </a>
            </li>
          ))}
        </ul>

        <p className="hidden xs:block text-fs-9 text-center nocte-label">
          Free Shipping — this week, orders over $55
        </p>

        <div className="hidden sm:flex items-center gap-3">
          <select
            name="currency"
            className="bg-transparent text-fs-9 outline-none cursor-pointer"
            style={{ color: 'var(--nocte-gray-mid)' }}
          >
            <option value="usd" style={{ backgroundColor: 'var(--nocte-surface-1)' }}>USD $</option>
            <option value="eur" style={{ backgroundColor: 'var(--nocte-surface-1)' }}>EUR €</option>
          </select>

          <select
            name="language"
            className="bg-transparent text-fs-9 outline-none cursor-pointer"
            style={{ color: 'var(--nocte-gray-mid)' }}
          >
            <option value="en-US" style={{ backgroundColor: 'var(--nocte-surface-1)' }}>English</option>
            <option value="es-ES" style={{ backgroundColor: 'var(--nocte-surface-1)' }}>Español</option>
            <option value="fr" style={{ backgroundColor: 'var(--nocte-surface-1)' }}>Français</option>
          </select>
        </div>

      </div>
    </div>
  )
}
