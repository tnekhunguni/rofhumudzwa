import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative text-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&auto=format"
          alt="Professional branding and apparel"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-primary-700/90"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center slide-up">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Bringing Identity to Life Through Quality Branding
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
            High-quality branded apparel, workwear, and custom products. 
            Specializing in custom embroidery, print solutions, and laser engraving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary">
              Explore Our Services
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  )
}

