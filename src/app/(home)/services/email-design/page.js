import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import EmailDesignAiDesignSection from '@/components/services/email-design/EmailDesignAiDesignSection'
import EmailDesignCreativeServices from '@/components/services/email-design/EmailDesignCreativeServices'
import EmailDesignFAQSection from '@/components/services/email-design/EmailDesignFAQSection'
import EmailDesignHero from '@/components/services/email-design/EmailDesignHero'
import EmailDesignStateSection from '@/components/services/email-design/EmailDesignStateSection'
import EmailDesignSupportSection from '@/components/services/email-design/EmailDesignSupportSection'
import React from 'react'


// metadata
export const metadata = {
    title: "Email Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "Email Design | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/email-design`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "Email Design | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "Email Design | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
  }

  
const page = () => {
  return (
    <div>
        <EmailDesignHero />
        <SlidingLogos />
        <EmailDesignSupportSection />
        <EmailDesignCreativeServices />
        <CommonServicesOurWorks />
        <EmailDesignAiDesignSection />
        <EmailDesignStateSection />
        <TestimonialSlider />
        <EmailDesignFAQSection />
      
    </div>
  )
}

export default page
