import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Bring Your Brand to Life?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Get in touch with us today for a consultation and quote. 
            Let's create something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Contact Us Now
            </Link>
            <Link href="/services" className="btn-secondary border-white text-white hover:bg-white/10">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

