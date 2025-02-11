import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import BrochureDesignCreativeServices from '@/components/services/brochure-design/BrochureDesignCreativeServices'
import BrochureDesignFAQSection from '@/components/services/brochure-design/BrochureDesignFAQSection'
import BrochureDesignHero from '@/components/services/brochure-design/BrochureDesignHero'
import BrochureDesignStateSection from '@/components/services/brochure-design/BrochureDesignStateSection'
import BrochureDesignSupportSection from '@/components/services/brochure-design/BrochureDesignSupportSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import React from 'react'



// metadata
export const metadata = {
    title: "Brochure Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "Brochure Design | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/brochure-design`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "Brochure Design | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "Brochure Design | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
}

const page = () => {
  return (
    <div>
        <BrochureDesignHero />
        <SlidingLogos />
        <BrochureDesignSupportSection />
        <BrochureDesignCreativeServices />
        <CommonServicesOurWorks />
        <BrochureDesignStateSection />
        <TestimonialSlider />
        <BrochureDesignFAQSection />
      
    </div>
  )
}

export default page
