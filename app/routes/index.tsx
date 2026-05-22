import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '../components/sections/HeroSection'
import BannerCarousel from '../components/sections/BannerCarousel'
import FeaturedCollections from '../components/sections/FeaturedCollections'
import ProductCatalog from '../components/sections/ProductCatalog'
import { products } from '../data/nocte-mock'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      <HeroSection />
      <BannerCarousel />
      <FeaturedCollections />
      <ProductCatalog title="New Arrivals" items={products.slice(0, 4)} />
      <ProductCatalog title="Trending" items={products.slice(4, 9)} />
    </main>
  )
}
