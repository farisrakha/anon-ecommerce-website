export default function TestimonialsSection() {
  return (
    <div className="flex-1">
      <h2
        className="text-fs-4 mb-6 capitalize"
        style={{ color: 'var(--nocte-black)', fontFamily: 'var(--nocte-serif)', fontWeight: 400 }}
      >
        Testimonial
      </h2>

      <div className="p-6 text-center" style={{ border: '1px solid var(--nocte-border)', backgroundColor: 'var(--nocte-surface-1)' }}>
        <img
          src="/images/testimonial-1.jpg"
          alt="Alan Doe"
          width={80}
          height={80}
          className="w-20 h-20 object-cover mx-auto mb-3"
          style={{ border: '2px solid var(--nocte-border)' }}
        />
        <p className="text-fs-6 mb-1" style={{ color: 'var(--nocte-black)', fontFamily: 'var(--nocte-sans)' }}>Alan Doe</p>
        <p className="nocte-label mb-4">CEO &amp; Founder, Invision</p>
        <img
          src="/images/icons/quotes.svg"
          alt="quotation"
          width={26}
          className="mx-auto mb-3"
        />
        <p className="text-fs-8 leading-relaxed" style={{ color: 'var(--nocte-gray-mid)', fontFamily: 'var(--nocte-sans)' }}>
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.
        </p>
      </div>
    </div>
  )
}
