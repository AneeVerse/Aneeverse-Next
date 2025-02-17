import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import GoogleAdsCreativeServices from '@/components/services/google-ads/GoogleAdsCreativeServices'
import GoogleAdsFAQSection from '@/components/services/google-ads/GoogleAdsFAQSection'

import GoogleAdsStateSection from '@/components/services/google-ads/GoogleAdsStateSection'
import GoogleAdsSupportSection from '@/components/services/google-ads/GoogleAdsSupportSection'
import React from 'react'




// metadata
export const metadata = {
    title: "Google Ads | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "Google Ads | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/google-ads`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "Google Ads | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "Google Ads | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
  }
const page = () => {
  return (
    <div>
           <CommonServicesHeroSection
            title="Google Ads Services"
            subtitle="Maximize Your ROI with Google Ads"
            description=" Unlock the power of paid search with our expertly managed Google Ads campaigns. We focus on driving high-quality traffic and maximizing your ROI."
            ctaText="Book a Call"
            ctaLink="/contact"
            backgroundImage="/images/services/google-ads/hero-banner.avif"
           
          />
        <SlidingLogos />
        <GoogleAdsSupportSection />
        <GoogleAdsCreativeServices />
        <CommonServicesOurWorks />
        <GoogleAdsStateSection />
        <TestimonialSlider />
        <GoogleAdsFAQSection />
      
    </div>
  )
}

export default page
