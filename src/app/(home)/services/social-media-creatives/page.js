import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import SocialMediaCreativeServices from '@/components/services/social-media-creatives/SocialMediaCreativeServices'
import SocialMediaFAQSection from '@/components/services/social-media-creatives/SocialMediaFAQSection'
import SocialMediaHero from '@/components/services/social-media-creatives/SocialMediaHero'
import SocialMediaStateSection from '@/components/services/social-media-creatives/SocialMediaStateSection'
import SocialMediaSupportSection from '@/components/services/social-media-creatives/SocialMediaSupportSection'
import React from 'react'



// metadata
export const metadata = {
    title: "Social Media Creatives | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "Social Media Creatives | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/social-media-creatives`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "Social Media Creatives | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "Social Media Creatives | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
  }
const page = () => {
  return (
    <div>
        <SocialMediaHero />
        <SlidingLogos />
        <SocialMediaSupportSection />
        <SocialMediaCreativeServices />
        <CommonServicesOurWorks />
        <SocialMediaStateSection />
        <TestimonialSlider  />
        <SocialMediaFAQSection />
      
    </div>
  )
}

export default page
