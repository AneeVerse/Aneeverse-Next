import SlidingLogos from '@/components/home/SlidingLogos'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import AdsEcommerceHero from '@/components/services/ads-ecommerce/AdsEcommerceHero'
import WhyChooseSection from '@/components/services/ads-ecommerce/WhyChooseSection'
import PlatformCardsSection from '@/components/services/ads-ecommerce/PlatformCardsSection'
import ReviewsSection from '@/components/services/ads-ecommerce/ReviewsSection'
import OurStorySection from '@/components/services/ads-ecommerce/OurStorySection'
import ScrollingTrustSection from '@/components/services/ads-ecommerce/ScrollingTrustSection'
import AdsEcommerceFAQSection from '@/components/services/ads-ecommerce/AdsEcommerceFAQSection'
import { client } from "@/sanity/lib/client"
import { getPortfolioWorksQuery, getCustomerStoriesQuery } from "@/sanity/lib/queries"
import { urlForImage } from "@/sanity/lib/image"
import React from 'react'

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
    title: "Marketplace Management – Amazon, eBay & Etsy | Aneeverse",
    description: "Your Store on Page 1. Your Ads Paying Back. Your Account Running Without You. Full marketplace management across Amazon, eBay, and Etsy by Aneeverse.",
}

const page = async () => {
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
        console.error('Error fetching projects:', error);
    }

    const stats = [
        { value: "35%+", description: "Average increase in organic ranking within 90 days." },
        { value: "2.5x", description: "Increase in conversion rates with optimized listings." },
        { value: "40%", description: "Reduction in wasted ad spend through keyword harvesting." },
        { value: "7", description: "Days to go live from onboarding – execution starts immediately." },
    ];

    return (
        <div>
            <ServiceSchema
                serviceName="Marketplace Management"
                serviceType="ProfessionalService"
                description="Full marketplace management across Amazon, eBay, and Etsy. Listings, ads, account health, and daily operations – managed every week."
                slug="ads-ecommerce"
            />
            <AdsEcommerceHero />
            <WhyChooseSection />
            <PlatformCardsSection />
            <ScrollingTrustSection />
            <DynamicOurWorks projects={projects} />
            <DynamicStateSection title="Our Marketplace Impact" subtitle="PROVEN RESULTS" stats={stats} />
            <ReviewsSection />
            <OurStorySection />
            <AdsEcommerceFAQSection />
        </div>
    )
}

export default page
