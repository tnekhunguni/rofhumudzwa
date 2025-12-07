const commitments = [
  {
    title: 'Quality Assurance',
    description: 'Every product undergoes rigorous quality checks to ensure it meets our high standards before delivery.',
  },
  {
    title: 'Expert Craftsmanship',
    description: 'Our skilled team brings years of experience in embroidery, printing, and engraving to every project.',
  },
  {
    title: 'Timely Delivery',
    description: 'We understand the importance of deadlines and work efficiently to ensure your orders arrive on time.',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Your satisfaction is our priority. We work closely with you throughout the process to ensure your vision becomes reality.',
  },
]

export default function QualityCommitment() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Our Commitment
            </h2>
            <p className="text-lg text-secondary-600">
              Dedicated to excellence in every aspect of our work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((commitment, index) => (
              <div
                key={commitment.title}
                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg border border-primary-100 slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-display font-semibold text-secondary-900 mb-3">
                  {commitment.title}
                </h3>
                <p className="text-secondary-700 leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

