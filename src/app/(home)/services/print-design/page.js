import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import PrintDesignFAQSection from '@/components/services/print-design/PrintDesignFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import React from 'react'

export const metadata = {
  title: "Print Design | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Print Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/print-design`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Print Design | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Print Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    { name: "Brochures", about: "Designing compelling brochures that effectively communicate your message and showcase your offerings.", image: "/images/services/email-design/email-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "Flyers", about: "Creating eye-catching flyers that grab attention and drive action.", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "Business Cards", about: "Designing professional business cards that make memorable first impressions.", image: "/images/services/email-design/email-html5.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "Posters", about: "Creating bold posters that command attention and communicate your message effectively.", image: "/images/services/email-design/email-design-templates.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "Catalog Design", about: "Designing comprehensive catalogs that showcase your products and services beautifully.", image: "/images/services/email-design/email-newsletter-design.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "Print Advertising", about: "Creating effective print ads that drive engagement and conversions.", image: "/images/services/email-design/email-ui-ux-audits.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
  ];

  const stats = [
    { value: "500+", description: "Print design projects completed successfully." },
    { value: "100%", description: "Print-ready files with proper specifications." },
    { value: "95%", description: "Client satisfaction with print quality." },
    { value: "24/7", description: "Support for print design needs." },
  ];

  return (
    <div>
      <ServiceSchema serviceName="Print Design Services" serviceType="ProfessionalService" description="Create impactful print materials that leave lasting impressions. From brochures to business cards, we design for print that works." slug="print-design" priceRange="$300-$3000" category="Design Services" features={["Brochures", "Flyers", "Business Cards", "Posters", "Catalog Design", "Print Advertising", "Magazine Layouts", "Print Production"]} benefits={["Professional Quality", "Brand Consistency", "Print-Ready Files", "Cost-Effective", "High Impact", "Versatile Applications"]} serviceOutput="Print-ready designs optimized for production." audience="Businesses, marketers, and organizations needing professional print materials." additionalType="https://schema.org/CreativeWork" />
      <CommonServicesHeroSection title="Print Design Services" subtitle="Design Services" description="Create impactful print materials that leave lasting impressions. From brochures to business cards, we design for print that works." ctaText="Book a Call" ctaLink="/contact" backgroundImage="/images/services/email-design/hero-banner.avif" />
      <SlidingLogos />
      <DynamicSupportSection subtitle="BUILT FOR MARKETING & BUSINESS" title="Print Materials That " highlightText="impress & convert" imageSrc="/images/services/email-design/about-email.avif" imageAlt="Print Design" description="Bring your brand to life with professional print design. Our designs are optimized for print production and ensure your materials stand out." additionalText="From brochures to business cards, we create print materials that communicate your message effectively, reinforce your brand, and drive results." />
      <DynamicCreativeSection subtitle="Print Excellence" title="Print Design Services" heighlightText="Professional " items={items} />
      <DynamicOurWorks />
      <DynamicStateSection title="Our Print Design Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialSlider />
      <PrintDesignFAQSection />
    </div>
  )
}

export default page

