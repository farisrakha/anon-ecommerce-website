export default function HeaderTop() {
  return (
    <div className="bg-eerie-black py-2">
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
                className="text-white/70 hover:text-salmon-pink transition-colors text-base flex"
              >
                <ion-icon name={icon} />
              </a>
            </li>
          ))}
        </ul>

        <p className="hidden xs:block text-white/80 text-fs-9 text-center">
          <b className="text-sandy-brown">Free Shipping</b> This Week Order Over - $55
        </p>

        <div className="hidden sm:flex items-center gap-3">
          <select
            name="currency"
            className="bg-transparent text-white/80 text-fs-9 outline-none cursor-pointer"
          >
            <option value="usd" className="text-eerie-black">USD $</option>
            <option value="eur" className="text-eerie-black">EUR €</option>
          </select>

          <select
            name="language"
            className="bg-transparent text-white/80 text-fs-9 outline-none cursor-pointer"
          >
            <option value="en-US" className="text-eerie-black">English</option>
            <option value="es-ES" className="text-eerie-black">Español</option>
            <option value="fr" className="text-eerie-black">Français</option>
          </select>
        </div>

      </div>
    </div>
  )
}
