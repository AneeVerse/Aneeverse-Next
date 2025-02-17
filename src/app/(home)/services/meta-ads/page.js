import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import MetaAdsCreativeServices from '@/components/services/meta-ads/MetaAdsCreativeServices'
import MetaAdsFAQSection from '@/components/services/meta-ads/MetaAdsFAQSection'
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
           <CommonServicesHeroSection
            title="Meta Ads Services"
            subtitle="Maximize Your Meta Ads Impact"
            description="Drive targeted traffic, boost conversions, and scale your business with our Meta Ads services. From ad creation to performance analysis, we help you leverage Meta’s advertising platform for optimal results."
            ctaText="Book a Call"
            ctaLink="/contact"
            backgroundImage="/images/services/meta-ads/hero-banner.avif"
           
          />
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
