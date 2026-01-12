import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import MarketingStrategyFAQSection from '@/components/services/marketing-strategy/MarketingStrategyFAQSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import TestimonialSlider from '@/components/about/TestimonialSlider'
import { FaCompass, FaBullseye, FaRocket, FaCommentDots, FaChartLine, FaThLarge } from "react-icons/fa"
import { client } from "@/sanity/lib/client"
import { getPortfolioWorksQuery, getCustomerStoriesQuery } from "@/sanity/lib/queries"
import { urlForImage } from "@/sanity/lib/image"
import React from 'react'

const getSanityImageUrl = (source, width = 800) => {
  if (!source) return "";
  try {
    return urlForImage(source).width(width).url();
  } catch (error) {
    return "";
  }
};

// metadata
export const metadata = {
  title: "Marketing Strategy Services | Aneeverse",
  description: "Clear, creative strategy that powerfully guides growth. We deliver data-grounded marketing strategy that aligns your brand story with audience insights.",
  openGraph: {
    title: "Marketing Strategy Services | Aneeverse",
    description: "Clear, creative strategy that powerfully guides growth. We deliver data-grounded marketing strategy that aligns your brand story with audience insights.",
    url: `https://aneeverse.com/services/marketing-strategy`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Marketing Strategy Services | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Strategy Services | Aneeverse",
    description: "Clear, creative strategy that powerfully guides growth. We deliver data-grounded marketing strategy that aligns your brand story with audience insights.",
    image: "/images/meta/phone.avif",
  },
}

