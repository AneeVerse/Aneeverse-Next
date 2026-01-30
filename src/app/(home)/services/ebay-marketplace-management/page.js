import TestimonialsSection from '@/components/home/TestimonialsSection'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import EbayFAQSection from '@/components/services/ebay-marketplace-management/EbayFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaListUl, FaStore, FaBullhorn, FaTags, FaTachometerAlt, FaShippingFast } from "react-icons/fa"
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
    title: "eBay Management | Aneeverse",
    description: "Run a profitable eBay store without living in Seller Hub. We manage your listings, ads, and daily operations.",
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
        { title: "eBay Listing Optimization", image: "/images/services/website/website-design.avif" },
        { title: "eBay Store Design", image: "/images/services/website/website-strategy.avif" },
        { title: "Promoted Listings Management", image: "/images/services/website/webflow-development.avif" },
        { title: "Deals & Promotions", image: "/images/services/website/design-systems.avif" },
        { title: "Inventory Management", image: "/images/services/website/website-illustrations.avif" },
        { title: "Orders & Returns", image: "/images/services/website/ux-ui-audit.avif" },
        { title: "Sales & Performance Reports", image: "/images/services/website/website-strategy.avif" },
    ];

    const items = [
        { name: "eBay Listing Build", about: "SEO-optimized titles, item specifics, category mapping, and descriptions", image: "/images/services/website/website-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
        { name: "Custom Store Design", about: "Branded storefront with category pages and mobile-optimized layout", image: "/images/services/website/website-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
        { name: "Listing Template System", about: "Reusable HTML templates with branding, trust badges, and cross-sells", image: "/images/services/website/webflow-development.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
        { name: "Promoted Listings Setup", about: "Standard and Advanced campaigns with ad rate optimization", image: "/images/services/website/design-systems.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
        { name: "Markdown Manager Schedule", about: "Strategic price drops and coupon stacking tied to inventory", image: "/images/services/website/website-illustrations.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
        { name: "Item Specifics Audit", about: "Full audit to improve search placement and Best Match rank", image: "/images/services/website/ux-ui-audit.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
        { name: "Image Upgrade Sprint", about: "High-res gallery images and variant-specific angles for top SKUs", image: "/images/services/website/landing-page-design.avif", bgColor: "bg-[#e7f9d1]", textColor: "text-[#365314]" },
        { name: "Order Processing Workflow", about: "Automated acknowledgment and tracking upload templates", image: "/images/services/website/website-strategy.avif", bgColor: "bg-[#f6edf9]", textColor: "text-[#4a124f]" },
        { name: "Returns & Case Management", about: "Response templates and defect rate monitoring workflows", image: "/images/services/email-design/email-design.avif", bgColor: "bg-[#ffd6cc]", textColor: "text-[#4a1c0f]" },
        { name: "Performance Dashboard", about: "Monthly sales, impressions, CTR, and Promoted Listings ROI", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#e6f3ff]", textColor: "text-[#003366]" },
    ];

    const stats = [
        { value: "50%+", description: "Increase in impression volume with Promoted Listings." },
        { value: "20%", description: "Higher conversion rates with custom HTML templates." },
        { value: "98%+", description: "Positive feedback rate maintained for partner stores." },
        { value: "0%", description: "Defect rates achieved through proactive case handling." },
    ];

    return (
        <div>
            <ServiceSchema
                serviceName="eBay Management"
                serviceType="ProfessionalService"
                description="Optimize your eBay store for growth with SEO-rich listings, branded templates, and automated operations."
                slug="ebay-marketplace-management"
            />
            <CommonServicesHeroSection
                title="Run a profitable eBay store. Without living in Seller Hub."
                subtitle="eBay Management"
                description="A dedicated team to manage your eBay listings, store design, promotions, ads, and daily operations—so you focus on sourcing and growth, not listing uploads and case replies."
                ctaText="Book a Call"
                ctaLink="/contact"
                backgroundImage="/images/services/website/hero-banner.avif"
                scrollServices={scrollServices}
            />
            <SlidingLogos />
            <DynamicSupportSection
                subtitle="eBay operations, handled"
                title="Your eBay growth team—"
                highlightText="on demand"
                imageSrc="/images/services/website/about-web.avif"
                imageAlt="eBay Management"
                description="Keep your store optimized, promotions running, and account metrics healthy with a dedicated team managing catalog, ads, and customer service every week."
                additionalText="From SEO-rich listings and custom templates to Promoted Listings campaigns and return handling, you get consistent execution without hiring in-house specialists."
            />
            <DynamicCreativeSection
                subtitle="What we deliver"
                title="Work that drives visibility & sales"
                description="Every sprint delivers optimized listings, promotional assets, and operational improvements that increase traffic and conversion."
                items={items}
            />
            <ChannelTailoredSection
                subtitle="What you get"
                title="Everything you need to scale on eBay"
                titleHighlight="eBay"
                description="A complete eBay operations team that keeps your store optimized, ads running, and metrics clean—week after week."
                channels={[
                    { title: "Listings that rank & convert", subtitle: "SEO titles, item specifics, and high-quality images.", icon: <FaListUl className="w-8 h-8" /> },
                    { title: "Store & template design", subtitle: "Custom storefronts and templates that build trust.", icon: <FaStore className="w-8 h-8" /> },
                    { title: "Promoted Listings management", subtitle: "Campaign setup and ad rate optimization.", icon: <FaBullhorn className="w-8 h-8" /> },
                    { title: "Promotions & pricing", subtitle: "Markdown schedules and coupon creation.", icon: <FaTags className="w-8 h-8" /> },
                    { title: "Account health monitoring", subtitle: "Proactive tracking of defects and seller standards.", icon: <FaTachometerAlt className="w-8 h-8" /> },
                    { title: "Orders & returns handled", subtitle: "Return approvals and case resolution support.", icon: <FaShippingFast className="w-8 h-8" /> },
                ]}
            />
            <HowItWorksSection
                subtitle="how we work"
                title="Consistent execution. Clear metrics. "
                titleHighlight="No surprises."
                description="A structured process to build, optimize, and maintain a high-performing eBay store without stretching your team."
                steps={[
                    { number: "1", title: "Store audit & setup", subtitle: "Review listings, design, category structure, and account health." },
                    { number: "2", title: "Optimize listings", subtitle: "Fix item specifics, upgrade images, and improve SEO elements." },
                    { number: "3", title: "Launch promotions & ads", subtitle: "Set up Promoted Listings and markdown schedules." },
                    { number: "4", title: "Manage daily operations", subtitle: "Process orders, handle returns, and monitor metrics." },
                    { number: "5", title: "Report & refine", subtitle: "Monthly dashboard with trends and next-month priorities." },
                ]}
            />
            <DynamicOurWorks projects={projects} />
            <DynamicStateSection title="Our eBay Impact" subtitle="PROVEN RESULTS" stats={stats} />
            <TestimonialsSection />
            <EbayFAQSection />
        </div>
    )
}

export default page
