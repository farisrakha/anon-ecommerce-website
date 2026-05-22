'use client'

interface RangeSliderProps {
  min: number
  max: number
  value: [number, number]
  onChange: (v: [number, number]) => void
  formatLabel: (v: number) => string
}

export default function RangeSlider({ min, max, value, onChange, formatLabel }: RangeSliderProps) {
  const [lo, hi] = value
  const pctLo = ((lo - min) / (max - min)) * 100
  const pctHi = ((hi - min) / (max - min)) * 100

  return (
    <div>
      <div className="flex justify-between mb-3">
        <span className="nocte-label" style={{ color: 'var(--nocte-black)' }}>{formatLabel(lo)}</span>
        <span className="nocte-label" style={{ color: 'var(--nocte-black)' }}>{formatLabel(hi)}</span>
      </div>
      <div style={{ position: 'relative', height: 20, userSelect: 'none' }}>
        {/* track background */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: 2,
          transform: 'translateY(-50%)',
          backgroundColor: 'var(--nocte-border)',
          borderRadius: 1,
        }} />
        {/* track fill */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: `${pctLo}%`,
          width: `${pctHi - pctLo}%`,
          height: 2,
          transform: 'translateY(-50%)',
          backgroundColor: 'var(--nocte-black)',
          borderRadius: 1,
        }} />
        {/* lower range input (transparent, drives lo value) */}
        <input
          type="range"
          min={min}
          max={max}
          value={lo}
          aria-label={`${formatLabel(lo)} minimum`}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={lo}
          onChange={e => onChange([Math.min(Number(e.target.value), hi), hi])}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'pointer',
            zIndex: lo >= hi ? 5 : 3,
            margin: 0,
            padding: 0,
          }}
        />
        {/* upper range input */}
        <input
          type="range"
          min={min}
          max={max}
          value={hi}
          aria-label={`${formatLabel(hi)} maximum`}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={hi}
          onChange={e => onChange([lo, Math.max(Number(e.target.value), lo)])}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'pointer',
            zIndex: lo >= hi ? 3 : 5,
            margin: 0,
            padding: 0,
          }}
        />
        {/* lo thumb marker */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: `${pctLo}%`,
            width: 12,
            height: 12,
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'var(--nocte-black)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
        {/* hi thumb marker */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: `${pctHi}%`,
            width: 12,
            height: 12,
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'var(--nocte-black)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  )
}
