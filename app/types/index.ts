export interface Product {
  id: string
  title: string
  image: string
  price: number
  originalPrice: number
  rating: number
  category: string
}

export interface GridProduct {
  id: string
  title: string
  image: string
  hoverImage: string
  price: number
  originalPrice: number
  rating: number
  category: string
  badge?: {
    text: string
    style: 'percent' | 'angle-black' | 'angle-pink'
  }
}

export interface FeaturedProduct {
  id: string
  title: string
  image: string
  description: string
  price: number
  originalPrice: number
  rating: number
  sold: number
  available: number
}

export interface Category {
  id: string
  title: string
  icon: string
  count: number
}

export interface SidebarSubcategory {
  name: string
  stock: string
}

export interface SidebarCategory {
  id: string
  title: string
  icon: string
  subcategories: SidebarSubcategory[]
}

export interface BlogPost {
  id: string
  image: string
  category: string
  title: string
  author: string
  dateIso: string
  dateDisplay: string
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        name?: string
        class?: string
      }
    }
  }
}
