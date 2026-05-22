// Suppliers
export const suppliers = [
  {
    id: 'sup-001',
    name: 'Maison Lemaire',
    location: { country: 'France', region: 'Paris' },
    rating: 4.8,
    leadTime: '2-4 weeks',
    moqValue: 500,
    reorderFrequency: 'seasonal',
    materials: ['100% Linen', 'Cotton Blend'],
    marginRange: { min: 52, max: 68 },
  },
  {
    id: 'sup-002',
    name: 'Studio Koto',
    location: { country: 'Japan', region: 'Tokyo' },
    rating: 4.9,
    leadTime: 'In stock',
    moqValue: 300,
    reorderFrequency: 'monthly',
    materials: ['Japanese Denim', 'Wool Blend'],
    marginRange: { min: 55, max: 72 },
  },
  {
    id: 'sup-003',
    name: 'Atelier Cano',
    location: { country: 'Spain', region: 'Barcelona' },
    rating: 4.6,
    leadTime: '4-8 weeks',
    moqValue: 800,
    reorderFrequency: 'seasonal',
    materials: ['Merino Wool', 'Cashmere Blend'],
    marginRange: { min: 60, max: 75 },
  },
  {
    id: 'sup-004',
    name: 'Norr Studio',
    location: { country: 'Denmark', region: 'Copenhagen' },
    rating: 4.7,
    leadTime: '2-4 weeks',
    moqValue: 400,
    reorderFrequency: 'seasonal',
    materials: ['Organic Cotton', 'Recycled Poly'],
    marginRange: { min: 48, max: 65 },
  },
  {
    id: 'sup-005',
    name: 'Forma Milano',
    location: { country: 'Italy', region: 'Milan' },
    rating: 4.9,
    leadTime: '4-8 weeks',
    moqValue: 1000,
    reorderFrequency: 'seasonal',
    materials: ['Italian Silk', 'Virgin Wool'],
    marginRange: { min: 65, max: 80 },
  },
]

// Collections
export const collections = [
  {
    id: 'col-spring',
    season: 'SPRING',
    title: 'Spring Bloom',
    tagline: 'Light layers, fresh cottons, flowing silhouettes',
    supplierId: 'sup-001',
    heroImage: '/images/spring/shirt.jpg',
    itemCount: 3,
    moqUnits: 6,
    moqValue: 500,
    leadTime: '2-4 weeks',
    productIds: ['prd-001', 'prd-002', 'prd-003'],
  },
  {
    id: 'col-summer',
    season: 'SUMMER',
    title: 'Summer Essential',
    tagline: 'Breathable linens, minimal designs, maximum comfort',
    supplierId: 'sup-001',
    heroImage: '/images/summer/shirt.jpg',
    itemCount: 3,
    moqUnits: 6,
    moqValue: 500,
    leadTime: '2-4 weeks',
    productIds: ['prd-010', 'prd-011', 'prd-012'],
  },
  {
    id: 'col-autumn',
    season: 'AUTUMN',
    title: 'Autumn Depth',
    tagline: 'Layered knits, structured pieces, earthy tones',
    supplierId: 'sup-003',
    heroImage: '/images/autumn/coat.jpg',
    itemCount: 3,
    moqUnits: 6,
    moqValue: 800,
    leadTime: '4-8 weeks',
    productIds: ['prd-004', 'prd-005', 'prd-006'],
  },
  {
    id: 'col-winter',
    season: 'WINTER',
    title: 'Winter Luxe',
    tagline: 'Sumptuous silks, premium wools, investment pieces',
    supplierId: 'sup-005',
    heroImage: '/images/winter/blouse.jpg',
    itemCount: 3,
    moqUnits: 6,
    moqValue: 1000,
    leadTime: '4-8 weeks',
    productIds: ['prd-007', 'prd-008', 'prd-009'],
  },
]

