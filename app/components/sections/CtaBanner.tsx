export default function CtaBanner() {
  return (
    <div className="relative rounded-md-custom overflow-hidden flex-1 min-h-[200px]">
      <img
        src="/images/cta-banner.jpg"
        alt="summer collection"
        className="w-full h-full object-cover absolute inset-0"
      />
      <a
        href="#"
        className="absolute inset-0 flex flex-col items-start justify-center p-8 bg-black/20 hover:bg-black/30 transition-colors"
      >
        <p className="text-fs-8 font-semibold text-white/90 uppercase tracking-wide mb-1">25% Discount</p>
        <h2 className="text-fs-2 font-bold text-white mb-2">Summer collection</h2>
        <p className="text-fs-7 text-white/90 mb-4">Starting @ $10</p>
        <button className="bg-white text-eerie-black text-fs-8 font-semibold px-5 py-2 rounded-sm-custom hover:bg-salmon-pink hover:text-white transition-colors">
          Shop now
        </button>
      </a>
    </div>
  )
}
