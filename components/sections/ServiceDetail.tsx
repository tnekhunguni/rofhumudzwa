interface ServiceDetailProps {
  service: {
    id: string
    title: string
    icon: string
    description: string
    features: string[]
    image?: string
  }
  index: number
}

export default function ServiceDetail({ service, index }: ServiceDetailProps) {
  const isEven = index % 2 === 0

  return (
    <section
      id={service.id}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center slide-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image/Icon Section */}
      <div className="flex-1">
        {service.image ? (
          <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center p-12">
            <div className="text-8xl">{service.icon}</div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
          {service.title}
        </h2>
        <p className="text-lg text-secondary-600 mb-6">
          {service.description}
        </p>
        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <svg
                className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-secondary-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

