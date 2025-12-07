import CompanyOverview from '@/components/sections/CompanyOverview'
import VisionMission from '@/components/sections/VisionMission'
import QualityCommitment from '@/components/sections/QualityCommitment'

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
            About Rofhumudzwa Trading
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Excellence in branding, quality in every product
          </p>
        </div>
      </div>

      <CompanyOverview />
      <VisionMission />
      <QualityCommitment />
    </div>
  )
}

