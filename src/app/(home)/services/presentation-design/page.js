import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import PresentationiDesignCreativeServices from '@/components/services/presentation-design/PresentationiDesignCreativeServices'
import PresentationiDesignFAQSection from '@/components/services/presentation-design/PresentationiDesignFAQSection'
import PresentationiDesignStateSection from '@/components/services/presentation-design/PresentationiDesignStateSection'
import PresentationiDesignSupportSection from '@/components/services/presentation-design/PresentationiDesignSupportSection'
import React from 'react'

// metadata
export const metadata = {
    title: "Presentation Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "Presentation Design | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/presentation-design`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "Presentation Design | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "Presentation Design | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
  }



const page = () => {
  return (
    <div>
           <CommonServicesHeroSection
            title="Presentation Designs"
            subtitle="Impactful Presentation Design"
            description=" Create visually compelling and engaging presentations that resonate with your audience.
                From pitch decks to corporate presentations, we bring your ideas to life.
             "
            ctaText="Book a Call"
            ctaLink="/contact"
            backgroundImage="/images/services/presentation-design/hero-banner.avif"
           
          />
        <SlidingLogos />
        <PresentationiDesignSupportSection />
        <PresentationiDesignCreativeServices />
        <CommonServicesOurWorks />
        <PresentationiDesignStateSection />
        <TestimonialSlider />
        <PresentationiDesignFAQSection />
    </div>
  )
}

export default page
