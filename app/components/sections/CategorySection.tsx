import { categories } from '../../data/categories'

export default function CategorySection() {
  return (
    <div className="py-8 border-b border-cultured">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="flex gap-4 overflow-x-auto has-scrollbar pb-2">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex-none flex items-center gap-3 border border-cultured rounded-md-custom px-4 py-3 min-w-max hover:border-salmon-pink transition-colors cursor-pointer group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-cultured rounded-full">
                <img src={cat.icon} alt={cat.title} width={24} height={24} />
              </div>
              <div>
                <h3 className="text-fs-8 font-semibold text-eerie-black group-hover:text-salmon-pink transition-colors">
                  {cat.title}
                </h3>
                <p className="text-fs-9 text-sonic-silver">({cat.count})</p>
                <a href="#" className="text-fs-9 text-salmon-pink hover:underline">Show all</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
