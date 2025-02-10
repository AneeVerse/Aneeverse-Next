import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import GmbOptimizationCreativeServices from '@/components/services/gmb-optimization/GmbOptimizationCreativeServices'
import GmbOptimizationFAQSection from '@/components/services/gmb-optimization/GmbOptimizationFAQSection'
import GmbOptimizationHero from '@/components/services/gmb-optimization/GmbOptimizationHero'
import GmbOptimizationStateSection from '@/components/services/gmb-optimization/GmbOptimizationStateSection'
import GmbOptimizationSupportSection from '@/components/services/gmb-optimization/GmbOptimizationSupportSection'
import React from 'react'





// metadata
export const metadata = {
    title: "GMB Optimization | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "GMB Optimization | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/gmb-optimization`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "GMB Optimization | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "GMB Optimization | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
  }


const page = () => {
  return (
    <div>
        <GmbOptimizationHero />
        <SlidingLogos />
        <GmbOptimizationSupportSection />
        <GmbOptimizationCreativeServices />
        <CommonServicesOurWorks />
        <GmbOptimizationStateSection />
        <TestimonialSlider />
        <GmbOptimizationFAQSection />
      
    </div>
  )
}

export default page
