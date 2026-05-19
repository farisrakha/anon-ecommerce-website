'use client'

import { useState } from 'react'

interface MobileMenuDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { title: "Men's", items: ['Shirt', 'Shorts & Jeans', 'Safety Shoes', 'Wallet'] },
  { title: "Women's", items: ['Dress & Frock', 'Earrings', 'Necklace', 'Makeup Kit'] },
  { title: 'Jewelry', items: ['Earrings', 'Couple Rings', 'Necklace', 'Bracelets'] },
  { title: 'Perfume', items: ['Clothes Perfume', 'Deodorant', 'Flower Fragrance', 'Air Freshener'] },
]

const bottomItems = [
  { title: 'Language', items: ['English', 'Español', 'Français'] },
  { title: 'Currency', items: ['USD $', 'EUR €'] },
]

export default function MobileMenuDrawer({ isOpen, onClose }: MobileMenuDrawerProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => prev === id ? null : id)
  }

  const dividerStyle = { borderColor: 'var(--nocte-border)' }

  return (
    <>
      {isOpen && (
        <div className="overlay" onClick={onClose} />
      )}

      <nav className={`mobile-navigation-menu has-scrollbar ${isOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-fs-4" style={{ color: 'var(--nocte-white)', fontFamily: 'var(--nocte-serif)', fontWeight: 400 }}>Menu</h2>
          <button
            onClick={onClose}
            className="text-xl nocte-link-mid"
            aria-label="Close menu"
          >
            <ion-icon name="close-outline" />
          </button>
        </div>

        <ul className="mb-6">
          <li className="mb-1">
            <a href="#" className="block py-2 text-fs-7 nocte-link-light" style={{ fontFamily: 'var(--nocte-sans)' }}>Home</a>
          </li>

          {navItems.map(({ title, items }) => (
            <li key={title} className="border-b" style={dividerStyle}>
              <button
                className="w-full flex items-center justify-between py-3"
                onClick={() => toggleAccordion(title)}
                aria-expanded={openAccordion === title}
              >
                <span className="text-fs-7" style={{ color: 'var(--nocte-gray-light)', fontFamily: 'var(--nocte-sans)' }}>{title}</span>
                <ion-icon name={openAccordion === title ? 'remove-outline' : 'add-outline'} style={{ color: 'var(--nocte-gray-mid)' }} />
              </button>
              <ul className={`accordion-content pl-4 ${openAccordion === title ? 'open' : ''}`}>
                {items.map((item) => (
                  <li key={item} className="mb-1">
                    <a href="#" className="block py-1 text-fs-8 nocte-link-mid" style={{ fontFamily: 'var(--nocte-sans)' }}>{item}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li className="mb-1 mt-2">
            <a href="#" className="block py-2 text-fs-7 nocte-link-light" style={{ fontFamily: 'var(--nocte-sans)' }}>Blog</a>
          </li>

          <li className="mb-1">
            <a href="#" className="block py-2 text-fs-7 nocte-link-light" style={{ fontFamily: 'var(--nocte-sans)' }}>New Arrivals</a>
          </li>
        </ul>

        <div className="border-t pt-4" style={dividerStyle}>
          <ul className="mb-4">
            {bottomItems.map(({ title, items }) => (
              <li key={title} className="border-b" style={dividerStyle}>
                <button
                  className="w-full flex items-center justify-between py-3"
                  onClick={() => toggleAccordion(`bottom-${title}`)}
                  aria-expanded={openAccordion === `bottom-${title}`}
                >
                  <span className="nocte-label">{title}</span>
                  <ion-icon
                    name="caret-back-outline"
                    style={{ color: 'var(--nocte-gray-mid)' }}
                    class={`transition-transform ${openAccordion === `bottom-${title}` ? 'rotate-90' : '-rotate-90'}`}
                  />
                </button>
                <ul className={`accordion-content pl-4 ${openAccordion === `bottom-${title}` ? 'open' : ''}`}>
                  {items.map((item) => (
                    <li key={item} className="mb-1">
                      <a href="#" className="block py-1 text-fs-9 nocte-link-mid" style={{ fontFamily: 'var(--nocte-sans)' }}>{item}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <ul className="flex gap-4">
            {[
              { icon: 'logo-facebook', label: 'Facebook' },
              { icon: 'logo-twitter', label: 'Twitter' },
              { icon: 'logo-instagram', label: 'Instagram' },
              { icon: 'logo-linkedin', label: 'LinkedIn' },
            ].map(({ icon, label }) => (
              <li key={icon}>
                <a href="#" aria-label={label} className="text-lg flex nocte-link-mid">
                  <ion-icon name={icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