// Products with MOQ tiers
export const products = [
  {
    id: 'prd-001',
    name: 'Relaxed Linen Shirt',
    collectionId: 'col-spring',
    supplierId: 'sup-001',
    category: 'Tops',
    material: '100% Linen',
    images: ['/images/spring/shirt.jpg'],
    tiers: [
      { minQty: 6,  unitPrice: 28.00 },
      { minQty: 12, unitPrice: 24.00 },
      { minQty: 24, unitPrice: 20.00 },
    ],
    suggestedRetail: 89.00,
    leadTime: '2-4 weeks',
  },
  {
    id: 'prd-002',
    name: 'Wide Leg Linen Trouser',
    collectionId: 'col-spring',
    supplierId: 'sup-001',
    category: 'Bottoms',
    material: '100% Linen',
    images: ['/images/spring/trousers.jpg'],
    tiers: [
      { minQty: 6,  unitPrice: 32.00 },
      { minQty: 12, unitPrice: 27.00 },
      { minQty: 24, unitPrice: 22.00 },
    ],
    suggestedRetail: 110.00,
    leadTime: '2-4 weeks',
  },
  {
    id: 'prd-003',
    name: 'Linen Midi Dress',
    collectionId: 'col-spring',
    supplierId: 'sup-001',
    category: 'Dresses',
    material: 'Cotton Blend',
    images: ['/images/spring/dress.jpg'],
    tiers: [
      { minQty: 6,  unitPrice: 38.00 },
      { minQty: 12, unitPrice: 33.00 },
      { minQty: 24, unitPrice: 28.00 },
    ],
    suggestedRetail: 129.00,
    leadTime: '2-4 weeks',
  },
  {
    id: 'prd-004',
    name: 'Merino Turtleneck',
    collectionId: 'col-autumn',
    supplierId: 'sup-003',
    category: 'Tops',
    material: 'Merino Wool',
    images: ['/images/autumn/turtleneck.jpg'],
    tiers: [
      { minQty: 6,  unitPrice: 55.00 },
      { minQty: 12, unitPrice: 48.00 },
      { minQty: 24, unitPrice: 40.00 },
    ],
    suggestedRetail: 180.00,
    leadTime: '4-8 weeks',
  },
  {
    id: 'prd-005',
    name: 'Cashmere Blend Coat',
    collectionId: 'col-autumn',
    supplierId: 'sup-003',
    category: 'Outerwear',
    material: 'Cashmere Blend',
    images: ['/images/autumn/coat.jpg'],
    tiers: [
      { minQty: 6,  unitPrice: 120.00 },
      { minQty: 12, unitPrice: 105.00 },
      { minQty: 24, unitPrice: 90.00 },
    ],
    suggestedRetail: 420.00,
    leadTime: '4-8 weeks',
  },
  {
    id: 'prd-006',
    name: 'Wool Pleated Skirt',
    collectionId: 'col-autumn',
    supplierId: 'sup-003',
    category: 'Bottoms',
    material: 'Merino Wool',
    images: ['/images/autumn/skirt.jpg'],
    tiers: [
      { minQty: 6,  unitPrice: 48.00 },
      { minQty: 12, unitPrice: 42.00 },
      { minQty: 24, unitPrice: 35.00 },
    ],
    suggestedRetail: 160.00,
    leadTime: '4-8 weeks',
  },
  {
    id: 'prd-007',
    name: 'Silk Slip Dress',
    collectionId: 'col-winter',
    supplierId: 'sup-005',
    category: 'Dresses',
    material: 'Italian Silk',
    images: ['/images/winter/slip-dress.jpg'],
    tiers: [
      { minQty: 6,  unitPrice: 95.00 },
      { minQty: 12, unitPrice: 82.00 },
      { minQty: 24, unitPrice: 70.00 },
    ],
    suggestedRetail: 320.00,
    leadTime: '4-8 weeks',
  },
  {
    id: 'prd-008',
    name: 'Virgin Wool Blazer',
    collectionId: 'col-winter',
    supplierId: 'sup-005',
    category: 'Outerwear',
    material: 'Virgin Wool',
    images: ['/images/winter/blazer.jpg'],
    tiers: [
      { minQty: 6,  unitPrice: 140.00 },
      { minQty: 12, unitPrice: 122.00 },
      { minQty: 24, unitPrice: 105.00 },
    ],
    suggestedRetail: 490.00,
    leadTime: '4-8 weeks',
  },
  {
    id: 'prd-009',
    name: 'Silk Wrap Blouse',
    collectionId: 'col-winter',
    supplierId: 'sup-005',
    category: 'Tops',
    material: 'Italian Silk',
    images: ['/images/winter/blouse.jpg'],
    tiers: [
      { minQty: 6,  unitPrice: 72.00 },
      { minQty: 12, unitPrice: 62.00 },
      { minQty: 24, unitPrice: 52.00 },
    ],
    suggestedRetail: 240.00,
    leadTime: '4-8 weeks',
  },
  {
    id: 'prd-010',
    name: 'Breathable Cotton Tee',
    collectionId: 'col-summer',
    supplierId: 'sup-001',
    category: 'Tops',
    material: 'Organic Cotton',
    images: ['/images/summer/tee.jpg'],
    tiers: [
      { minQty: 6,  unitPrice: 18.00 },
      { minQty: 12, unitPrice: 15.00 },
      { minQty: 24, unitPrice: 12.00 },
    ],
    suggestedRetail: 55.00,
    leadTime: '2-4 weeks',
  },
  {
    id: 'prd-011',
    name: 'Linen Shorts',
    collectionId: 'col-summer',
    supplierId: 'sup-001',
    category: 'Bottoms',
    material: '100% Linen',
    images: ['/images/summer/shorts.jpg'],
    tiers: [
      { minQty: 6,  unitPrice: 22.00 },
      { minQty: 12, unitPrice: 18.00 },
      { minQty: 24, unitPrice: 15.00 },
    ],
    suggestedRetail: 75.00,
    leadTime: '2-4 weeks',
  },
  {
    id: 'prd-012',
    name: 'Lightweight Linen Shirt',
    collectionId: 'col-summer',
    supplierId: 'sup-001',
    category: 'Tops',
    material: '100% Linen',
    images: ['/images/summer/shirt.jpg'],
    tiers: [
      { minQty: 6,  unitPrice: 26.00 },
      { minQty: 12, unitPrice: 22.00 },
      { minQty: 24, unitPrice: 18.00 },
    ],
    suggestedRetail: 85.00,
    leadTime: '2-4 weeks',
  },
]

