import ContactForm from '@/components/sections/ContactForm'
import ContactDetails from '@/components/sections/ContactDetails'

export default function ContactPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactDetails />
        </div>

        {/* Google Maps Placeholder */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-video relative bg-secondary-200">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop&auto=format"
              alt="Business location"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/20 flex items-center justify-center">
              <div className="text-center bg-white/90 backdrop-blur-sm px-8 py-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-2">📍</div>
                <p className="text-secondary-900 font-semibold text-lg">Find Us</p>
                <p className="text-sm text-secondary-600 mt-1">Add your business address here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

