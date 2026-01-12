import TestimonialsSection from '@/components/home/TestimonialsSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import DesignSystemFAQSection from '@/components/services/design-system/DesignSystemFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import React from 'react'

export const metadata = {
  title: "Design System | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Design System | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/design-system`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Design System | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design System | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    { name: "Component Library", about: "Building comprehensive component libraries that ensure consistency across all digital touchpoints.", image: "/images/services/email-design/email-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "Style Guide Creation", about: "Developing detailed style guides that define your brand's visual language and design standards.", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "Design Tokens", about: "Creating design tokens for colors, typography, spacing, and more to maintain consistency.", image: "/images/services/email-design/email-html5.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "Pattern Library", about: "Documenting design patterns and best practices for reusable UI components.", image: "/images/services/email-design/email-design-templates.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "Design Documentation", about: "Creating comprehensive documentation that helps teams implement designs consistently.", image: "/images/services/email-design/email-newsletter-design.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "System Maintenance", about: "Ongoing maintenance and updates to keep your design system current and relevant.", image: "/images/services/email-design/email-ui-ux-audits.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
  ];

  const stats = [
    { value: "50+", description: "Design systems created for clients." },
    { value: "60%", description: "Faster design and development with design systems." },
    { value: "100%", description: "Consistency across all brand touchpoints." },
    { value: "24/7", description: "Access to design system documentation and components." },
  ];

  return (
    <div>
      <ServiceSchema serviceName="Design System Services" serviceType="ProfessionalService" description="Create comprehensive design systems that ensure consistency, speed up development, and maintain brand identity across all platforms." slug="design-system" priceRange="$5000-$25000" category="Design Services" features={["Component Library", "Style Guide", "Design Tokens", "Pattern Library", "Documentation", "System Maintenance", "Brand Guidelines", "Implementation Support"]} benefits={["Design Consistency", "Faster Development", "Better Collaboration", "Scalable Design", "Brand Cohesion", "Reduced Costs"]} serviceOutput="Complete design system with components, guidelines, and documentation." audience="Design teams, product teams, agencies, and businesses needing consistent design standards." additionalType="https://schema.org/CreativeWork" />
      <CommonServicesHeroSection title="Design System Services" subtitle="Design Services" description="Create comprehensive design systems that ensure consistency, speed up development, and maintain brand identity across all platforms." ctaText="Book a Call" ctaLink="/contact" backgroundImage="/images/services/email-design/hero-banner.avif" />
      <SlidingLogos />
      <DynamicSupportSection subtitle="BUILT FOR DESIGN & PRODUCT TEAMS" title="Design Systems That " highlightText="scale & unify" imageSrc="/images/services/email-design/about-email.avif" imageAlt="Design System" description="Establish a solid foundation for your brand's digital presence with comprehensive design systems. Our systems ensure consistency and speed up development." additionalText="From component libraries to style guides, we create design systems that empower your team to build faster while maintaining brand consistency." />
      <DynamicCreativeSection subtitle="System Excellence" title="Design System Services" heighlightText="Comprehensive " items={items} />
      <DynamicOurWorks />
      <DynamicStateSection title="Our Design System Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialsSection />
      <DesignSystemFAQSection />
    </div>
  )
}

export default page

