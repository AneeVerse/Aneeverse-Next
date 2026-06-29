import TestimonialsSection from '@/components/home/TestimonialsSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import BlogWritingFAQSection from '@/components/services/blog-writing/BlogWritingFAQSection'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaSearch, FaStar, FaCalendarAlt, FaCog, FaChartBar, FaCommentDots } from "react-icons/fa"
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
  title: "SEO & Blog Writing Services | Aneeverse",
  description: "Content that ranks, engages, and converts. We create SEO-optimized blogs that attract organic traffic, build authority, and turn readers into customers.",
  openGraph: {
    title: "SEO & Blog Writing Services | Aneeverse",
    description: "Content that ranks, engages, and converts. We create SEO-optimized blogs that attract organic traffic, build authority, and turn readers into customers.",
    url: `https://aneeverse.com/services/blog-writing`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "SEO & Blog Writing Services | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & Blog Writing Services | Aneeverse",
    description: "Content that ranks, engages, and converts. We create SEO-optimized blogs that attract organic traffic, build authority, and turn readers into customers.",
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
    console.error('Error fetching projects for blog-writing page:', error);
  }

  const scrollServices = [
    { title: "SEO blog writing", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/SEO%20&%20Blog/SEO%20blogs%20Resized.png?updatedAt=1782714075439" },
    { title: "Long-form content creation", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/SEO%20&%20Blog/Long%20form%20pillar%20content.png?updatedAt=1782714047094" },
    { title: "Keyword research & strategy", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/SEO%20&%20Blog/Keyword%20reaserach%20and%20statergy%20Resized.png?updatedAt=1782714065012" },
    { title: "Industry / niche authority blogs", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/SEO%20&%20Blog/Industry%20_%20niche%20authority%20blogs%20Resized.png?updatedAt=1782714080008" },
    { title: "Content calendars & planning", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/SEO%20&%20Blog/CONTENT%20CALENDAR%20%20PLANNING%20resized.png?updatedAt=1782714085071" },
    { title: "SEO optimization & on-page editing", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/SEO%20&%20Blog/SEO%20optimization%20and%20on%20page%20editing%20Resize.png?updatedAt=1782714069115" },
    { title: "Performance tracking & analytics", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/SEO%20&%20Blog/PERFORMANCE%20Analytics%20&%20TRACKING%20%20Resized.png?updatedAt=1782714075766" },
  ];
  const items = [
    {
      name: "SEO blog writing",
      about: "Search-optimized posts designed to rank for targeted keywords and boost organic visibility.",
      image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/SEO%20&%20Blog/SEO%20blogs%20Resized.png?updatedAt=1782714075439",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Long-form pillar content",
      about: "In-depth content that establishes authority, answers core topics, and improves domain strength.",
      image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/SEO%20&%20Blog/Long%20form%20pillar%20content.png?updatedAt=1782714047094",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Keyword research & topic strategy",
      about: "Find high-value keywords and map content opportunities for growth.",
      image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/SEO%20&%20Blog/Keyword%20reaserach%20and%20statergy%20Resized.png?updatedAt=1782714065012",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Weekly / monthly blog packages",
      about: "Consistent content flow with topic planning and execution schedules.",
      image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/SEO%20&%20Blog/Weekly%20and%20monthly%20packages%20Resize.png?updatedAt=1782714081770",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Content calendar planning",
      about: "Strategic schedules aligned with SEO goals and seasonal trends.",
      image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/SEO%20&%20Blog/CONTENT%20CALENDAR%20%20PLANNING%20resized.png?updatedAt=1782714085071",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "On-page SEO optimization",
      about: "Title tags, meta descriptions, headers, and keyword placement for maximum impact.",
      image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/SEO%20&%20Blog/SEO%20optimization%20and%20on%20page%20editing%20Resize.png?updatedAt=1782714069115",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Industry / niche authority blogs",
      about: "Specialized content for unique sectors like B2B SaaS, Finance, and Enterprise Health.",
      image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/SEO%20&%20Blog/Industry%20_%20niche%20authority%20blogs%20Resized.png?updatedAt=1782714080008",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
    {
      name: "Performance analytics & reporting",
      about: "Monitor rankings, traffic, and content performance to refine strategy.",
      image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/SEO%20&%20Blog/PERFORMANCE%20Analytics%20&%20TRACKING%20%20Resized.png?updatedAt=1782714075766",
      bgColor: "bg-[#ffd6cc]",
      textColor: "text-[#4a1c0f]",
    },
    {
      name: "Brand tone & voice alignment",
      about: "Write consistent content that reflects your brand’s personality and strengthens connection.",
      image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/SEO%20&%20Blog/Brand%20tone%20and%20voice%20alignment%20resized.png?updatedAt=1782714082630",
      bgColor: "bg-[#e6f3ff]",
      textColor: "text-[#003366]",
    },
  ];


  // stats data
  const statsData = [
    { value: "500+", description: "SEO-optimized blogs and pillar pages delivered." },
    { value: "3x", description: "Average increase in organic traffic for our regular clients." },
    { value: "100%", description: "Strategy-first content aligned with search results." },
    { value: "24/7", description: "Ongoing performance monitoring and reporting." },
  ];
  return (
    <div>
      <ServiceSchema
        serviceName="SEO & Blog Writing"
        serviceType="ProfessionalService"
        description="Aneeverse creates SEO-optimized blogs and content that attract organic traffic, build authority, and turn readers into customers. From keyword strategy to storytelling."
        slug="blog-writing"
        priceRange="$300-$5000"
        category="Content Marketing"
        features={[
          "SEO blog writing",
          "Long-form content creation",
          "Keyword research & strategy",
          "Industry / niche authority blogs",
          "Content calendars & planning",
          "SEO optimization & on-page editing",
          "Performance tracking & analytics"
        ]}
        benefits={[
          "Increased Organic Visibility",
          "Established Brand Authority",
          "Consistent Content Publishing",
          "Better Keyword Rankings",
          "Higher User Engagement",
          "Data-Driven Growth"
        ]}
        serviceOutput="Search-ready, high-quality blog content and calendars."
        audience="Marketing managers, business owners, and e-commerce brands."
        additionalType="https://schema.org/CreativeWork"
      />
      <CommonServicesHeroSection
        title="Content that ranks, engages, and converts"
        subtitle="SEO & Blog Writing Services"
        description="Aneeverse creates SEO-optimized blogs and content that attract organic traffic, build authority, and turn readers into customers. From keyword strategy to compelling storytelling, we help you dominate search results and strengthen your brand voice-consistently, strategically, and with real measurable impact."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/google-ads/hero-banner.avif"
        scrollServices={scrollServices}
      />

      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Content that drives results"
        title="Blogging without strategy doesn’t move the "
        highlightText="needle"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="SEO & Blog Writing"
        description="Generic blog posts fail to rank, attract traffic, or influence buyers. Without keyword focus, audience insight, and search intent alignment, your content gets lost and your competitors outrank you."
        additionalText="You need content that’s not just well-written, but optimized for search engines and tailored to your audience’s needs. Aneeverse blends SEO best practices, topic authority, and engaging storytelling to create blog content that delivers long-term traffic, credibility, and conversions."
      />
      <DynamicCreativeSection
        subtitle="What we deliver"
        title="SEO-focused blogs with measurable impact"
        heighlightText=""
        description="From keyword research to optimized publish-ready content, we deliver blog content that aligns with search trends, customer intent, and your growth goals."
        items={items}
      />
      <ChannelTailoredSection
        subtitle="Content that connects with search and people"
        title="Blogs that elevate your brand and search presence"
        titleHighlight="search presence"
        description="Our content strategy fuses SEO logic and audience relevance, so you don’t just get traffic-you get the right traffic."
        channels={[
          {
            title: "Keyword-driven blogs",
            subtitle: "Posts optimized around strategic keywords for better ranking and visibility.",
            icon: <FaSearch className="w-8 h-8" />,
          },
          {
            title: "Long-form authority content",
            subtitle: "Comprehensive, researched content that positions your brand as an expert.",
            icon: <FaStar className="w-8 h-8" />,
          },
          {
            title: "Content planning & calendars",
            subtitle: "Roadmaps for consistent, strategic publishing aligned with business goals.",
            icon: <FaCalendarAlt className="w-8 h-8" />,
          },
          {
            title: "SEO optimization",
            subtitle: "On-page SEO built into every piece for ranking performance.",
            icon: <FaCog className="w-8 h-8" />,
          },
          {
            title: "Analytics & reporting",
            subtitle: "Data insights on rankings, traffic, and engagement for smarter decisions.",
            icon: <FaChartBar className="w-8 h-8" />,
          },
          {
            title: "Brand-aligned storytelling",
            subtitle: "Content that reflects your voice and resonates with your audience.",
            icon: <FaCommentDots className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="how we work"
        title="SEO content that performs-from strategy to traffic"
        titleHighlight="traffic"
        description="Our content process blends SEO expertise with storytelling, so each blog drives value from day one."
        steps={[
          {
            number: "1",
            title: "Keyword & topic research",
            subtitle: "Identify search opportunities and map blogs to high-value keywords.",
          },
          {
            number: "2",
            title: "Content strategy & calendar",
            subtitle: "Plan a publishing schedule that aligns with audience seasonality and business goals.",
          },
          {
            number: "3",
            title: "Draft & optimize",
            subtitle: "Write compelling content with on-page SEO, headers, and rich insights.",
          },
          {
            number: "4",
            title: "Editing & publishing",
            subtitle: "Refine tone, ensure clarity, and prepare for SEO-ready publishing.",
          },
          {
            number: "5",
            title: "Performance tracking",
            subtitle: "Measure rankings, traffic, and engagement; optimize based on data.",
          },
        ]}
      />
      <DynamicOurWorks projects={projects} />
      <DynamicStateSection
        title="SEO & Content Impact"
        subtitle="RESULTS THAT MATTER"
        stats={statsData}
      />
      <TestimonialsSection />
      <BlogWritingFAQSection />

    </div>
  )
}


export default page
