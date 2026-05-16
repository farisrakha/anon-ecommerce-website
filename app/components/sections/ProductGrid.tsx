import { newProducts } from '../../data/products'
import StarRating from '../ui/StarRating'
import PriceBox from '../ui/PriceBox'

export default function ProductGrid() {
  return (
    <div className="mb-6">
      <h2 className="text-fs-4 font-semibold text-eerie-black mb-4 pb-2 border-b border-cultured">
        New Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
        {newProducts.map((product) => (
          <div key={product.id} className="border border-cultured rounded-md-custom overflow-hidden group">
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
                <p className={`showcase-badge ${product.badge.style === 'angle-black' ? 'angle-black' : product.badge.style === 'angle-pink' ? 'angle-pink' : ''}`}>
                  {product.badge.text}
                </p>
              )}

              <div className="showcase-actions">
                <button className="showcase-action-btn" title="Add to wishlist">
                  <ion-icon name="heart-outline" />
                </button>
                <button className="showcase-action-btn" title="Quick view">
                  <ion-icon name="eye-outline" />
                </button>
                <button className="showcase-action-btn" title="Compare">
                  <ion-icon name="repeat-outline" />
                </button>
                <button className="showcase-action-btn" title="Add to cart">
                  <ion-icon name="bag-add-outline" />
                </button>
              </div>
            </div>

            <div className="p-3">
              <a href="#" className="text-fs-9 text-sonic-silver hover:text-salmon-pink transition-colors capitalize block mb-1">
                {product.category}
              </a>
              <a href="#">
                <h3 className="text-fs-8 font-medium text-eerie-black mb-2 line-clamp-2 hover:text-salmon-pink transition-colors">
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
