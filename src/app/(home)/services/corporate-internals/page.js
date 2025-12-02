import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import CorporateInternalsFAQSection from '@/components/services/corporate-internals/CorporateInternalsFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import React from 'react'

export const metadata = {
  title: "Corporate & Internals | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Corporate & Internals | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/corporate-internals`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Corporate & Internals | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate & Internals | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    { name: "Brand Guidelines", about: "Creating comprehensive brand guidelines that ensure consistency across all internal communications.", image: "/images/services/email-design/email-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "Internal Communications", about: "Designing internal communication materials that engage employees and strengthen company culture.", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "Corporate Identity", about: "Developing corporate identity systems that reflect your company's values and mission.", image: "/images/services/email-design/email-html5.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "Internal Documentation", about: "Creating clear, professional internal documentation and training materials.", image: "/images/services/email-design/email-design-templates.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "Employee Onboarding Materials", about: "Designing engaging onboarding materials that welcome new employees effectively.", image: "/images/services/email-design/email-newsletter-design.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "Corporate Templates", about: "Creating templates for presentations, reports, and internal communications.", image: "/images/services/email-design/email-ui-ux-audits.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
  ];

  const stats = [
    { value: "150+", description: "Corporate design projects completed." },
    { value: "100%", description: "Brand consistency across all internal materials." },
    { value: "90%", description: "Employee engagement improvement with internal communications." },
    { value: "24/7", description: "Support for internal design needs." },
  ];

  return (
    <div>
      <ServiceSchema serviceName="Corporate & Internals Services" serviceType="ProfessionalService" description="Strengthen your internal brand with corporate design services. From brand guidelines to internal communications, we ensure consistency and engagement." slug="corporate-internals" priceRange="$2000-$15000" category="Corporate Services" features={["Brand Guidelines", "Internal Communications", "Corporate Identity", "Internal Documentation", "Onboarding Materials", "Corporate Templates", "Training Materials", "Policy Documentation"]} benefits={["Brand Consistency", "Employee Engagement", "Professional Image", "Clear Communication", "Unified Culture", "Streamlined Processes"]} serviceOutput="Comprehensive corporate design system with internal communication materials." audience="Corporations, enterprises, and organizations needing internal branding and communication design." additionalType="https://schema.org/ProfessionalService" />
      <CommonServicesHeroSection title="Corporate & Internals" subtitle="Corporate Services" description="Strengthen your internal brand with corporate design services. From brand guidelines to internal communications, we ensure consistency and engagement." ctaText="Book a Call" ctaLink="/contact" backgroundImage="/images/services/email-design/hero-banner.avif" />
      <SlidingLogos />
      <DynamicSupportSection subtitle="BUILT FOR CORPORATE TEAMS" title="Internal Branding That " highlightText="unifies & engages" imageSrc="/images/services/email-design/about-email.avif" imageAlt="Corporate & Internals" description="Build a cohesive internal brand that strengthens company culture and improves communication. Our corporate design services ensure consistency across all internal touchpoints." additionalText="From brand guidelines to internal communications, we create materials that engage employees, reinforce company values, and maintain professional standards." />
      <DynamicCreativeSection subtitle="Corporate Excellence" title="Corporate & Internals Services" heighlightText="Professional " items={items} />
      <DynamicOurWorks />
      <DynamicStateSection title="Our Corporate Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialSlider />
      <CorporateInternalsFAQSection />
    </div>
  )
}

export default page

