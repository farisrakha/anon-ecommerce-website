export default function HeaderMain() {
  return (
    <div className="py-4 border-b border-cultured">
      <div className="max-w-[1350px] mx-auto px-4 flex items-center gap-6">

        <a href="#" className="shrink-0">
          <img src="/images/logo/logo.svg" alt="Anon's logo" width={120} height={36} />
        </a>

        <div className="flex-1 flex items-center border border-cultured rounded-sm-custom overflow-hidden max-w-[500px] mx-auto">
          <input
            type="search"
            name="search"
            placeholder="Enter your product name..."
            className="flex-1 px-4 py-2 text-fs-7 outline-none"
          />
          <button className="px-4 py-2 bg-salmon-pink text-white hover:bg-bittersweet transition-colors">
            <ion-icon name="search-outline" />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-3 ml-auto">
          <button className="relative flex items-center p-2 text-eerie-black hover:text-salmon-pink transition-colors text-xl">
            <ion-icon name="person-outline" />
          </button>

          <button className="relative flex items-center p-2 text-eerie-black hover:text-salmon-pink transition-colors text-xl">
            <ion-icon name="heart-outline" />
            <span className="absolute -top-1 -right-1 bg-salmon-pink text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          <button className="relative flex items-center p-2 text-eerie-black hover:text-salmon-pink transition-colors text-xl">
            <ion-icon name="bag-handle-outline" />
            <span className="absolute -top-1 -right-1 bg-salmon-pink text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>

      </div>
    </div>
  )
}
