import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import LandingPagesCreativeServices from '@/components/services/landign-pages/LandingPagesCreativeServices'
import LandingPagesFAQSection from '@/components/services/landign-pages/LandingPagesFAQSection'
import LandingPagesStateSection from '@/components/services/landign-pages/LandingPagesStateSection'
import LandingPagesSupportSection from '@/components/services/landign-pages/LandingPagesSupportSection'
import React from 'react'





// metadata
export const metadata = {
    title: "Landign Pages | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "Landign Pages | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/landing-pages`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "Landign Pages | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "Landign Pages | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
  }

  

const page = () => {
  return (
    <div>
           <CommonServicesHeroSection
            title="Landing Page Design Services"
            subtitle="Performance-Driven Design"
            description=" High-converting landing pages crafted to maximize engagement, lead generation, and sales.
                Our expert team designs pages tailored to your goals, ensuring a seamless user experience."
            ctaText="Book a Call"
            ctaLink="/contact"
            backgroundImage="/images/services/email-design/hero-banner.avif"
           
          />
        <SlidingLogos />
        <LandingPagesSupportSection />
        <LandingPagesCreativeServices />
        <CommonServicesOurWorks />
        <LandingPagesStateSection />
        <TestimonialSlider />
        <LandingPagesFAQSection />
      
    </div>
  )
}

export default page
