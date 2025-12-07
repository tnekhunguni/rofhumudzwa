import Link from 'next/link'

const services = [
  {
    title: 'Schools',
    description: 'Matric jackets, T-shirts, tunics, blazers, and tracksuits with custom embroidery.',
    icon: '🎓',
    href: '/services#schools',
  },
  {
    title: 'Corporate Workplaces',
    description: 'Customized uniforms, workwear, and laser-engraved name tags for brand professionalism.',
    icon: '💼',
    href: '/services#corporate',
  },
  {
    title: 'Society Clubs',
    description: 'Branded apparel designed for club identity and elegance.',
    icon: '👔',
    href: '/services#society',
  },
  {
    title: 'Industrial & Construction',
    description: 'PPE, construction uniforms, and industrial wear - durable, safe, and compliant.',
    icon: '🦺',
    href: '/services#industrial',
  },
  {
    title: 'Hazmat Suits',
    description: 'Protective clothing for high-risk environments with custom branding options.',
    icon: '🧪',
    href: '/services#hazmat',
  },
  {
    title: 'Branded Stationery',
    description: 'Business stationery with custom branding for professional presentation.',
    icon: '📄',
    href: '/services#stationery',
  },
]

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Comprehensive branding solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-secondary-100 hover:border-primary-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-display font-semibold text-secondary-900 mb-3">
                {service.title}
              </h3>
              <p className="text-secondary-600 mb-4">{service.description}</p>
              <Link
                href={service.href}
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

