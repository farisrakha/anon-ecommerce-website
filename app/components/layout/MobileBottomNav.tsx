interface MobileBottomNavProps {
  onMenuOpen: () => void
}

export default function MobileBottomNav({ onMenuOpen }: MobileBottomNavProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-cultured z-50 flex items-center justify-around py-2 px-4">
      <button
        onClick={onMenuOpen}
        className="flex flex-col items-center gap-1 text-eerie-black hover:text-salmon-pink transition-colors p-2"
      >
        <ion-icon name="menu-outline" class="text-xl" />
      </button>

      <button className="relative flex flex-col items-center gap-1 text-eerie-black hover:text-salmon-pink transition-colors p-2">
        <ion-icon name="bag-handle-outline" class="text-xl" />
        <span className="absolute -top-0 right-0 bg-salmon-pink text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
          0
        </span>
      </button>

      <button className="flex flex-col items-center gap-1 text-eerie-black hover:text-salmon-pink transition-colors p-2">
        <ion-icon name="home-outline" class="text-xl" />
      </button>

      <button className="relative flex flex-col items-center gap-1 text-eerie-black hover:text-salmon-pink transition-colors p-2">
        <ion-icon name="heart-outline" class="text-xl" />
        <span className="absolute -top-0 right-0 bg-salmon-pink text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
          0
        </span>
      </button>

      <button
        onClick={onMenuOpen}
        className="flex flex-col items-center gap-1 text-eerie-black hover:text-salmon-pink transition-colors p-2"
      >
        <ion-icon name="grid-outline" class="text-xl" />
      </button>
    </div>
  )
}