// Invoices
export const invoices = [
  {
    id: 'INV-2025-001',
    supplierId: 'sup-001',
    supplierName: 'Maison Lemaire',
    date: '2025-01-15',
    amount: 1840.00,
    dueDate: '2025-02-14',
    status: 'paid',
  },
  {
    id: 'INV-2025-002',
    supplierId: 'sup-003',
    supplierName: 'Atelier Cano',
    date: '2025-01-28',
    amount: 3200.00,
    dueDate: '2025-02-27',
    status: 'due',
  },
  {
    id: 'INV-2025-003',
    supplierId: 'sup-005',
    supplierName: 'Forma Milano',
    date: '2024-12-10',
    amount: 5600.00,
    dueDate: '2025-01-09',
    status: 'overdue',
  },
  {
    id: 'INV-2025-004',
    supplierId: 'sup-002',
    supplierName: 'Studio Koto',
    date: '2025-02-01',
    amount: 980.00,
    dueDate: '2025-03-03',
    status: 'due',
  },
  {
    id: 'INV-2025-005',
    supplierId: 'sup-004',
    supplierName: 'Norr Studio',
    date: '2024-11-20',
    amount: 2100.00,
    dueDate: '2024-12-20',
    status: 'paid',
  },
]

// Lookbook items — editorial images linked 1:1 to products
export const lookbookItems = [
  { id: 'lb-01', image: '/images/lookbook/lb-01.jpg', productId: 'prd-001' },
  { id: 'lb-02', image: '/images/lookbook/lb-02.jpg', productId: 'prd-002' },
  { id: 'lb-03', image: '/images/lookbook/lb-03.jpg', productId: 'prd-003' },
  { id: 'lb-04', image: '/images/lookbook/lb-04.jpg', productId: 'prd-004' },
  { id: 'lb-05', image: '/images/lookbook/lb-05.jpg', productId: 'prd-005' },
  { id: 'lb-06', image: '/images/lookbook/lb-06.jpg', productId: 'prd-006' },
  { id: 'lb-07', image: '/images/lookbook/lb-07.jpg', productId: 'prd-007' },
  { id: 'lb-08', image: '/images/lookbook/lb-08.jpg', productId: 'prd-008' },
  { id: 'lb-09', image: '/images/lookbook/lb-09.jpg', productId: 'prd-009' },
  { id: 'lb-10', image: '/images/lookbook/lb-10.jpg', productId: 'prd-010' },
  { id: 'lb-11', image: '/images/lookbook/lb-11.jpg', productId: 'prd-011' },
  { id: 'lb-12', image: '/images/lookbook/lb-12.jpg', productId: 'prd-012' },
]

