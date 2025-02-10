import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import EmailCampaignCreativeServices from '@/components/services/email-campaign/EmailCampaignCreativeServices'
import EmailCampaignFAQSection from '@/components/services/email-campaign/EmailCampaignFAQSection'
import EmailCampaignHero from '@/components/services/email-campaign/EmailCampaignHero'
import EmailCampaignStateSection from '@/components/services/email-campaign/EmailCampaignStateSection'
import EmailCampaignSupportSection from '@/components/services/email-campaign/EmailCampaignSupportSection'
import React from 'react'




// metadata
export const metadata = {
    title: "Email Campaign | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    openGraph: {
      title:  "Email Campaign | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      url: `https://aneeverse.com/services/email-campaign`,
      images: [
        {
          url: "/images/meta/phone.avif", // ✅ Dynamic Image
          width: 1200,
          height: 630,
          alt:  "Email Campaign | Aneeverse",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:  "Email Campaign | Aneeverse",
      description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
      image: "/images/meta/phone.avif",
    },
  }



const page = () => {
  return (
    <div>
        <EmailCampaignHero />
        <SlidingLogos />
        <EmailCampaignSupportSection />
        <EmailCampaignCreativeServices />
        <CommonServicesOurWorks />
        <EmailCampaignStateSection />
        <TestimonialSlider />
        <EmailCampaignFAQSection />
      
    </div>
  )
}

export default page
