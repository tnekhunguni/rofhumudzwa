import Image from 'next/image'

const portfolioItems = [
  {
    title: 'School Uniform Collection',
    category: 'Schools',
    description: 'Complete uniform sets with custom embroidery',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
  },
  {
    title: 'Corporate Workwear',
    category: 'Corporate',
    description: 'Professional uniforms for business teams',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
  {
    title: 'Industrial Safety Gear',
    category: 'Industrial',
    description: 'PPE and construction wear',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
  },
  {
    title: 'Club Branding',
    category: 'Society Clubs',
    description: 'Elegant branded apparel for organizations',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop',
  },
]

export default function PortfolioPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
            Our Work
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Showcasing excellence in branding and customization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Portfolio Image */}
              <div className="aspect-video relative overflow-hidden bg-secondary-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-semibold text-primary-200 mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-display font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-100">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

