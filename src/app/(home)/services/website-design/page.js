import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import CommonServicesOurWorks from '@/components/services/common/CommonServicesOurWorks'
import WebDesignCreativeServices from '@/components/services/website-design/WebDesignCreativeServices'
import WebsiteDesignFAQSection from '@/components/services/website-design/WebsiteDesignFAQSection'
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
// ✅ Services Data (for scrolling cards)
const services = [
  { title: "Webflow Development", image: "/images/services/website/card/webflow-development.avif" },
  { title: "Website Illustrations", image: "/images/services/website/card/website-illustration.avif" },
  { title: "UX UI Audit", image: "/images/services/website/card/ui-ux-audit.avif" },
  { title: "Design Systems", image: "/images/services/website/card/design-system.avif" },
  { title: "Content Development", image: "/images/services/website/card/content-development.avif" },
  { title: "Website Strategy", image: "/images/services/website/card/website-strategy.avif" },
  { title: "Website Design", image: "/images/services/website/card/website-design.avif" },
  { title: "Landing Page Design", image: "/images/services/website/card/landing-page-design.avif" },
];


  return (
    <div>
        <CommonServicesHeroSection
      title="Web Design"
      subtitle="Creative Services"
      description=" Get email designs, templates, and creative to capture your audience’s attention. Invigorate your communications and get access to a fully-stacked team of designers to start bringing your email campaigns to life."
      ctaText="Book a demo"
      ctaLink="/contact"
      backgroundImage="/images/services/website/hero-banner.avif"
      services={services}
    />
      <SlidingLogos />
      <WebsiteDesignSupportSection />
      <WebDesignCreativeServices />
      <CommonServicesOurWorks />
      <WebsiteDesignStateSections />
      <TestimonialSlider />
      <WebsiteDesignFAQSection />
    </div>
  )
}

export default page
