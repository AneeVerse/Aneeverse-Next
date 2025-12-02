import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import IllustrationDesignFAQSection from '@/components/services/illustration-design/IllustrationDesignFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import React from 'react'

export const metadata = {
  title: "Illustration Design | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Illustration Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/illustration-design`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Illustration Design | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Illustration Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    { name: "Custom Illustrations", about: "Creating unique, custom illustrations that bring your brand story to life.", image: "/images/services/email-design/email-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "Digital Art", about: "Producing stunning digital artwork for websites, apps, and marketing materials.", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "Icon Design", about: "Designing custom icons that enhance user interfaces and brand identity.", image: "/images/services/email-design/email-html5.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "Character Design", about: "Creating memorable characters that represent your brand and connect with audiences.", image: "/images/services/email-design/email-design-templates.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "Infographic Illustrations", about: "Transforming complex data into engaging visual stories through custom illustrations.", image: "/images/services/email-design/email-newsletter-design.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "Storytelling Illustrations", about: "Crafting illustrations that tell compelling stories and engage your audience emotionally.", image: "/images/services/email-design/email-ui-ux-audits.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
  ];

  const stats = [
    { value: "500+", description: "Custom illustrations created for clients." },
    { value: "100%", description: "Original artwork tailored to your brand." },
    { value: "50+", description: "Illustration styles and techniques mastered." },
    { value: "24/7", description: "Creative support and revisions available." },
  ];

  return (
    <div>
      <ServiceSchema serviceName="Illustration Design Services" serviceType="ProfessionalService" description="Bring your brand to life with custom illustrations that captivate and engage. From digital art to character design, we create visuals that tell your story." slug="illustration-design" priceRange="$500-$3000" category="Creative Services" features={["Custom Illustrations", "Digital Art", "Icon Design", "Character Design", "Infographic Illustrations", "Storytelling", "Brand Illustrations", "Animation Support"]} benefits={["Unique Brand Identity", "Enhanced Engagement", "Memorable Visuals", "Versatile Assets", "Professional Quality", "Brand Storytelling"]} serviceOutput="Custom illustrations ready for use across all platforms and media." audience="Brands, agencies, publishers, and businesses needing custom visual content." additionalType="https://schema.org/CreativeWork" />
      <CommonServicesHeroSection title="Illustration Design Services" subtitle="Creative Services" description="Bring your brand to life with custom illustrations that captivate and engage. From digital art to character design, we create visuals that tell your story." ctaText="Book a Call" ctaLink="/contact" backgroundImage="/images/services/email-design/hero-banner.avif" />
      <SlidingLogos />
      <DynamicSupportSection subtitle="BUILT FOR CREATIVE BRANDS" title="Illustrations That " highlightText="captivate & inspire" imageSrc="/images/services/email-design/about-email.avif" imageAlt="Illustration Design" description="Transform your ideas into stunning visual narratives with custom illustrations. Our artists create unique artwork that sets your brand apart." additionalText="From character design to infographic illustrations, we craft visuals that engage audiences, tell your story, and strengthen your brand identity." />
      <DynamicCreativeSection subtitle="Artistic Excellence" title="Illustration Design Services" heighlightText="Custom " items={items} />
      <DynamicOurWorks />
      <DynamicStateSection title="Our Illustration Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialSlider />
      <IllustrationDesignFAQSection />
    </div>
  )
}

export default page

