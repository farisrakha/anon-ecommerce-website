export default function HeaderMain() {
  return (
    <div className="py-4" style={{ borderBottom: '1px solid var(--nocte-border)' }}>
      <div className="max-w-[1350px] mx-auto px-4 flex items-center gap-6">

        <a href="#" className="shrink-0">
          <img src="/images/logo/logo.svg" alt="Anon's logo" width={120} height={36} />
        </a>

        <div
          className="flex-1 flex items-center overflow-hidden max-w-[500px] mx-auto"
          style={{ border: '1px solid var(--nocte-border)' }}
        >
          <input
            type="search"
            name="search"
            placeholder="Search products..."
            className="flex-1 px-4 py-2 text-fs-7 outline-none"
            style={{ backgroundColor: 'var(--nocte-surface-2)', color: 'var(--nocte-white)', fontFamily: 'var(--nocte-sans)' }}
          />
          <button
            className="px-4 py-2 nocte-hover-opacity"
            style={{ backgroundColor: 'var(--nocte-white)', color: 'var(--nocte-black)' }}
            aria-label="Search"
          >
            <ion-icon name="search-outline" />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-1 ml-auto">
          <button
            className="relative flex items-center p-2 text-xl nocte-link-light"
            aria-label="Account"
          >
            <ion-icon name="person-outline" />
          </button>

          <button
            className="relative flex items-center p-2 text-xl nocte-link-light"
            aria-label="Wishlist"
          >
            <ion-icon name="heart-outline" />
            <span
              className="absolute -top-1 -right-1 text-[10px] w-4 h-4 flex items-center justify-center"
              style={{ backgroundColor: 'var(--nocte-surface-3)', color: 'var(--nocte-gray-light)', fontFamily: 'var(--nocte-sans)' }}
            >
              0
            </span>
          </button>

          <button
            className="relative flex items-center p-2 text-xl nocte-link-light"
            aria-label="Open cart"
          >
            <ion-icon name="bag-handle-outline" />
            <span
              className="absolute -top-1 -right-1 text-[10px] w-4 h-4 flex items-center justify-center"
              style={{ backgroundColor: 'var(--nocte-surface-3)', color: 'var(--nocte-gray-light)', fontFamily: 'var(--nocte-sans)' }}
            >
              0
            </span>
          </button>
        </div>

      </div>
    </div>
  )
}
