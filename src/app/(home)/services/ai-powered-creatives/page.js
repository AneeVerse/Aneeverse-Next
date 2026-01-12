import TestimonialsSection from '@/components/home/TestimonialsSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import AIPoweredCreativesFAQSection from '@/components/services/ai-powered-creatives/AIPoweredCreativesFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import React from 'react'

export const metadata = {
  title: "AI Powered Creatives | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "AI Powered Creatives | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/ai-powered-creatives`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "AI Powered Creatives | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Powered Creatives | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    { name: "AI-Generated Visuals", about: "Leveraging AI to create stunning visuals that capture attention and convey your message effectively.", image: "/images/services/email-design/email-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "Smart Design Automation", about: "Automating design workflows to deliver high-quality creatives at scale and speed.", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "AI-Enhanced Graphics", about: "Using AI tools to enhance and optimize graphics for maximum impact and engagement.", image: "/images/services/email-design/email-html5.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "Intelligent Content Creation", about: "Creating content that adapts and optimizes based on audience insights and performance data.", image: "/images/services/email-design/email-design-templates.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "Automated Design Variations", about: "Generating multiple design variations quickly to test and optimize performance.", image: "/images/services/email-design/email-newsletter-design.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "AI-Powered Personalization", about: "Creating personalized creatives that resonate with individual audience segments.", image: "/images/services/email-design/email-ui-ux-audits.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
  ];

  const stats = [
    { value: "10x", description: "Faster creative production with AI-powered tools." },
    { value: "300+", description: "AI-generated creatives delivered to clients." },
    { value: "60%", description: "Cost reduction in creative production workflows." },
    { value: "95%", description: "Client satisfaction with AI-enhanced creatives." },
  ];

  return (
    <div>
      <ServiceSchema serviceName="AI Powered Creatives Services" serviceType="ProfessionalService" description="Harness the power of AI to create stunning, scalable creatives that drive engagement and results. From automated design to intelligent content creation." slug="ai-powered-creatives" priceRange="$1000-$5000" category="Creative Services" features={["AI-Generated Visuals", "Smart Design Automation", "AI-Enhanced Graphics", "Intelligent Content Creation", "Automated Variations", "Personalization", "Performance Optimization", "Scalable Production"]} benefits={["Faster Production", "Cost Efficiency", "Higher Quality", "Better Performance", "Scalability", "Personalization"]} serviceOutput="AI-powered creatives optimized for performance and engagement." audience="Marketing teams, agencies, and businesses looking to scale creative production." additionalType="https://schema.org/CreativeWork" />
      <CommonServicesHeroSection title="AI Powered Creatives" subtitle="Creative Services" description="Harness the power of AI to create stunning, scalable creatives that drive engagement and results. From automated design to intelligent content creation." ctaText="Book a Call" ctaLink="/contact" backgroundImage="/images/services/email-design/hero-banner.avif" />
      <SlidingLogos />
      <DynamicSupportSection subtitle="BUILT FOR MODERN MARKETING TEAMS" title="AI Creatives That " highlightText="scale & perform" imageSrc="/images/services/email-design/about-email.avif" imageAlt="AI Powered Creatives" description="Revolutionize your creative production with AI-powered tools that deliver high-quality designs at scale. Our AI-enhanced creatives combine human creativity with machine efficiency." additionalText="From automated design generation to intelligent optimization, we leverage cutting-edge AI to create creatives that perform better and cost less." />
      <DynamicCreativeSection subtitle="AI Innovation" title="AI Powered Creative Services" heighlightText="Intelligent " items={items} />
      <DynamicOurWorks />
      <DynamicStateSection title="Our AI Creative Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialsSection />
      <AIPoweredCreativesFAQSection />
    </div>
  )
}

export default page

