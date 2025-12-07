import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Rofhumudzwa Trading</h3>
            <p className="text-secondary-300 mb-4">
              Bringing identity to life through high-quality branded apparel, workwear, and custom products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-secondary-300">
              <li>Email: info@rofhumudzwa.co.za</li>
              <li>Phone: +27 (0) XX XXX XXXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; {new Date().getFullYear()} Rofhumudzwa Trading and Other Projects Pty LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

