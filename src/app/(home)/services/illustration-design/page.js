import TestimonialsSection from '@/components/home/TestimonialsSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import IllustrationDesignFAQSection from '@/components/services/illustration-design/IllustrationDesignFAQSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaBook, FaBullhorn, FaNewspaper, FaMobile, FaChartBar, FaFileAlt } from "react-icons/fa"
import React from 'react'

export const metadata = {
  title: "Illustration Design | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Illustration Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/illustration-design`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Illustration Design | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Illustration Design | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  // Scrolling services for hero section
  const scrollServices = [
    { title: "Custom illustrations", image: "/images/services/email-design/email-design.avif" },
    { title: "Character design", image: "/images/services/email-design/email-strategy.avif" },
    { title: "Infographic design", image: "/images/services/email-design/email-html5.avif" },
    { title: "Iconography and icon sets", image: "/images/services/email-design/email-design-templates.avif" },
    { title: "Storyboarding", image: "/images/services/email-design/email-newsletter-design.avif" },
    { title: "Editorial illustrations", image: "/images/services/email-design/email-ui-ux-audits.avif" },
    { title: "Marketing material illustrations", image: "/images/services/email-design/email-design.avif" },
  ];

  const items = [
    {
      name: "Custom brand illustrations",
      about: "Tailor-made visuals that capture your brand's personality and create memorable connections with your audience.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Character design",
      about: "Bring your mascots, heroes, and brand personalities to life with engaging character designs that resonate across campaigns.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Infographic design",
      about: "Transform complex data, processes, and ideas into clear, visually compelling infographics that simplify understanding.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Iconography and icon sets",
      about: "Custom-designed icons that enhance user interfaces, websites, and communications with clarity and visual consistency.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Storyboarding",
      about: "Visualize concepts and narratives with detailed storyboards that plan the flow of videos, campaigns, and experiences.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Editorial illustrations",
      about: "Eye-catching visuals for blog posts, articles, magazines, and thought leadership content that grab attention and add depth.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Marketing material illustrations",
      about: "Elevate brochures, flyers, ads, and promotional materials with custom illustrations that captivate your target audience.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Website and digital illustrations",
      about: "Original visuals for hero sections, landing pages, and digital experiences that make your brand stand out online.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
    {
      name: "Product and explainer illustrations",
      about: "Clarify how your product works with step-by-step visuals, diagrams, and illustrated guides that educate users.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-[#ffd6cc]",
      textColor: "text-[#4a1c0f]",
    },
    {
      name: "Social media illustrations",
      about: "Thumb-stopping visuals designed specifically for social feeds, stories, and campaigns that drive engagement.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#e6f3ff]",
      textColor: "text-[#003366]",
    },
  ];

  return (
    <div>
      <ServiceSchema serviceName="Illustration Design Services" serviceType="ProfessionalService" description="Bring your brand to life with custom illustrations that captivate and engage. From digital art to character design, we create visuals that tell your story." slug="illustration-design" priceRange="$500-$3000" category="Creative Services" features={["Custom Illustrations", "Digital Art", "Icon Design", "Character Design", "Infographic Illustrations", "Storytelling", "Brand Illustrations", "Animation Support"]} benefits={["Unique Brand Identity", "Enhanced Engagement", "Memorable Visuals", "Versatile Assets", "Professional Quality", "Brand Storytelling"]} serviceOutput="Custom illustrations ready for use across all platforms and media." audience="Brands, agencies, publishers, and businesses needing custom visual content." additionalType="https://schema.org/CreativeWork" />
      <CommonServicesHeroSection
        title="Custom illustrations that capture attention and tell your story"
        subtitle="Illustration Design Services"
        description="From bespoke character designs to data-driven infographics, Aneeverse creates original, captivating illustrations that connect with your audience and amplify your brand's message. Whether it's editorial content, marketing materials, or digital experiences we bring your ideas to life."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/email-design/hero-banner.avif"
        scrollServices={scrollServices}
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Stock art won't cut it"
        title="Your brand deserves more than generic visuals"
        highlightText=""
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Illustration Design Services"
        description="Beautiful illustrations are just the starting point they need to be original, narrative-driven, and uniquely yours. Generic stock images don't differentiate your brand or build emotional connection."
        additionalText="Finding talented illustrators is hard. Managing multiple freelancers is harder. And your in-house team is already stretched thin. To consistently create illustrations that inspire action and engagement, you need a dedicated creative partner who understands your brand and delivers with speed and quality."
      />
      <DynamicCreativeSection
        subtitle="What we deliver"
        title="Comprehensive illustration design solutions"
        heighlightText=""
        description="From hand-drawn artistry to AI-enhanced workflows, we deliver custom illustrations that perfectly align with your brand's identity, goals, and storytelling needs across every use case."
        items={items}
      />
      <ChannelTailoredSection
        subtitle="Built for every storytelling need"
        title="Illustrations designed for impact across every touchpoint"
        titleHighlight=""
        description="Whether you're building brand identity, simplifying complex ideas, or creating emotional connections our illustrations are crafted to resonate with your audience and support your business goals."
        channels={[
          {
            title: "Brand storytelling",
            subtitle: "Custom illustrations that communicate your brand's values, personality, and narrative in a visually compelling way.",
            icon: <FaBook className="w-8 h-8" />,
          },
          {
            title: "Marketing and campaigns",
            subtitle: "Stand out in crowded feeds and inboxes with unique, scroll-stopping visuals that capture attention and drive action.",
            icon: <FaBullhorn className="w-8 h-8" />,
          },
          {
            title: "Editorial and content",
            subtitle: "Elevate blogs, articles, and reports with original illustrations that add depth, context, and visual interest to written content.",
            icon: <FaNewspaper className="w-8 h-8" />,
          },
          {
            title: "Product and UX design",
            subtitle: "Improve user experience with custom icons, onboarding illustrations, and visual guides that clarify navigation and features.",
            icon: <FaMobile className="w-8 h-8" />,
          },
          {
            title: "Data visualization",
            subtitle: "Turn complex datasets and research into engaging infographics, charts, and visuals that make insights accessible.",
            icon: <FaChartBar className="w-8 h-8" />,
          },
          {
            title: "Sales enablement",
            subtitle: "Support your sales team with visually rich pitch decks, one-pagers, and collateral that simplify value propositions.",
            icon: <FaFileAlt className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="HOW WE WORK"
        title="From concept to final art delivered on-brand and on time"
        titleHighlight=""
        description="Our streamlined process combines artistic excellence with efficient workflows, giving you access to top-tier illustration talent without the headaches of managing freelancers or overloading your team."
        steps={[
          {
            number: "1",
            title: "Creative briefing",
            subtitle: "We start by understanding your goals, audience, and visual direction to ensure our illustrations align with your brand and objectives.",
          },
          {
            number: "2",
            title: "Concept exploration",
            subtitle: "Our illustrators develop initial concepts and style directions for your review, ensuring we're aligned before moving into final production.",
          },
          {
            number: "3",
            title: "Illustration execution",
            subtitle: "Using hand-drawn techniques, digital tools, or AI-enhanced workflows, we craft illustrations with precision and artistry.",
          },
          {
            number: "4",
            title: "Feedback and refinement",
            subtitle: "We iterate based on your feedback, refining details until the illustrations perfectly match your vision and brand standards.",
          },
          {
            number: "5",
            title: "Final delivery",
            subtitle: "Receive production-ready files in all formats you need optimized for web, print, social, and any other application.",
          },
        ]}
      />
      <DynamicOurWorks />
      <TestimonialsSection />
      <IllustrationDesignFAQSection />
    </div>
  )
}

export default page

