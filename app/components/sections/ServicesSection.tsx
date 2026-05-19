import { services } from '../../data/services'

export default function ServicesSection() {
  return (
    <div className="flex-1">
      <h2
        className="text-fs-4 mb-6"
        style={{ color: 'var(--nocte-black)', fontFamily: 'var(--nocte-serif)', fontWeight: 400 }}
      >
        Our Services
      </h2>

      <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
        {services.map((service) => (
          <a
            key={service.id}
            href="#"
            className="flex items-start gap-3 p-4 nocte-hover-border"
            style={{ border: '1px solid var(--nocte-border)' }}
          >
            <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--nocte-surface-2)' }}>
              <ion-icon name={service.icon} style={{ color: 'var(--nocte-gray-light)' }} class="text-xl" />
            </div>
            <div>
              <h3 className="text-fs-8 mb-1" style={{ color: 'var(--nocte-black)', fontFamily: 'var(--nocte-sans)' }}>{service.title}</h3>
              <p className="text-fs-9" style={{ color: 'var(--nocte-gray-mid)', fontFamily: 'var(--nocte-sans)' }}>{service.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
