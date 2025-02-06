import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import WebDesignCreativeServices from '@/components/services/website-design/WebDesignCreativeServices'
import WebDesignHero from '@/components/services/website-design/WebDesignHero'
import WebsiteDesignFAQSection from '@/components/services/website-design/WebsiteDesignFAQSection'
import WebsiteDesignOurWorks from '@/components/services/website-design/WebsiteDesignOurWorks'
import WebsiteDesignStateSections from '@/components/services/website-design/WebsiteDesignStateSections'
import WebsiteDesignSupportSection from '@/components/services/website-design/WebsiteDesignSupportSection'
import React from 'react'

// metadata
export const metadata = {
  title: "Website Design | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title:  "Website Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/website-design`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt:  "Website Design | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:  "Website Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}


const page = () => {
  return (
    <div>
      <WebDesignHero />
      <SlidingLogos />
      <WebsiteDesignSupportSection />
      <WebDesignCreativeServices />
      <WebsiteDesignOurWorks />
      <WebsiteDesignStateSections />
      <TestimonialSlider />
      <WebsiteDesignFAQSection />
    </div>
  )
}

export default page
