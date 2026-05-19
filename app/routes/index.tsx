'use client'

import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import BannerCarousel from '../components/sections/BannerCarousel'
import CategorySection from '../components/sections/CategorySection'
import ProductSidebar from '../components/sections/ProductSidebar'
import ProductMinimal from '../components/sections/ProductMinimal'
import DealOfTheDay from '../components/sections/DealOfTheDay'
import ProductGrid from '../components/sections/ProductGrid'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import CtaBanner from '../components/sections/CtaBanner'
import ServicesSection from '../components/sections/ServicesSection'
import BlogSection from '../components/sections/BlogSection'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <main className="mb-20 lg:mb-0">
      <BannerCarousel />
      <CategorySection />

      <div className="py-8">
        <div className="max-w-[1350px] mx-auto px-4 flex flex-col lg:flex-row gap-6">
          <ProductSidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />

          <div className="flex-1 min-w-0">
            <ProductMinimal />
            <DealOfTheDay />
            <ProductGrid />
          </div>
        </div>
      </div>

      <div className="py-8" style={{ backgroundColor: 'var(--nocte-surface-1)' }}>
        <div className="max-w-[1350px] mx-auto px-4 flex flex-col lg:flex-row gap-6">
          <TestimonialsSection />
          <CtaBanner />
          <ServicesSection />
        </div>
      </div>

      <BlogSection />
    </main>
  )
}
