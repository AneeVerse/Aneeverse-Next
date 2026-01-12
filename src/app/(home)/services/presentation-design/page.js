import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import PresentationiDesignFAQSection from '@/components/services/presentation-design/PresentationiDesignFAQSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaHandshake, FaUsers, FaBullseye, FaMicrophone, FaBriefcase, FaGraduationCap } from "react-icons/fa"
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

// metadata
export const metadata = {
  title: "Presentation Design Services | Aneeverse",
  description: "Presentations that make your best ideas impossible to ignore. Aneeverse transforms your content into compelling visual stories delivered fast and always on-brand.",
  openGraph: {
    title: "Presentation Design Services | Aneeverse",
    description: "Presentations that make your best ideas impossible to ignore. Aneeverse transforms your content into compelling visual stories delivered fast and always on-brand.",
    url: `https://aneeverse.com/services/presentation-design`,
    images: [
      {
        url: "/images/meta/phone.avif",
        width: 1200,
        height: 630,
        alt: "Presentation Design Services | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Presentation Design Services | Aneeverse",
    description: "Presentations that make your best ideas impossible to ignore. Aneeverse transforms your content into compelling visual stories delivered fast and always on-brand.",
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
    console.error('Error fetching projects for presentation-design page:', error);
  }

  // Scrolling services for hero section
  const scrollServices = [
    { title: "Custom presentation design", image: "/images/services/email-design/email-design.avif" },
    { title: "Presentation templates", image: "/images/services/email-design/email-strategy.avif" },
    { title: "Pitch deck design", image: "/images/services/email-design/email-html5.avif" },
    { title: "Data visualization", image: "/images/services/email-design/email-design-templates.avif" },
    { title: "Infographics for presentations", image: "/images/services/email-design/email-newsletter-design.avif" },
    { title: "Motion design for slides", image: "/images/services/email-design/email-ui-ux-audits.avif" },
    { title: "AI-powered image libraries", image: "/images/services/email-design/email-design.avif" },
  ];

  const items = [
    {
      name: "Custom presentation design",
      about: "Turning your content into engaging, branded slides for one-off events, pitches, board meetings, and strategic initiatives.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Presentation templates",
      about: "Fully branded, plug-and-play slide templates your team can easily customize, remix, and scale for ongoing needs.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Pitch deck design",
      about: "Investor-ready decks that tell your story clearly, build confidence, and help close funding rounds.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Sales presentations",
      about: "Persuasive, polished decks designed to sell the vision with proposals, demos, and sales enablement materials.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Data visualization",
      about: "Complex data transformed into intuitive, impactful charts and visuals that make insights easy to understand.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Infographics",
      about: "Bite-sized visual storytelling that simplifies big ideas and makes key points memorable.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Motion design for slides",
      about: "Add polish and engagement with smooth animations, transitions, and motion graphics that bring your slides to life.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "AI-powered image libraries",
      about: "Presentation-ready custom images generated and aligned with your brand guidelines for faster content creation.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
    {
      name: "Internal communication decks",
      about: "Executive updates, all-hands presentations, and change management slides that keep teams aligned and informed.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-[#ffd6cc]",
      textColor: "text-[#4a1c0f]",
    },
    {
      name: "Conference and event slides",
      about: "Keynote presentations, webinar decks, and conference slides designed to capture and hold audience attention.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#e6f3ff]",
      textColor: "text-[#003366]",
    },
  ];
  return (
    <div>
      <ServiceSchema
        serviceName="Presentation Design Services"
        serviceType="ProfessionalService"
        description="Get polished, high-impact presentations designed to win stakeholders and move business forward. From pitch decks to internal comms and sales enablement, Aneeverse transforms your content into compelling visual stories delivered fast and always on-brand."
        slug="presentation-design"
        priceRange="$500-$3000"
        category="Presentation Design"
        features={[
          "Custom presentation design",
          "Presentation templates",
          "Pitch deck design",
          "Data visualization",
          "Infographics for presentations",
          "Motion design for slides",
          "AI-powered image libraries"
        ]}
        benefits={[
          "Professional Visual Impact",
          "Clear Message Communication",
          "Increased Audience Engagement",
          "Enhanced Brand Credibility",
          "Improved Presentation Success",
          "Time-Saving Solutions",
          "Consistent Brand Identity",
          "Memorable Content Delivery"
        ]}
        serviceOutput="Professionally designed presentations with compelling visuals, clear messaging, and brand-consistent design."
        audience="Business professionals, entrepreneurs, sales teams, executives, and marketing teams needing high-stakes presentations."
        additionalType="https://schema.org/CreativeWork"
      />
      <CommonServicesHeroSection
        title="Presentations that make your best ideas impossible to ignore"
        subtitle="Presentation Design Services"
        description="Get polished, high-impact presentations designed to win stakeholders and move business forward. From pitch decks to internal comms and sales enablement, Aneeverse transforms your content into compelling visual stories delivered fast and always on-brand."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/presentation-design/hero-banner.avif"
        scrollServices={scrollServices}
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="First impressions matter"
        title="Your idea deserves more than a boring deck"
        highlightText=""
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Presentation Design Services"
        description="Presentation decks are often the first place an idea meets an audience. Confusion, inconsistency, and rushed design kill credibility and opportunity."
        additionalText="Your team is overloaded, and the stakes are too high for generic templates or last-minute scrambles. Whether it's a pitch to investors, a sales proposal, or an internal strategy deck, clarity and design quality are your strategic advantage. To consistently deliver presentations that impress, you need expert design support that moves as fast as you do."
      />
      <DynamicCreativeSection
        subtitle="What we deliver"
        title="Your plug-in presentation design partner"
        heighlightText=""
        description="From polishing a professional business presentation to delivering a custom pitch deck on tight deadlines, we cover every high-stakes moment with expert design across PowerPoint, Keynote, Google Slides, and Figma."
        items={items}
      />
      <ChannelTailoredSection
        subtitle="Designed for every moment that matters"
        title="Presentations that do more than look good"
        titleHighlight=""
        description="Our decks don't just impress, they align stakeholders, sell visions, drive action, and support real business outcomes across every department and use case."
        channels={[
          {
            title: "Sales enablement",
            subtitle: "Win deals with pitch decks, proposals, and sales presentations that communicate value clearly and persuasively.",
            icon: <FaHandshake className="w-8 h-8" />,
          },
          {
            title: "Internal communications",
            subtitle: "Keep your team aligned with executive updates, all-hands decks, product launches, and organizational changes.",
            icon: <FaUsers className="w-8 h-8" />,
          },
          {
            title: "Marketing presentations",
            subtitle: "Get stakeholder buy-in with campaign decks, quarterly planning presentations, and strategy reviews.",
            icon: <FaBullseye className="w-8 h-8" />,
          },
          {
            title: "Events and conferences",
            subtitle: "Grab attention with keynotes, webinar slides, and conference presentations that engage audiences.",
            icon: <FaMicrophone className="w-8 h-8" />,
          },
          {
            title: "Investor relations",
            subtitle: "Inspire confidence with fundraising decks, board presentations, and shareholder reports that tell your growth story.",
            icon: <FaBriefcase className="w-8 h-8" />,
          },
          {
            title: "Training and onboarding",
            subtitle: "Make learning engaging with training modules, onboarding decks, and educational presentations that stick.",
            icon: <FaGraduationCap className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="HOW WE WORK"
        title="From content doc to polished deck without the headaches"
        titleHighlight=""
        description="Our streamlined process makes it easy to go from rough content to refined presentation without hiring, juggling vendors, or overloading your already-busy creative team."
        steps={[
          {
            number: "1",
            title: "Strategic briefing",
            subtitle: "With your brand guidelines already established, we dive into your goals, audience, and use case to align on the presentation brief.",
          },
          {
            number: "2",
            title: "Concepting and structure",
            subtitle: "Depending on your needs a single slide, a full template, or an all-important pitch deck we explore structure, tone, and design direction.",
          },
          {
            number: "3",
            title: "Sample slides review",
            subtitle: "We deliver early outputs for you to review and align on direction. For tighter turnarounds with straightforward requests, we skip this step to save time.",
          },
          {
            number: "4",
            title: "Full design execution",
            subtitle: "We build the complete deck with polish and precision evident in every slide, chart, and detail always on-brand.",
          },
          {
            number: "5",
            title: "Final delivery and refinement",
            subtitle: "We refine based on your feedback and deliver all formats needed PowerPoint, Keynote, PDF, Google Slides on time and ready to present.",
          },
        ]}
      />
      <DynamicOurWorks projects={projects} />
      <TestimonialSlider />
      <PresentationiDesignFAQSection />
    </div>
  )
}

export default page
