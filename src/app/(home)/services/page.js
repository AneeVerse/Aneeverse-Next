import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import FeaturesSection from '@/components/home/FeaturesSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import AboutDesignServicesSection from '@/components/services/AboutDesignServicesSection'
import ContentWritingServices from '@/components/services/ContentWritingServices'
import CreativeDesignServices from '@/components/services/CreativeDesignServices'
import FAQSection from '@/components/services/FAQSection'
import MarketingServices from '@/components/services/MarketingServices'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesSupportSection from '@/components/services/ServicesSupportSection'
import WebsiteServices from '@/components/services/WebsiteServices'
import ServiceSchema from '@/components/seo/ServiceSchema'
import React from 'react'



export const metadata = {
  title: "Services | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title:  "Services | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt:  "Services | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:  "Services | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  return (
   <div>
    <ServiceSchema 
      serviceName="Digital Marketing Services"
      serviceType="ProfessionalService"
      description="Comprehensive digital marketing, web development, SEO optimization, and creative design services to help businesses grow online and establish a strong digital presence."
      slug="services"
      priceRange="₹10,000 - ₹5,00,000"
      category="Digital Marketing & Web Development"
      features={[
        "Website Design & Development",
        "SEO Optimization",
        "Social Media Marketing",
        "Content Writing",
        "Email Marketing",
        "Google Ads Management",
        "Brochure Design",
        "Presentation Design",
        "Local SEO",
        "Marketing Strategy"
      ]}
      benefits={[
        "Increased Online Visibility",
        "Higher Search Rankings",
        "Better User Engagement",
        "Professional Brand Image",
        "Improved Conversion Rates",
        "Cost-Effective Marketing Solutions"
      ]}
      serviceOutput="Complete Digital Marketing Solutions"
      audience="Small to Medium Businesses, Startups, Enterprises"
      additionalType="https://schema.org/MarketingService"
    />
    <ServicesHero />
     <SlidingLogos />
     <ServicesSupportSection />
     <div className='bg-secondary-500 space-y-8 py-16'>
        <WebsiteServices />

        <MarketingServices />
        
        <ContentWritingServices />

        <CreativeDesignServices />

        </div>
        <DynamicOurWorks />
        <FeaturesSection />
        <AboutDesignServicesSection />
        <FAQSection />
   </div>
  )
}

export default page