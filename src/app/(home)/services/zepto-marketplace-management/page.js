import TestimonialsSection from '@/components/home/TestimonialsSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import ZeptoFAQSection from '@/components/services/zepto-marketplace-management/ZeptoFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaRocket, FaMobileAlt, FaFileContract, FaWarehouse, FaTag, FaHeadset } from "react-icons/fa"
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
    title: "Quick Commerce Management (Zepto) | Aneeverse",
    description: "Sell on quick commerce without the onboarding maze. We handle Zepto onboarding, POs, and daily operations.",
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
        { title: "Zepto Onboarding", image: "/images/services/website/website-design.avif" },
        { title: "PO Management", image: "/images/services/website/website-strategy.avif" },
        { title: "Inventory Management", image: "/images/services/website/webflow-development.avif" },
        { title: "Deals & Coupons", image: "/images/services/website/design-systems.avif" },
        { title: "Seller Support Coordination", image: "/images/services/website/website-illustrations.avif" },
        { title: "Sales Performance Report", image: "/images/services/website/ux-ui-audit.avif" },
        { title: "Quick-Ops Management", image: "/images/services/website/website-strategy.avif" },
    ];

    const items = [
        { name: "Zepto Onboarding", about: "Complete vendor data template, package claims, certifications, and SKU mapping", image: "/images/services/website/website-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
        { name: "App-Optimized Images", about: "Thumbnail-friendly packshots designed for fast mobile decisions", image: "/images/services/website/website-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
        { name: "Listing & Catalog Setup", about: "Product titles, pack sizes, and category mapping for easy discoverability", image: "/images/services/website/webflow-development.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
        { name: "PO Management Workflow", about: "PO acceptance checklist and dispatch coordination templates", image: "/images/services/website/design-systems.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
        { name: "Inventory Monitoring", about: "Stock alerts, replenishment schedules, and OOS risk dashboard", image: "/images/services/website/website-illustrations.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
        { name: "Deals & Coupons Setup", about: "Promotional planning calendar and visibility boost tactics", image: "/images/services/website/ux-ui-audit.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
        { name: "Returns & Replacements", about: "Quality rejection handling and damage claim documentation", image: "/images/services/website/landing-page-design.avif", bgColor: "bg-[#e7f9d1]", textColor: "text-[#365314]" },
        { name: "Seller Support Tracker", about: "Issue logging, escalation templates, and resolution system", image: "/images/services/website/website-strategy.avif", bgColor: "bg-[#f6edf9]", textColor: "text-[#4a124f]" },
        { name: "Weekly Velocity Report", about: "SKU-level sales and average basket size metrics", image: "/images/services/email-design/email-design.avif", bgColor: "bg-[#ffd6cc]", textColor: "text-[#4a1c0f]" },
        { name: "Promo Visibility Strategy", about: "Banner placements and category feature requests", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#e6f3ff]", textColor: "text-[#003366]" },
    ];

    const stats = [
        { value: "14 Days", description: "Average time to go live with optimized catalog." },
        { value: "95%+", description: "PO fulfillment accuracy achieved for partner brands." },
        { value: "3x", description: "Increase in sales velocity with promotional boost tactics." },
        { value: "24/7", description: "Hyperlocal inventory visibility and stock monitoring." },
    ];

    return (
        <div>
            <ServiceSchema
                serviceName="Quick Commerce Management (Zepto)"
                serviceType="ProfessionalService"
                description="Launch and scale on Zepto with expert onboarding, PO management, and visibility campaigns."
                slug="zepto-marketplace-management"
            />
            <CommonServicesHeroSection
                title="Sell on quick commerce. Without the onboarding maze."
                subtitle="Quick Commerce Management (Zepto)"
                description="A dedicated team to handle Zepto onboarding, listing creation, PO management, and daily operations—so you unlock hyperlocal sales without adding ops complexity."
                ctaText="Book a Call"
                ctaLink="/contact"
                backgroundImage="/images/services/website/hero-banner.avif"
                scrollServices={scrollServices}
            />
            <SlidingLogos />
            <DynamicSupportSection
                subtitle="Quick commerce, simplified"
                title="Your Zepto operations partner—"
                highlightText="from day one"
                imageSrc="/images/services/website/about-web.avif"
                imageAlt="Zepto Management"
                description="Navigate the onboarding process, create app-optimized listings, manage POs, and keep inventory flowing with a team that knows the quick commerce playbook inside out."
                additionalText="From catalog uploads to promotional calendars and seller support escalations, you get end-to-end execution so you stay focused on supply and scale."
            />
            <DynamicCreativeSection
                subtitle="What we deliver"
                title="Work that gets you live & selling fast"
                description="Every sprint delivers onboarding assets, operational workflows, and visibility improvements tailored for quick commerce speed."
                items={items}
            />
            <ChannelTailoredSection
                subtitle="What you get"
                title="Everything you need to win in quick commerce"
                titleHighlight="Zepto"
                description="A complete quick commerce operations team that handles onboarding, daily ops, and growth—without the learning curve."
                channels={[
                    { title: "Fast onboarding & setup", subtitle: "Catalog creation and account activation checklists.", icon: <FaRocket className="w-8 h-8" /> },
                    { title: "App-first content & images", subtitle: "Packshots optimized for mobile screens and 10-minute delivery.", icon: <FaMobileAlt className="w-8 h-8" /> },
                    { title: "PO & fulfillment support", subtitle: "PO acceptance guidance and dispatch coordination.", icon: <FaFileContract className="w-8 h-8" /> },
                    { title: "Inventory & stock control", subtitle: "Real-time monitoring and replenishment alerts.", icon: <FaWarehouse className="w-8 h-8" /> },
                    { title: "Deals & visibility", subtitle: "Promotional planning and category feature coordination.", icon: <FaTag className="w-8 h-8" /> },
                    { title: "Ops & seller support", subtitle: "Returns management and case escalations support.", icon: <FaHeadset className="w-8 h-8" /> },
                ]}
            />
            <HowItWorksSection
                subtitle="how we work"
                title="Onboard fast. Operate smooth. "
                titleHighlight="Scale smart."
                description="A proven process to launch on Zepto, manage daily operations, and grow hyperlocal sales without adding complexity."
                steps={[
                    { number: "1", title: "Onboarding", subtitle: "Gather data, create assets, and coordinate with category managers." },
                    { number: "2", title: "Catalog go-live", subtitle: "Upload listings, set pricing, and complete compliance checks." },
                    { number: "3", title: "PO fulfillment rhythm", subtitle: "Establish acceptance workflows and dispatch tracking systems." },
                    { number: "4", title: "Inventory & promo", subtitle: "Monitor stock levels and coordinate visibility campaigns." },
                    { number: "5", title: "Weekly ops & reporting", subtitle: "Handle returns, escalate cases, and deliver sales dashboards." },
                ]}
            />
            <DynamicOurWorks projects={projects} />
            <DynamicStateSection title="Our Zepto Impact" subtitle="PROVEN RESULTS" stats={stats} />
            <TestimonialsSection />
            <ZeptoFAQSection />
        </div>
    )
}

export default page
