export default function TestimonialsSection() {
  return (
    <div className="flex-1">
      <h2 className="text-fs-4 font-semibold text-eerie-black mb-6 capitalize">Testimonial</h2>

      <div className="border border-cultured rounded-md-custom p-6 text-center">
        <img
          src="/images/testimonial-1.jpg"
          alt="Alan Doe"
          width={80}
          height={80}
          className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-4 border-cultured"
        />
        <p className="text-fs-6 font-semibold text-eerie-black mb-1">Alan Doe</p>
        <p className="text-fs-9 text-sonic-silver mb-4">CEO &amp; Founder Invision</p>
        <img
          src="/images/icons/quotes.svg"
          alt="quotation"
          width={26}
          className="mx-auto mb-3"
        />
        <p className="text-fs-8 text-sonic-silver leading-relaxed">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.
        </p>
      </div>
    </div>
  )
}
