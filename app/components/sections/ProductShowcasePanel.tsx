import { bestSellers } from '../../data/products'
import StarRating from '../ui/StarRating'
import PriceBox from '../ui/PriceBox'

export default function ProductShowcasePanel() {
  return (
    <div className="mb-6">
      <h3 className="text-fs-7 font-semibold text-eerie-black uppercase tracking-wide mb-4 pb-2 border-b border-cultured">
        Best Sellers
      </h3>
      <div className="flex flex-col gap-4">
        {bestSellers.map((product) => (
          <div key={product.id} className="flex items-center gap-3">
            <a href="#" className="shrink-0 w-[75px] h-[75px] rounded-sm-custom overflow-hidden border border-cultured">
              <img src={product.image} alt={product.title} width={75} height={75} className="w-full h-full object-cover" />
            </a>
            <div className="min-w-0">
              <a href="#">
                <h4 className="text-fs-8 text-eerie-black font-medium mb-1 line-clamp-2 hover:text-salmon-pink transition-colors">
                  {product.title}
                </h4>
              </a>
              <StarRating rating={product.rating} className="mb-1" />
              <PriceBox price={product.price} originalPrice={product.originalPrice} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
