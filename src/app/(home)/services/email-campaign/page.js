import TestimonialsSection from '@/components/home/TestimonialsSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import EmailCampaignFAQSection from '@/components/services/email-campaign/EmailCampaignFAQSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaTag, FaHandshake, FaEnvelope, FaSync, FaUsers, FaChartLine } from "react-icons/fa"
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
  title: "Email Design & Campaign Services | Aneeverse",
  description: "Emails that capture attention and drive meaningful engagement. We craft beautifully designed, strategically structured email campaigns that resonate with your audience.",
  openGraph: {
    title: "Email Design & Campaign Services | Aneeverse",
    description: "Emails that capture attention and drive meaningful engagement. We craft beautifully designed, strategically structured email campaigns that resonate with your audience.",
    url: `https://aneeverse.com/services/email-campaign`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Email Design & Campaign Services | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Design & Campaign Services | Aneeverse",
    description: "Emails that capture attention and drive meaningful engagement. We craft beautifully designed, strategically structured email campaigns that resonate with your audience.",
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
    console.error('Error fetching projects for email campaign page:', error);
  }

  const scrollServices = [
    { title: "Custom email design", image: "/images/services/website/website-design.avif" },
    { title: "Responsive email templates", image: "/images/services/website/ux-ui-audit.avif" },
    { title: "Email campaign planning", image: "/images/services/website/website-strategy.avif" },
    { title: "Automation & triggered sequences", image: "/images/services/website/webflow-development.avif" },
    { title: "List segmentation & personalization", image: "/images/services/website/design-systems.avif" },
    { title: "Performance analytics & optimization", image: "/images/services/website/website-illustrations.avif" },
    { title: "Template systems & reusable components", image: "/images/services/website/content-development.avif" },
  ];

  const items = [
    { name: "Custom email design", about: "Branded, high-impact templates crafted to match your tone and goals.", image: "/images/services/website/website-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "Responsive email templates", about: "Mobile-first designs that look great on every device.", image: "/images/services/website/ux-ui-audit.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "Email campaign planning", about: "Strategically planned campaign flows that guide users through key actions.", image: "/images/services/website/website-strategy.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "Drip & nurture sequences", about: "Automated email series that educate, engage, and convert at the right pace.", image: "/images/services/website/webflow-development.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "List segmentation & targeting", about: "Tailored messaging for specific segments to increase relevance and performance.", image: "/images/services/website/design-systems.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "A/B testing & optimization", about: "Test subject lines and designs to maximize open and click rates.", image: "/images/services/website/landing-page-design.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
    { name: "Triggered email automation", about: "Behavioral triggers that send timely messages based on actions.", image: "/images/services/website/website-illustrations.avif", bgColor: "bg-[#e7f9d1]", textColor: "text-[#365314]" },
    { name: "Analytics & performance reporting", about: "Tracking engagement, opens, clicks, and conversions to improve outcomes.", image: "/images/services/website/seo-optimization.png", bgColor: "bg-[#f6edf9]", textColor: "text-[#4a124f]" },
    { name: "Reusable email systems", about: "Build modular templates that scale with your campaigns.", image: "/images/services/website/content-development.avif", bgColor: "bg-[#ffd6cc]", textColor: "text-[#4a1c0f]" },
    { name: "Newsletter campaigns", about: "Informative and engaging newsletters that keep audiences connected.", image: "/images/services/website/local-seo.png", bgColor: "bg-[#e6f3ff]", textColor: "text-[#003366]" },
  ];

  const stats = [
    { value: "500k+", description: "Emails delivered monthly." },
    { value: "45%", description: "Average open rate for campaigns." },
    { value: "30%", description: "Increase in customer retention." },
    { value: "24/7", description: "Automated nurture sequences active." },
  ];

  return (
    <div>
      <ServiceSchema
        serviceName="Email Design & Campaign Services"
        serviceType="ProfessionalService"
        description="Aneeverse crafts beautifully designed, strategically structured email campaigns that resonate with your audience and deliver measurable results."
        slug="email-campaign"
        priceRange="$1000-$8000"
        category="Marketing Services"
        features={[
          "Custom Email Design",
          "Responsive Email Templates",
          "Email Campaign Planning",
          "Automation & Triggered Sequences",
          "List Segmentation & Personalization",
          "Performance Analytics & Optimization",
          "Template Systems & Reusable Components"
        ]}
        benefits={[
          "Capture Attention",
          "Drive Meaningful Engagement",
          "Cut Through Noise",
          "Boost Open Rates",
          "Nurture Customer Relationships",
          "Measureable Results"
        ]}
        serviceOutput="Visually compelling email layouts, automated campaigns, and engagement analytics."
        audience="Businesses looking to improve customer communication and drive sales through email."
        additionalType="https://schema.org/ProfessionalService"
      />
      <CommonServicesHeroSection
        title="Emails that capture attention and drive meaningful engagement"
        subtitle="EMAIL DESIGN & CAMPAIGN SERVICES"
        description="Aneeverse crafts beautifully designed, strategically structured email campaigns that resonate with your audience and deliver measurable results. From visually compelling layouts to targeted campaign execution and analysis, we help your emails cut through noise, boost open rates, and nurture customer relationships at scale."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/website/hero-banner.avif"
        scrollServices={scrollServices}
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Design meets strategy"
        title="Engagement starts with how your "
        highlightText="emails look and feel"
        imageSrc="/images/services/website/about-web.avif"
        imageAlt="Email Design & Campaign"
        description="A visually compelling email is more likely to be opened, read, and acted upon-but design alone isn’t enough. Emails that lack strategic flow, clarity, or audience relevance fail to drive clicks and conversions."
        additionalText="You need email experiences that align with your brand, speak directly to your audience’s needs, and guide them toward action. Whether you’re promoting products, sharing news, onboarding users, or coordinating lifecycle campaigns, our email design and execution approach ensures every message delivers both style and substance."
      />
      <DynamicCreativeSection
        subtitle="What we deliver"
        title="End-to-end email design and campaign execution"
        heighlightText=""
        description="From concept and design to campaign launch and analytics, we build professional email experiences that connect with your audience and drive results."
        items={items}
      />
      <ChannelTailoredSection
        subtitle="Designed to perform"
        title="Email experiences that convert"
        titleHighlight="convert"
        description="Great email campaigns combine persuasive design with campaign logic and analytics to maximize impact across audiences and channels."
        channels={[
          {
            title: "Promotional campaigns",
            subtitle: "Campaigns tailored to drive sales, launches, and product promotions.",
            icon: <FaTag className="w-8 h-8" />,
          },
          {
            title: "Onboarding sequences",
            subtitle: "Automated flows that welcome and activate new users.",
            icon: <FaHandshake className="w-8 h-8" />,
          },
          {
            title: "Transactional emails",
            subtitle: "Functional yet branded messages for receipts, confirmations, and updates.",
            icon: <FaEnvelope className="w-8 h-8" />,
          },
          {
            title: "Lifecycle & nurture campaigns",
            subtitle: "Series designed to retain users and build ongoing engagement.",
            icon: <FaSync className="w-8 h-8" />,
          },
          {
            title: "Segmented marketing emails",
            subtitle: "Personalized messages based on user behavior and interests.",
            icon: <FaUsers className="w-8 h-8" />,
          },
          {
            title: "Analytics & optimization",
            subtitle: "Insights and refinements to continually boost performance.",
            icon: <FaChartLine className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="how we work"
        title="From concept to inbox with "
        titleHighlight="less friction"
        description="Our email process blends creativity with analytics so you get campaigns that look great and outperform expectations."
        steps={[
          {
            number: "1",
            title: "Discovery & goals",
            subtitle: "We start by understanding your audience, objectives, and key metrics.",
          },
          {
            number: "2",
            title: "Strategy & content planning",
            subtitle: "Define flows, segments, send schedules, and message priorities.",
          },
          {
            number: "3",
            title: "Design & template development",
            subtitle: "Create visually appealing, brand-aligned email templates.",
          },
          {
            number: "4",
            title: "Campaign setup & testing",
            subtitle: "Configure campaign logic, triggers, and A/B tests before launch.",
          },
          {
            number: "5",
            title: "Launch & optimization",
            subtitle: "Deliver emails, monitor performance, and refine for continuous improvement.",
          },
        ]}
      />
      <DynamicOurWorks projects={projects} />
      <DynamicStateSection
        title="Our Email Marketing Impact"
        subtitle="PROVEN RESULTS"
        stats={stats}
      />
      <TestimonialsSection />
      <EmailCampaignFAQSection />
    </div>
  )
}

export default page
