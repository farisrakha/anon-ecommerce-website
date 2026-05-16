import { services } from '../../data/services'

export default function ServicesSection() {
  return (
    <div className="flex-1">
      <h2 className="text-fs-4 font-semibold text-eerie-black mb-6">Our Services</h2>

      <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
        {services.map((service) => (
          <a
            key={service.id}
            href="#"
            className="flex items-start gap-3 p-4 border border-cultured rounded-md-custom hover:border-salmon-pink hover:shadow-sm transition-all"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-salmon-pink/10 rounded-full shrink-0">
              <ion-icon name={service.icon} class="text-salmon-pink text-xl" />
            </div>
            <div>
              <h3 className="text-fs-8 font-semibold text-eerie-black mb-1">{service.title}</h3>
              <p className="text-fs-9 text-sonic-silver">{service.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