const page = async () => {
  // Fetch projects for DynamicOurWorks
  let projects = [];
  try {
    const [works, stories] = await Promise.all([
      client.fetch(getPortfolioWorksQuery),
      client.fetch(getCustomerStoriesQuery)
    ]);

    const mappedWorks = works.map((item) => ({
      image: getSanityImageUrl(item.thumbnailImage || item.mainImage, 1200),
      title: item.title,
      url: `/works/${item.slug.current}`,
      description: item.servicesProvided?.join(", ") || item.shortDescription || "",
    }));

    const mappedStories = stories.map((story) => ({
      image: getSanityImageUrl(story.mainImage, 1200),
      title: story.projectTitle || story.title,
      url: `/customer-stories/${story.slug.current}`,
      description: story.servicesProvided?.join(", ") || story.shortDescription || "",
    }));

    projects = [...mappedWorks, ...mappedStories];
  } catch (error) {
    console.error('Error fetching projects for marketing strategy page:', error);
  }

  const scrollServices = [
    { title: "Brand positioning & messaging", image: "/images/services/website/website-strategy.avif" },
    { title: "Audience insights & segmentation", image: "/images/services/website/ux-ui-audit.avif" },
    { title: "Content strategy & planning", image: "/images/services/website/content-development.avif" },
    { title: "Go-to-market (GTM) frameworks", image: "/images/services/website/design-systems.avif" },
    { title: "Channel & campaign strategy", image: "/images/services/website/webflow-development.avif" },
    { title: "Performance measurement & analytics", image: "/images/services/website/website-design.avif" },
    { title: "Brand growth playbooks", image: "/images/services/website/landing-page-design.avif" },
  ];

  const items = [
    { name: "Brand positioning & messaging", about: "Define how your brand should be seen, heard, and remembered in your market.", image: "/images/services/website/website-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "Audience segmentation & insights", about: "Identify and prioritize customer segments with real revenue potential.", image: "/images/services/website/ux-ui-audit.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "Competitive landscape analysis", about: "Understand your market and differentiate with strategic advantage.", image: "/images/services/website/website-strategy.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "Go-to-Market (GTM) planning", about: "A roadmap for successful product launches and market entry.", image: "/images/services/website/landing-page-design.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "Content strategy & topic planning", about: "Align story, topics, and content output to strategic goals.", image: "/images/services/website/content-development.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "Channel mix & engagement strategy", about: "Optimize where and how you reach prospects and customers.", image: "/images/services/website/webflow-development.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
    { name: "Performance measurement frameworks", about: "Metrics and dashboards that track what actually matters.", image: "/images/services/website/seo-optimization.png", bgColor: "bg-[#e7f9d1]", textColor: "text-[#365314]" },
    { name: "Campaign planning & roadmaps", about: "Strategic plans for seasonal, product, and audience growth campaigns.", image: "/images/services/website/website-illustrations.avif", bgColor: "bg-[#f6edf9]", textColor: "text-[#4a124f]" },
    { name: "Customer journey mapping", about: "Strategic visualization of how prospects become loyal customers.", image: "/images/services/website/ux-ui-audit.avif", bgColor: "bg-[#ffd6cc]", textColor: "text-[#4a1c0f]" },
    { name: "Marketing playbooks", about: "Practical, repeatable guides tailored to your team and goals.", image: "/images/services/website/website-strategy.avif", bgColor: "bg-[#e6f3ff]", textColor: "text-[#003366]" },
  ];

  const stats = [
    { value: "500+", description: "Strategic frameworks delivered." },
    { value: "40%", description: "Average increase in campaign ROI." },
    { value: "100%", description: "Focus on data-driven growth." },
    { value: "24/7", description: "Market and audience monitoring." },
  ];

  return (
    <div>
      <ServiceSchema
        serviceName="Marketing Strategy Services"
        serviceType="ProfessionalService"
        description="Aneeverse delivers practical, data-grounded marketing strategy that aligns your brand story, audience insights, and campaign plans for measurable impact."
        slug="marketing-strategy"
        priceRange="$2000-$10000"
        category="Marketing Services"
        features={[
          "Brand Positioning & Messaging",
          "Audience Insights & Segmentation",
          "Content Strategy & Planning",
          "Go-to-market (GTM) Frameworks",
          "Channel & Campaign Strategy",
          "Performance Measurement & Analytics",
          "Brand Growth Playbooks"
        ]}
        benefits={[
          "Clear Strategic Direction",
          "Data-Grounded Insights",
          "Measurable Growth Impact",
          "Aligned Brand Story",
          "Optimized Resource Allocation",
          "Repeatable Playbooks"
        ]}
        serviceOutput="Actionable marketing strategy, audience frameworks, and performance dashboards."
        audience="Businesses seeking strategic clarity, better ROI, and data-driven growth plans."
        additionalType="https://schema.org/ProfessionalService"
      />
      <CommonServicesHeroSection
        title="Clear, creative strategy that powerfully guides growth"
        subtitle="MARKETING STRATEGY SERVICES"
        description="Aneeverse delivers practical, data-grounded marketing strategy that aligns your brand story, audience insights, and campaign plans for measurable impact. From foundational positioning to in-flight performance optimization, we help you turn goals into actionable plans that accelerate customer acquisition and strengthen market presence."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/website/hero-banner.avif"
        scrollServices={scrollServices}
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Strategy before tactics"
        title="Better outcomes start with a "
        highlightText="plan that matters"
        imageSrc="/images/services/website/about-web.avif"
        imageAlt="Marketing Strategy"
        description="Without a clear marketing strategy, execution becomes chaotic. Fragmented messaging, inconsistent campaigns, and wasted budget slow growth and obscure what resonates with your audience."
        additionalText="Strategy clarifies your brand’s unique value, target customers, and the channels and content that drive results. Aneeverse helps you connect business goals with strategic insights so every campaign and creative touchpoint is intentional, measurable, and aligned with business momentum."
      />
      <DynamicCreativeSection
        subtitle="What we deliver"
        title="Strategic clarity for every marketing goal"
        heighlightText=""
        description="From foundational frameworks to performance audits and campaign playbooks, we build strategies that connect your brand promise with customer behavior, market dynamics, and measurable growth."
        items={items}
      />
      <ChannelTailoredSection
        subtitle="Strategy that powers execution"
        title="Marketing plans that are built to perform"
        titleHighlight="built to perform"
        description="A good strategy gives direction to every campaign, creative asset, and channel choice-so your marketing efforts aren’t a set of disconnected actions but a coordinated engine for growth."
        channels={[
          {
            title: "Brand identity strategy",
            subtitle: "Where your value meets the minds and hearts of your customers.",
            icon: <FaCompass className="w-8 h-8" />,
          },
          {
            title: "Audience & segmentation plans",
            subtitle: "Tactical insights into who to target, how, and why.",
            icon: <FaBullseye className="w-8 h-8" />,
          },
          {
            title: "GTM and launch strategies",
            subtitle: "Plans that make introductions impactful and measurable.",
            icon: <FaRocket className="w-8 h-8" />,
          },
          {
            title: "Content & messaging frameworks",
            subtitle: "Story frameworks that speak to user intent and stage.",
            icon: <FaCommentDots className="w-8 h-8" />,
          },
          {
            title: "Channel optimization strategy",
            subtitle: "Maximize impact across organic, paid, and owned channels.",
            icon: <FaChartLine className="w-8 h-8" />,
          },
          {
            title: "Performance dashboards",
            subtitle: "Reporting to evaluate strategy effectiveness in real time.",
            icon: <FaThLarge className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="how we work"
        title="From insight to strategy to "
        titleHighlight="measurable impact"
        description="Our structured approach ensures strategy is grounded in your reality, aligned to business outcomes, and ready for execution."
        steps={[
          {
            number: "1",
            title: "Discovery & business goals",
            subtitle: "Understand your brand, audience, and success metrics.",
          },
          {
            number: "2",
            title: "Research & insights",
            subtitle: "Market, competitor, and audience analysis reveal key strategic opportunities.",
          },
          {
            number: "3",
            title: "Strategy formulation",
            subtitle: "Create positioning, messaging, channel, and content strategies that work together.",
          },
          {
            number: "4",
            title: "Tactical planning",
            subtitle: "Translate strategy into actionable campaign and execution plans.",
          },
          {
            number: "5",
            title: "Optimize & measure",
            subtitle: "Track performance, refine hypotheses, and improve strategy over time.",
          },
        ]}
      />
      <DynamicOurWorks projects={projects} />
      <DynamicStateSection
        title="Our Marketing Strategy Impact"
        subtitle="PROVEN RESULTS"
        stats={stats}
      />
      <TestimonialSlider />
      <MarketingStrategyFAQSection />
    </div>
  )
}

export default page
