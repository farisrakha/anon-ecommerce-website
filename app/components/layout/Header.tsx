'use client'

import { useState } from 'react'
import HeaderTop from './HeaderTop'
import HeaderMain from './HeaderMain'
import DesktopNav from './DesktopNav'
import MobileBottomNav from './MobileBottomNav'
import MobileMenuDrawer from './MobileMenuDrawer'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <HeaderTop />
        <HeaderMain />
        <DesktopNav />
      </header>

      <MobileBottomNav onMenuOpen={() => setIsMobileMenuOpen(true)} />
      <MobileMenuDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
