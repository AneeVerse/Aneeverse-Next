import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import UIUXWebDevelopmentFAQSection from '@/components/services/ui-ux-web-development/UIUXWebDevelopmentFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import React from 'react'

export const metadata = {
  title: "UI, UX & Web Development | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "UI, UX & Web Development | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/ui-ux-web-development`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "UI, UX & Web Development | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI, UX & Web Development | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    { name: "User Interface Design", about: "Creating intuitive and visually appealing interfaces that enhance user experience and drive engagement.", image: "/images/services/email-design/email-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "User Experience Design", about: "Designing seamless user journeys that guide users to their goals with ease and satisfaction.", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "Frontend Development", about: "Building responsive, fast, and interactive frontends using modern frameworks and best practices.", image: "/images/services/email-design/email-html5.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "Backend Development", about: "Developing robust backend systems that power your applications with scalability and reliability.", image: "/images/services/email-design/email-design-templates.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "Full-Stack Solutions", about: "Delivering complete solutions from design to deployment, ensuring seamless integration.", image: "/images/services/email-design/email-newsletter-design.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "UX Research & Testing", about: "Conducting user research and testing to optimize experiences and improve conversion rates.", image: "/images/services/email-design/email-ui-ux-audits.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
  ];

  const stats = [
    { value: "200+", description: "Web projects completed successfully." },
    { value: "40%", description: "Average increase in user engagement." },
    { value: "95%", description: "Client satisfaction rate." },
    { value: "50+", description: "Technologies and frameworks mastered." },
  ];

  return (
    <div>
      <ServiceSchema serviceName="UI, UX & Web Development Services" serviceType="ProfessionalService" description="Create exceptional digital experiences with our comprehensive UI/UX design and web development services. From concept to code, we deliver solutions that users love." slug="ui-ux-web-development" priceRange="$3000-$30000" category="Web Development" features={["UI Design", "UX Design", "Frontend Development", "Backend Development", "Full-Stack Solutions", "UX Research", "Responsive Design", "Performance Optimization"]} benefits={["Better User Experience", "Higher Conversion Rates", "Improved Engagement", "Faster Load Times", "Mobile Optimization", "Scalable Architecture"]} serviceOutput="Fully functional websites and applications with exceptional user experience." audience="Startups, businesses, agencies, and organizations needing web solutions." additionalType="https://schema.org/SoftwareApplication" />
      <CommonServicesHeroSection title="UI, UX & Web Development" subtitle="Development Services" description="Create exceptional digital experiences with our comprehensive UI/UX design and web development services. From concept to code, we deliver solutions that users love." ctaText="Book a Call" ctaLink="/contact" backgroundImage="/images/services/email-design/hero-banner.avif" />
      <SlidingLogos />
      <DynamicSupportSection subtitle="BUILT FOR BUSINESSES & USERS" title="Web Experiences That " highlightText="engage & convert" imageSrc="/images/services/email-design/about-email.avif" imageAlt="UI UX Web Development" description="Transform your ideas into beautiful, functional web experiences. Our team combines design excellence with technical expertise to deliver solutions that users love." additionalText="From user research to final deployment, we handle every aspect of web development, ensuring your site is fast, responsive, and optimized for success." />
      <DynamicCreativeSection subtitle="Design & Development Excellence" title="UI, UX & Web Development Services" heighlightText="Comprehensive " items={items} />
      <DynamicOurWorks />
      <DynamicStateSection title="Our Web Development Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialSlider />
      <UIUXWebDevelopmentFAQSection />
    </div>
  )
}

export default page

