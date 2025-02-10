import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import MetaAdsCreativeServices from '@/components/services/meta-ads/MetaAdsCreativeServices'
import MetaAdsFAQSection from '@/components/services/meta-ads/MetaAdsFAQSection'
import MetaAdsHero from '@/components/services/meta-ads/MetaAdsHero'
import MetaAdsStateSection from '@/components/services/meta-ads/MetaAdsStateSection'
import MetaAdsSupportSection from '@/components/services/meta-ads/MetaAdsSupportSection'
import React from 'react'




// metadata
export const metadata = {
    title: "Meta Ads | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "Meta Ads | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/meta-ads`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "Meta Ads | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "Meta Ads | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
  }


const page = () => {
  return (
    <div>
        <MetaAdsHero    />
        <SlidingLogos />
        <MetaAdsSupportSection />
        <MetaAdsCreativeServices    />
        <CommonServicesOurWorks />
        <MetaAdsStateSection />
        <TestimonialSlider />
        <MetaAdsFAQSection />
      
    </div>
  )
}

export default page
