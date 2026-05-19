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
          fixed top-0 left-0 h-full w-[280px] z-50 overflow-y-auto has-scrollbar
          transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          p-4 lg:p-0
        `}
        style={{ backgroundColor: 'var(--nocte-surface-1)' }}
      >
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <h2 className="text-fs-5" style={{ color: 'var(--nocte-white)', fontFamily: 'var(--nocte-serif)', fontWeight: 400 }}>Category</h2>
          <button
            onClick={onClose}
            className="text-xl nocte-link-mid"
            aria-label="Close filters"
          >
            <ion-icon name="close-outline" />
          </button>
        </div>

        <div className="mb-6 overflow-hidden" style={{ border: '1px solid var(--nocte-border)' }}>
          <div className="px-4 py-3 hidden lg:block" style={{ borderBottom: '1px solid var(--nocte-border)', backgroundColor: 'var(--nocte-surface-2)' }}>
            <h2 className="nocte-label">Category</h2>
          </div>

          <ul>
            {sidebarCategories.map((cat) => (
              <li key={cat.id} style={{ borderBottom: '1px solid var(--nocte-border)' }} className="last:border-b-0">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 nocte-hover-bg-s2"
                  onClick={() => toggleAccordion(cat.id)}
                  aria-expanded={openAccordion === cat.id}
                >
                  <div className="flex items-center gap-2">
                    <img src={cat.icon} alt={cat.title} width={20} height={20} />
                    <span className="text-fs-8" style={{ color: 'var(--nocte-gray-light)', fontFamily: 'var(--nocte-sans)' }}>{cat.title}</span>
                  </div>
                  <ion-icon
                    name={openAccordion === cat.id ? 'remove-outline' : 'add-outline'}
                    style={{ color: 'var(--nocte-gray-mid)' }}
                    class="text-sm"
                  />
                </button>
                <ul className={`accordion-content ${openAccordion === cat.id ? 'open' : ''}`} style={{ backgroundColor: 'var(--nocte-surface-2)' }}>
                  {cat.subcategories.map((sub) => (
                    <li key={sub.name}>
                      <a
                        href="#"
                        className="flex items-center justify-between px-6 py-2 nocte-hover-bg-s3"
                      >
                        <span className="text-fs-9" style={{ color: 'var(--nocte-gray-mid)', fontFamily: 'var(--nocte-sans)' }}>{sub.name}</span>
                        <span className="text-fs-10" style={{ color: 'var(--nocte-gray-mid)', fontFamily: 'var(--nocte-sans)' }}>{sub.stock}</span>
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
