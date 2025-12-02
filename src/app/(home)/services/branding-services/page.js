import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import BrandingServicesFAQSection from '@/components/services/branding-services/BrandingServicesFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import React from 'react'

export const metadata = {
  title: "Branding Services | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Branding Services | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/branding-services`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Branding Services | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding Services | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    { name: "Logo Design", about: "Creating memorable logos that represent your brand identity and values.", image: "/images/services/email-design/email-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "Brand Identity", about: "Developing comprehensive brand identities that resonate with your target audience.", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "Visual Identity", about: "Designing visual systems that ensure consistency across all brand touchpoints.", image: "/images/services/email-design/email-html5.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "Brand Guidelines", about: "Creating detailed brand guidelines that maintain consistency across all applications.", image: "/images/services/email-design/email-design-templates.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "Brand Strategy", about: "Developing strategic brand positioning that differentiates you in the market.", image: "/images/services/email-design/email-newsletter-design.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "Rebranding Services", about: "Refreshing existing brands to stay relevant and connect with modern audiences.", image: "/images/services/email-design/email-ui-ux-audits.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
  ];

  const stats = [
    { value: "300+", description: "Brands created and refreshed for clients." },
    { value: "100%", description: "Unique brand identities tailored to each client." },
    { value: "95%", description: "Client satisfaction with brand design quality." },
    { value: "24/7", description: "Support for brand implementation and maintenance." },
  ];

  return (
    <div>
      <ServiceSchema serviceName="Branding Services" serviceType="ProfessionalService" description="Build a powerful brand identity that resonates with your audience. From logo design to brand strategy, we create brands that stand out." slug="branding-services" priceRange="$3000-$20000" category="Branding Services" features={["Logo Design", "Brand Identity", "Visual Identity", "Brand Guidelines", "Brand Strategy", "Rebranding", "Brand Positioning", "Brand Implementation"]} benefits={["Strong Brand Identity", "Market Differentiation", "Consistent Branding", "Professional Image", "Brand Recognition", "Competitive Advantage"]} serviceOutput="Complete brand identity package with guidelines and assets." audience="Startups, businesses, and organizations needing brand development or refresh." additionalType="https://schema.org/Brand" />
      <CommonServicesHeroSection title="Branding Services" subtitle="Brand Services" description="Build a powerful brand identity that resonates with your audience. From logo design to brand strategy, we create brands that stand out." ctaText="Book a Call" ctaLink="/contact" backgroundImage="/images/services/email-design/hero-banner.avif" />
      <SlidingLogos />
      <DynamicSupportSection subtitle="BUILT FOR BRANDS" title="Brand Identities That " highlightText="resonate & inspire" imageSrc="/images/services/email-design/about-email.avif" imageAlt="Branding Services" description="Create a brand that truly represents your business and connects with your audience. Our comprehensive branding services cover everything from logo design to brand strategy." additionalText="From initial concept to final implementation, we develop brand identities that are memorable, consistent, and aligned with your business goals." />
      <DynamicCreativeSection subtitle="Brand Excellence" title="Branding Services" heighlightText="Comprehensive " items={items} />
      <DynamicOurWorks />
      <DynamicStateSection title="Our Branding Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialSlider />
      <BrandingServicesFAQSection />
    </div>
  )
}

export default page

