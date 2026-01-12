import TestimonialsSection from '@/components/home/TestimonialsSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import AISEOGeoAEOAIOFAQSection from '@/components/services/ai-seo-geo-aeo-aio/AISEOGeoAEOAIOFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaSearch, FaCommentDots, FaNetworkWired, FaBrain, FaMicrophone, FaCode } from "react-icons/fa"
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
  title: "AI SEO, GEO, AEO & AIO Services | Aneeverse",
  description: "Future-proof your search visibility for both traditional and AI-driven discovery. We combine advanced SEO with generative and answer engine optimization.",
  openGraph: {
    title: "AI SEO, GEO, AEO & AIO Services | Aneeverse",
    description: "Future-proof your search visibility for both traditional and AI-driven discovery. We combine advanced SEO with generative and answer engine optimization.",
    url: `https://aneeverse.com/services/ai-seo-geo-aeo-aio`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "AI SEO Services | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SEO, GEO, AEO & AIO Services | Aneeverse",
    description: "Future-proof your search visibility for both traditional and AI-driven discovery. We combine advanced SEO with generative and answer engine optimization.",
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
    console.error('Error fetching projects for AI SEO page:', error);
  }

  // Scrolling services for hero section
  const scrollServices = [
    { title: "AI SEO strategy & audit", image: "/images/services/website/website-strategy.avif" },
    { title: "Generative Engine Optimization (GEO)", image: "/images/services/website/ux-ui-audit.avif" },
    { title: "Answer Engine Optimization (AEO)", image: "/images/services/website/content-development.avif" },
    { title: "Large Language Model Optimization (LLMO)", image: "/images/services/website/website-illustrations.avif" },
    { title: "Voice & conversational search optimization", image: "/images/services/website/webflow-development.avif" },
    { title: "Structured data & schema implementation", image: "/images/services/website/website-design.avif" },
    { title: "Zero-click and featured snippet optimization", image: "/images/services/website/landing-page-design.avif" },
  ];

  const items = [
    { name: "AI SEO strategy & audit", about: "Evaluate your website’s presence across search engines and AI systems with a tailored roadmap.", image: "/images/services/website/website-strategy.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "Generative Engine Optimization (GEO)", about: "Structure and contextualize content so AI engines like ChatGPT, Gemini, or Perplexity can interpret and cite it.", image: "/images/services/website/ux-ui-audit.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "Answer Engine Optimization (AEO)", about: "Optimize content to appear in featured snippets, direct answer boxes, and AI answer responses.", image: "/images/services/website/content-development.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "AI & LLM optimization (AIO)", about: "Enhance entity signals, semantics, and data structures so AI understands and includes your content.", image: "/images/services/website/design-systems.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "Voice search optimization", about: "Tune content for conversational queries and voice assistants like Siri, Alexa, and Google Assistant.", image: "/images/services/website/webflow-development.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "Structured data & schema", about: "Implement schema markup to boost AI extraction, featured snippets, and contextual understanding.", image: "/images/services/website/website-design.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
    { name: "Zero-click optimization", about: "Improve chances your brand is seen in AI overviews and answer placements without a click.", image: "/images/services/website/landing-page-design.avif", bgColor: "bg-[#ffd6cc]", textColor: "text-[#4a1c0f]" },
    { name: "Content relevance & authority building", about: "Identify topics AI values and build trust signals to increase visibility over time.", image: "/images/services/website/website-illustrations.avif", bgColor: "bg-[#e6f3ff]", textColor: "text-[#003366]" },
    { name: "Local & geo-targeted AI SEO", about: "Combine traditional SEO with AI signals tailored to geographic and local search intent.", image: "/images/services/website/local-seo.png", bgColor: "bg-[#fff4e6]", textColor: "text-[#663300]" },
    { name: "Performance tracking & AI search insights", about: "Monitor both traditional search rankings and AI-driven visibility metrics for ongoing improvement.", image: "/images/services/website/seo-optimization.png", bgColor: "bg-[#f0e6ff]", textColor: "text-[#330066]" },
  ];

  const stats = [
    { value: "500+", description: "AI discovery touchpoints optimized." },
    { value: "65%", description: "Increase in zero-click and snippet visibility." },
    { value: "40%", description: "Growth in AI-driven organic citations." },
    { value: "24/7", description: "Constant monitoring of AI search landscape shifts." },
  ];

  return (
    <div>
      <ServiceSchema
        serviceName="AI SEO, GEO, AEO & AIO Services"
        serviceType="ProfessionalService"
        description="Future-proof your search visibility for both traditional and AI-driven discovery with advanced SEO, GEO, and AEO strategies."
        slug="ai-seo-geo-aeo-aio"
        priceRange="$3000-$15000"
        category="SEO Services"
        features={["AI SEO Audit", "GEO Optimization", "AEO Content", "Voice Search Prep", "Schema Implementation", "LLM Tuning"]}
        benefits={["Search Engine Dominance", "AI Engine Citations", "Voice Visibility", "Zero-Click Authority"]}
        serviceOutput="Unified search and AI discovery strategy."
        audience="Innovative brands looking to lead in the era of generative search."
        additionalType="https://schema.org/MarketingService"
      />

      <CommonServicesHeroSection
        title="Future-proof your search visibility for both traditional and AI-driven discovery"
        subtitle="AI SEO, GEO, AEO & AIO Services"
        description="Aneeverse combines advanced SEO with generative and answer engine optimization to ensure your brand is discoverable wherever prospects search - from classic Google results to AI assistants, voice search, chatbots, and answer engines. Our AI-powered optimization strategies increase organic traffic, enhance credibility, and position your content to be cited, answered, and surfaced across the next generation of search experiences."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/website/hero-banner.avif"
        scrollServices={scrollServices}
      />

      <SlidingLogos />

      <DynamicSupportSection
        subtitle="Search is evolving"
        title="Visibility now spans "
        highlightText="search engines and AI engines alike"
        imageSrc="/images/services/website/about-web.avif"
        imageAlt="AI SEO Evolution"
        description="Traditional SEO still matters - boosting rankings, organic clicks, and website traffic. But user behavior has shifted: more people now find answers through chatbots, AI assistants, voice search, and zero-click summaries where content is shown without a traditional click. Without optimization for AI-driven discovery, brands risk losing relevance and authority in modern search experiences."
        additionalText="Whether you want organic traffic growth, voice search visibility, featured snippet dominance, or presence in generative AI responses, you need a unified strategy. This means integrating SEO fundamentals with GEO, AEO, and AI optimization so your content performs in both classic search results and the new AI-powered discovery landscape."
      />

      <DynamicCreativeSection
        subtitle="What we deliver"
        title=" approach"
        heighlightText="next-generation optimization"
        description="From foundational SEO to AI-centric enhancements, we tune your digital presence to maximize visibility across platforms, engines, and formats users engage with today."
        items={items}
      />

      <ChannelTailoredSection
        subtitle="Optimizing every layer of discovery"
        title="Be found everywhere your audience asks questions"
        titleHighlight="everywhere"
        description="Today’s search landscape requires discovery across SERPs, voice assistants, AI chats, and zero-click responses - not just traditional rankings."
        channels={[
          {
            title: "Traditional SEO",
            subtitle: "Rank higher in organic search results and improve overall site traffic and authority.",
            icon: <FaSearch className="w-8 h-8" />,
          },
          {
            title: "Answer Engine Optimization (AEO)",
            subtitle: "Position your content to directly answer questions in AI and voice assistant responses.",
            icon: <FaCommentDots className="w-8 h-8" />,
          },
          {
            title: "Generative Engine Optimization (GEO)",
            subtitle: "Optimize content so AI can understand, synthesize, and cite it in generative responses.",
            icon: <FaNetworkWired className="w-8 h-8" />,
          },
          {
            title: "AI & LLM Optimization (AIO)",
            subtitle: "Structure data, entities, and semantics to improve AI comprehension and trust signals.",
            icon: <FaBrain className="w-8 h-8" />,
          },
          {
            title: "Voice & Conversational Search",
            subtitle: "Align content with natural language patterns and queries used in voice assistants.",
            icon: <FaMicrophone className="w-8 h-8" />,
          },
          {
            title: "Structured Data & Schema",
            subtitle: "Use schema markup to help AI and search engines parse and highlight key info.",
            icon: <FaCode className="w-8 h-8" />,
          },
        ]}
      />

      <HowItWorksSection
        subtitle="how we work"
        title="Optimization that combines traditional and AI-first strategies"
        titleHighlight="AI-first"
        description="Our integrated process blends SEO fundamentals with the latest AI-centric tactics so your content thrives in both classic and emerging search environments."
        steps={[
          {
            number: "1",
            title: "Discovery & analysis",
            subtitle: "Review current optimization performance, content inventory, and AI visibility opportunities.",
          },
          {
            number: "2",
            title: "Strategic planning",
            subtitle: "Build a roadmap that defines SEO, AEO, GEO, and AIO goals based on your audience and business objectives.",
          },
          {
            number: "3",
            title: "Technical & content optimization",
            subtitle: "Implement structured data, content enhancements, and voice-ready copy.",
          },
          {
            number: "4",
            title: "AI-centric tuning",
            subtitle: "Adjust content and signals to improve citations, answer visibility, and generative inclusion.",
          },
          {
            number: "5",
            title: "Measurement & refinement",
            subtitle: "Track traditional search metrics and AI visibility, iterating for continuous performance gains.",
          },
        ]}
      />

      <DynamicOurWorks projects={projects} />

      <DynamicStateSection title="Our AI SEO Impact" subtitle="PROVEN RESULTS" stats={stats} />

      <TestimonialsSection />

      <AISEOGeoAEOAIOFAQSection />
    </div>
  )
}

export default page

