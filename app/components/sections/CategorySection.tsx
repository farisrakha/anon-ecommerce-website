import { categories } from '../../data/categories'

export default function CategorySection() {
  return (
    <div className="py-8" style={{ borderBottom: '1px solid var(--nocte-border)' }}>
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="flex gap-3 overflow-x-auto has-scrollbar pb-2">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex-none flex items-center gap-3 px-4 py-3 min-w-max cursor-pointer nocte-hover-border"
              style={{ border: '1px solid var(--nocte-border)' }}
            >
              <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: 'var(--nocte-surface-2)' }}>
                <img src={cat.icon} alt={cat.title} width={24} height={24} />
              </div>
              <div>
                <h3 className="text-fs-8" style={{ color: 'var(--nocte-white)', fontFamily: 'var(--nocte-sans)' }}>
                  {cat.title}
                </h3>
                <p className="text-fs-9" style={{ color: 'var(--nocte-gray-mid)', fontFamily: 'var(--nocte-sans)' }}>({cat.count})</p>
                <a href="#" className="text-fs-9 nocte-link-mid" style={{ fontFamily: 'var(--nocte-sans)' }}>Show all</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
