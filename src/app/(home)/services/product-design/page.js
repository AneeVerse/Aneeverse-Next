import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import ProductDesignFAQSection from '@/components/services/product-design/ProductDesignFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import React from 'react'

export const metadata = {
  title: "Product Design | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Product Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/product-design`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Product Design | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    { name: "Product Development", about: "Designing products from concept to production with user-centered design principles.", image: "/images/services/email-design/email-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "Industrial Design", about: "Creating functional and aesthetically pleasing product designs for manufacturing.", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "Prototyping", about: "Building prototypes to test and validate product concepts before production.", image: "/images/services/email-design/email-html5.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "3D Modeling", about: "Creating detailed 3D models and renderings for product visualization.", image: "/images/services/email-design/email-design-templates.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "User Research", about: "Conducting research to understand user needs and inform product design decisions.", image: "/images/services/email-design/email-newsletter-design.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "Design for Manufacturing", about: "Designing products optimized for efficient manufacturing and production.", image: "/images/services/email-design/email-ui-ux-audits.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
  ];

  const stats = [
    { value: "200+", description: "Products designed and brought to market." },
    { value: "85%", description: "Success rate in product launches." },
    { value: "50+", description: "Industries served with product design expertise." },
    { value: "100%", description: "Client satisfaction with design quality." },
  ];

  return (
    <div>
      <ServiceSchema serviceName="Product Design Services" serviceType="ProfessionalService" description="Transform your ideas into market-ready products with comprehensive product design services. From concept to production, we deliver solutions users love." slug="product-design" priceRange="$5000-$50000" category="Design Services" features={["Product Development", "Industrial Design", "Prototyping", "3D Modeling", "User Research", "Manufacturing Design", "CAD Design", "Product Testing"]} benefits={["Market-Ready Products", "User-Centered Design", "Cost Efficiency", "Faster Time to Market", "Manufacturing Optimization", "Quality Assurance"]} serviceOutput="Complete product design ready for manufacturing and market launch." audience="Startups, manufacturers, inventors, and businesses developing physical or digital products." additionalType="https://schema.org/Product" />
      <CommonServicesHeroSection title="Product Design Services" subtitle="Design Services" description="Transform your ideas into market-ready products with comprehensive product design services. From concept to production, we deliver solutions users love." ctaText="Book a Call" ctaLink="/contact" backgroundImage="/images/services/email-design/hero-banner.avif" />
      <SlidingLogos />
      <DynamicSupportSection subtitle="BUILT FOR INNOVATORS" title="Products That " highlightText="innovate & succeed" imageSrc="/images/services/email-design/about-email.avif" imageAlt="Product Design" description="Bring your product ideas to life with expert product design services. Our team combines creativity with engineering expertise to create products that succeed in the market." additionalText="From initial concept to final production, we handle every aspect of product design, ensuring your product is functional, manufacturable, and market-ready." />
      <DynamicCreativeSection subtitle="Design Innovation" title="Product Design Services" heighlightText="Comprehensive " items={items} />
      <DynamicOurWorks />
      <DynamicStateSection title="Our Product Design Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialSlider />
      <ProductDesignFAQSection />
    </div>
  )
}

export default page

