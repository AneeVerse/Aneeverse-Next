import TestimonialsSection from '@/components/home/TestimonialsSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import AmazonFAQSection from '@/components/services/amazon-marketplace-management/AmazonFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaSearch, FaBullseye, FaStore, FaBoxOpen, FaHeartbeat, FaCalendarCheck } from "react-icons/fa"
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
    title: "Amazon Marketplace Management | Aneeverse",
    description: "Sell more on Amazon without the daily firefighting. We manage your listings, ads, and account health.",
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
        { title: "Amazon Listing Optimization", image: "/images/services/website/website-design.avif" },
        { title: "Brand Store & A+ Content", image: "/images/services/website/website-strategy.avif" },
        { title: "Amazon Ads Setup", image: "/images/services/website/webflow-development.avif" },
        { title: "FBA Support", image: "/images/services/website/design-systems.avif" },
        { title: "Account Health Management", image: "/images/services/website/website-illustrations.avif" },
        { title: "Orders & Returns Management", image: "/images/services/website/ux-ui-audit.avif" },
        { title: "Performance Reporting", image: "/images/services/website/website-strategy.avif" },
    ];

    const items = [
        { name: "Product Listing Overhaul", about: "SEO-optimized titles, bullets, backend keywords, and A+ refresh for top SKUs", image: "/images/services/website/website-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
        { name: "Amazon Brand Store Build", about: "Multi-page storefront with category navigation and product showcases", image: "/images/services/website/website-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
        { name: "A+ Content Module Library", about: "Comparison charts, feature callouts, lifestyle blocks designed for conversion", image: "/images/services/website/webflow-development.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
        { name: "PPC Campaign Architecture", about: "Auto, manual, product targeting, and brand defense campaigns", image: "/images/services/website/design-systems.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
        { name: "Search Term Harvesting", about: "Converting queries turned into new keywords and negative lists", image: "/images/services/website/website-illustrations.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
        { name: "FBA Shipment Planning", about: "Box content plans, FNSKU labels, and shipping workflow checklist", image: "/images/services/website/ux-ui-audit.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
        { name: "Suppressed ASIN Recovery", about: "Policy fixes and case escalations to restore live listings", image: "/images/services/website/landing-page-design.avif", bgColor: "bg-[#e7f9d1]", textColor: "text-[#365314]" },
        { name: "Deals & Coupons Calendar", about: "Lightning Deals and coupon stack strategy by margin", image: "/images/services/website/website-strategy.avif", bgColor: "bg-[#f6edf9]", textColor: "text-[#4a124f]" },
        { name: "Order Defect Dashboard", about: "Returns analysis and negative feedback response templates", image: "/images/services/email-design/email-design.avif", bgColor: "bg-[#ffd6cc]", textColor: "text-[#4a1c0f]" },
        { name: "Weekly Performance Scorecard", about: "Sales, CVR, ACoS/TACoS, ranking movement, and priority actions", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#e6f3ff]", textColor: "text-[#003366]" },
    ];

    const stats = [
        { value: "35%+", description: "Average increase in organic ranking within 90 days." },
        { value: "2.5x", description: "Increase in conversion rates with A+ content refresh." },
        { value: "40%", description: "Reduction in wasted PPC spend through keyword harvesting." },
        { value: "100%", description: "Compliance with Amazon's latest category policies." },
    ];

    return (
        <div>
            <ServiceSchema
                serviceName="Amazon Marketplace Management"
                serviceType="ProfessionalService"
                description="Scale your Amazon business with expert listing optimization, PPC management, and account health monitoring."
                slug="amazon-marketplace-management"
            />
            <CommonServicesHeroSection
                title="Sell more on Amazon. Without the daily firefighting."
                subtitle="Amazon Marketplace Management"
                description="A dedicated team to handle your listings, ads, operations, and account health—so you stay focused on inventory and growth, not dashboards and case logs."
                ctaText="Book a Call"
                ctaLink="/contact"
                backgroundImage="/images/services/website/hero-banner.avif"
                scrollServices={scrollServices}
            />
            <SlidingLogos />
            <DynamicSupportSection
                subtitle="Amazon growth, managed"
                title="Your marketplace team—"
                highlightText="without the headcount"
                imageSrc="/images/services/website/about-web.avif"
                imageAlt="Amazon Management"
                description="Keep your catalog optimized, ads profitable, and account healthy with a dedicated PM and specialist team managing the heavy lifting week after week."
                additionalText="From listing SEO and PPC optimization to case escalations and performance reporting, you get agency-level execution at a fraction of the cost and zero onboarding chaos."
            />
            <DynamicCreativeSection
                subtitle="What we ship"
                title="Real work. Measurable impact."
                description="Every sprint delivers marketplace assets and optimizations that move the needle on rank, conversion, and profitability."
                items={items}
            />
            <ChannelTailoredSection
                subtitle="What you get"
                title="Everything you need to scale on Amazon"
                titleHighlight="Amazon"
                description="A complete marketplace operations team, minus the hiring headaches and fixed overhead."
                channels={[
                    { title: "Listings that rank & convert", subtitle: "SEO-optimized content, A+ modules, and backend keyword strategy.", icon: <FaSearch className="w-8 h-8" /> },
                    { title: "Ads that scale profitably", subtitle: "Campaign builds, bid optimization, and search term mining.", icon: <FaBullseye className="w-8 h-8" /> },
                    { title: "Brand Store & A+ design", subtitle: "Custom storefront and enhanced content that tells your brand story.", icon: <FaStore className="w-8 h-8" /> },
                    { title: "FBA & ops support", subtitle: "Shipment planning, case management, and policy compliance.", icon: <FaBoxOpen className="w-8 h-8" /> },
                    { title: "Account health monitoring", subtitle: "Proactive tracking of metrics and escalation handling.", icon: <FaHeartbeat className="w-8 h-8" /> },
                    { title: "Weekly reporting & sprints", subtitle: "Clear dashboards, action priorities, and a dedicated PM.", icon: <FaCalendarCheck className="w-8 h-8" /> },
                ]}
            />
            <HowItWorksSection
                subtitle="how we work"
                title="Weekly sprints. Clear ownership. "
                titleHighlight="Zero chaos."
                description="A proven process to audit, optimize, and scale your Amazon presence without adding overhead to your team."
                steps={[
                    { number: "1", title: "Audit & baseline", subtitle: "Review catalog health, listing quality, ad structure, and competition." },
                    { number: "2", title: "Fix the foundation", subtitle: "Optimize listings, resolve suppressions, and set up tracking." },
                    { number: "3", title: "Launch growth levers", subtitle: "Build PPC campaigns, create A+ content, and design Brand Store." },
                    { number: "4", title: "Optimize & scale", subtitle: "Harvest search terms, adjust bids, and refresh creatives." },
                    { number: "5", title: "Report & iterate", subtitle: "Weekly scorecard with sales, ACoS, and prioritized actions." },
                ]}
            />
            <DynamicOurWorks projects={projects} />
            <DynamicStateSection title="Our Amazon Impact" subtitle="PROVEN RESULTS" stats={stats} />
            <TestimonialsSection />
            <AmazonFAQSection />
        </div>
    )
}

export default page
