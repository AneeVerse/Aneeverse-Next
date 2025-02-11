import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import GhostWritingCreativeServices from '@/components/services/ghost-writing/GhostWritingCreativeServices'
import GhostWritingFAQSection from '@/components/services/ghost-writing/GhostWritingFAQSection'
import GhostWritingHero from '@/components/services/ghost-writing/GhostWritingHero'
import GhostWritingStateSection from '@/components/services/ghost-writing/GhostWritingStateSection'
import GhostWritingSupportSection from '@/components/services/ghost-writing/GhostWritingSupportSection'
import React from 'react'




// metadata
export const metadata = {
    title: "Ghost Writing | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "Ghost Writing | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/ghost-writing`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "Ghost Writing | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "Ghost Writing | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
  }

const page = () => {
  return (
    <div>
        <GhostWritingHero />
        <SlidingLogos />
        <GhostWritingSupportSection />
        <GhostWritingCreativeServices />
        <CommonServicesOurWorks />
        <GhostWritingStateSection />
        <TestimonialSlider />
        <GhostWritingFAQSection />
      
    </div>
  )
}

export default page