// Blog posts
export const blogPosts = [
  {
    id: 'blog-001',
    title: 'How to Build a Cohesive Wholesale Order',
    description: 'Master the art of curating collections that work together for your store aesthetic.',
    image: '/images/blog/blog-1.jpg',
    slug: 'build-cohesive-wholesale-order',
    readTime: '5 min read',
    category: 'Buying Tips',
  },
  {
    id: 'blog-002',
    title: 'Understanding Wholesale Margins and Pricing',
    description: "A buyer's guide to calculating margins, negotiating terms, and maximising profitability.",
    image: '/images/blog/blog-2.jpg',
    slug: 'wholesale-margins-pricing-guide',
    readTime: '7 min read',
    category: 'Education',
  },
  {
    id: 'blog-003',
    title: 'Seasonal Collection Planning for Retailers',
    description: 'Learn how to plan ahead for SS25, FW25, and Pre-Fall to stock your boutique strategically.',
    image: '/images/blog/blog-3.jpg',
    slug: 'seasonal-collection-planning',
    readTime: '6 min read',
    category: 'Strategy',
  },
  {
    id: 'blog-004',
    title: 'Net-30 vs Net-60: Which Terms Work for You',
    description: 'Understand payment terms, cash flow implications, and how to choose the right option.',
    image: '/images/blog/blog-4.jpg',
    slug: 'net-30-vs-net-60-payment-terms',
    readTime: '4 min read',
    category: 'Buying Tips',
  },
  {
    id: 'blog-005',
    title: 'Top 5 Suppliers to Watch in 2025',
    description: 'Discover emerging luxury wholesalers offering innovative designs and transparent pricing.',
    image: '/images/blog/blog-5.jpg',
    slug: 'top-suppliers-2025',
    readTime: '8 min read',
    category: 'Trends',
  },
  {
    id: 'blog-006',
    title: 'MOQ Strategies: Small Orders, Big Impact',
    description: 'How to negotiate minimum order quantities and work smarter with wholesale minimums.',
    image: '/images/blog/blog-6.jpg',
    slug: 'moq-negotiation-strategies',
    readTime: '5 min read',
    category: 'Buying Tips',
  },
  {
    id: 'blog-007',
    title: "Styling Trends: What's Selling This Season",
    description: 'Curated insights on fabric, silhouettes, and colours trending in boutiques right now.',
    image: '/images/blog/blog-7.jpg',
    slug: 'styling-trends-2025',
    readTime: '6 min read',
    category: 'Trends',
  },
  {
    id: 'blog-008',
    title: 'Building Relationships with Premium Suppliers',
    description: 'How repeat orders, loyalty, and communication unlock better deals and exclusive access.',
    image: '/images/blog/blog-8.jpg',
    slug: 'supplier-relationships',
    readTime: '7 min read',
    category: 'Education',
  },
  {
    id: 'blog-009',
    title: 'How to Use Lookbooks for Inspiration',
    description: "Master NOCTE's mood boards and styled collections to drive informed purchasing decisions.",
    image: '/images/blog/blog-9.jpg',
    slug: 'using-lookbooks-inspiration',
    readTime: '4 min read',
    category: 'Strategy',
  },
]

export type BlogPost = typeof blogPosts[number]

// Featured products — browseable by garment category
export const featuredCategories = [
  { id: 'shirt',  name: 'Shirts',   description: 'Premium wovens and tailored tops' },
  { id: 'hoodie', name: 'Hoodies',  description: 'Fleece and cotton separates' },
  { id: 'hat',    name: 'Hats',     description: 'Headwear and accessories' },
  { id: 'jeans',  name: 'Jeans',    description: 'Denim in every wash' },
] as const

export type FeaturedCategoryId = typeof featuredCategories[number]['id']

