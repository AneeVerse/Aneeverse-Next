import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import PackingMerchandiseDesignFAQSection from '@/components/services/packing-merchandise-design/PackingMerchandiseDesignFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import React from 'react'

export const metadata = {
  title: "Packing & Merchandise Design | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Packing & Merchandise Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/packing-merchandise-design`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Packing & Merchandise Design | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Packing & Merchandise Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    { name: "Product Packaging", about: "Designing packaging that protects products while creating memorable unboxing experiences.", image: "/images/services/email-design/email-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "Retail Design", about: "Creating retail packaging and displays that attract customers and drive sales.", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "Brand Identity", about: "Ensuring packaging reflects your brand identity and communicates your values effectively.", image: "/images/services/email-design/email-html5.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "Label Design", about: "Creating attractive labels that inform consumers and comply with regulations.", image: "/images/services/email-design/email-design-templates.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "Merchandise Design", about: "Designing merchandise and promotional items that enhance brand awareness.", image: "/images/services/email-design/email-newsletter-design.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "Sustainable Packaging", about: "Designing eco-friendly packaging solutions that reduce environmental impact.", image: "/images/services/email-design/email-ui-ux-audits.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
  ];

  const stats = [
    { value: "300+", description: "Packaging and merchandise designs created." },
    { value: "100%", description: "Print-ready designs with production specifications." },
    { value: "90%", description: "Client satisfaction with packaging quality." },
    { value: "24/7", description: "Support for packaging design needs." },
  ];

  return (
    <div>
      <ServiceSchema serviceName="Packing & Merchandise Design Services" serviceType="ProfessionalService" description="Create packaging and merchandise that protects products and strengthens your brand. From product packaging to retail displays." slug="packing-merchandise-design" priceRange="$1000-$10000" category="Design Services" features={["Product Packaging", "Retail Design", "Brand Identity", "Label Design", "Merchandise Design", "Sustainable Packaging", "Unboxing Experiences", "Production Ready"]} benefits={["Brand Recognition", "Product Protection", "Retail Appeal", "Customer Experience", "Eco-Friendly Options", "Competitive Advantage"]} serviceOutput="Complete packaging and merchandise designs ready for production." audience="E-commerce businesses, retailers, manufacturers, and brands needing packaging solutions." additionalType="https://schema.org/Product" />
      <CommonServicesHeroSection title="Packing & Merchandise Design" subtitle="Design Services" description="Create packaging and merchandise that protects products and strengthens your brand. From product packaging to retail displays." ctaText="Book a Call" ctaLink="/contact" backgroundImage="/images/services/email-design/hero-banner.avif" />
      <SlidingLogos />
      <DynamicSupportSection subtitle="BUILT FOR BRANDS & RETAILERS" title="Packaging That " highlightText="protects & sells" imageSrc="/images/services/email-design/about-email.avif" imageAlt="Packing & Merchandise Design" description="Design packaging that makes a lasting impression. Our packaging solutions protect products while creating memorable brand experiences that drive sales." additionalText="From product packaging to merchandise design, we create solutions that reflect your brand, attract customers, and enhance the unboxing experience." />
      <DynamicCreativeSection subtitle="Packaging Excellence" title="Packing & Merchandise Design Services" heighlightText="Professional " items={items} />
      <DynamicOurWorks />
      <DynamicStateSection title="Our Packaging Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialSlider />
      <PackingMerchandiseDesignFAQSection />
    </div>
  )
}

export default page

