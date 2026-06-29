import TestimonialsSection from '@/components/home/TestimonialsSection'
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
import { FaExchangeAlt, FaFilter, FaHeadset, FaFileInvoiceDollar, FaUserCheck, FaProjectDiagram } from "react-icons/fa"
import { client } from "@/sanity/lib/client"
import { getPortfolioWorksQuery, getCustomerStoriesQuery } from "@/sanity/lib/queries"
import { urlForImage } from "@/sanity/lib/image"
import React from 'react'

const getSanityImageUrl = (source, width = 800) => {
  if (!source) return "";
  try {
    return urlForImage(source).width(width).url();
  } catch (error) {
    return "";
  }
};

export const metadata = {
  title: "n8n Workflow Automation Services | Aneeverse",
  description: "Automate your business, reduce manual work, and scale faster. We build intelligent n8n workflow automation tailored to your business operations.",
  openGraph: {
    title: "n8n Workflow Automation Services | Aneeverse",
    description: "Automate your business, reduce manual work, and scale faster. We build intelligent n8n workflow automation tailored to your business operations.",
    url: `https://aneeverse.com/services/n8n-workflows`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "n8n Workflow Automation Services | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n Workflow Automation Services | Aneeverse",
    description: "Automate your business, reduce manual work, and scale faster. We build intelligent n8n workflow automation tailored to your business operations.",
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
    console.error('Error fetching projects for n8n workflows page:', error);
  }

  // Scrolling services for hero section
  const scrollServices = [
    { title: "Workflow automation consulting", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/N8N/Workflow%20Automation%20Resized.png?updatedAt=1782714077706" },
    { title: "Custom n8n workflow creation", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/N8N/Custom%20n8n%20workflow%20creation%20Resized.png?updatedAt=1782714069311" },
    { title: "App integrations & connectors", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/N8N/APP%20INTEGRATIONS%20&%20connection%20Resized.png?updatedAt=1782714060205" },
    { title: "Data syncing & systems integration", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/N8N/data%20sycn%20automation%20Resized.png?updatedAt=1782714068050" },
    { title: "Monitoring & maintenance", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/N8N/Monitor%20proformace%20and%20report%20Resized.png?updatedAt=1782714078644" },
    { title: "Training & support", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/N8N/Training%20&%20support%20Resized.png?updatedAt=1782714084080" },
  ];

  const items = [
    { name: "Workflow automation consulting", about: "Strategic analysis and planning to define where automation adds the most impact.", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/N8N/Workflow%20Automation%20Resized.png?updatedAt=1782714077706", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "Custom workflow builds", about: "End-to-end automation sequences designed to your business logic.", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/N8N/Custom%20n8n%20workflow%20creation%20Resized.png?updatedAt=1782714069311", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "App integrations & connectors", about: "Seamlessly connect your CRM, calendar, tickets, and productivity tools.", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/N8N/APP%20INTEGRATIONS%20&%20connection%20Resized.png?updatedAt=1782714060205", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "Data sync automations", about: "Keep customer, sales, and operations data aligned in real time.", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/N8N/data%20sycn%20automation%20Resized.png?updatedAt=1782714068050", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "Trigger-based task workflows", about: "Automate actions based on user behavior, time schedules, or external events.", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/N8N/Trigger%20based%20task%20workflow%20Resized.png?updatedAt=1782714070438", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
    { name: "Monitoring & performance reporting", about: "Real-time oversight of workflow execution and performance.", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/N8N/Monitor%20proformace%20and%20report%20Resized.png?updatedAt=1782714078644", bgColor: "bg-[#ffd6cc]", textColor: "text-[#4a1c0f]" },
    { name: "Training & support packages", about: "Enable your team to own, manage, and extend workflows confidently.", image: "https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/SERVICES%20&%20INTERNAL/N8N/Training%20&%20support%20Resized.png?updatedAt=1782714084080", bgColor: "bg-[#e6f3ff]", textColor: "text-[#003366]" },
  ];

  const stats = [
    { value: "500+", description: "Automated workflows deployed." },
    { value: "10k+", description: "Hours of manual work saved annually." },
    { value: "100%", description: "Focus on reliable, scalable solutions." },
    { value: "24/7", description: "Continuous system monitoring." },
  ];

  return (
    <div>
      <ServiceSchema
        serviceName="n8n Workflow Automation Services"
        serviceType="ProfessionalService"
        description="Aneeverse builds intelligent n8n workflow automation tailored to your business operations, connecting apps and data while eliminating repetitive tasks."
        slug="n8n-workflows"
        priceRange="$1500-$10000"
        category="Automation Services"
        features={[
          "Workflow Automation Consulting",
          "Custom n8n Workflow Creation",
          "App Integrations & Connectors",
          "Data Syncing & Systems Integration",
          "Monitoring & Maintenance",
          "Training & Support"
        ]}
        benefits={[
          "Reduce Manual Work",
          "Scale Faster",
          "Eliminate Repetitive Tasks",
          "Boost Productivity",
          "Operational Efficiency",
          "Save Costs"
        ]}
        serviceOutput="Intelligent automated workflows, app integrations, and operational efficiency."
        audience="Businesses looking to automate repetitive tasks and connect multiple systems."
        additionalType="https://schema.org/ProfessionalService"
      />
      <CommonServicesHeroSection
        title="Automate your business, reduce manual work, and scale faster"
        subtitle="N8N WORKFLOW AUTOMATION SERVICES"
        description="Aneeverse builds intelligent n8n workflow automation tailored to your business operations, connecting apps and data while eliminating repetitive tasks. Whether you need automation strategy, custom workflow builds, or end-to-end deployment, we help you streamline processes, boost productivity, and accelerate growth."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/website/hero-banner.avif"
        scrollServices={scrollServices}
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Automate without limits"
        title="Get time back and let "
        highlightText="systems do the work"
        imageSrc="/images/services/website/about-web.avif"
        imageAlt="n8n Workflow Automation"
        description="Manual tasks, disconnected tools, and repetitive data handling slow your growth and strain your team. Without automation, businesses waste valuable time and risk errors in core processes."
        additionalText="n8n’s visual, node-based automation platform lets you connect systems and automate processes without heavy coding - and with expert guidance, your workflows become reliable engines that save costs, boost output, and power operational efficiency."
      />
      <DynamicCreativeSection
        subtitle="What we deliver"
        title="Tailored n8n automations that transform work"
        heighlightText=""
        description="From initial strategy to final deployment, we build custom automations that eliminate busywork, sync systems, and enable your team to focus on what matters most."
        items={items}
      />
      <ChannelTailoredSection
        subtitle="Built for every business workflow need"
        title="Workflows that work for your business"
        titleHighlight="your business"
        description="Whether you’re automating marketing tasks, operational flows, data updates, or backend processes, our n8n workflows are engineered to reduce manual errors and increase throughput."
        channels={[
          {
            title: "Sales & CRM sync",
            subtitle: "Automatically sync leads, deals, and contacts between systems.",
            icon: <FaExchangeAlt className="w-8 h-8" />,
          },
          {
            title: "Marketing automations",
            subtitle: "Automate campaigns, follow-ups, and audience nurturing.",
            icon: <FaFilter className="w-8 h-8" />,
          },
          {
            title: "Support & ticket workflows",
            subtitle: "Automate ticket routing, escalation, and notifications.",
            icon: <FaHeadset className="w-8 h-8" />,
          },
          {
            title: "Finance & billing automations",
            subtitle: "Trigger actions for invoicing, reminders, and payment checks.",
            icon: <FaFileInvoiceDollar className="w-8 h-8" />,
          },
          {
            title: "HR & onboarding workflows",
            subtitle: "Automate employee onboarding, offboarding, and data updates.",
            icon: <FaUserCheck className="w-8 h-8" />,
          },
          {
            title: "Custom integrations",
            subtitle: "Connect legacy systems or proprietary tools into seamless workflows.",
            icon: <FaProjectDiagram className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="how we work"
        title="From concept to automation that "
        titleHighlight="runs itself"
        description="Our n8n workflow process blends strategy, design, and technical delivery so your automation solutions are reliable, maintainable, and aligned to business goals."
        steps={[
          {
            number: "1",
            title: "Workflow discovery",
            subtitle: "Analyze your current processes and identify automation opportunities.",
          },
          {
            number: "2",
            title: "Strategy & roadmap",
            subtitle: "Define automation priorities, scope, and execution plan.",
          },
          {
            number: "3",
            title: "Build & integrate",
            subtitle: "Develop custom n8n workflows and integrate with your tools.",
          },
          {
            number: "4",
            title: "Test & refine",
            subtitle: "Thorough QA to ensure stability, accuracy, and desired outcomes.",
          },
          {
            number: "5",
            title: "Launch & optimize",
            subtitle: "Deploy workflows, monitor performance, and refine for improvement.",
          },
        ]}
      />
      <DynamicOurWorks projects={projects} />
      <DynamicStateSection
        title="Our n8n Automation Impact"
        subtitle="PROVEN RESULTS"
        stats={stats}
      />
      <TestimonialsSection />
      <N8nWorkflowsFAQSection />
    </div>
  )
}

export default page
