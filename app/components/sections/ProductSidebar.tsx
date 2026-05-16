'use client'

import { useState } from 'react'
import { sidebarCategories } from '../../data/categories'
import ProductShowcasePanel from './ProductShowcasePanel'

interface ProductSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProductSidebar({ isOpen, onClose }: ProductSidebarProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => prev === id ? null : id)
  }

  return (
    <>
      {isOpen && (
        <div className="overlay lg:hidden" onClick={onClose} />
      )}

      <div
        className={`
          lg:static lg:block lg:w-[250px] lg:shrink-0
          fixed top-0 left-0 h-full w-[280px] bg-white z-50 overflow-y-auto has-scrollbar
          transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          p-4 lg:p-0
        `}
      >
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <h2 className="text-fs-5 font-semibold text-eerie-black">Category</h2>
          <button onClick={onClose} className="text-xl text-eerie-black hover:text-salmon-pink">
            <ion-icon name="close-outline" />
          </button>
        </div>

        <div className="border border-cultured rounded-md-custom mb-6 overflow-hidden">
          <div className="bg-cultured px-4 py-3 hidden lg:block">
            <h2 className="text-fs-6 font-semibold text-eerie-black">Category</h2>
          </div>

          <ul>
            {sidebarCategories.map((cat) => (
              <li key={cat.id} className="border-b border-cultured last:border-b-0">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-cultured transition-colors"
                  onClick={() => toggleAccordion(cat.id)}
                >
                  <div className="flex items-center gap-2">
                    <img src={cat.icon} alt={cat.title} width={20} height={20} />
                    <span className="text-fs-8 font-medium text-eerie-black">{cat.title}</span>
                  </div>
                  <ion-icon
                    name={openAccordion === cat.id ? 'remove-outline' : 'add-outline'}
                    class="text-eerie-black text-sm"
                  />
                </button>
                <ul className={`accordion-content bg-cultured/50 ${openAccordion === cat.id ? 'open' : ''}`}>
                  {cat.subcategories.map((sub) => (
                    <li key={sub.name}>
                      <a
                        href="#"
                        className="flex items-center justify-between px-6 py-2 hover:text-salmon-pink transition-colors"
                      >
                        <span className="text-fs-9 text-davys-gray">{sub.name}</span>
                        <span className="text-fs-10 text-sonic-silver">{sub.stock}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <ProductShowcasePanel />
      </div>
    </>
  )
}
