import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import MarketingStrategyCreativeServices from '@/components/services/marketing-strategy/MarketingStrategyCreativeServices'
import MarketingStrategyFAQSection from '@/components/services/marketing-strategy/MarketingStrategyFAQSection'
import MarketingStrategyFeatureSection from '@/components/services/marketing-strategy/MarketingStrategyFeatureSection'
import MarketingStrategyHero from '@/components/services/marketing-strategy/MarketingStrategyHero'
import MarketingStrategyStateSection from '@/components/services/marketing-strategy/MarketingStrategyStateSection'
import MarketingStrategySupportSection from '@/components/services/marketing-strategy/MarketingStrategySupportSection'
import React from 'react'


// metadata
export const metadata = {
    title: "Marketing Strategy | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "Marketing Strategy | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/marketing-strategy`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "Marketing Strategy | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "Marketing Strategy | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
  }

const page = () => {
  return (
    <div>
        <MarketingStrategyHero />
        <SlidingLogos />
        <MarketingStrategySupportSection />
        <MarketingStrategyCreativeServices/>
        <CommonServicesOurWorks />
        <MarketingStrategyFeatureSection />
        <MarketingStrategyStateSection />
        <MarketingStrategyFAQSection />
    

      
    </div>
  )
}

export default page
