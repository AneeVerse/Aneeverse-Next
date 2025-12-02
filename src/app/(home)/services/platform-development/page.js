import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import PlatformDevelopmentFAQSection from '@/components/services/platform-development/PlatformDevelopmentFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import React from 'react'

export const metadata = {
  title: "Platform Development | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Platform Development | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/platform-development`,
    images: [
      {
        url: "/images/meta/phone.avif",
        width: 1200,
        height: 630,
        alt: "Platform Development | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform Development | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    {
      name: "Web Platform Development",
      about: "Building scalable web platforms that grow with your business and deliver exceptional user experiences.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Custom Application Development",
      about: "Developing tailored applications that solve your unique business challenges and streamline operations.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Full-Stack Solutions",
      about: "Delivering end-to-end solutions from frontend design to backend infrastructure and database management.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "API Integration",
      about: "Seamlessly integrating third-party APIs and services to extend your platform's capabilities.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Cloud Platform Deployment",
      about: "Deploying and managing platforms on cloud infrastructure for scalability and reliability.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Platform Maintenance & Support",
      about: "Ongoing maintenance, updates, and support to keep your platform running smoothly.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
  ];

  const stats = [
    {
      value: "100+",
      description: "Platforms developed and deployed successfully.",
    },
    {
      value: "99.9%",
      description: "Uptime guarantee for all deployed platforms.",
    },
    {
      value: "50+",
      description: "Technologies and frameworks we work with.",
    },
    {
      value: "24/7",
      description: "Monitoring and support for your platform.",
    },
  ];

  return (
    <div>
      <ServiceSchema
        serviceName="Platform Development Services"
        serviceType="ProfessionalService"
        description="Build scalable, robust platforms that power your business. From web applications to custom platforms, we deliver solutions that grow with you."
        slug="platform-development"
        priceRange="$5000-$50000"
        category="Web Development"
        features={[
          "Web Platform Development",
          "Custom Application Development",
          "Full-Stack Solutions",
          "API Integration",
          "Cloud Deployment",
          "Platform Maintenance",
          "Database Design",
          "Security Implementation"
        ]}
        benefits={[
          "Scalable Architecture",
          "Improved Performance",
          "Enhanced User Experience",
          "Reduced Development Costs",
          "Faster Time to Market",
          "Reliable Infrastructure"
        ]}
        serviceOutput="Fully functional, scalable platforms ready for production deployment."
        audience="Startups, enterprises, SaaS companies, and businesses needing custom platform solutions."
        additionalType="https://schema.org/SoftwareApplication"
      />
      <CommonServicesHeroSection
        title="Platform Development Services"
        subtitle="Development Services"
        description="Build scalable, robust platforms that power your business. From web applications to custom platforms, we deliver solutions that grow with you."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/email-design/hero-banner.avif"
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="BUILT FOR BUSINESSES & STARTUPS"
        title="Platforms That "
        highlightText="scale & perform"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Platform Development"
        description="Transform your business ideas into powerful digital platforms. Our expert developers build scalable solutions that adapt to your growing needs."
        additionalText="From concept to deployment, we handle every aspect of platform development, ensuring your solution is robust, secure, and ready to scale."
      />
      <DynamicCreativeSection
        subtitle="Development Excellence"
        title="Platform Development Services"
        heighlightText="Comprehensive "
        items={items}
      />
      <DynamicOurWorks />
      <DynamicStateSection
        title="Our Platform Development Impact"
        subtitle="PROVEN RESULTS"
        stats={stats}
      />
      <TestimonialSlider />
      <PlatformDevelopmentFAQSection />
    </div>
  )
}

export default page

