const features = [
  {
    title: 'Premium Quality',
    description: 'We use only the finest materials and state-of-the-art equipment to ensure your branded products exceed expectations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Expert Craftsmanship',
    description: 'Years of experience in embroidery, printing, and laser engraving ensure precision and attention to detail in every project.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Timely Delivery',
    description: 'We understand deadlines matter. Our efficient processes ensure your orders are completed and delivered on time, every time.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Custom Solutions',
    description: 'Every client is unique. We work closely with you to create custom branding solutions that perfectly match your vision and requirements.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Excellence in every stitch, print, and engraving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-display font-semibold text-secondary-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

