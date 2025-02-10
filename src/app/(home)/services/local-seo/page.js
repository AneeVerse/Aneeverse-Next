import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import LocalSeoCreativeServices from '@/components/services/local-seo/LocalSeoCreativeServices'
import LocalSeoFAQSection from '@/components/services/local-seo/LocalSeoFAQSection'
import LocalSeoHero from '@/components/services/local-seo/LocalSeoHero'
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
        <LocalSeoHero />
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
