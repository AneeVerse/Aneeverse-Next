import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import N8nWorkflowsFAQSection from '@/components/services/n8n-workflows/N8nWorkflowsFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaRobot, FaSync, FaPlug, FaDatabase, FaChartLine, FaShieldAlt } from "react-icons/fa"
import React from 'react'

export const metadata = {
  title: "n8n Workflows | Aneeverse",
  description: "Automate your business processes with n8n workflow automation. Connect apps, automate tasks, and streamline operations with powerful workflow integrations.",
  openGraph: {
    title: "n8n Workflows | Aneeverse",
    description: "Automate your business processes with n8n workflow automation. Connect apps, automate tasks, and streamline operations with powerful workflow integrations.",
    url: `https://aneeverse.com/services/n8n-workflows`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "n8n Workflows | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n Workflows | Aneeverse",
    description: "Automate your business processes with n8n workflow automation. Connect apps, automate tasks, and streamline operations with powerful workflow integrations.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    { name: "Workflow Automation", about: "Design and implement automated workflows that connect your apps and streamline business processes.", image: "/images/services/email-design/email-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "App Integrations", about: "Connect hundreds of apps and services to create seamless data flows and automated processes.", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "Data Synchronization", about: "Keep your data synchronized across platforms with automated workflows that ensure consistency.", image: "/images/services/email-design/email-html5.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "Process Optimization", about: "Identify and automate repetitive tasks to save time and reduce manual errors in your workflows.", image: "/images/services/email-design/email-design-templates.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "Custom Workflows", about: "Build custom n8n workflows tailored to your specific business needs and operational requirements.", image: "/images/services/email-design/email-newsletter-design.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "Workflow Monitoring", about: "Monitor and optimize your workflows with analytics and reporting to ensure peak performance.", image: "/images/services/email-design/email-ui-ux-audits.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
  ];

  const stats = [
    { value: "200+", description: "n8n workflows implemented for clients." },
    { value: "60%", description: "Average time saved through workflow automation." },
    { value: "500+", description: "App integrations configured and maintained." },
    { value: "24/7", description: "Automated workflows running continuously." },
  ];

  return (
    <div>
      <ServiceSchema 
        serviceName="n8n Workflow Automation Services" 
        serviceType="ProfessionalService" 
        description="Automate your business processes with n8n workflow automation. Connect apps, automate tasks, and streamline operations with powerful workflow integrations." 
        slug="n8n-workflows" 
        priceRange="$1500-$10000" 
        category="Automation Services" 
        features={[
          "Workflow Automation",
          "App Integrations",
          "Data Synchronization",
          "Process Optimization",
          "Custom Workflows",
          "Workflow Monitoring",
          "API Connections",
          "Error Handling & Recovery"
        ]} 
        benefits={[
          "Time Savings",
          "Reduced Manual Errors",
          "Improved Efficiency",
          "Better Data Consistency",
          "Scalable Automation",
          "Cost Reduction"
        ]} 
        serviceOutput="Fully automated workflows with integrations, monitoring, and support." 
        audience="Businesses looking to automate processes, integrate apps, and streamline operations." 
        additionalType="https://schema.org/ProfessionalService" 
      />
      <CommonServicesHeroSection 
        title="n8n Workflow Automation" 
        subtitle="Automation Services" 
        description="Automate your business processes with n8n workflow automation. Connect apps, automate tasks, and streamline operations with powerful workflow integrations." 
        ctaText="Book a Call" 
        ctaLink="/contact" 
        backgroundImage="/images/services/email-design/hero-banner.avif" 
      />
      <SlidingLogos />
      <DynamicSupportSection 
        subtitle="BUILT FOR MODERN BUSINESSES" 
        title="Workflows That " 
        highlightText="automate & integrate" 
        imageSrc="/images/services/email-design/about-email.avif" 
        imageAlt="n8n Workflow Automation" 
        description="Transform your business operations with intelligent workflow automation. Our n8n experts build custom workflows that connect your apps and automate repetitive tasks." 
        additionalText="From simple data transfers to complex multi-step processes, we create workflows that save time, reduce errors, and improve efficiency across your entire organization." 
      />
      <DynamicCreativeSection 
        subtitle="Automation Excellence" 
        title="n8n Workflow Services" 
        heighlightText="Comprehensive " 
        items={items} 
      />
      <ChannelTailoredSection
        subtitle="Automation for every process"
        title="Workflows that work for your business"
        titleHighlight="your business"
        description="From app integrations to data synchronization, we automate processes that save time and improve efficiency."
        channels={[
          {
            title: "Workflow Design",
            subtitle: "Design custom n8n workflows that automate your business processes and connect your apps seamlessly.",
            icon: <FaRobot className="w-8 h-8" />,
          },
          {
            title: "App Integrations",
            subtitle: "Connect hundreds of apps and services including CRMs, databases, APIs, and cloud platforms.",
            icon: <FaPlug className="w-8 h-8" />,
          },
          {
            title: "Data Synchronization",
            subtitle: "Keep your data synchronized across platforms with automated workflows that ensure consistency and accuracy.",
            icon: <FaSync className="w-8 h-8" />,
          },
          {
            title: "Process Automation",
            subtitle: "Automate repetitive tasks and processes to save time, reduce errors, and improve operational efficiency.",
            icon: <FaChartLine className="w-8 h-8" />,
          },
          {
            title: "Database Integration",
            subtitle: "Connect and automate database operations, data transfers, and synchronization across systems.",
            icon: <FaDatabase className="w-8 h-8" />,
          },
          {
            title: "Security & Monitoring",
            subtitle: "Implement secure workflows with error handling, monitoring, and recovery mechanisms for reliability.",
            icon: <FaShieldAlt className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="HOW WE WORK"
        title="From manual processes to automated workflows without the complexity"
        titleHighlight="complexity"
        description="Our n8n workflow implementation process ensures smooth automation setup and optimization of workflows that drive efficiency."
        steps={[
          {
            number: "1",
            title: "Process Analysis",
            subtitle: "We analyze your current processes, identify automation opportunities, and map workflow requirements.",
          },
          {
            number: "2",
            title: "Workflow Design",
            subtitle: "We design custom n8n workflows, define triggers, actions, and data flows tailored to your needs.",
          },
          {
            number: "3",
            title: "Integration & Setup",
            subtitle: "We connect your apps and services, configure workflows, and set up authentication and permissions.",
          },
          {
            number: "4",
            title: "Testing & Deployment",
            subtitle: "We thoroughly test workflows, handle edge cases, then deploy with monitoring and error handling.",
          },
          {
            number: "5",
            title: "Optimization & Support",
            subtitle: "We monitor workflow performance, optimize for efficiency, and provide ongoing support and updates.",
          },
        ]}
      />
      <DynamicOurWorks />
      <DynamicStateSection 
        title="Our n8n Automation Impact" 
        subtitle="PROVEN RESULTS" 
        stats={stats} 
      />
      <TestimonialSlider />
      <N8nWorkflowsFAQSection />
    </div>
  )
}

export default page

