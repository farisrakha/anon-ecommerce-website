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
      stars.push(<ion-icon key={i} name="star" class="text-sandy-brown" />)
    } else if (i === full && hasHalf) {
      stars.push(<ion-icon key={i} name="star-half-outline" class="text-sandy-brown" />)
    } else {
      stars.push(<ion-icon key={i} name="star-outline" class="text-sandy-brown" />)
    }
  }

  return (
    <div className={`flex items-center gap-px text-xs text-sandy-brown ${className}`}>
      {stars}
    </div>
  )
}