export const featuredProducts: Record<FeaturedCategoryId, { id: string; name: string; origin: string; image: string }[]> = {
  shirt: [
    { id: 'feat-shirt-001', name: 'Unisex Logo Tee',        origin: 'Paris, France',         image: '/images/featured/shirt/shirt-1.jpg' },
    { id: 'feat-shirt-002', name: 'Relaxed Oxford Shirt',   origin: 'Milan, Italy',          image: '/images/featured/shirt/shirt-2.jpg' },
    { id: 'feat-shirt-003', name: 'Linen Mockup Shirt',     origin: 'Copenhagen, Denmark',   image: '/images/featured/shirt/shirt-3.jpg' },
    { id: 'feat-shirt-004', name: 'Cotton Oversized Tee',   origin: 'Barcelona, Spain',      image: '/images/featured/shirt/shirt-4.jpg' },
  ],
  hoodie: [
    { id: 'feat-hoodie-001', name: 'Classic Pullover',      origin: 'Tokyo, Japan',          image: '/images/featured/hoodie/hoodie-1.jpg' },
    { id: 'feat-hoodie-002', name: 'Graphic Back Hoodie',   origin: 'Barcelona, Spain',      image: '/images/featured/hoodie/hoodie-2.jpg' },
    { id: 'feat-hoodie-003', name: 'Midweight Zip-Up',      origin: 'Paris, France',         image: '/images/featured/hoodie/hoodie-3.jpg' },
    { id: 'feat-hoodie-004', name: 'Oversized Hood',        origin: 'Copenhagen, Denmark',   image: '/images/featured/hoodie/hoodie-4.jpg' },
  ],
  hat: [
    { id: 'feat-hat-001', name: 'Patchwork Trucker Cap',    origin: 'Milan, Italy',          image: '/images/featured/hat/hat-1.jpg' },
    { id: 'feat-hat-002', name: 'Structured Baseball Cap',  origin: 'Paris, France',         image: '/images/featured/hat/hat-2.jpg' },
    { id: 'feat-hat-003', name: 'Washed 6-Panel',           origin: 'Tokyo, Japan',          image: '/images/featured/hat/hat-3.jpg' },
    { id: 'feat-hat-004', name: 'Wide Brim Felt Hat',       origin: 'Barcelona, Spain',      image: '/images/featured/hat/hat-4.jpg' },
  ],
  jeans: [
    { id: 'feat-jeans-001', name: 'Original 501 Dark Wash', origin: 'Copenhagen, Denmark',  image: '/images/featured/jeans/jeans-1.jpg' },
    { id: 'feat-jeans-002', name: 'Light Wash Straight',    origin: 'Milan, Italy',          image: '/images/featured/jeans/jeans-2.jpg' },
    { id: 'feat-jeans-003', name: 'Raw Denim Selvedge',     origin: 'Tokyo, Japan',          image: '/images/featured/jeans/jeans-3.jpg' },
    { id: 'feat-jeans-004', name: 'High Waist Wide Leg',    origin: 'Paris, France',         image: '/images/featured/jeans/jeans-4.jpg' },
  ],
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}

// Derived types from the data arrays
export type Supplier = typeof suppliers[number]
export type Collection = typeof collections[number]
export type Product = typeof products[number]
export type Invoice = typeof invoices[number]
export type Tier = Product['tiers'][number]
export type LookbookItem = typeof lookbookItems[number]

// Utility functions
export function getActiveTier(product: Product, qty: number): Tier {
  return [...product.tiers]
    .reverse()
    .find(tier => qty >= tier.minQty) ?? product.tiers[0]
}

export function calcMargin(cost: number, retail: number): number {
  return Math.round(((retail - cost) / retail) * 100)
}

export function getSupplierById(id: string): Supplier | undefined {
  return suppliers.find(s => s.id === id)
}

export function getCollectionById(id: string): Collection | undefined {
  return collections.find(c => c.id === id)
}

export function getProductsByCollection(collectionId: string): Product[] {
  return products.filter(p => p.collectionId === collectionId)
}

export function getProductsBySupplier(supplierId: string): Product[] {
  return products.filter(p => p.supplierId === supplierId)
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}
