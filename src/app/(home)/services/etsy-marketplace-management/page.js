import TestimonialsSection from '@/components/home/TestimonialsSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import EtsyFAQSection from '@/components/services/etsy-marketplace-management/EtsyFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaSearch, FaPalette, FaBullseye, FaTruck, FaHeartbeat, FaCalendarCheck } from "react-icons/fa"
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
    title: "Etsy Shop Management & Marketing Services | Aneeverse",
    description: "Scale your Etsy shop without the stress. We handle listing SEO, tag optimization, storefront design, Etsy Ads, and inventory management.",
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

    const scrollServices = [
        { title: "Etsy SEO & Tag Optimization", image: "/images/services/website/website-design.avif" },
        { title: "Custom Storefront Design", image: "/images/services/website/website-strategy.avif" },
        { title: "Etsy Ads Optimization", image: "/images/services/website/webflow-development.avif" },
        { title: "Variation & Shipping Profiles", image: "/images/services/website/design-systems.avif" },
        { title: "Customer Support Handling", image: "/images/services/website/website-illustrations.avif" },
        { title: "Listing Creation & Auditing", image: "/images/services/website/ux-ui-audit.avif" },
        { title: "Sales & Performance Reports", image: "/images/services/website/website-strategy.avif" },
    ];

    const items = [
        { name: "Listing Tag & Title SEO", about: "Optimizing all 13 tags, titles, and attributes using high-intent buyer keywords to drive organic search rank.", image: "/images/services/website/website-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
        { name: "Etsy Storefront Branding", about: "Custom designed shop banners, matching icons, featured product layout, and an optimized About section.", image: "/images/services/website/website-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
        { name: "Etsy Ads Campaign Setup", about: "Targeted advertising campaigns, keyword bidding, budget control, and converting query extraction.", image: "/images/services/website/webflow-development.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
        { name: "Product Image Enhancements", about: "Aesthetic lifestyle overlays, dimensions, and callout graphics that fit Etsy's brand standards.", image: "/images/services/website/design-systems.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
        { name: "Shipping & Return Profiles", about: "Setting up domestic and international profiles, delivery estimates, and clear refund policy grids.", image: "/images/services/website/website-illustrations.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
        { name: "Variation & Pricing Audits", about: "Detailed configuration of color/size dropdowns, pricing strategy, and margin calculations.", image: "/images/services/website/ux-ui-audit.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
        { name: "Customer Ticket Templates", about: "Speedy reply templates for FAQs, order issues, custom orders, and shipping status queries.", image: "/images/services/website/landing-page-design.avif", bgColor: "bg-[#e7f9d1]", textColor: "text-[#365314]" },
        { name: "Etsy Shop Health Audits", about: "Monitoring seller standards, delivery times, case resolution rates, and IP/copyright compliance.", image: "/images/services/website/website-strategy.avif", bgColor: "bg-[#f6edf9]", textColor: "text-[#4a124f]" },
        { name: "Weekly Performance Report", about: "Clear insights on organic traffic, conversion rate, search terms, ad spend, and top-selling SKUs.", image: "/images/services/email-design/email-design.avif", bgColor: "bg-[#ffd6cc]", textColor: "text-[#4a1c0f]" },
        { name: "Holiday & Seasonality Prep", about: "Creating specific tags and banners for seasonal peaks like Christmas, Halloween, and Mother's Day.", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#e6f3ff]", textColor: "text-[#003366]" },
    ];

    const stats = [
        { value: "40%+", description: "Average increase in organic traffic within the first 60 days." },
        { value: "2.2x", description: "Increase in conversion rates through storefront branding updates." },
        { value: "30%", description: "Reduction in customer response time with structured templates." },
        { value: "200%", description: "Increase in shop favorites and repeat buyer engagement." },
    ];

    return (
        <div>
            <ServiceSchema
                serviceName="Etsy Marketplace Management"
                serviceType="ProfessionalService"
                description="Launch and scale your Etsy storefront with expert SEO, listing optimization, shop design, and Etsy Ads management."
                slug="etsy-marketplace-management"
            />
            <CommonServicesHeroSection
                title="Scale your Etsy shop. Without the daily operational stress."
                subtitle="Etsy Management"
                description="A dedicated team to handle your Etsy listing SEO, custom shop design, Etsy Ads, and order operations-so you stay focused on crafting premium products and scaling your brand."
                ctaText="Book a Call"
                ctaLink="/contact"
                backgroundImage="/images/services/website/hero-banner.avif"
                scrollServices={scrollServices}
            />
            <SlidingLogos />
            <DynamicSupportSection
                subtitle="Etsy growth, simplified"
                title="Your Etsy operations partner-"
                highlightText="from setup to sales"
                imageSrc="/images/services/website/about-web.avif"
                imageAlt="Etsy Management"
                description="Navigate Etsy's competitive market, optimize listings with converting search terms, manage targeted campaigns, and keep customers happy with a dedicated team that knows the artisan marketplace playbook."
                additionalText="From keyword tags to custom storefront layouts and shipping configuration, we handle the details so you can focus on creativity and production."
            />
            <DynamicCreativeSection
                subtitle="What we deliver"
                title="High-impact setups designed to convert buyers"
                description="Every sprint delivers store updates, optimized tags, clean listing graphics, and performance metrics that drive organic rankings and sales."
                items={items}
            />
            <ChannelTailoredSection
                subtitle="What you get"
                title="Everything you need to succeed on Etsy"
                titleHighlight="Etsy"
                description="A complete Etsy shop operations and marketing team, handling everything from tags to ads without high overhead."
                channels={[
                    { title: "SEO-optimized listing titles & tags", subtitle: "Keyword-rich titles and all 13 search tags customized for search visibility.", icon: <FaSearch className="w-8 h-8" /> },
                    { title: "Branded storefront & banners", subtitle: "Beautiful banners, structured categories, and matching shop icons.", icon: <FaPalette className="w-8 h-8" /> },
                    { title: "Optimized Etsy Ads", subtitle: "Budget management, bid controls, and search term analysis for higher ROAS.", icon: <FaBullseye className="w-8 h-8" /> },
                    { title: "Variations & shipping setups", subtitle: "Custom options, pricing adjustments, and shipping profile optimization.", icon: <FaTruck className="w-8 h-8" /> },
                    { title: "Proactive shop health monitoring", subtitle: "Review responses, ODR tracking, policy checks, and case resolutions.", icon: <FaHeartbeat className="w-8 h-8" /> },
                    { title: "Dedicated sprint reporting", subtitle: "Weekly scorecards mapping key traffic metrics, ad returns, and priorities.", icon: <FaCalendarCheck className="w-8 h-8" /> },
                ]}
            />
            <HowItWorksSection
                subtitle="how we work"
                title="Setup. Optimize. Scale."
                titleHighlight="Repeat."
                description="A simple, structured framework to launch and optimize your Etsy presence, turning browsing shoppers into lifetime buyers."
                steps={[
                    { number: "1", title: "Shop & listing audit", subtitle: "Evaluate existing listings, tag gaps, images, storefront layout, and competitors." },
                    { number: "2", title: "Keyword & SEO refresh", subtitle: "Rewrite titles, select high-value tags, and adjust attributes for target audience search terms." },
                    { number: "3", title: "Design & branding build", subtitle: "Create visual storefront elements, banner updates, and design infographic images." },
                    { number: "4", title: "Ads & campaign launch", subtitle: "Set up and refine Etsy Ads, manage budgets, and harvest converting search terms." },
                    { number: "5", title: "Daily operations & updates", subtitle: "Manage shipping templates, coordinate support cases, and deliver weekly scorecards." },
                ]}
            />
            <DynamicOurWorks projects={projects} />
            <DynamicStateSection title="Our Etsy Impact" subtitle="PROVEN RESULTS" stats={stats} />
            <TestimonialsSection />
            <EtsyFAQSection />
        </div>
    )
}

export default page
