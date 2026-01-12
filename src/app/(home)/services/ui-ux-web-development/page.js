import TestimonialsSection from '@/components/home/TestimonialsSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import UIUXWebDevelopmentFAQSection from '@/components/services/ui-ux-web-development/UIUXWebDevelopmentFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaMousePointer, FaSearch, FaPalette, FaLaptopCode, FaHandPointer, FaTachometerAlt } from "react-icons/fa"
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
  title: "UI, UX & Web Development Services | Aneeverse",
  description: "Web experiences that look stunning and perform flawlessly. We craft user-centered UI, intuitive UX, and high-performance websites that drive results.",
  openGraph: {
    title: "UI, UX & Web Development Services | Aneeverse",
    description: "Web experiences that look stunning and perform flawlessly. We craft user-centered UI, intuitive UX, and high-performance websites that drive results.",
    url: `https://aneeverse.com/services/ui-ux-web-development`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "UI, UX & Web Development Services | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI, UX & Web Development Services | Aneeverse",
    description: "Web experiences that look stunning and perform flawlessly. We craft user-centered UI, intuitive UX, and high-performance websites that drive results.",
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
    console.error('Error fetching projects for ui-ux-web-development page:', error);
  }

  // Scrolling services for hero section
  const scrollServices = [
    { title: "UI design", image: "/images/services/website/website-design.avif" },
    { title: "UX research & strategy", image: "/images/services/website/ux-ui-audit.avif" },
    { title: "Responsive web development", image: "/images/services/website/webflow-development.avif" },
    { title: "Interactive prototypes", image: "/images/services/website/design-systems.avif" },
    { title: "Landing page design", image: "/images/services/website/landing-page-design.avif" },
    { title: "Mobile-first web design", image: "/images/services/website/website-illustrations.avif" },
    { title: "Web performance & optimization", image: "/images/services/website/website-strategy.avif" },
  ];
  const items = [
    {
      name: "UI design",
      about: "Visually engaging, brand-aligned interfaces that elevate user experience across your digital products.",
      image: "/images/services/website/website-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "UX research & strategy",
      about: "User testing, persona mapping, and strategic UX planning to ensure designs are grounded in real needs.",
      image: "/images/services/website/ux-ui-audit.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Responsive web development",
      about: "Fast, flexible websites that adapt beautifully to desktop, tablet, and mobile screens.",
      image: "/images/services/website/webflow-development.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Landing page design",
      about: "Conversion-focused landing pages that turn visitors into leads, trials, and customers.",
      image: "/images/services/website/landing-page-design.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Interactive prototypes",
      about: "Clickable prototypes for testing flows, validating features, and aligning teams before development.",
      image: "/images/services/website/design-systems.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Mobile-first design",
      about: "Interfaces optimized for small screens without sacrificing performance or aesthetics.",
      image: "/images/services/website/website-illustrations.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "UX audits & optimization",
      about: "Reviews of existing interfaces with actionable insights to improve usability and conversions.",
      image: "/images/services/website/ux-ui-audit.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Web performance tuning",
      about: "Speed improvements, lazy-loading, and optimization for search and engagement.",
      image: "/images/services/website/website-strategy.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
    {
      name: "Accessibility design",
      about: "Web interfaces designed to meet accessibility standards and support all users.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-[#ffd6cc]",
      textColor: "text-[#4a1c0f]",
    },
    {
      name: "Frontend development",
      about: "Pixel-perfect implementation using modern frameworks, clean code, and scalable components.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#e6f3ff]",
      textColor: "text-[#003366]",
    },
  ];

  const stats = [
    { value: "500+", description: "Digital experiences designed and developed." },
    { value: "40%", description: "Average increase in user engagement and conversions." },
    { value: "100%", description: "Pixel-perfect and mobile-responsive layouts." },
    { value: "24/7", description: "Strategic support for product evolution." },
  ];

  return (
    <div>
      <ServiceSchema
        serviceName="UI, UX & Web Development"
        serviceType="ProfessionalService"
        description="Aneeverse crafts user-centered UI, intuitive UX, and high-performance websites that delight users and drive business results. From concept to pixel-perfect code."
        slug="ui-ux-web-development"
        priceRange="$3000-$50000"
        category="Design & Development"
        features={[
          "UI design",
          "UX research & strategy",
          "Responsive web development",
          "Interactive prototypes",
          "Landing page design",
          "Mobile-first web design",
          "Web performance & optimization"
        ]}
        benefits={[
          "Enhanced User Satisfaction",
          "Higher Conversion Rates",
          "Faster Page Load Times",
          "Seamless Cross-Device Experience",
          "Professional Brand Credibility",
          "Scalable Component Libraries"
        ]}
        serviceOutput="Visually stunning, high-performance website or product interface."
        audience="Product founders, marketing teams, and businesses seeking a professional web presence."
        additionalType="https://schema.org/SoftwareApplication"
      />
      <CommonServicesHeroSection
        title="Web experiences that look stunning and perform flawlessly"
        subtitle="UI, UX & Web Development Services"
        description="Aneeverse crafts user-centered UI, intuitive UX, and high-performance websites that delight users and drive business results. Whether you’re launching a new web product, redesigning an existing site, or building interfaces for SaaS, eCommerce, or enterprise platforms, we blend creativity with engineering precision to build digital experiences that work-and convert."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/email-design/hero-banner.avif"
        scrollServices={scrollServices}
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="First impressions are everything"
        title="Beautiful design starts with understanding "
        highlightText="users"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="UI UX Web Development"
        description="A site that looks good but feels confusing will lose users before they engage. Poor structure, unclear navigation, and inconsistent UI erode trust and conversions."
        additionalText="You need more than pretty screens-you need intuitive design that guides users toward action. From UX strategy and interaction design to polished UI and pixel-perfect implementation, our team bridges design and development to deliver web experiences your audience loves."
      />
      <DynamicCreativeSection
        subtitle="What we deliver"
        title="End-to-end UI, UX, and web development"
        heighlightText=""
        description="We build web products and interfaces that are visually compelling, easy to use, and engineered to perform across devices and platforms."
        items={items}
      />
      <ChannelTailoredSection
        subtitle="Designed for every screen and every user"
        title="Web experiences that feel effortless"
        titleHighlight="effortless"
        description="From first click to final conversion, we deliver UI and UX that makes interactions intuitive, enjoyable, and impactful."
        channels={[
          {
            title: "Conversion-focused web design",
            subtitle: "Design and build web pages that guide users toward key actions and business goals.",
            icon: <FaMousePointer className="w-8 h-8" />,
          },
          {
            title: "User experience strategy",
            subtitle: "Research-driven UX plans that reduce friction and increase engagement.",
            icon: <FaSearch className="w-8 h-8" />,
          },
          {
            title: "Brand-aligned UI",
            subtitle: "Interfaces that reflect your brand’s tone, look, and feel consistently across screens.",
            icon: <FaPalette className="w-8 h-8" />,
          },
          {
            title: "Responsive development",
            subtitle: "Web builds that look great and work perfectly across devices.",
            icon: <FaLaptopCode className="w-8 h-8" />,
          },
          {
            title: "Prototyping & testing",
            subtitle: "Early interactive models to validate design decisions and speed up development.",
            icon: <FaHandPointer className="w-8 h-8" />,
          },
          {
            title: "Performance & optimization",
            subtitle: "Speed and usability upgrades to boost conversions and SEO value.",
            icon: <FaTachometerAlt className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="HOW WE WORK"
        title="From idea to live website without friction"
        titleHighlight="friction"
        description="Our design-driven development process keeps stakeholders aligned, users happy, and projects on time."
        steps={[
          {
            number: "1",
            title: "Discovery & strategy",
            subtitle: "Deep dive into business goals, user needs, and design requirements.",
          },
          {
            number: "2",
            title: "UX planning & wireframes",
            subtitle: "Structure your product with clear user flows and prioritized features.",
          },
          {
            number: "3",
            title: "Visual UI design",
            subtitle: "Craft interfaces with brand-aligned visuals and intuitive layouts.",
          },
          {
            number: "4",
            title: "Development & QA",
            subtitle: "Build pixel-perfect, performant web experiences with thorough testing.",
          },
          {
            number: "5",
            title: "Launch & iterate",
            subtitle: "Deploy your web product confidently and refine based on real user feedback.",
          },
        ]}
      />
      <DynamicOurWorks projects={projects} />
      <DynamicStateSection title="Our Web Development Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialsSection />
      <UIUXWebDevelopmentFAQSection />
    </div>
  )
}

export default page

