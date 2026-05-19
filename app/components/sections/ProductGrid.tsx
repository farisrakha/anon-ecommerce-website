import { newProducts } from '../../data/products'
import StarRating from '../ui/StarRating'
import PriceBox from '../ui/PriceBox'

export default function ProductGrid() {
  return (
    <div className="mb-6">
      <h2
        className="text-fs-4 mb-4 pb-2"
        style={{ color: 'var(--nocte-white)', fontFamily: 'var(--nocte-serif)', fontWeight: 400, borderBottom: '1px solid var(--nocte-border)' }}
      >
        New Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
        {newProducts.map((product) => (
          <div key={product.id} className="nocte-card overflow-hidden group">
            <div className="showcase-banner aspect-square">
              <img
                src={product.image}
                alt={product.title}
                className="product-img default w-full h-full object-cover"
              />
              <img
                src={product.hoverImage}
                alt={product.title}
                className="product-img hover w-full h-full object-cover"
              />

              {product.badge && (
                <p className="showcase-badge">
                  {product.badge.text}
                </p>
              )}

              <div className="showcase-actions">
                <button className="showcase-action-btn" aria-label="Add to wishlist">
                  <ion-icon name="heart-outline" />
                </button>
                <button className="showcase-action-btn" aria-label="Quick view">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="showcase-action-btn" aria-label="Compare">
                  <ion-icon name="repeat-outline" />
                </button>
                <button className="showcase-action-btn" aria-label="Add to cart">
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>

            <div className="p-3">
              <a
                href="#"
                className="text-fs-9 capitalize block mb-1 nocte-link-mid"
                style={{ fontFamily: 'var(--nocte-sans)' }}
              >
                {product.category}
              </a>
              <a href="#">
                <h3
                  className="text-fs-8 mb-2 line-clamp-2 nocte-link-dim"
                  style={{ fontFamily: 'var(--nocte-sans)', fontWeight: 400 }}
                >
                  {product.title}
                </h3>
              </a>
              <StarRating rating={product.rating} className="mb-2" />
              <PriceBox price={product.price} originalPrice={product.originalPrice} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
