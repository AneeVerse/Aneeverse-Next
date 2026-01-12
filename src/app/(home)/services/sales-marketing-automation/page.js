import TestimonialsSection from '@/components/home/TestimonialsSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import SalesMarketingAutomationFAQSection from '@/components/services/sales-marketing-automation/SalesMarketingAutomationFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaMagnet, FaBolt, FaProjectDiagram, FaTags, FaCogs, FaChartArea } from "react-icons/fa"
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

export const metadata = {
  title: "Sales & Marketing Automation Services | Aneeverse",
  description: "Automate your revenue engine for growth and efficiency. We build intelligent sales and marketing automation systems that eliminate manual tasks and streamline engagement.",
  openGraph: {
    title: "Sales & Marketing Automation Services | Aneeverse",
    description: "Automate your revenue engine for growth and efficiency. We build intelligent sales and marketing automation systems that eliminate manual tasks and streamline engagement.",
    url: `https://aneeverse.com/services/sales-marketing-automation`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Sales & Marketing Automation Services | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales & Marketing Automation Services | Aneeverse",
    description: "Automate your revenue engine for growth and efficiency. We build intelligent sales and marketing automation systems that eliminate manual tasks and streamline engagement.",
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
    console.error('Error fetching projects for automation page:', error);
  }

  const scrollServices = [
    { title: "Automated lead nurturing", image: "/images/services/website/website-strategy.avif" },
    { title: "CRM integration & workflows", image: "/images/services/website/ux-ui-audit.avif" },
    { title: "Drip campaign automation", image: "/images/services/website/content-development.avif" },
    { title: "Multi-channel campaign orchestration", image: "/images/services/website/website-illustrations.avif" },
    { title: "Behavioral segmentation & personalization", image: "/images/services/website/webflow-development.avif" },
    { title: "Sales process automation", image: "/images/services/website/website-design.avif" },
    { title: "Performance analytics & reporting", image: "/images/services/website/landing-page-design.avif" },
  ];

  const items = [
    { name: "Lead capture automation", about: "Trigger workflows the moment a new lead enters your ecosystem.", image: "/images/services/website/website-strategy.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "Drip campaign setup", about: "Automated sequences that nurture prospects through the buyer’s journey.", image: "/images/services/website/ux-ui-audit.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "CRM workflow integration", about: "Seamlessly connect systems to automate data syncs and task assignments.", image: "/images/services/website/content-development.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "Sales follow-up triggers", about: "Automated reminders and actions to keep engagement timely and consistent.", image: "/images/services/website/design-systems.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "Behavioral segmentation", about: "Group audiences based on actions and preferences for targeted campaigns.", image: "/images/services/website/webflow-development.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "Multi-channel orchestration", about: "Coordinate email, SMS, social, and digital ads with intelligent automation.", image: "/images/services/website/website-design.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
    { name: "Personalized messaging", about: "Dynamic content that adapts to user behavior and lifecycle stage.", image: "/images/services/website/landing-page-design.avif", bgColor: "bg-[#e7f9d1]", textColor: "text-[#365314]" },
    { name: "Lead scoring & grading", about: "Prioritize high-value prospects and automatically route them to sales.", image: "/images/services/website/website-illustrations.avif", bgColor: "bg-[#f6edf9]", textColor: "text-[#4a124f]" },
    { name: "Performance analytics dashboards", about: "Real-time insights to measure campaign ROI and automation impact.", image: "/images/services/website/local-seo.png", bgColor: "bg-[#ffd6cc]", textColor: "text-[#4a1c0f]" },
    { name: "Closed-loop reporting", about: "Tie revenue outcomes back to specific campaigns and workflows.", image: "/images/services/website/seo-optimization.png", bgColor: "bg-[#e6f3ff]", textColor: "text-[#003366]" },
  ];

  const stats = [
    { value: "300+", description: "Automation workflows implemented." },
    { value: "50%", description: "Average increase in sales efficiency." },
    { value: "35%", description: "Average boost in lead conversion rates." },
    { value: "24/7", description: "Continuously running revenue engines." },
  ];

  return (
    <div>
      <ServiceSchema
        serviceName="Sales & Marketing Automation Services"
        serviceType="ProfessionalService"
        description="Aneeverse builds intelligent sales and marketing automation systems that eliminate manual tasks, streamline engagement, and power data-driven growth."
        slug="sales-marketing-automation"
        priceRange="$2000-$15000"
        category="Marketing Services"
        features={[
          "Automated Lead Nurturing",
          "CRM Integration & Workflows",
          "Drip Campaign Automation",
          "Multi-channel Campaign Orchestration",
          "Behavioral Segmentation & Personalization",
          "Sales Process Automation",
          "Performance Analytics & Reporting"
        ]}
        benefits={[
          "Eliminate Manual Tasks",
          "Streamline Engagement",
          "Power Data-Driven Growth",
          "Align Sales & Marketing",
          "Increase Pipeline Velocity",
          "Improve Revenue Outcomes"
        ]}
        serviceOutput="Intelligent automation systems, CRM integrations, and personalized customer journeys."
        audience="Businesses looking to automate revenue engines and improve team efficiency."
        additionalType="https://schema.org/ProfessionalService"
      />
      <CommonServicesHeroSection
        title="Automate your revenue engine for growth and efficiency"
        subtitle="SALES & MARKETING AUTOMATION SERVICES"
        description="Aneeverse builds intelligent sales and marketing automation systems that eliminate manual tasks, streamline engagement, and power data-driven growth. From lead capture and nurturing to personalized campaigns and closed-loop reporting, we help businesses automate processes end-to-end so your teams can focus on strategy, not repetitive work."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/website/hero-banner.avif"
        scrollServices={scrollServices}
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Automation that drives growth"
        title="Sales and marketing shouldn’t "
        highlightText="operate in silos"
        imageSrc="/images/services/website/about-web.avif"
        imageAlt="Sales & Marketing Automation"
        description="Manual data entry, disconnected tools, and repetitive tasks slow your teams and fragment customer experiences. Without automation, leads fall through the cracks, prospects go cold, and your revenue engine loses momentum."
        additionalText="With the right strategy and systems in place, you can automate engagement across channels, nurture leads intelligently, and align sales with marketing for consistent pipeline velocity. Aneeverse combines automation tech with business logic so your revenue teams work smarter and revenue outcomes improve."
      />
      <DynamicCreativeSection
        subtitle="What we deliver"
        title="Intelligent automation for every stage of the funnel"
        heighlightText=""
        description="From lead capture to deal close, we implement automation that removes bottlenecks, personalizes customer journeys, and drives measurable results."
        items={items}
      />
      <ChannelTailoredSection
        subtitle="Built for real revenue acceleration"
        title="Automations that unify teams and amplify impact"
        titleHighlight="amplify impact"
        description="Effective automation doesn’t just run tasks - it strengthens sales-marketing alignment, accelerates pipeline progression, and delivers measurable ROI."
        channels={[
          {
            title: "Lead generation automation",
            subtitle: "Capture and qualify leads automatically through forms, landing pages, and triggers.",
            icon: <FaMagnet className="w-8 h-8" />,
          },
          {
            title: "Sales engagement automation",
            subtitle: "Trigger follow-ups, reminders, and tasks that keep deals moving forward.",
            icon: <FaBolt className="w-8 h-8" />,
          },
          {
            title: "Nurture campaign automation",
            subtitle: "Automated drip sequences that educate and warm prospects.",
            icon: <FaProjectDiagram className="w-8 h-8" />,
          },
          {
            title: "Personalization at scale",
            subtitle: "Customize messaging based on behavior, preferences, and lifecycle.",
            icon: <FaTags className="w-8 h-8" />,
          },
          {
            title: "CRM & tool sync",
            subtitle: "Keep your sales and marketing systems in perfect harmony.",
            icon: <FaCogs className="w-8 h-8" />,
          },
          {
            title: "Analytics & ROI reporting",
            subtitle: "Track performance, optimize campaigns, and understand what’s working.",
            icon: <FaChartArea className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="how we work"
        title="Seamless automation from strategy to "
        titleHighlight="execution"
        description="Our process turns your business logic into efficient systems that run in the background and drive scalable results."
        steps={[
          {
            number: "1",
            title: "Discovery & goal alignment",
            subtitle: "Align automation opportunities with business priorities and KPIs.",
          },
          {
            number: "2",
            title: "System audit & design",
            subtitle: "Evaluate current tools, workflows, and data flows to design an optimized plan.",
          },
          {
            number: "3",
            title: "Build & integrate",
            subtitle: "Implement automated sequences, CRM integrations, and cross-channel triggers.",
          },
          {
            number: "4",
            title: "QA & refinement",
            subtitle: "Test workflows end-to-end for stability, accuracy, and performance.",
          },
          {
            number: "5",
            title: "Monitor & optimize",
            subtitle: "Track results and fine-tune automation for continuous growth.",
          },
        ]}
      />
      <DynamicOurWorks projects={projects} />
      <DynamicStateSection title="Our Automation Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialsSection />
      <SalesMarketingAutomationFAQSection />
    </div>
  )
}

export default page
