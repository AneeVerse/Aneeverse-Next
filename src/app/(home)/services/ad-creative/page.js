import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import AdCreativeFAQSection from '@/components/services/ad-creative/AdCreativeFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import React from 'react'

export const metadata = {
  title: "Ad Creative | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Ad Creative | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/ad-creative`,
    images: [
      {
        url: "/images/meta/phone.avif",
        width: 1200,
        height: 630,
        alt: "Ad Creative | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ad Creative | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "Social Media Ads",
      about: "Creating eye-catching social media ad creatives that capture attention and drive engagement across all platforms.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Display Ad Design",
      about: "Designing compelling display ads that stand out and convert across various digital platforms and websites.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Video Ad Creatives",
      about: "Producing engaging video ad content that tells your brand story and drives action.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Banner Ad Design",
      about: "Crafting professional banner ads optimized for various sizes and placements.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Retargeting Ad Creatives",
      about: "Designing effective retargeting ads that bring visitors back and convert them into customers.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Native Ad Design",
      about: "Creating native ad creatives that seamlessly blend with content while maintaining brand visibility.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
  ];

  const stats = [
    {
      value: "500+",
      description: "Ad campaigns created for clients across various industries.",
    },
    {
      value: "85%",
      description: "Average increase in click-through rates with our ad creatives.",
    },
    {
      value: "200+",
      description: "Brands trust us for their advertising creative needs.",
    },
    {
      value: "24/7",
      description: "Support and campaign optimization to ensure maximum performance.",
    },
  ];

  return (
    <div>
      <ServiceSchema
        serviceName="Ad Creative Services"
        serviceType="ProfessionalService"
        description="Create compelling ad creatives that capture attention, drive engagement, and convert. From social media ads to display advertising, we design campaigns that deliver results."
        slug="ad-creative"
        priceRange="$500-$3000"
        category="Digital Advertising"
        features={[
          "Social Media Ad Design",
          "Display Ad Creation",
          "Video Ad Production",
          "Banner Ad Design",
          "Retargeting Ad Creatives",
          "Native Ad Design",
          "A/B Testing",
          "Performance Optimization"
        ]}
        benefits={[
          "Higher Click-Through Rates",
          "Increased Conversion Rates",
          "Better Brand Recognition",
          "Improved Ad Performance",
          "Professional Design Quality",
          "Multi-Platform Optimization"
        ]}
        serviceOutput="Professionally designed ad creatives optimized for performance across all digital platforms."
        audience="Marketing teams, agencies, e-commerce businesses, SaaS companies, and brands looking to improve their advertising performance."
        additionalType="https://schema.org/CreativeWork"
      />
      <CommonServicesHeroSection
        title="Ad Creative Services"
        subtitle="Creative Services"
        description="Create compelling ad creatives that capture attention, drive engagement, and convert. From social media ads to display advertising, we design campaigns that deliver results."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/email-design/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="BUILT FOR MARKETING & CREATIVE TEAMS"
        title="Ad Creatives That "
        highlightText="convert & engage"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Ad Creative Services"
        description="Stand out in crowded digital spaces with ad creatives that capture attention and drive action. Our team combines strategic thinking with creative excellence to deliver ads that perform."
        additionalText="From social media campaigns to display advertising, we create visually compelling ads that resonate with your target audience and deliver measurable results."
      />
      <DynamicCreativeSection
        subtitle="Creative Excellence"
        title="Ad Creative Services"
        heighlightText="Comprehensive "
        items={items}
      />
      <DynamicOurWorks />
      <DynamicStateSection
        title="Our Ad Creative Impact"
        subtitle="PROVEN RESULTS"
        stats={stats}
      />
      <TestimonialSlider />
      <AdCreativeFAQSection />
    </div>
  )
}

export default page

