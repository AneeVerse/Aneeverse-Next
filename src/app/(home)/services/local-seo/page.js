import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import LocalSeoCreativeServices from '@/components/services/local-seo/LocalSeoCreativeServices'
import LocalSeoFAQSection from '@/components/services/local-seo/LocalSeoFAQSection'
import LocalSeoStateSection from '@/components/services/local-seo/LocalSeoStateSection'
import LocalSeoSupportSection from '@/components/services/local-seo/LocalSeoSupportSection'
import React from 'react'



// metadata
export const metadata = {
    title: "Local SEO | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "Local SEO | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/local-seo`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "Local SEO | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "Local SEO | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
  }

const page = () => {
  return (
    <div>
           <CommonServicesHeroSection
            title="Local SEO Optimization Services"
            subtitle="Data-Driven Local SEO Strategies"
            description="Enhance your local search presence with our expert local SEO services. We optimize your business for local visibility and drive targeted traffic from your area."
            ctaText="Book a Call"
            ctaLink="/contact"
            backgroundImage="/images/services/google-ads/hero-banner.avif"
           
          />
        <SlidingLogos   />
        <LocalSeoSupportSection />
        <LocalSeoCreativeServices />
        <CommonServicesOurWorks />
        <LocalSeoStateSection />
        <TestimonialSlider />
        <LocalSeoFAQSection />
      
    </div>
  )
}

export default page
