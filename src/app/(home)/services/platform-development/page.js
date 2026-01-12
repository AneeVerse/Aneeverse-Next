import TestimonialsSection from '@/components/home/TestimonialsSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import PlatformDevelopmentFAQSection from '@/components/services/platform-development/PlatformDevelopmentFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaRocket, FaLayerGroup, FaCogs, FaProjectDiagram, FaCloudUploadAlt, FaShieldAlt } from "react-icons/fa"
import { client } from "@/sanity/lib/client"
import { getPortfolioWorksQuery, getCustomerStoriesQuery } from "@/sanity/lib/queries"
import { urlForImage } from "@/sanity/lib/image"
import React from 'react'

// Helper to get optimized Sanity image URL
const getSanityImageUrl = (image, maxWidth = 1200) => {
  if (!image) return "/images/home/works-ban-1.avif";
  try {
    return urlForImage(image, maxWidth).url();
  } catch (error) {
    console.error('Error generating Sanity image URL:', error);
    return "/images/home/works-ban-1.avif";
  }
};

export const metadata = {
  title: "Platform Development Services | Aneeverse",
  description: "Build powerful SaaS platforms that scale with your business. From rapid MVPs to enterprise-grade systems, we turn complex product ideas into scalable platforms.",
  openGraph: {
    title: "Platform Development Services | Aneeverse",
    description: "Build powerful SaaS platforms that scale with your business. From rapid MVPs to enterprise-grade systems, we turn complex product ideas into scalable platforms.",
    url: `https://aneeverse.com/services/platform-development`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Platform Development Services | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform Development Services | Aneeverse",
    description: "Build powerful SaaS platforms that scale with your business. From rapid MVPs to enterprise-grade systems, we turn complex product ideas into scalable platforms.",
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
    console.error('Error fetching projects for platform-development page:', error);
  }

  // Scrolling services for hero section
  const scrollServices = [
    { title: "SaaS platform development", image: "/images/services/website/website-design.avif" },
    { title: "MVP development", image: "/images/services/website/website-strategy.avif" },
    { title: "Cloud platform engineering", image: "/images/services/website/webflow-development.avif" },
    { title: "API and system integrations", image: "/images/services/website/design-systems.avif" },
    { title: "Internal tools and dashboards", image: "/images/services/website/website-illustrations.avif" },
    { title: "Platform modernization & re-engineering", image: "/images/services/website/ux-ui-audit.avif" },
    { title: "Ongoing product engineering & support", image: "/images/services/website/website-strategy.avif" },
  ];
  const items = [
    {
      name: "SaaS platform development",
      about: "End-to-end design and development of secure, scalable B2B SaaS platforms built for long-term growth.",
      image: "/images/services/website/website-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "MVP development",
      about: "Rapid product builds to validate ideas, attract early users, and launch investor-ready platforms fast.",
      image: "/images/services/website/website-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Cloud platform engineering",
      about: "Cloud-native systems optimized for performance, scalability, and high availability.",
      image: "/images/services/website/webflow-development.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Custom dashboards & internal tools",
      about: "Data platforms, admin panels, and internal systems that streamline operations and decision-making.",
      image: "/images/services/website/design-systems.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "API & system integrations",
      about: "Seamless connections between CRMs, payment gateways, analytics tools, and third-party services.",
      image: "/images/services/website/website-illustrations.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Platform modernization",
      about: "Rebuilding legacy systems into faster, more secure, and future-ready architectures.",
      image: "/images/services/website/ux-ui-audit.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Multi-tenant SaaS architecture",
      about: "Platforms designed to support multiple clients, roles, and data environments at scale.",
      image: "/images/services/website/landing-page-design.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Product infrastructure setup",
      about: "Backend systems, databases, authentication, and DevOps pipelines built for reliability.",
      image: "/images/services/website/website-strategy.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
    {
      name: "Performance & security optimization",
      about: "Speed, stability, and protection upgrades to support growth and compliance needs.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-[#ffd6cc]",
      textColor: "text-[#4a1c0f]",
    },
    {
      name: "Ongoing product development",
      about: "Long-term engineering support for feature expansion, maintenance, and scaling.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#e6f3ff]",
      textColor: "text-[#003366]",
    },
  ];

  const stats = [
    { value: "100+", description: "SaaS platforms and MVPs launched successfully." },
    { value: "99.9%", description: "System uptime and reliability for enterprise users." },
    { value: "10x", description: "Faster time-to-market compared to traditional agencies." },
    { value: "24/7", description: "Product engineering and support availability." },
  ];

  return (
    <div>
      <ServiceSchema
        serviceName="Platform Development Services"
        serviceType="ProfessionalService"
        description="Aneeverse designs and develops high-performance digital platforms for B2B SaaS companies. From rapid MVPs to enterprise-grade systems."
        slug="platform-development"
        priceRange="$10000-$100000"
        category="SaaS Development"
        features={[
          "Custom SaaS platform development",
          "MVP and startup product builds",
          "Cloud-native application development",
          "API and system integrations",
          "Internal tools and dashboards",
          "Platform modernization and re-engineering",
          "Ongoing product engineering and support"
        ]}
        benefits={[
          "Startup-Fast Delivery",
          "Enterprise-Grade Scalability",
          "Security-First Architecture",
          "Reduced Technical Debt",
          "Cloud-Native Performance",
          "Seamless Ecosystem Integration"
        ]}
        serviceOutput="Market-ready, scalable SaaS platform or MVP."
        audience="B2B SaaS companies, startup founders, and enterprises."
        additionalType="https://schema.org/SoftwareApplication"
      />
      <CommonServicesHeroSection
        title="Build powerful SaaS platforms that scale with your business"
        subtitle="Platform Development Services"
        description="Aneeverse designs and develops high-performance digital platforms for B2B SaaS companies. From rapid MVPs to enterprise-grade systems, we turn complex product ideas into secure, scalable, and market-ready platforms-built fast, engineered for growth, and designed to evolve."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/email-design/hero-banner.avif"
        scrollServices={scrollServices}
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Built for real products"
        title="Great ideas fail without the right platform "
        highlightText="behind them"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Platform Development"
        description="Slow development, unstable systems, and poor architecture quietly kill SaaS products before they ever reach scale. Missed deadlines, tech debt, and constant rebuilds drain budgets and momentum."
        additionalText="Your in-house team is under pressure to move fast, but rushed decisions today become expensive problems tomorrow. Whether you’re launching an MVP or rebuilding a growing product, you need a platform partner who can move startup-fast while engineering for long-term performance, security, and scalability."
      />
      <DynamicCreativeSection
        subtitle="What we deliver"
        title="Platform development built for SaaS speed and scale"
        heighlightText=""
        description="From first product builds to complex multi-system platforms, we design, engineer, and optimize digital products that are reliable, secure, and ready to grow with your business."
        items={items}
      />
      <ChannelTailoredSection
        subtitle="Built around your product"
        title="Platforms designed for how SaaS businesses actually operate"
        titleHighlight="operate"
        description="We don’t just write code-we engineer systems that support growth, users, teams, and long-term product strategy."
        channels={[
          {
            title: "Startup SaaS products",
            subtitle: "MVPs and early platforms built to validate ideas, attract users, and raise funding.",
            icon: <FaRocket className="w-8 h-8" />,
          },
          {
            title: "Scalable B2B platforms",
            subtitle: "Robust SaaS systems designed to support thousands of users and complex workflows.",
            icon: <FaLayerGroup className="w-8 h-8" />,
          },
          {
            title: "Internal business platforms",
            subtitle: "Admin tools, CRM systems, analytics dashboards, and operational software.",
            icon: <FaProjectDiagram className="w-8 h-8" />,
          },
          {
            title: "Automation systems",
            subtitle: "Workflow platforms and integrations that reduce manual work and increase efficiency.",
            icon: <FaCogs className="w-8 h-8" />,
          },
          {
            title: "Product re-engineering",
            subtitle: "Platform rebuilds focused on speed, security, and long-term maintainability.",
            icon: <FaCloudUploadAlt className="w-8 h-8" />,
          },
          {
            title: "Long-term product support",
            subtitle: "Continuous development, optimization, and technical growth partnerships.",
            icon: <FaShieldAlt className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="HOW WE WORK"
        title="From idea to scalable platform without the chaos"
        titleHighlight="chaos"
        description="Our product-driven development process blends startup speed with serious engineering so you can launch faster, scale safely, and build confidently."
        steps={[
          {
            number: "1",
            title: "Product discovery",
            subtitle: "We understand your business goals, users, and product vision to define the right technical foundation.",
          },
          {
            number: "2",
            title: "Architecture & planning",
            subtitle: "We design platform structure, system flows, and scalability plans before writing production code.",
          },
          {
            number: "3",
            title: "Rapid development",
            subtitle: "Agile product sprints focused on shipping functional, testable builds quickly.",
          },
          {
            number: "4",
            title: "Platform hardening",
            subtitle: "Performance tuning, security implementation, and scalability optimization.",
          },
          {
            number: "5",
            title: "Scale & evolve",
            subtitle: "Ongoing development support to expand features, improve systems, and support business growth.",
          },
        ]}
      />
      <DynamicOurWorks projects={projects} />
      <DynamicStateSection
        title="Our Platform Development Impact"
        subtitle="PROVEN RESULTS"
        stats={stats}
      />
      <TestimonialsSection />
      <PlatformDevelopmentFAQSection />
    </div>
  )
}

export default page

