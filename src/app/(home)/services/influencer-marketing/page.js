import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import InfluencerMarketingCreativeServices from '@/components/services/influencer-marketing/InfluencerMarketingCreativeServices'
import InfluencerMarketingFAQSection from '@/components/services/influencer-marketing/InfluencerMarketingFAQSection'
import InfluencerMarketingHero from '@/components/services/influencer-marketing/InfluencerMarketingHero'
import InfluencerMarketingStateSection from '@/components/services/influencer-marketing/InfluencerMarketingStateSection'
import InfluencerMarketingSupportSection from '@/components/services/influencer-marketing/InfluencerMarketingSupportSection'
import React from 'react'





// metadata
export const metadata = {
    title: "Influencer Marketing | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "Influencer Marketing | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/influencer-marketing`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "Influencer Marketing | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "Influencer Marketing | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
  }
  
const page = () => {
  return (
    <div>
        <InfluencerMarketingHero />
        <SlidingLogos   />
        <InfluencerMarketingSupportSection />
        <InfluencerMarketingCreativeServices />
        <CommonServicesOurWorks />
        <InfluencerMarketingStateSection />
        <TestimonialSlider />
        <InfluencerMarketingFAQSection />
      
    </div>
  )
}

export default page
