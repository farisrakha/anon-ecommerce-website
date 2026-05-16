interface PriceBoxProps {
  price: number
  originalPrice: number
  variant?: 'default' | 'minimal' | 'featured'
}

export default function PriceBox({ price, originalPrice, variant = 'default' }: PriceBoxProps) {
  if (variant === 'featured') {
    return (
      <div className="flex items-center gap-3">
        <p className="text-fs-4 font-semibold text-salmon-pink">${price.toFixed(2)}</p>
        <del className="text-fs-7 text-sonic-silver">${originalPrice.toFixed(2)}</del>
      </div>
    )
  }

  if (variant === 'minimal') {
    return (
      <div className="flex items-center gap-2">
        <p className="text-fs-7 font-semibold text-eerie-black">${price.toFixed(2)}</p>
        <del className="text-fs-9 text-sonic-silver">${originalPrice.toFixed(2)}</del>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <del className="text-fs-8 text-sonic-silver font-medium">${originalPrice.toFixed(2)}</del>
      <p className="text-fs-7 font-semibold text-salmon-pink">${price.toFixed(2)}</p>
    </div>
  )
}
