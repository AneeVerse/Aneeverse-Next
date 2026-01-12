import TestimonialsSection from '@/components/home/TestimonialsSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import SocialMediaFAQSection from '@/components/services/social-media-creatives/SocialMediaFAQSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaFacebook, FaLinkedin, FaYoutube, FaTwitter, FaHashtag } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"
import React from 'react'



// metadata
export const metadata = {
  title: "Social Media Creatives | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Social Media Creatives | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/social-media-creatives`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Social Media Creatives | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Creatives | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}
const page = () => {
  // Scrolling services for hero section
  const scrollServices = [
    { title: "Organic social content", image: "/images/services/email-design/email-design.avif" },
    { title: "Paid social advertising", image: "/images/services/email-design/email-strategy.avif" },
    { title: "Social media video production", image: "/images/services/email-design/email-html5.avif" },
    { title: "Platform-specific design", image: "/images/services/email-design/email-design-templates.avif" },
    { title: "Stories and Reels content", image: "/images/services/email-design/email-newsletter-design.avif" },
    { title: "Social media carousels and graphics", image: "/images/services/email-design/email-ui-ux-audits.avif" },
    { title: "AR filters and immersive experiences", image: "/images/services/email-design/email-design.avif" },
  ];

  const items = [
    {
      name: "Organic social content",
      about: "Engage your audience with compelling storytelling from high-impact static posts to educational video series and behind-the-scenes content.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Paid social ads",
      about: "Test new concepts, scale what works, and keep the algorithm satisfied with ads optimized for every size, format, and platform.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Social video production",
      about: "Motion graphic explainers, UGC-style video ads, in-studio testimonials, product demos you name it, we deliver.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "AI-powered production",
      about: "Fast, scalable content creation with AI-assisted editing, voiceovers, automated translation, and localization for global reach.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Campaign concepts",
      about: "Big ideas that connect individual posts into cohesive, high-impact campaigns that amplify your brand message.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Immersive AR experiences",
      about: "Scroll-breaking formats like 3D, AR filters, and interactive content designed for standout storytelling and shareability.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Platform-native content",
      about: "Creative built specifically for how users behave and how algorithms rank on Meta, TikTok, LinkedIn, YouTube, and beyond.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-[#ffd6cc]",
      textColor: "text-[#4a1c0f]",
    },
    {
      name: "Stories and Reels",
      about: "Vertical video and ephemeral content designed for Instagram and Facebook Stories, Reels, and TikTok trends.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#e6f3ff]",
      textColor: "text-[#003366]",
    },
    {
      name: "Carousel graphics",
      about: "Multi-slide posts optimized for swipe-through engagement on Instagram, LinkedIn, and Facebook feeds.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#fff4e6]",
      textColor: "text-[#663300]",
    },
    {
      name: "Branded templates and toolkits",
      about: "Modular design systems that empower your team to create consistent, on-brand social content in-house.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#f0e6ff]",
      textColor: "text-[#330066]",
    },
  ];
  return (
    <div>
      <ServiceSchema
        serviceName="Social Media Creatives"
        serviceType="ProfessionalService"
        description="Professional social media creative design services that create engaging visuals, graphics, and content to boost brand awareness and audience engagement across all platforms."
        slug="services/social-media-creatives"
        priceRange="₹5,000 - ₹75,000"
        category="Social Media Design"
        features={[
          "Social Media Branding",
          "Ad Creatives Design",
          "Content Graphics",
          "Story Templates",
          "Post Designs",
          "Video Graphics",
          "Brand Consistency",
          "Platform Optimization"
        ]}
        benefits={[
          "Increased Engagement",
          "Brand Recognition",
          "Professional Appearance",
          "Higher Reach",
          "Better Conversion Rates",
          "Consistent Brand Image"
        ]}
        serviceOutput="Social Media Graphics & Creatives"
        audience="Businesses, Influencers, Brands, Startups"
        additionalType="https://schema.org/CreativeWork"
      />
      <CommonServicesHeroSection
        title="Scroll-stopping content that keeps your brand ahead of the algorithm"
        subtitle="Social Media Creative Services"
        description="Get high-performing social creative across every platform, format, and campaign type. From organic posts to paid ads, video content, and immersive AR experiences Aneeverse delivers on-brand social media design that drives engagement and keeps your content calendar full."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"
        scrollServices={scrollServices}
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Fast and scalable is non-negotiable"
        title="Join a trend late, and the algorithm punishes you"
        highlightText=""
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Social Media Creative Services"
        description="When you post irregularly, use off-brand assets, or recycle old content, your audience notices and so does the algorithm. Consistency is everything on social."
        additionalText="Even the best in-house teams struggle to keep up with content fatigue and platform demands. Your designers are stretched thin, freelancers can't match your brand voice, and production bottlenecks kill momentum. To stay ahead without burning out, you need a creative partner who moves at the speed of social."
      />


      <DynamicCreativeSection
        subtitle="What we deliver"
        title="Social media creative built for every platform and goal"
        heighlightText=""
        description="From organic storytelling to high-converting paid ads and immersive AR experiences, we deliver creative that drives clicks, shares, and conversions on every platform that matters."
        items={items}
      />
      <ChannelTailoredSection
        subtitle="Platform-native content"
        title="Creative designed for how each platform actually works"
        titleHighlight=""
        description="Whether it's paid or organic, we have platform experts who build social content tailored to user behavior and algorithm preferences so your content performs better, naturally."
        channels={[
          {
            title: "Meta (Facebook & Instagram)",
            subtitle: "Maximize engagement with visually captivating creative tailored for feed posts, Stories, Reels, and carousel ads.",
            icon: <FaFacebook className="w-8 h-8" />,
          },
          {
            title: "LinkedIn",
            subtitle: "Thoughtful, professional content designed for LinkedIn's business-focused community and decision-makers.",
            icon: <FaLinkedin className="w-8 h-8" />,
          },
          {
            title: "TikTok",
            subtitle: "Tap into trend-forward, fast-paced content that drives views, shares, and virality on the world's fastest-growing platform.",
            icon: <SiTiktok className="w-8 h-8" />,
          },
          {
            title: "YouTube",
            subtitle: "Optimize watch-time and CTR with video ads, pre-roll content, and thumbnails designed for maximum impact.",
            icon: <FaYoutube className="w-8 h-8" />,
          },
          {
            title: "X (Twitter)",
            subtitle: "Punchy, conversation-starting visuals optimized for fast-scrolling timelines and real-time engagement.",
            icon: <FaTwitter className="w-8 h-8" />,
          },
          {
            title: "Emerging platforms",
            subtitle: "Snapchat, Reddit, Pinterest, Threads whatever platform your audience is on, we've got attention-grabbing content in the right format.",
            icon: <FaHashtag className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="HOW WE WORK"
        title="Scale social output without losing control"
        titleHighlight=""
        description="Our creative experts and AI-accelerated workflows help you get social campaigns to market fast without sacrificing brand consistency or creative quality."
        steps={[
          {
            number: "1",
            title: "Smart briefing",
            subtitle: "Submit briefs through our streamlined platform and collaborate in real-time with transparent feedback loops and progress tracking.",
          },
          {
            number: "2",
            title: "Platform expertise",
            subtitle: "Our creative team is fully versed in the formats, channels, and strategies you need to crush your organic and paid social goals.",
          },
          {
            number: "3",
            title: "Speed meets quality",
            subtitle: "Get more variations for testing, faster iterations, and smarter workflows powered by AI-enhanced production without compromising on brand or creativity.",
          },
          {
            number: "4",
            title: "Flexible capacity",
            subtitle: "Whether you're planning a major campaign or need to act fast, scale up output on demand or roll over budget when you don't need it.",
          },
          {
            number: "5",
            title: "Always on-brand",
            subtitle: "Your Creative Leads ensure every asset aligns with your brand guidelines and strategy even when you need it delivered yesterday.",
          },
        ]}
      />
      <DynamicOurWorks />
      <TestimonialsSection />
      <SocialMediaFAQSection />

    </div>
  )
}

export default page
