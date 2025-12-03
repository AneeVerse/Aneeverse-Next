import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import AdCreativeFAQSection from '@/components/services/ad-creative/AdCreativeFAQSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaDesktop, FaMobile, FaPlayCircle, FaImage, FaNewspaper, FaMapMarkerAlt } from "react-icons/fa"
import React from 'react'

export const metadata = {
  title: "Ad Creative | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Ad Creative | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/ad-creative`,
    images: [
      {
        url: "/images/meta/phone.avif",
        width: 1200,
        height: 630,
        alt: "Ad Creative | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ad Creative | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  // Scrolling services for hero section
  const scrollServices = [
    { title: "Static ad design", image: "/images/services/email-design/email-design.avif" },
    { title: "Motion graphics and animated ads", image: "/images/services/email-design/email-strategy.avif" },
    { title: "Display advertising", image: "/images/services/email-design/email-html5.avif" },
    { title: "Video ad production and editing", image: "/images/services/email-design/email-design-templates.avif" },
    { title: "Ad campaign concepting", image: "/images/services/email-design/email-newsletter-design.avif" },
    { title: "Multi-format adaptation", image: "/images/services/email-design/email-ui-ux-audits.avif" },
    { title: "Performance-driven A/B testing variants", image: "/images/services/email-design/email-design.avif" },
  ];

  const items = [
    {
      name: "Static display ads",
      about: "Scroll-stopping visuals designed for social, digital, programmatic, and print placements that capture attention instantly.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Motion graphics ads",
      about: "High-performing animated content optimized for web, social feeds, and mobile devices that bring your message to life.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Video ad production",
      about: "Full-service video editing, animation, and production for ads, product launches, and hero campaign moments.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Campaign concepting",
      about: "Big, bold ideas and strategic concepts that work seamlessly across multiple ad formats and channels.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Multi-format adaptation",
      about: "One campaign concept scaled effortlessly across dozens of sizes, specs, and platform requirements without losing impact.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "A/B testing creative variants",
      about: "Multiple ad versions designed for performance testing, optimization, and avoiding creative fatigue.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Retargeting ad creative",
      about: "Conversion-focused ads specifically designed to re-engage warm audiences and close the loop on customer journeys.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-[#ffd6cc]",
      textColor: "text-[#4a1c0f]",
    },
    {
      name: "Seasonal campaign ads",
      about: "Time-sensitive creative for holidays, flash sales, product drops, and promotional events that demand urgency.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#e6f3ff]",
      textColor: "text-[#003366]",
    },
    {
      name: "Localized ad creative",
      about: "Culturally adapted designs and messaging for regional campaigns that resonate globally without losing brand consistency.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#fff4e6]",
      textColor: "text-[#663300]",
    },
    {
      name: "Landing page design",
      about: "Conversion-optimized landing pages designed to pair perfectly with your paid campaigns and drive results.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#f0e6ff]",
      textColor: "text-[#330066]",
    },
  ];

  return (
    <div>
      <ServiceSchema
        serviceName="Ad Creative Services"
        serviceType="ProfessionalService"
        description="Create compelling ad creatives that capture attention, drive engagement, and convert. From social media ads to display advertising, we design campaigns that deliver results."
        slug="ad-creative"
        priceRange="$500-$3000"
        category="Digital Advertising"
        features={[
          "Social Media Ad Design",
          "Display Ad Creation",
          "Video Ad Production",
          "Banner Ad Design",
          "Retargeting Ad Creatives",
          "Native Ad Design",
          "A/B Testing",
          "Performance Optimization"
        ]}
        benefits={[
          "Higher Click-Through Rates",
          "Increased Conversion Rates",
          "Better Brand Recognition",
          "Improved Ad Performance",
          "Professional Design Quality",
          "Multi-Platform Optimization"
        ]}
        serviceOutput="Professionally designed ad creatives optimized for performance across all digital platforms."
        audience="Marketing teams, agencies, e-commerce businesses, SaaS companies, and brands looking to improve their advertising performance."
        additionalType="https://schema.org/CreativeWork"
      />
      <CommonServicesHeroSection
        title="High-impact ads that stop the scroll and drive conversions"
        subtitle="Ad Creative Services"
        description="Whether it's digital, social, display, print, or out-of-home, Aneeverse delivers the ad creative you need fast, flexible, and always on-brand. From concept to final delivery, we're your creative partner for campaigns that perform."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/email-design/hero-banner.avif"
        scrollServices={scrollServices}
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Tired of ad fatigue?"
        title="Your audience is bored. The algorithm knows it. Your ROI feels it."
        highlightText=""
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Ad Creative Services"
        description="Ads lose effectiveness quickly if it's not your audience getting bored, it's the platform penalizing repetitive creative. And that directly impacts your bottom line."
        additionalText="Tight deadlines, limited resources, and talent gaps make it nearly impossible to keep pace with the demand for fresh, compelling ads. Your in-house team is already stretched thin, and freelancers can't scale with your campaigns. To stay ahead and maintain performance, you need a creative partner built for speed and consistency."
      />
      <DynamicCreativeSection
        subtitle="What we deliver"
        title="Ad creative services that scale with your ambition"
        heighlightText=""
        description="From big campaign concepts to video editing and everything in between, we provide the creative firepower to keep your ads fresh, on-brand, and performing across every channel and campaign."
        items={items}
      />
      <ChannelTailoredSection
        subtitle="Built for every channel"
        title="Ads that work wherever they are"
        titleHighlight="wherever"
        channels={[
          {
            title: "Digital",
            subtitle: "High-performing ads for programmatic, search, display, and video platforms.",
            icon: <FaDesktop className="w-8 h-8" />,
          },
          {
            title: "Social media",
            subtitle: "Platform-optimized visuals and video for Meta, TikTok, LinkedIn, and more.",
            icon: <FaMobile className="w-8 h-8" />,
          },
          {
            title: "Streaming platforms",
            subtitle: "Short- and long-form video ads tailored for CTV, YouTube, and on-demand viewers.",
            icon: <FaPlayCircle className="w-8 h-8" />,
          },
          {
            title: "Display banners",
            subtitle: "Dynamic, static, and rich media banners in all standard sizes that drive awareness and clicks.",
            icon: <FaImage className="w-8 h-8" />,
          },
          {
            title: "Print advertising",
            subtitle: "Bold, clear designs for direct mail, magazines, newspaper inserts, flyers, and print collateral.",
            icon: <FaNewspaper className="w-8 h-8" />,
          },
          {
            title: "Out-of-home (OOH)",
            subtitle: "Big-impact creative built for billboards, transit advertising, and street-level placements that demand attention.",
            icon: <FaMapMarkerAlt className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="HOW WE WORK"
        title="A faster, smarter way to create high-performing ads"
        titleHighlight="high-performing"
        description="Our process removes bottlenecks and adds scale, with dedicated creative teams, transparent communication, and delivery built for speed without sacrificing quality."
        steps={[
          {
            number: "1",
            title: "Smart intake",
            subtitle: "Start with a clear, collaborative brief using our streamlined platform for kickoff, feedback, and real-time collaboration.",
          },
          {
            number: "2",
            title: "Always on-brand",
            subtitle: "Stay visually consistent with brand toolkits, creative systems, and teams trained specifically on your guidelines and voice.",
          },
          {
            number: "3",
            title: "Speed without sacrifice",
            subtitle: "Get fast turnarounds with dedicated creative pods that learn your team's goals, preferences, and campaign rhythms.",
          },
          {
            number: "4",
            title: "Flexible scale",
            subtitle: "Spin up more output, formats, or entire campaigns in days not weeks with modular resourcing that grows with you.",
          },
          {
            number: "5",
            title: "Built to test",
            subtitle: "Receive multiple creative variants quickly so you can experiment, optimize performance, and avoid ad fatigue before it kills your ROI.",
          },
        ]}
      />
      <DynamicOurWorks />
      <TestimonialSlider />
      <AdCreativeFAQSection />
    </div>
  )
}

export default page

