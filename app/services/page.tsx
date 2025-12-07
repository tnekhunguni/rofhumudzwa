import ServiceDetail from '@/components/sections/ServiceDetail'

const services = [
  {
    id: 'schools',
    title: 'Schools',
    icon: '🎓',
    description: 'Creating unity and pride through custom-embroidered school apparel',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=800&fit=crop',
    features: [
      'Matric Jackets - Premium quality jackets with school logos and custom embroidery',
      'T-Shirts - Comfortable, durable t-shirts perfect for school events and daily wear',
      'Tunics - Professional tunics with precise embroidery for school uniforms',
      'Blazers - Elegant blazers featuring school crests and custom detailing',
      'Tracksuits - Athletic wear designed for school sports teams and activities',
      'All items feature custom embroidery with school logos for unity and pride',
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate Workplaces',
    icon: '💼',
    description: 'Professional branding solutions for modern businesses',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop',
    features: [
      'Customized Uniforms - Tailored workwear that reflects your brand identity',
      'Professional Workwear - High-quality garments designed for corporate environments',
      'Laser-Engraved Name Tags - Precision-engraved identification tags for staff',
      'Brand Consistency - All products designed to maintain brand professionalism',
      'Bulk Ordering - Efficient solutions for large corporate teams',
      'Custom Design Consultation - Work with our team to create the perfect corporate look',
    ],
  },
  {
    id: 'society',
    title: 'Society Clubs',
    icon: '👔',
    description: 'Elegant branded apparel for clubs and organizations',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=800&fit=crop',
    features: [
      'Club Identity Apparel - Custom-designed clothing that represents your organization',
      'Elegant Branding - Sophisticated embroidery and printing for refined appearance',
      'Event Wear - Specialized apparel for club events and gatherings',
      'Member Recognition - Custom items for club members and leadership',
      'Logo Integration - Seamless incorporation of club logos and emblems',
      'Premium Materials - High-quality fabrics ensuring durability and comfort',
    ],
  },
  {
    id: 'industrial',
    title: 'Industrial & Construction Gear',
    icon: '🦺',
    description: 'Durable, safe, and compliant protective workwear',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=800&fit=crop',
    features: [
      'PPE (Personal Protective Equipment) - Certified safety gear meeting industry standards',
      'Construction Uniforms - Durable workwear designed for tough job sites',
      'Industrial Wear - Heavy-duty clothing for industrial environments',
      'Safety Compliance - All products meet or exceed safety regulations',
      'Durability Focus - Built to withstand harsh working conditions',
      'Custom Branding - Add your company logo to all industrial wear',
    ],
  },
  {
    id: 'hazmat',
    title: 'Hazmat Suits',
    icon: '🧪',
    description: 'Protective clothing for high-risk environments',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=800&fit=crop',
    features: [
      'High-Risk Protection - Specialized suits for hazardous material handling',
      'Custom Branding Options - Add identification and branding to protective gear',
      'Compliance Standards - Meets safety requirements for hazardous environments',
      'Professional Grade - Industrial-quality protective clothing',
      'Multiple Sizes - Available in various sizes for all team members',
      'Expert Consultation - Guidance on selecting the right protective gear',
    ],
  },
  {
    id: 'stationery',
    title: 'Branded Stationery',
    icon: '📄',
    description: 'Professional business stationery with custom branding',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=800&fit=crop',
    features: [
      'Business Cards - Custom-designed cards with your brand identity',
      'Letterheads - Professional stationery for official correspondence',
      'Notepads & Notebooks - Branded writing materials for your team',
      'Custom Printing - High-quality printing with your logos and designs',
      'Brand Consistency - All stationery matches your brand guidelines',
      'Bulk Orders - Cost-effective solutions for large quantities',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Comprehensive branding and apparel solutions for every need
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <ServiceDetail key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

