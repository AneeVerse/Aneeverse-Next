import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import CopywritingFAQSection from '@/components/services/copywriting/CopywritingFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import React from 'react'

export const metadata = {
  title: "Copywriting | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Copywriting | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/copywriting`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Copywriting | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Copywriting | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    { name: "Sales Copy", about: "Writing persuasive sales copy that converts prospects into customers.", image: "/images/services/email-design/email-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "Marketing Copy", about: "Creating compelling marketing copy that engages audiences and drives action.", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "Content Writing", about: "Producing high-quality content that informs, educates, and engages readers.", image: "/images/services/email-design/email-html5.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "Website Copy", about: "Writing website copy that communicates your value proposition clearly and effectively.", image: "/images/services/email-design/email-design-templates.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "Ad Copy", about: "Crafting ad copy that captures attention and drives clicks and conversions.", image: "/images/services/email-design/email-newsletter-design.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "Email Copy", about: "Writing email copy that engages subscribers and drives opens and clicks.", image: "/images/services/email-design/email-ui-ux-audits.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
  ];

  const stats = [
    { value: "1000+", description: "Copywriting projects completed successfully." },
    { value: "40%", description: "Average increase in conversion rates." },
    { value: "95%", description: "Client satisfaction with copy quality." },
    { value: "24/7", description: "Copywriting support and revisions available." },
  ];

  return (
    <div>
      <ServiceSchema serviceName="Copywriting Services" serviceType="ProfessionalService" description="Write copy that converts. From sales copy to marketing content, our expert copywriters create compelling messages that drive results." slug="copywriting" priceRange="$500-$5000" category="Content Writing" features={["Sales Copy", "Marketing Copy", "Content Writing", "Website Copy", "Ad Copy", "Email Copy", "Product Descriptions", "Brand Messaging"]} benefits={["Higher Conversions", "Better Engagement", "Clear Messaging", "Brand Consistency", "Professional Quality", "SEO Optimized"]} serviceOutput="High-quality copy ready for use across all marketing channels." audience="Businesses, marketers, agencies, and e-commerce stores needing compelling copy." additionalType="https://schema.org/CreativeWork" />
      <CommonServicesHeroSection title="Copywriting Services" subtitle="Content Services" description="Write copy that converts. From sales copy to marketing content, our expert copywriters create compelling messages that drive results." ctaText="Book a Call" ctaLink="/contact" backgroundImage="/images/services/email-design/hero-banner.avif" />
      <SlidingLogos />
      <DynamicSupportSection subtitle="BUILT FOR MARKETING TEAMS" title="Copy That " highlightText="converts & engages" imageSrc="/images/services/email-design/about-email.avif" imageAlt="Copywriting Services" description="Transform your messaging with copywriting that connects with your audience and drives action. Our expert writers craft compelling copy for all channels." additionalText="From website copy to ad campaigns, we write copy that communicates your value, engages your audience, and drives measurable results for your business." />
      <DynamicCreativeSection subtitle="Writing Excellence" title="Copywriting Services" heighlightText="Professional " items={items} />
      <DynamicOurWorks />
      <DynamicStateSection title="Our Copywriting Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialSlider />
      <CopywritingFAQSection />
    </div>
  )
}

export default page

