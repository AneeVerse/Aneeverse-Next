import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import SeoCreativeServices from '@/components/services/seo-optimization/SeoCreativeServices'
import SeoFAQSection from '@/components/services/seo-optimization/SeoFAQSection'
import SeoStateSection from '@/components/services/seo-optimization/SeoStateSection'
import SeoSupportSection from '@/components/services/seo-optimization/SeoSupportSection'
import React from 'react'




// metadata
export const metadata = {
    title: "Seo Optimization | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "Seo Optimization | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/seo-optimization`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "Seo Optimization | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "Seo Optimization | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
  }
const page = () => {
  return (
    <div>
           <CommonServicesHeroSection
            title="SEO Optimization Services"
            subtitle="Data-Driven SEO Strategies"
            description=" Maximize your search engine visibility with our cutting-edge SEO techniques.
                From keyword research to technical audits, we ensure your website ranks higher
                and attracts quality traffic."
            ctaText="Book a Call"
            ctaLink="/contact"
            backgroundImage="/images/services/google-ads/hero-banner.avif"
           
          />
        <SlidingLogos />
        <SeoSupportSection />
        <SeoCreativeServices />
        <CommonServicesOurWorks />
        <SeoStateSection />
        <TestimonialSlider />
        <SeoFAQSection />
      
    </div>
  )
}

export default page
