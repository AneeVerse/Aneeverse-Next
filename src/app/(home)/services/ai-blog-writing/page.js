import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import AIBlogWritingFAQSection from '@/components/services/ai-blog-writing/AIBlogWritingFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import React from 'react'

export const metadata = {
  title: "AI Blog Writing | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "AI Blog Writing | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/ai-blog-writing`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "AI Blog Writing | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Blog Writing | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    { name: "AI-Generated Blog Posts", about: "Creating high-quality blog content using AI tools that maintain authenticity and engagement.", image: "/images/services/email-design/email-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "SEO-Optimized Content", about: "Writing blog posts optimized for search engines to improve rankings and visibility.", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "Content Strategy", about: "Developing comprehensive content strategies that align with your business goals.", image: "/images/services/email-design/email-html5.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "Long-Form Articles", about: "Creating in-depth, comprehensive articles that provide value and establish authority.", image: "/images/services/email-design/email-design-templates.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "Content Editing & Refinement", about: "Refining AI-generated content with human expertise to ensure quality and brand voice.", image: "/images/services/email-design/email-newsletter-design.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "Content Calendar Planning", about: "Planning and organizing content calendars to maintain consistent publishing schedules.", image: "/images/services/email-design/email-ui-ux-audits.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
  ];

  const stats = [
    { value: "500+", description: "Blog posts written using AI-powered tools." },
    { value: "5x", description: "Faster content production compared to traditional methods." },
    { value: "80%", description: "Cost reduction in content creation workflows." },
    { value: "95%", description: "Client satisfaction with AI-enhanced content quality." },
  ];

  return (
    <div>
      <ServiceSchema serviceName="AI Blog Writing Services" serviceType="ProfessionalService" description="Scale your content production with AI-powered blog writing that maintains quality and authenticity. From SEO-optimized posts to comprehensive articles." slug="ai-blog-writing" priceRange="$200-$2000" category="Content Writing" features={["AI-Generated Blog Posts", "SEO Optimization", "Content Strategy", "Long-Form Articles", "Content Editing", "Content Calendar", "Keyword Research", "Performance Tracking"]} benefits={["Faster Production", "Cost Efficiency", "SEO Optimized", "Consistent Quality", "Scalable Content", "Better Rankings"]} serviceOutput="High-quality, SEO-optimized blog content ready for publication." audience="Content teams, marketers, businesses, and agencies needing scalable content production." additionalType="https://schema.org/CreativeWork" />
      <CommonServicesHeroSection title="AI Blog Writing Services" subtitle="Content Services" description="Scale your content production with AI-powered blog writing that maintains quality and authenticity. From SEO-optimized posts to comprehensive articles." ctaText="Book a Call" ctaLink="/contact" backgroundImage="/images/services/email-design/hero-banner.avif" />
      <SlidingLogos />
      <DynamicSupportSection subtitle="BUILT FOR CONTENT TEAMS" title="Blog Content That " highlightText="ranks & engages" imageSrc="/images/services/email-design/about-email.avif" imageAlt="AI Blog Writing" description="Revolutionize your content strategy with AI-powered blog writing that delivers quality at scale. Our AI-enhanced content combines machine efficiency with human expertise." additionalText="From keyword research to final publication, we create blog posts that rank well, engage readers, and drive results for your business." />
      <DynamicCreativeSection subtitle="Content Excellence" title="AI Blog Writing Services" heighlightText="Intelligent " items={items} />
      <DynamicOurWorks />
      <DynamicStateSection title="Our Content Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialSlider />
      <AIBlogWritingFAQSection />
    </div>
  )
}

export default page

