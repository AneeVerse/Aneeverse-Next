import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import CopywritingFAQSection from '@/components/services/copywriting/CopywritingFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaBullseye, FaCommentDots, FaChartLine, FaSearch, FaMailBulk, FaMousePointer } from "react-icons/fa"
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
  title: "Copywriting Services | Aneeverse",
  description: "Words that connect, persuade, and convert. Strategic, audience-first copywriting that elevates your brand message and drives results.",
  openGraph: {
    title: "Copywriting Services | Aneeverse",
    description: "Words that connect, persuade, and convert. Strategic, audience-first copywriting that elevates your brand message and drives results.",
    url: `https://aneeverse.com/services/copywriting`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Copywriting Services | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Copywriting Services | Aneeverse",
    description: "Words that connect, persuade, and convert. Strategic, audience-first copywriting that elevates your brand message and drives results.",
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
    console.error('Error fetching projects for copywriting page:', error);
  }

  // Scrolling services for hero section
  const scrollServices = [
    { title: "Website copywriting", image: "/images/services/email-design/email-design.avif" },
    { title: "Landing page copy", image: "/images/services/email-design/email-strategy.avif" },
    { title: "Product & feature copy", image: "/images/services/email-design/email-html5.avif" },
    { title: "Email copywriting", image: "/images/services/email-design/email-design-templates.avif" },
    { title: "SEO copy & keyword strategy", image: "/images/services/email-design/email-newsletter-design.avif" },
    { title: "Brand storytelling", image: "/images/services/email-design/email-ui-ux-audits.avif" },
    { title: "Campaign & conversion copy", image: "/images/services/email-design/email-design.avif" },
  ];
  const items = [
    {
      name: "Website copywriting",
      about: "Clear, engaging site content that explains value and drives action.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Landing page copy",
      about: "Conversion-focused copy designed to turn visitors into leads and customers.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Product & feature writing",
      about: "Compelling descriptions that highlight benefits and user value.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Email copywriting",
      about: "Messaging that boosts opens, clicks, and engagement.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "SEO copy & keyword strategy",
      about: "Content optimized for relevance, search visibility, and ranking growth.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Brand storytelling",
      about: "Narrative-driven copy that strengthens voice and customer connection.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Campaign copy",
      about: "Messaging crafted for ads, launches, and promotions that perform.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Case studies & success stories",
      about: "Compelling journeys that showcase impact and results.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
    {
      name: "UX microcopy",
      about: "Smart, helpful interface messaging that reduces friction and guides users.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-[#ffd6cc]",
      textColor: "text-[#4a1c0f]",
    },
    {
      name: "Content audits & messaging refinement",
      about: "Review existing content with recommendations to improve clarity, tone, and performance.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#e6f3ff]",
      textColor: "text-[#003366]",
    },
  ];

  const stats = [
    { value: "1000+", description: "Strategic copy projects delivered successfully." },
    { value: "40%", description: "Average increase in conversion rates for our clients." },
    { value: "100%", description: "Brand-aligned and performance-tuned messaging." },
    { value: "24/7", description: "Continuity support for high-stakes campaigns." },
  ];

  return (
    <div>
      <ServiceSchema
        serviceName="Copywriting"
        serviceType="ProfessionalService"
        description="Aneeverse delivers strategic, audience-first copywriting that elevates your brand message and drives meaningful results. From website pages to campaigns."
        slug="copywriting"
        priceRange="$500-$10000"
        category="Copywriting & Strategy"
        features={[
          "Website copywriting",
          "Landing page copy",
          "Product & feature copy",
          "Email copywriting",
          "SEO copy & keyword strategy",
          "Brand storytelling",
          "Campaign & conversion copy"
        ]}
        benefits={[
          "Enhanced Brand Credibility",
          "Increased Conversion Rates",
          "Clear & Persuasive Messaging",
          "Consistent Brand Voice",
          "Improved Search Visibility",
          "Strategic User Engagement"
        ]}
        serviceOutput="Strategic, high-converting copy across digital and print platforms."
        audience="Marketing teams, product founders, and businesses seeking clear, persuasive messaging."
        additionalType="https://schema.org/CreativeWork"
      />
      <CommonServicesHeroSection
        title="Words that connect, persuade, and convert"
        subtitle="Copywriting Services"
        description="Aneeverse delivers strategic, audience-first copywriting that elevates your brand message and drives meaningful results. From website pages and product stories to campaigns and SEO-focused content, we craft words that communicate clearly, build trust, and move users to action."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/email-design/hero-banner.avif"
        scrollServices={scrollServices}
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Words that work"
        title="Great design needs great "
        highlightText="storytelling"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Copywriting Services"
        description="A beautiful website or product means little without clear, purposeful words. Confusing messaging, generic phrasing, or disjointed tone weakens brand trust and slows conversions."
        additionalText="Your audience judges credibility within seconds - and they leave just as quickly if your message doesn’t resonate. From strategic messaging frameworks to persuasive writing that speaks directly to your users, Aneeverse brings clarity, character, and conversion power to every line we write."
      />
      <DynamicCreativeSection
        subtitle="What we deliver"
        title="Copywriting that communicates and converts"
        heighlightText=""
        description="From strategy to content creation, we write with intention - blending clarity, brand voice, and performance insights to help you reach business goals."
        items={items}
      />
      <ChannelTailoredSection
        subtitle="Crafted for clarity and impact"
        title="Words that shape perception and drive action"
        titleHighlight="action"
        description="We write copy that doesn’t just fill space - it builds trust, tells your story, and inspires your audience to act."
        channels={[
          {
            title: "Conversion copy",
            subtitle: "Persuasive messaging tailored to push users toward key actions.",
            icon: <FaBullseye className="w-8 h-8" />,
          },
          {
            title: "Brand voice & tone",
            subtitle: "Messaging that reflects your identity and speaks your audience’s language.",
            icon: <FaCommentDots className="w-8 h-8" />,
          },
          {
            title: "Landing page conversion",
            subtitle: "High-impact copy that turns traffic into leads.",
            icon: <FaChartLine className="w-8 h-8" />,
          },
          {
            title: "SEO & discovery",
            subtitle: "Search-optimized content that drives organic visibility.",
            icon: <FaSearch className="w-8 h-8" />,
          },
          {
            title: "Email & campaign copy",
            subtitle: "Words that persuade, engage, and convert at every touchpoint.",
            icon: <FaMailBulk className="w-8 h-8" />,
          },
          {
            title: "UX messaging",
            subtitle: "Helpful and intuitive microcopy for better product experiences.",
            icon: <FaMousePointer className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="HOW WE WORK"
        title="Copy that’s strategic, not accidental"
        titleHighlight="accidental"
        description="Our process aligns messaging with user intent and business outcomes - so every word earns its place."
        steps={[
          {
            number: "1",
            title: "Strategy & audience insight",
            subtitle: "We start with goals, audience understanding, and messaging frameworks.",
          },
          {
            number: "2",
            title: "Message architecture",
            subtitle: "Organize key ideas into clear, persuasive structures before writing.",
          },
          {
            number: "3",
            title: "Draft & refine",
            subtitle: "Write with precision, polish with feedback, and shape tone to your brand.",
          },
          {
            number: "4",
            title: "SEO & performance tuning",
            subtitle: "Optimize content for search relevance and measurable results.",
          },
          {
            number: "5",
            title: "Final delivery",
            subtitle: "Fully edited copy ready for implementation across platforms.",
          },
        ]}
      />
      <DynamicOurWorks projects={projects} />
      <DynamicStateSection title="Our Copywriting Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialSlider />
      <CopywritingFAQSection />
    </div>
  )
}

export default page

