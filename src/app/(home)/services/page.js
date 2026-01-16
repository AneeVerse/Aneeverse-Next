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
import { client } from "@/sanity/lib/client";
import { getPortfolioWorksQuery, getCustomerStoriesQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

// Helper to get optimized Sanity image URL with max width
const getSanityImageUrl = (image, maxWidth = 1200) => {
  if (!image) return "/images/home/works-ban-1.avif";
  try {
    return urlForImage(image, maxWidth).url();
  } catch (error) {
    console.error('Error generating Sanity image URL:', error);
    return "/images/home/works-ban-1.avif";
  }
};

export const metadata = {
  title: "Services | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Services | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services`,
    images: [
      {
        url: "/images/meta/phone.avif", // ✅ Dynamic Image
        width: 1200,
        height: 630,
        alt: "Services | Aneeverse",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

export default async function Page() {
  // Fetch data on server for optimal performance
  let projects = [];
  try {
    const [works, stories] = await Promise.all([
      client.fetch(getPortfolioWorksQuery),
      client.fetch(getCustomerStoriesQuery)
    ]);

    // Map works - use maxWidth to prevent timeout with large images
    const mappedWorks = works.map((item, index) => ({
      image: getSanityImageUrl(item.thumbnailImage || item.mainImage, 1200),
      title: item.title,
      url: `/works/${item.slug.current}`,
      description: item.servicesProvided?.join(", ") || item.shortDescription || "",
      colSpan: (index % 6 === 0 || index % 6 === 4) ? 2 : 1,
      type: "work"
    }));

    // Map customer stories - use maxWidth to prevent timeout
    const mappedStories = stories.map((story, index) => ({
      image: getSanityImageUrl(story.mainImage, 1200),
      title: story.projectTitle || story.title,
      url: `/customer-stories/${story.slug.current}`,
      description: story.servicesProvided?.join(", ") || story.shortDescription || "",
      colSpan: ((index + mappedWorks.length) % 6 === 0 || (index + mappedWorks.length) % 6 === 4) ? 2 : 1,
      type: "story"
    }));

    // Combine and sort (works first, then stories)
    projects = [...mappedWorks, ...mappedStories];
  } catch (error) {
    console.error('Error fetching projects for services page:', error);
    // projects will remain empty array on error
  }

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
      <DynamicOurWorks projects={projects} />
      <FeaturesSection />
      <AboutDesignServicesSection />
      <FAQSection />
    </div>
  )
}
