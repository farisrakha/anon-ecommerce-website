interface StarRatingProps {
  rating: number
  className?: string
}

export default function StarRating({ rating, className = '' }: StarRatingProps) {
  const stars = []
  const full = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5

  for (let i = 0; i < 5; i++) {
    if (i < full) {
      stars.push(<ion-icon key={i} name="star" style={{ color: 'var(--nocte-gray-mid)' }} />)
    } else if (i === full && hasHalf) {
      stars.push(<ion-icon key={i} name="star-half-outline" style={{ color: 'var(--nocte-gray-mid)' }} />)
    } else {
      stars.push(<ion-icon key={i} name="star-outline" style={{ color: 'var(--nocte-surface-3)' }} />)
    }
  }

  return (
    <div className={`flex items-center gap-px text-xs ${className}`}>
      {stars}
    </div>
  )
}
