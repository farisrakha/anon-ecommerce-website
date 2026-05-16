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

  return (
    <>
      {isOpen && (
        <div className="overlay" onClick={onClose} />
      )}

      <nav className={`mobile-navigation-menu has-scrollbar ${isOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-fs-4 font-semibold text-eerie-black">Menu</h2>
          <button onClick={onClose} className="text-xl text-eerie-black hover:text-salmon-pink">
            <ion-icon name="close-outline" />
          </button>
        </div>

        <ul className="mb-6">
          <li className="mb-1">
            <a href="#" className="block py-2 text-fs-7 font-semibold text-eerie-black hover:text-salmon-pink">Home</a>
          </li>

          {navItems.map(({ title, items }) => (
            <li key={title} className="border-b border-cultured">
              <button
                className="w-full flex items-center justify-between py-3"
                onClick={() => toggleAccordion(title)}
              >
                <span className="text-fs-7 font-semibold text-eerie-black">{title}</span>
                <ion-icon name={openAccordion === title ? 'remove-outline' : 'add-outline'} class="text-eerie-black" />
              </button>
              <ul className={`accordion-content pl-4 ${openAccordion === title ? 'open' : ''}`}>
                {items.map((item) => (
                  <li key={item} className="mb-1">
                    <a href="#" className="block py-1 text-fs-8 text-sonic-silver hover:text-salmon-pink">{item}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li className="mb-1">
            <a href="#" className="block py-2 text-fs-7 font-semibold text-eerie-black hover:text-salmon-pink">Blog</a>
          </li>

          <li className="mb-1">
            <a href="#" className="block py-2 text-fs-7 font-semibold text-eerie-black hover:text-salmon-pink">Hot Offers</a>
          </li>
        </ul>

        <div className="border-t border-cultured pt-4">
          <ul className="mb-4">
            {bottomItems.map(({ title, items }) => (
              <li key={title} className="border-b border-cultured">
                <button
                  className="w-full flex items-center justify-between py-3"
                  onClick={() => toggleAccordion(`bottom-${title}`)}
                >
                  <span className="text-fs-8 text-sonic-silver">{title}</span>
                  <ion-icon name="caret-back-outline" class={`text-sonic-silver transition-transform ${openAccordion === `bottom-${title}` ? 'rotate-90' : '-rotate-90'}`} />
                </button>
                <ul className={`accordion-content pl-4 ${openAccordion === `bottom-${title}` ? 'open' : ''}`}>
                  {items.map((item) => (
                    <li key={item} className="mb-1">
                      <a href="#" className="block py-1 text-fs-9 text-sonic-silver hover:text-salmon-pink">{item}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <ul className="flex gap-4">
            {['logo-facebook', 'logo-twitter', 'logo-instagram', 'logo-linkedin'].map((icon) => (
              <li key={icon}>
                <a href="#" className="text-lg text-sonic-silver hover:text-salmon-pink transition-colors flex">
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
