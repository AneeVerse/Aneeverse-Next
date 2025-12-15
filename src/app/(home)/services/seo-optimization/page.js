import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import SeoFAQSection from '@/components/services/seo-optimization/SeoFAQSection'
import SeoStateSection from '@/components/services/seo-optimization/SeoStateSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaSearch, FaGlobe, FaMobile, FaChartLine, FaLink, FaFileAlt } from "react-icons/fa"
import React from 'react'




// metadata
export const metadata = {
  title: "Seo Optimization | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Seo Optimization | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/seo-optimization`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Seo Optimization | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seo Optimization | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}
const page = () => {
  const items = [
    {
      name: "SEO-Optimized Landing Pages",
      about: "Designing landing pages with keyword-rich content to boost search engine rankings and drive organic traffic.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Conversion Rate Optimization",
      about: "Crafting high-converting landing pages using data-driven insights, A/B testing, and UX enhancements.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Mobile-Responsive Design",
      about: "Ensuring that landing pages are fully responsive and provide seamless user experience across all devices.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "High-Quality Copywriting",
      about: "Creating compelling and persuasive content that aligns with your SEO strategy and engages visitors effectively.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Landing Page A/B Testing",
      about: "Using A/B testing to analyze different layouts, headlines, and CTA placements for better conversions.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "UX & SEO Performance Audits",
      about: "Conducting audits to identify areas of improvement in usability, SEO, and lead conversion strategy.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Interactive & Engaging Elements",
      about: "Enhancing landing pages with interactive elements, animations, and engaging visuals to increase dwell time.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Scalable Landing Page Systems",
      about: "Developing structured landing page design systems that maintain brand consistency and drive conversions.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];
  return (
    <div>
      <ServiceSchema 
        serviceName="SEO Optimization"
        serviceType="ProfessionalService"
        description="Comprehensive SEO optimization services to maximize search engine visibility, improve rankings, and drive quality organic traffic to your website."
        slug="services/seo-optimization"
        priceRange="₹15,000 - ₹1,50,000"
        category="Search Engine Optimization"
        features={[
          "Keyword Research & Analysis",
          "On-Page SEO Optimization",
          "Technical SEO Audits",
          "Content Optimization",
          "Link Building Strategies",
          "Local SEO Services",
          "SEO Performance Tracking",
          "Competitor Analysis"
        ]}
        benefits={[
          "Higher Search Rankings",
          "Increased Organic Traffic",
          "Better Online Visibility",
          "Improved User Experience",
          "Long-term Growth",
          "Cost-Effective Marketing"
        ]}
        serviceOutput="SEO-Optimized Website"
        audience="Businesses, E-commerce, Local Services"
        additionalType="https://schema.org/SearchEngineOptimization"
      />
      <CommonServicesHeroSection
        title="SEO Optimization Services"
        subtitle="Data-Driven SEO Strategies"
        description=" Maximize your search engine visibility with our cutting-edge SEO techniques.
                From keyword research to technical audits, we ensure your website ranks higher
                and attracts quality traffic."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"

      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="SEO Strategies for Maximum Visibility"
        title="SEO That "
        highlightText=" ranks & converts"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="SEO Strategies for Maximum Visibility"
        description=" Drive organic traffic and improve search rankings with our expert SEO solutions.
          We optimize websites for better visibility, engagement, and long-term success."
        additionalText=" From **technical SEO audits** to **keyword research** and **content optimization**,  
            our tailored strategies ensure that your brand gets discovered and ranks higher in SERPs."
      />


      <DynamicCreativeSection
        subtitle="Boost Your Online Presence"
        title=" Services"
        heighlightText=" seo-optimized"
        items={items}
      />
      <ChannelTailoredSection
        subtitle="SEO for every business type"
        title="SEO strategies that work for your business"
        titleHighlight="your business"
        description="From local businesses to e-commerce, we optimize websites for search engines to drive organic traffic and growth."
        channels={[
          {
            title: "Local SEO",
            subtitle: "Optimize for local search results to attract customers in your geographic area.",
            icon: <FaGlobe className="w-8 h-8" />,
          },
          {
            title: "E-commerce SEO",
            subtitle: "Product page optimization and technical SEO to improve visibility and sales for online stores.",
            icon: <FaMobile className="w-8 h-8" />,
          },
          {
            title: "Technical SEO",
            subtitle: "Fix technical issues, improve site speed, and optimize site structure for better rankings.",
            icon: <FaSearch className="w-8 h-8" />,
          },
          {
            title: "Content Optimization",
            subtitle: "Optimize existing content and create SEO-friendly content that ranks and converts.",
            icon: <FaFileAlt className="w-8 h-8" />,
          },
          {
            title: "Link Building",
            subtitle: "Build quality backlinks and improve domain authority to boost search rankings.",
            icon: <FaLink className="w-8 h-8" />,
          },
          {
            title: "Performance Tracking",
            subtitle: "Monitor rankings, traffic, and conversions with comprehensive SEO analytics and reporting.",
            icon: <FaChartLine className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="HOW WE WORK"
        title="From audit to rankings without the guesswork"
        titleHighlight="guesswork"
        description="Our SEO process combines technical expertise with strategic content optimization to improve your search visibility."
        steps={[
          {
            number: "1",
            title: "SEO Audit & Analysis",
            subtitle: "We conduct comprehensive audits to identify opportunities, issues, and areas for improvement.",
          },
          {
            number: "2",
            title: "Keyword Research & Strategy",
            subtitle: "We research keywords, analyze competition, and develop a strategic SEO plan aligned with your goals.",
          },
          {
            number: "3",
            title: "On-Page Optimization",
            subtitle: "We optimize content, meta tags, headings, and site structure to improve search visibility.",
          },
          {
            number: "4",
            title: "Technical & Off-Page SEO",
            subtitle: "We fix technical issues, improve site speed, and build quality backlinks to boost rankings.",
          },
          {
            number: "5",
            title: "Monitoring & Optimization",
            subtitle: "We track performance, analyze results, and continuously optimize to maintain and improve rankings.",
          },
        ]}
      />
       <DynamicOurWorks />      <SeoStateSection />
      <TestimonialSlider />
      <SeoFAQSection />

    </div>
  )
}

export default page
