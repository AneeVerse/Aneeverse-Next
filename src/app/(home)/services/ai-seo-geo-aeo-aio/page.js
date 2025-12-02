import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import AISEOGeoAEOAIOFAQSection from '@/components/services/ai-seo-geo-aeo-aio/AISEOGeoAEOAIOFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import React from 'react'

export const metadata = {
  title: "AI SEO (GEO) (AEO) (AIO) | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "AI SEO (GEO) (AEO) (AIO) | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/ai-seo-geo-aeo-aio`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "AI SEO (GEO) (AEO) (AIO) | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SEO (GEO) (AEO) (AIO) | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    { name: "AI SEO Optimization", about: "Leveraging AI to optimize your website for search engines and improve rankings.", image: "/images/services/email-design/email-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "Geo-Targeted SEO", about: "Optimizing content for specific geographic locations to improve local search visibility.", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "Answer Engine Optimization", about: "Optimizing content to appear in AI-powered answer engines and voice search results.", image: "/images/services/email-design/email-html5.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "AI Optimization", about: "Using AI tools to analyze and optimize your SEO strategy for maximum effectiveness.", image: "/images/services/email-design/email-design-templates.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "Voice Search Optimization", about: "Optimizing content for voice search queries and conversational AI interactions.", image: "/images/services/email-design/email-newsletter-design.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "AI Content Strategy", about: "Developing content strategies optimized for AI search engines and modern search behavior.", image: "/images/services/email-design/email-ui-ux-audits.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
  ];

  const stats = [
    { value: "300+", description: "Websites optimized with AI SEO strategies." },
    { value: "45%", description: "Average increase in organic traffic." },
    { value: "80%", description: "Improvement in voice search visibility." },
    { value: "24/7", description: "AI-powered monitoring and optimization." },
  ];

  return (
    <div>
      <ServiceSchema serviceName="AI SEO (GEO) (AEO) (AIO) Services" serviceType="ProfessionalService" description="Future-proof your SEO strategy with AI-powered optimization for geographic, answer engine, and AI search optimization. Stay ahead of search trends." slug="ai-seo-geo-aeo-aio" priceRange="$2000-$10000" category="SEO Services" features={["AI SEO Optimization", "Geo-Targeted SEO", "Answer Engine Optimization", "AI Optimization", "Voice Search", "Content Strategy", "Technical SEO", "Performance Tracking"]} benefits={["Better Rankings", "Increased Traffic", "Voice Search Ready", "Future-Proof Strategy", "Local Visibility", "AI Search Visibility"]} serviceOutput="Comprehensive AI-powered SEO optimization strategy and implementation." audience="Businesses, marketers, and agencies looking to optimize for modern search engines." additionalType="https://schema.org/ProfessionalService" />
      <CommonServicesHeroSection title="AI SEO (GEO) (AEO) (AIO)" subtitle="SEO Services" description="Future-proof your SEO strategy with AI-powered optimization for geographic, answer engine, and AI search optimization. Stay ahead of search trends." ctaText="Book a Call" ctaLink="/contact" backgroundImage="/images/services/email-design/hero-banner.avif" />
      <SlidingLogos />
      <DynamicSupportSection subtitle="BUILT FOR MODERN SEO" title="SEO That " highlightText="adapts & performs" imageSrc="/images/services/email-design/about-email.avif" imageAlt="AI SEO Services" description="Optimize for the future of search with AI-powered SEO strategies. Our advanced approach ensures your content performs in traditional search, voice search, and AI-powered answer engines." additionalText="From geographic optimization to answer engine optimization, we help you stay ahead of search trends and maximize your visibility across all search platforms." />
      <DynamicCreativeSection subtitle="Advanced SEO" title="AI SEO Services" heighlightText="Next-Generation " items={items} />
      <DynamicOurWorks />
      <DynamicStateSection title="Our SEO Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialSlider />
      <AISEOGeoAEOAIOFAQSection />
    </div>
  )
}

export default page

