import TestimonialsSection from '@/components/home/TestimonialsSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import AdCreativeFAQSection from '@/components/services/ad-creative/AdCreativeFAQSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaDesktop, FaMobile, FaPlayCircle, FaImage, FaNewspaper, FaMapMarkerAlt } from "react-icons/fa"
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
  title: "Ad Creative Services | Aneeverse",
  description: "High impact ads that stop the scroll and drive conversions. Aneeverse delivers fast, flexible, and always on-brand ad creative across digital, social, display, and print channels.",
  openGraph: {
    title: "Ad Creative Services | Aneeverse",
    description: "High impact ads that stop the scroll and drive conversions. Aneeverse delivers fast, flexible, and always on-brand ad creative across digital, social, display, and print channels.",
    url: `https://aneeverse.com/services/ad-creative`,
    images: [
      {
        url: "/images/meta/phone.avif",
        width: 1200,
        height: 630,
        alt: "Ad Creative Services | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ad Creative Services | Aneeverse",
    description: "High impact ads that stop the scroll and drive conversions. Aneeverse delivers fast, flexible, and always on-brand ad creative across digital, social, display, and print channels.",
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

    const mappedWorks = works.map((item, index) => ({
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
    console.error('Error fetching projects for ad-creative page:', error);
  }

  // Scrolling services for hero section
  const scrollServices = [
    { title: "Static ad design", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/Social,%20printable%20and%20ads%20creative%20service/Static%20ads%20creatives.png?updatedAt=1782714061622" },
    { title: "Motion graphics and animated ads", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/Social,%20printable%20and%20ads%20creative%20service/Motion%20Graphics%20resize_.png?updatedAt=1782714076141" },
    { title: "Display advertising", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/Social,%20printable%20and%20ads%20creative%20service/Static%20ads%20creatives.png?updatedAt=1782714061622" },
    { title: "Ad campaign concepting", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/Social,%20printable%20and%20ads%20creative%20service/Ads%20creatives%20resized.png?updatedAt=1782714050151" },
    { title: "Multi-format adaptation", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/Social,%20printable%20and%20ads%20creative%20service/Multi%20format%20resize_.png?updatedAt=1782714044385" },
    { title: "Performance-driven A/B testing variants", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/Social,%20printable%20and%20ads%20creative%20service/A_B%20testing.png?updatedAt=1782714053197" },
  ];

  const items = [
    {
      name: "Static display ads",
      about: "Scroll-stopping visuals designed for social, digital, programmatic, and print placements that capture attention instantly.",
      image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/Social,%20printable%20and%20ads%20creative%20service/Static%20ads%20creatives.png?updatedAt=1782714061622",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Motion graphics ads",
      about: "High-performing animated content optimized for web, social feeds, and mobile devices that bring your message to life.",
      image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/Social,%20printable%20and%20ads%20creative%20service/Motion%20Graphics%20resize_.png?updatedAt=1782714076141",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Campaign concepting",
      about: "Big, bold ideas and strategic concepts that work seamlessly across multiple ad formats and channels.",
      image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/Social,%20printable%20and%20ads%20creative%20service/Ads%20creatives%20resized.png?updatedAt=1782714050151",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Multi-format adaptation",
      about: "One campaign concept scaled effortlessly across dozens of sizes, specs, and platform requirements without losing impact.",
      image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/Social,%20printable%20and%20ads%20creative%20service/Multi%20format%20resize_.png?updatedAt=1782714044385",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "A/B testing creative variants",
      about: "Multiple ad versions designed for performance testing, optimization, and avoiding creative fatigue.",
      image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/Social,%20printable%20and%20ads%20creative%20service/A_B%20testing.png?updatedAt=1782714053197",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Retargeting ad creative",
      about: "Conversion-focused ads specifically designed to re-engage warm audiences and close the loop on customer journeys.",
      image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/Social,%20printable%20and%20ads%20creative%20service/Re-trageting%20ads%20creative.png?updatedAt=1782714062487",
      bgColor: "bg-[#ffd6cc]",
      textColor: "text-[#4a1c0f]",
    },
    {
      name: "Seasonal campaign ads",
      about: "Time-sensitive creative for holidays, flash sales, product drops, and promotional events that demand urgency.",
      image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/Social,%20printable%20and%20ads%20creative%20service/Seasional%20ad%20creative%20Resized.png?updatedAt=1782714088890",
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
      image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/Social,%20printable%20and%20ads%20creative%20service/Landing%20Page%20Design.png?updatedAt=1782714054431",
      bgColor: "bg-[#f0e6ff]",
      textColor: "text-[#330066]",
    },
  ];

  return (
    <div>
      <ServiceSchema
        serviceName="Ad Creative Services"
        serviceType="ProfessionalService"
        description="Whether it's digital, social, display, print, or out-of-home, Aneeverse delivers the ad creative you need fast, flexible, and always on brand. From concept to final delivery, we are your creative partner for campaigns that perform."
        slug="ad-creative"
        priceRange="$500-$3000"
        category="Digital Advertising"
        features={[
          "Static ad design",
          "Motion graphics and animated ads",
          "Display advertising",
          "Ad campaign concepting",
          "Multi-format adaptation",
          "Performance-driven A/B testing variants"
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
        title="High impact ads that stop the scroll and drive conversions"
        subtitle="Ad Creative Services"
        description="Whether it's digital, social, display, print, or out-of-home, Aneeverse delivers the ad creative you need fast, flexible, and always on brand. From concept to final delivery, we are your creative partner for campaigns that perform."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/Social,%20Prints%20and%20%20Ad%20Creative%20Services.png?updatedAt=1782714067528"
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
        title="Ads that work wherever your audience is"
        titleHighlight="wherever"
        description="We design with platform specs, audience behavior, and conversion goals in mind so your ads look native, feel authentic, and deliver measurable results."
        channels={[
          {
            title: "Digital advertising",
            subtitle: "High-performing ads for programmatic platforms, search engines, display networks, and video platforms.",
            icon: <FaDesktop className="w-8 h-8" />,
          },
          {
            title: "Social media ads",
            subtitle: "Platform-optimized visuals and video for Meta, Instagram, TikTok, LinkedIn, and emerging social platforms.",
            icon: <FaMobile className="w-8 h-8" />,
          },
          {
            title: "Streaming platforms",
            subtitle: "Short- and long-form video ads tailored for CTV, YouTube, OTT, and on-demand viewers.",
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
      <DynamicStateSection
        title="Our Ad Creative Impact"
        subtitle="PROVEN RESULTS"
        stats={[
          {
            value: "500+",
            description: "Ad campaigns created and optimized for clients.",
          },
          {
            value: "35%",
            description: "Average increase in click-through rates.",
          },
          {
            value: "50%",
            description: "Average improvement in conversion rates.",
          },
          {
            value: "24/7",
            description: "Creative support and campaign management.",
          },
        ]}
      />
      <DynamicOurWorks projects={projects} />
      <TestimonialsSection />
      <AdCreativeFAQSection />
    </div>
  )
}

export default page

