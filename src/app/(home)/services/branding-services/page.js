import TestimonialsSection from '@/components/home/TestimonialsSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import BrandingServicesFAQSection from '@/components/services/branding-services/BrandingServicesFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaFingerprint, FaDesktop, FaLayerGroup, FaBoxOpen, FaTshirt, FaBuilding } from "react-icons/fa"
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
  title: "Branding System & Merchandise | Aneeverse",
  description: "Complete brand identity that works everywhere. From comprehensive brand systems to custom merchandise, we build cohesive visual languages that make your brand unforgettable.",
  openGraph: {
    title: "Branding System & Merchandise | Aneeverse",
    description: "Complete brand identity that works everywhere. From comprehensive brand systems to custom merchandise, we build cohesive visual languages that make your brand unforgettable.",
    url: `https://aneeverse.com/services/branding-services`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Branding System & Merchandise | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding System & Merchandise | Aneeverse",
    description: "Complete brand identity that works everywhere. From comprehensive brand systems to custom merchandise, we build cohesive visual languages that make your brand unforgettable.",
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
    console.error('Error fetching projects for branding-services page:', error);
  }

  // Scrolling services for hero section
  const scrollServices = [
    { title: "Brand strategy & positioning", image: "/images/services/website/website-strategy.avif" },
    { title: "Logo & visual identity design", image: "/images/services/website/website-design.avif" },
    { title: "Brand guidelines & style guides", image: "/images/services/website/design-systems.avif" },
    { title: "Design systems & component libraries", image: "/images/services/website/ux-ui-audit.avif" },
    { title: "Packaging design", image: "/images/services/website/landing-page-design.avif" },
    { title: "Merchandise & apparel design", image: "/images/services/website/website-illustrations.avif" },
    { title: "Brand refresh & evolution", image: "/images/services/website/webflow-development.avif" },
  ];

  const items = [
    {
      name: "Complete brand identity system",
      about: "Logo, color palette, typography, and visual language that work seamlessly across every medium and application",
      image: "/images/services/website/website-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Brand guidelines & style guide",
      about: "Comprehensive playbook ensuring every team member creates on-brand assets every time",
      image: "/images/services/website/website-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Design system & component library",
      about: "Reusable UI components, icons, and patterns that speed up development while maintaining consistency",
      image: "/images/services/website/design-systems.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Packaging design",
      about: "Product packaging that stands out on shelves and reinforces your brand positioning",
      image: "/images/services/website/landing-page-design.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Merchandise & apparel design",
      about: "Branded swag, employee uniforms, and promotional items that become walking advertisements",
      image: "/images/services/website/website-illustrations.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Brand refresh & evolution",
      about: "Modernizing established brands while preserving equity and customer recognition",
      image: "/images/services/website/webflow-development.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Marketing collateral suite",
      about: "Business cards, brochures, signage, and print materials that extend your brand identity",
      image: "/images/services/website/website-strategy.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Digital brand assets",
      about: "Social media templates, email signatures, website graphics, and app icons",
      image: "/images/services/website/ux-ui-audit.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
    {
      name: "Environmental branding",
      about: "Office signage, trade show booths, and experiential brand installations",
      image: "/images/services/website/website-design.avif",
      bgColor: "bg-[#ffd6cc]",
      textColor: "text-[#4a1c0f]",
    },
    {
      name: "Product mockups & visualization",
      about: "Photorealistic renderings showing your brand applied across products and packaging",
      image: "/images/services/website/landing-page-design.avif",
      bgColor: "bg-[#e6f3ff]",
      textColor: "text-[#003366]",
    },
  ];

  const stats = [
    { value: "500+", description: "Brand identities created and transformed." },
    { value: "100%", description: "Consistency across all physical and digital touchpoints." },
    { value: "98%", description: "Client satisfaction with brand ecosystem delivery." },
    { value: "24/7", description: "Design support for brand evolution and marketing." },
  ];

  return (
    <div>
      <ServiceSchema
        serviceName="Branding System & Merchandise"
        serviceType="ProfessionalService"
        description="From comprehensive brand systems to custom merchandise that reinforces your identity, Aneeverse builds cohesive visual languages and physical touchpoints that make your brand unforgettable."
        slug="branding-services"
        priceRange="$5000-$50000"
        category="Branding & Merchandise"
        features={[
          "Brand strategy & positioning",
          "Logo & visual identity design",
          "Brand guidelines & style guides",
          "Design systems & component libraries",
          "Packaging design",
          "Merchandise & apparel design",
          "Brand refresh & evolution"
        ]}
        benefits={[
          "Global Brand Consistency",
          "Enhanced Customer Trust",
          "Scalable Design Systems",
          "Memorable Physical Touchpoints",
          "Professional Brand Positioning",
          "Efficient Asset Production"
        ]}
        serviceOutput="Complete brand ecosystem including visual identity, guidelines, design systems, and merchandise design."
        audience="Growth-stage startups, established brands, and businesses looking for a cohesive global identity."
        additionalType="https://schema.org/Brand"
      />
      <CommonServicesHeroSection
        title="Complete brand identity that works everywhere"
        subtitle="Branding System & Merchandise"
        description="From comprehensive brand systems to custom merchandise that reinforces your identity, Aneeverse builds cohesive visual languages and physical touchpoints that make your brand unforgettable across every customer interaction."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/email-design/hero-banner.avif"
        scrollServices={scrollServices}
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Inconsistent branding kills trust"
        title="Your brand should feel the same "
        highlightText="everywhere"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Branding System & Merchandise"
        description="Fragmented visual identity across digital, print, packaging, and merchandise creates confusion and erodes customer trust. Every touchpoint should reinforce the same brand promise."
        additionalText="Building and maintaining a cohesive brand system requires specialized expertise across multiple disciplines. Your team can't do it all, freelancers lack continuity, and agencies are too expensive. You need a partner who can deliver complete brand ecosystems that scale with your growth."
      />
      <DynamicCreativeSection
        subtitle="What we deliver"
        title="Your complete brand ecosystem-built to scale"
        heighlightText=""
        description="From foundational brand strategy to design systems, packaging, and merchandise-we create every visual element your brand needs to thrive across digital platforms, physical products, and customer touchpoints."
        items={items}
      />
      <ChannelTailoredSection
        subtitle="Every touchpoint covered"
        title="Brand consistency across every customer journey"
        titleHighlight=""
        description="From first digital impression to physical product experience, every interaction reinforces your brand promise through cohesive visual identity and messaging."
        channels={[
          {
            title: "Visual identity foundation",
            subtitle: "Logo suite, color systems, typography, and core visual elements that define your brand DNA",
            icon: <FaFingerprint className="w-8 h-8" />,
          },
          {
            title: "Digital brand system",
            subtitle: "Website patterns, app UI components, social templates, and digital asset libraries",
            icon: <FaDesktop className="w-8 h-8" />,
          },
          {
            title: "Print & collateral",
            subtitle: "Business cards, brochures, signage, proposals, and marketing materials",
            icon: <FaLayerGroup className="w-8 h-8" />,
          },
          {
            title: "Packaging design",
            subtitle: "Product boxes, labels, inserts, and unboxing experiences that delight customers",
            icon: <FaBoxOpen className="w-8 h-8" />,
          },
          {
            title: "Merchandise & apparel",
            subtitle: "Swag, uniforms, promotional items, and employee gifts that extend your reach",
            icon: <FaTshirt className="w-8 h-8" />,
          },
          {
            title: "Environmental graphics",
            subtitle: "Office branding, trade show booths, retail displays, and experiential installations",
            icon: <FaBuilding className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="HOW WE WORK"
        title="Brand systems delivered systematically"
        titleHighlight=""
        description="Our proven process creates comprehensive brand ecosystems that scale effortlessly-without the chaos of managing multiple vendors or specialists."
        steps={[
          {
            number: "1",
            title: "Brand strategy alignment",
            subtitle: "Deep dive into your positioning, values, audience, and competitive landscape to define your brand foundation",
          },
          {
            number: "2",
            title: "Visual identity creation",
            subtitle: "Develop core visual elements (logo, colors, typography) with multiple concepts for strategic review",
          },
          {
            number: "3",
            title: "System expansion",
            subtitle: "Build complete design system with components, templates, and applications across all mediums",
          },
          {
            number: "4",
            title: "Guidelines & documentation",
            subtitle: "Create comprehensive brand book with usage rules, dos/don'ts, and implementation templates",
          },
          {
            number: "5",
            title: "Production & rollout",
            subtitle: "Execute packaging, merchandise, and collateral production with quality control at every step",
          },
        ]}
      />
      <DynamicOurWorks projects={projects} />
      <DynamicStateSection title="Our Branding Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialsSection />
      <BrandingServicesFAQSection />
    </div>
  )
}

export default page

