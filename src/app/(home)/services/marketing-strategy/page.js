import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import MarketingStrategyFAQSection from '@/components/services/marketing-strategy/MarketingStrategyFAQSection'
import MarketingStrategyFeatureSection from '@/components/services/marketing-strategy/MarketingStrategyFeatureSection'
import MarketingStrategyStateSection from '@/components/services/marketing-strategy/MarketingStrategyStateSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaChartLine, FaUsers, FaBullseye, FaRocket, FaSearch, FaLightbulb } from "react-icons/fa"
import React from 'react'


// metadata
export const metadata = {
  title: "Marketing Strategy | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Marketing Strategy | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/marketing-strategy`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Marketing Strategy | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Strategy | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {

  const items = [
    {
      name: "Marketing insight projects",
      about: "Unlock deeper insights that drive your marketing strategies forward. Our expert strategists deliver tailored analyses to elevate your brand's performance.",
      image: "/images/services/marketing-strategy/marketing-insight-projects.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Marketing foundations insights",
      about: "Lay the groundwork for brand success with strategies that define your positioning and engage your audience.",
      image: "/images/services/marketing-strategy/marketing-foundations-insights.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Marketing planning projects",
      about: "Strategically plan impactful marketing initiatives that deliver measurable results and align with your business goals.",
      image: "/images/services/marketing-strategy/marketing-planning-projects.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },


  ];
  return (
    <div>
      <ServiceSchema
        serviceName="Marketing Strategy Services"
        serviceType="Service"
        description="Empower your business with data-driven marketing initiatives, plans, and exceptional insights from our team of expert consultants. Leverage our marketing strategy services for an on-demand marketing team extension."
        slug="marketing-strategy"
        priceRange="$1000-$5000"
        category="Digital Marketing"
        features={[
          "Marketing Insight Projects",
          "Marketing Foundations Insights",
          "Brand Positioning Strategy",
          "Competitive Analysis",
          "Target Audience Research",
          "Marketing Plan Development",
          "Performance Metrics Setup",
          "Strategic Consultation"
        ]}
        benefits={[
          "Data-Driven Decision Making",
          "Improved Brand Positioning",
          "Better Target Audience Understanding",
          "Increased Marketing ROI",
          "Competitive Advantage",
          "Clear Marketing Direction",
          "Measurable Growth",
          "Strategic Clarity"
        ]}
        serviceOutput="Comprehensive marketing strategy with actionable plans, strategic direction, and data-driven insights to enhance your brand's online presence and drive measurable results."
        audience="Businesses looking to improve their marketing effectiveness, startups needing strategic direction, established companies seeking growth, and marketing teams requiring expert guidance."
        additionalType="https://schema.org/ProfessionalService"
      />
      <CommonServicesHeroSection
        title="Marketing Strategy Services"
        subtitle="Creative Services"
        description=" Empower your business with data-driven marketing initiatives, plans, and exceptional insights from our team of expert consultants. Leverage Aneeverse's marketing strategy services for an on-demand marketing team extension."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/marketing-strategy/hero-banner.avif"

      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="BUILT FOR CREATIVE, PERFORMANCE & MARKETING TEAMS"
        title="Power-up your brand's  "
        highlightText=" marketing"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="marketing strategy"
        description=" In the fast-changing digital landscape, staying ahead requires strategic insight and expert guidance."
        additionalText=" Aneeverse marketing strategists create customized, data-driven strategies to enhance your brand’s online presence and drive measurable results.
       
         We focus on delivering actionable plans and strategic direction, empowering your marketing teams to achieve exceptional growth and visibility.
        "
      />


      <DynamicCreativeSection
        subtitle="Strategic Excellence"
        title=" marketing strategy services"
        heighlightText=" Full scale"
        items={items}
      />
      <ChannelTailoredSection
        subtitle="Strategies for every business need"
        title="Marketing strategies that work for your business"
        titleHighlight="your business"
        description="From brand positioning to campaign planning, we develop strategies tailored to your industry, audience, and goals."
        channels={[
          {
            title: "Brand Strategy",
            subtitle: "Develop compelling brand positioning and messaging that differentiates you in the market.",
            icon: <FaBullseye className="w-8 h-8" />,
          },
          {
            title: "Market Research",
            subtitle: "Deep insights into your audience, competitors, and market opportunities to inform strategy.",
            icon: <FaSearch className="w-8 h-8" />,
          },
          {
            title: "Campaign Planning",
            subtitle: "Strategic campaign plans that align with business objectives and drive measurable results.",
            icon: <FaRocket className="w-8 h-8" />,
          },
          {
            title: "Audience Segmentation",
            subtitle: "Identify and understand your target audiences to create more effective marketing strategies.",
            icon: <FaUsers className="w-8 h-8" />,
          },
          {
            title: "Performance Analytics",
            subtitle: "Set up metrics and analytics to track strategy effectiveness and optimize performance.",
            icon: <FaChartLine className="w-8 h-8" />,
          },
          {
            title: "Strategic Innovation",
            subtitle: "Creative strategies and innovative approaches that help you stand out and capture attention.",
            icon: <FaLightbulb className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="HOW WE WORK"
        title="From insights to action without the guesswork"
        titleHighlight="guesswork"
        description="Our strategic process combines data analysis, market research, and creative thinking to deliver actionable marketing strategies."
        steps={[
          {
            number: "1",
            title: "Discovery & Analysis",
            subtitle: "We analyze your business, market position, competitors, and audience to identify opportunities and challenges.",
          },
          {
            number: "2",
            title: "Strategic Planning",
            subtitle: "We develop comprehensive marketing strategies with clear objectives, tactics, and success metrics.",
          },
          {
            number: "3",
            title: "Strategy Review",
            subtitle: "We present strategies for your review and refinement, ensuring alignment with your business goals.",
          },
          {
            number: "4",
            title: "Implementation Roadmap",
            subtitle: "We create detailed implementation plans with timelines, resources, and milestones for execution.",
          },
          {
            number: "5",
            title: "Ongoing Optimization",
            subtitle: "We monitor performance, analyze results, and refine strategies to continuously improve outcomes.",
          },
        ]}
      />
       <DynamicOurWorks />      <MarketingStrategyFeatureSection />
      <MarketingStrategyStateSection />
      <MarketingStrategyFAQSection />



    </div>
  )
}

export default page
