import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import SalesMarketingAutomationFAQSection from '@/components/services/sales-marketing-automation/SalesMarketingAutomationFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaCog, FaUsers, FaEnvelope, FaChartBar, FaSync, FaRocket } from "react-icons/fa"
import React from 'react'

export const metadata = {
  title: "Sales & Marketing Automation | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Sales & Marketing Automation | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/sales-marketing-automation`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Sales & Marketing Automation | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales & Marketing Automation | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    { name: "Marketing Automation", about: "Automating marketing workflows to nurture leads and drive conversions efficiently.", image: "/images/services/email-design/email-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "CRM Integration", about: "Integrating automation tools with your CRM to streamline sales and marketing processes.", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "Workflow Design", about: "Designing automated workflows that save time and improve efficiency.", image: "/images/services/email-design/email-html5.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "Lead Nurturing Automation", about: "Setting up automated sequences to nurture leads through the sales funnel.", image: "/images/services/email-design/email-design-templates.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "Email Automation", about: "Creating automated email campaigns that engage customers at the right time.", image: "/images/services/email-design/email-newsletter-design.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "Analytics & Reporting", about: "Setting up analytics and reporting to track automation performance and ROI.", image: "/images/services/email-design/email-ui-ux-audits.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
  ];

  const stats = [
    { value: "300+", description: "Automation workflows implemented for clients." },
    { value: "50%", description: "Average time saved through automation." },
    { value: "35%", description: "Average increase in conversion rates." },
    { value: "24/7", description: "Automated marketing and sales processes running." },
  ];

  return (
    <div>
      <ServiceSchema serviceName="Sales & Marketing Automation Services" serviceType="ProfessionalService" description="Streamline your sales and marketing processes with intelligent automation. From lead nurturing to CRM integration, we optimize your workflows." slug="sales-marketing-automation" priceRange="$2000-$15000" category="Marketing Services" features={["Marketing Automation", "CRM Integration", "Workflow Design", "Lead Nurturing", "Email Automation", "Analytics", "Campaign Management", "Performance Optimization"]} benefits={["Time Savings", "Higher Conversions", "Better Lead Quality", "Improved Efficiency", "Scalable Processes", "Data-Driven Insights"]} serviceOutput="Complete automation setup with workflows, integrations, and analytics." audience="Sales teams, marketing teams, and businesses looking to automate processes." additionalType="https://schema.org/ProfessionalService" />
      <CommonServicesHeroSection title="Sales & Marketing Automation" subtitle="Marketing Services" description="Streamline your sales and marketing processes with intelligent automation. From lead nurturing to CRM integration, we optimize your workflows." ctaText="Book a Call" ctaLink="/contact" backgroundImage="/images/services/email-design/hero-banner.avif" />
      <SlidingLogos />
      <DynamicSupportSection subtitle="BUILT FOR SALES & MARKETING TEAMS" title="Automation That " highlightText="scales & converts" imageSrc="/images/services/email-design/about-email.avif" imageAlt="Sales Marketing Automation" description="Transform your sales and marketing operations with intelligent automation. Our solutions streamline processes, nurture leads, and drive conversions." additionalText="From workflow design to CRM integration, we set up automation systems that save time, improve efficiency, and deliver measurable results for your business." />
      <DynamicCreativeSection subtitle="Automation Excellence" title="Sales & Marketing Automation Services" heighlightText="Intelligent " items={items} />
      <ChannelTailoredSection
        subtitle="Automation for every process"
        title="Automation that works for your sales and marketing"
        titleHighlight="your sales and marketing"
        description="From lead nurturing to CRM integration, we automate processes that save time and drive conversions."
        channels={[
          {
            title: "Marketing Automation",
            subtitle: "Automate marketing workflows to nurture leads, send targeted campaigns, and drive conversions.",
            icon: <FaCog className="w-8 h-8" />,
          },
          {
            title: "Lead Nurturing",
            subtitle: "Automated sequences that nurture leads through the sales funnel with personalized content.",
            icon: <FaUsers className="w-8 h-8" />,
          },
          {
            title: "Email Automation",
            subtitle: "Automated email campaigns that engage customers at the right time with relevant content.",
            icon: <FaEnvelope className="w-8 h-8" />,
          },
          {
            title: "CRM Integration",
            subtitle: "Seamlessly integrate automation tools with your CRM to streamline sales and marketing processes.",
            icon: <FaSync className="w-8 h-8" />,
          },
          {
            title: "Workflow Design",
            subtitle: "Design automated workflows that save time, improve efficiency, and scale with your business.",
            icon: <FaRocket className="w-8 h-8" />,
          },
          {
            title: "Analytics & Reporting",
            subtitle: "Track automation performance and ROI with comprehensive analytics and reporting dashboards.",
            icon: <FaChartBar className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="HOW WE WORK"
        title="From manual to automated without the disruption"
        titleHighlight="disruption"
        description="Our automation process ensures smooth implementation and optimization of automated workflows that drive results."
        steps={[
          {
            number: "1",
            title: "Process Analysis",
            subtitle: "We analyze your current processes, identify automation opportunities, and map workflows.",
          },
          {
            number: "2",
            title: "Automation Design",
            subtitle: "We design automated workflows, triggers, and sequences tailored to your business needs.",
          },
          {
            number: "3",
            title: "Integration & Setup",
            subtitle: "We integrate automation tools with your CRM and systems, then configure workflows and triggers.",
          },
          {
            number: "4",
            title: "Testing & Launch",
            subtitle: "We test automation workflows thoroughly, then launch with monitoring and optimization.",
          },
          {
            number: "5",
            title: "Optimization & Support",
            subtitle: "We monitor performance, optimize workflows, and provide ongoing support to ensure success.",
          },
        ]}
      />
      <DynamicOurWorks />
      <DynamicStateSection title="Our Automation Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialSlider />
      <SalesMarketingAutomationFAQSection />
    </div>
  )
}

export default page

