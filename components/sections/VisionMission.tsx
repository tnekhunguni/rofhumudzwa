export default function VisionMission() {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-white p-8 rounded-xl shadow-md slide-up">
            <div className="text-primary-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-display font-bold text-secondary-900 mb-4">
              Our Vision
            </h2>
            <p className="text-secondary-700 leading-relaxed">
              To be the premier choice for branded apparel and custom products in South Africa, 
              recognized for our unwavering commitment to quality, innovation, and customer 
              satisfaction. We envision a future where every organization can express its 
              identity through exceptional, professionally crafted products.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-xl shadow-md slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-primary-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-display font-bold text-secondary-900 mb-4">
              Our Mission
            </h2>
            <p className="text-secondary-700 leading-relaxed">
              To deliver exceptional branded products and services that help our clients 
              express their identity and professionalism. We are committed to using 
              premium materials, state-of-the-art technology, and expert craftsmanship 
              to create products that exceed expectations while maintaining timely delivery 
              and outstanding customer service.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

