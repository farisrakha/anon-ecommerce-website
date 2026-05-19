interface MobileBottomNavProps {
  onMenuOpen: () => void
}

export default function MobileBottomNav({ onMenuOpen }: MobileBottomNavProps) {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around py-2 px-4"
      style={{ backgroundColor: 'var(--nocte-surface-1)', borderTop: '1px solid var(--nocte-border)' }}
    >
      <button
        onClick={onMenuOpen}
        className="flex flex-col items-center gap-1 min-h-[44px] min-w-[44px] justify-center nocte-link-light"
        aria-label="Open menu"
      >
        <ion-icon name="menu-outline" class="text-xl" />
      </button>

      <button
        className="relative flex flex-col items-center gap-1 min-h-[44px] min-w-[44px] justify-center nocte-link-light"
        aria-label="Open cart"
      >
        <ion-icon name="bag-handle-outline" class="text-xl" />
        <span
          className="absolute top-0 right-0 text-[9px] w-4 h-4 flex items-center justify-center"
          style={{ backgroundColor: 'var(--nocte-surface-3)', color: 'var(--nocte-gray-light)' }}
        >
          0
        </span>
      </button>

      <button
        className="flex flex-col items-center gap-1 min-h-[44px] min-w-[44px] justify-center nocte-link-light"
        aria-label="Home"
      >
        <ion-icon name="home-outline" class="text-xl" />
      </button>

      <button
        className="relative flex flex-col items-center gap-1 min-h-[44px] min-w-[44px] justify-center nocte-link-light"
        aria-label="Wishlist"
      >
        <ion-icon name="heart-outline" class="text-xl" />
        <span
          className="absolute top-0 right-0 text-[9px] w-4 h-4 flex items-center justify-center"
          style={{ backgroundColor: 'var(--nocte-surface-3)', color: 'var(--nocte-gray-light)' }}
        >
          0
        </span>
      </button>

      <button
        onClick={onMenuOpen}
        className="flex flex-col items-center gap-1 min-h-[44px] min-w-[44px] justify-center nocte-link-light"
        aria-label="Browse categories"
      >
        <ion-icon name="grid-outline" class="text-xl" />
      </button>
    </div>
  )
}
