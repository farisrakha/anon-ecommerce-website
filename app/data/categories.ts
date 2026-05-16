import type { Category, SidebarCategory } from '../types'

export const categories: Category[] = [
  { id: 'dress', title: 'Dress & frock', icon: '/images/icons/dress.svg', count: 53 },
  { id: 'winter', title: 'Winter wear', icon: '/images/icons/coat.svg', count: 58 },
  { id: 'glasses', title: 'Glasses & lens', icon: '/images/icons/glasses.svg', count: 68 },
  { id: 'shorts', title: 'Shorts & jeans', icon: '/images/icons/shorts.svg', count: 84 },
  { id: 'tshirts', title: 'T-shirts', icon: '/images/icons/tee.svg', count: 35 },
  { id: 'jacket', title: 'Jacket', icon: '/images/icons/jacket.svg', count: 16 },
  { id: 'watch', title: 'Watch', icon: '/images/icons/watch.svg', count: 27 },
  { id: 'hat', title: 'Hat & caps', icon: '/images/icons/hat.svg', count: 39 },
]

export const sidebarCategories: SidebarCategory[] = [
  {
    id: 'clothes',
    title: 'Clothes',
    icon: '/images/icons/dress.svg',
    subcategories: [
      { name: 'Shirt', stock: '300' },
      { name: 'Shorts & Jeans', stock: '60' },
      { name: 'Jacket', stock: '50' },
      { name: 'Dress & Frock', stock: '87' },
    ],
  },
  {
    id: 'footwear',
    title: 'Footwear',
    icon: '/images/icons/shoes.svg',
    subcategories: [
      { name: 'Sports', stock: '45' },
      { name: 'Formal', stock: '75' },
      { name: 'Casual', stock: '35' },
      { name: 'Safety Shoes', stock: '26' },
    ],
  },
  {
    id: 'jewelry',
    title: 'Jewelry',
    icon: '/images/icons/jewelry.svg',
    subcategories: [
      { name: 'Earrings', stock: '46' },
      { name: 'Couple Rings', stock: '73' },
      { name: 'Necklace', stock: '61' },
    ],
  },
  {
    id: 'perfume',
    title: 'Perfume',
    icon: '/images/icons/perfume.svg',
    subcategories: [
      { name: 'Clothes Perfume', stock: '12 pcs' },
      { name: 'Deodorant', stock: '60 pcs' },
      { name: 'Jacket', stock: '50 pcs' },
      { name: 'Dress & Frock', stock: '87 pcs' },
    ],
  },
  {
    id: 'cosmetics',
    title: 'Cosmetics',
    icon: '/images/icons/cosmetics.svg',
    subcategories: [
      { name: 'Shampoo', stock: '68' },
      { name: 'Sunscreen', stock: '46' },
      { name: 'Body Wash', stock: '79' },
      { name: 'Makeup Kit', stock: '23' },
    ],
  },
  {
    id: 'glasses-cat',
    title: 'Glasses',
    icon: '/images/icons/glasses.svg',
    subcategories: [
      { name: 'Sunglasses', stock: '50' },
      { name: 'Lenses', stock: '48' },
    ],
  },
  {
    id: 'bags',
    title: 'Bags',
    icon: '/images/icons/bag.svg',
    subcategories: [
      { name: 'Shopping Bag', stock: '62' },
      { name: 'Gym Backpack', stock: '35' },
      { name: 'Purse', stock: '80' },
      { name: 'Wallet', stock: '75' },
    ],
  },
]
