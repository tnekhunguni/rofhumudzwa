import Hero from '@/components/sections/Hero'
import ServicesOverview from '@/components/sections/ServicesOverview'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import PortfolioPreview from '@/components/sections/PortfolioPreview'
import ContactCTA from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <PortfolioPreview />
      <ContactCTA />
    </>
  )
}

