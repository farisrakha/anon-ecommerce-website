interface PriceBoxProps {
  price: number
  originalPrice: number
  variant?: 'default' | 'minimal' | 'featured'
}

export default function PriceBox({ price, originalPrice, variant = 'default' }: PriceBoxProps) {
  const priceStyle = { color: 'var(--nocte-black)', fontFamily: 'var(--nocte-sans)', fontWeight: 500 }
  const strikeStyle = { color: 'var(--nocte-gray-mid)', fontFamily: 'var(--nocte-sans)' }

  if (variant === 'featured') {
    return (
      <div className="flex items-center gap-3">
        <p className="text-fs-4" style={priceStyle}>${price.toFixed(2)}</p>
        <del className="text-fs-7" style={strikeStyle}>${originalPrice.toFixed(2)}</del>
      </div>
    )
  }

  if (variant === 'minimal') {
    return (
      <div className="flex items-center gap-2">
        <p className="text-fs-7" style={priceStyle}>${price.toFixed(2)}</p>
        <del className="text-fs-9" style={strikeStyle}>${originalPrice.toFixed(2)}</del>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <del className="text-fs-8" style={strikeStyle}>${originalPrice.toFixed(2)}</del>
      <p className="text-fs-7" style={priceStyle}>${price.toFixed(2)}</p>
    </div>
  )
}
