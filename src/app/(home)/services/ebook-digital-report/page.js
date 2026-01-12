import TestimonialSlider from '@/components/about/TestimonialSlider'
import SlidingLogos from '@/components/home/SlidingLogos'
import CommonServicesHeroSection from '@/components/services/common/CommonHeroSection'
import DynamicOurWorks from '@/components/home/DynamicOurWorks'
import DynamicCreativeSection from '@/components/services/common/DynamicCreativeSection'
import DynamicSupportSection from '@/components/services/common/DynamicSupportSection'
import DynamicStateSection from '@/components/services/common/DynamicStateSection'
import ChannelTailoredSection from '@/components/services/common/ChannelTailoredSection'
import HowItWorksSection from '@/components/services/common/HowItWorksSection'
import EbookDigitalReportFAQSection from '@/components/services/ebook-digital-report/EbookDigitalReportFAQSection'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { FaDownload, FaLightbulb, FaBriefcase, FaCalendarAlt, FaChartBar, FaEnvelopeOpenText } from "react-icons/fa"
import { client } from "@/sanity/lib/client"
import { getPortfolioWorksQuery, getCustomerStoriesQuery } from "@/sanity/lib/queries"
import { urlForImage } from "@/sanity/lib/image"
import React from 'react'

// Helper to get optimized Sanity image URL
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
  title: "Ebook, Report & Print Design | Aneeverse",
  description: "Lead magnets and print materials that convert and impress. From high-converting ebooks to brochures and annual reports, Aneeverse creates polished digital and print materials.",
  openGraph: {
    title: "Ebook, Report & Print Design | Aneeverse",
    description: "Lead magnets and print materials that convert and impress. From high-converting ebooks to brochures and annual reports, Aneeverse creates polished digital and print materials.",
    url: `https://aneeverse.com/services/ebook-digital-report`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Ebook, Report & Print Design | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebook, Report & Print Design | Aneeverse",
    description: "Lead magnets and print materials that convert and impress. From high-converting ebooks to brochures and annual reports, Aneeverse creates polished digital and print materials.",
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
    console.error('Error fetching projects for ebook-digital-report page:', error);
  }

  // Scrolling services for hero section
  const scrollServices = [
    { title: "Ebook and lead magnet design", image: "/images/services/email-design/email-design.avif" },
    { title: "Whitepaper and research reports", image: "/images/services/email-design/email-strategy.avif" },
    { title: "Brochures and flyers", image: "/images/services/email-design/email-html5.avif" },
    { title: "Annual reports and financials", image: "/images/services/email-design/email-design-templates.avif" },
    { title: "Event collateral and programs", image: "/images/services/email-design/email-newsletter-design.avif" },
    { title: "Direct mail campaigns", image: "/images/services/email-design/email-ui-ux-audits.avif" },
    { title: "Print catalogs and lookbooks", image: "/images/services/email-design/email-design.avif" },
  ];
  const items = [
    {
      name: "Lead generation ebooks",
      about: "High-value downloadable guides designed to capture emails and nurture prospects through your funnel",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Industry research reports",
      about: "Data-rich reports positioning your brand as thought leader with custom data visualization",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Product brochures",
      about: "Sales-ready print and digital collateral showcasing features, benefits, and specifications",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Annual reports",
      about: "Polished financial and impact reports for stakeholders, investors, and board members",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Event programs and collateral",
      about: "Conference guides, agendas, speaker bios, and promotional materials",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Direct mail campaigns",
      about: "High-response postcards, sales letters, and dimensional mailers",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Product catalogs",
      about: "Comprehensive lookbooks and catalogs for wholesale and retail distribution",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Whitepapers and case studies",
      about: "Technical deep dives and success stories that demonstrate expertise",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
    {
      name: "Welcome kits and onboarding",
      about: "New client and employee onboarding materials that set the right tone",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-[#ffd6cc]",
      textColor: "text-[#4a1c0f]",
    },
    {
      name: "Infographic reports",
      about: "Single-page data stories perfect for social sharing and email campaigns",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#e6f3ff]",
      textColor: "text-[#003366]",
    },
  ];

  const stats = [
    { value: "500+", description: "Ebooks, reports, and print assets delivered." },
    { value: "100%", description: "Print-ready and digital-optimized accuracy." },
    { value: "98%", description: "Client satisfaction with layout and visual authority." },
    { value: "24/7", description: "Continuity support for high-stakes publications." },
  ];

  return (
    <div>
      <ServiceSchema
        serviceName="Ebook, Report & Print Design"
        serviceType="ProfessionalService"
        description="From high-converting ebooks and whitepapers to brochures, flyers, and annual reports, Aneeverse creates polished digital downloads and print-ready materials that position your brand as the industry authority."
        slug="ebook-digital-report"
        priceRange="$1000-$10000"
        category="Editorial & Print Design"
        features={[
          "Ebook and lead magnet design",
          "Whitepaper and research reports",
          "Brochures and flyers",
          "Annual reports and financials",
          "Event collateral and programs",
          "Direct mail campaigns",
          "Print catalogs and lookbooks"
        ]}
        benefits={[
          "Enhanced Brand Authority",
          "Increased Lead Generation",
          "Professional Layout & Readability",
          "Print-Ready Precision",
          "Effective Data Visualization",
          "Turnkey Scalability"
        ]}
        serviceOutput="Polished ebook, report, or print collateral in multiple optimized formats."
        audience="Marketing teams, financial institutions, event organizers, and thought leaders."
        additionalType="https://schema.org/CreativeWork"
      />
      <CommonServicesHeroSection
        title="Lead magnets and print materials that convert and impress"
        subtitle="Ebook, Report & Print Design"
        description="From high-converting ebooks and whitepapers to brochures, flyers, and annual reports, Aneeverse creates polished digital downloads and print-ready materials that position your brand as the industry authority and drive measurable results."
        ctaText="Book a Call"
        ctaLink="/contact"
        backgroundImage="/images/services/email-design/hero-banner.avif"
        scrollServices={scrollServices}
      />
      <SlidingLogos />
      <DynamicSupportSection
        subtitle="Downloads shouldn't look downloaded"
        title="Your audience judges books by their "
        highlightText="cover-every time"
        imageSrc="/images/services/email-design/about-email.avif"
        imageAlt="Ebook, Report & Print Design"
        description="Amateur layouts, inconsistent branding, and generic design scream 'I threw this together.' Professional design builds credibility and gets your content read."
        additionalText="Your team lacks dedicated design bandwidth. Freelancers miss your brand voice. Deadlines are always yesterday. Creating high-quality ebooks, reports, and print collateral requires specialized skills and fast turnaround-you need a partner who delivers authority-building materials at scale."
      />
      <DynamicCreativeSection
        subtitle="What we deliver"
        title="Authority content that generates leads and builds trust"
        heighlightText=""
        description="Beautifully designed ebooks, reports, brochures, and print materials that download well, convert better, and position your brand as the go-to expert in your industry."
        items={items}
      />
      <ChannelTailoredSection
        subtitle="Every format perfected"
        title="Designed for every distribution channel and goal"
        titleHighlight=""
        description="Whether gated downloads for lead gen, print collateral for events, or premium reports for executives-every piece builds authority and drives your objectives."
        channels={[
          {
            title: "Lead generation assets",
            subtitle: "Ebooks, guides, checklists designed for landing pages and email capture",
            icon: <FaDownload className="w-8 h-8" />,
          },
          {
            title: "Thought leadership",
            subtitle: "Whitepapers, research reports positioning you as industry authority",
            icon: <FaLightbulb className="w-8 h-8" />,
          },
          {
            title: "Sales collateral",
            subtitle: "Brochures, one-pagers, capability statements for business development",
            icon: <FaBriefcase className="w-8 h-8" />,
          },
          {
            title: "Events and conferences",
            subtitle: "Programs, badges, signage, booth graphics for live experiences",
            icon: <FaCalendarAlt className="w-8 h-8" />,
          },
          {
            title: "Corporate reporting",
            subtitle: "Annual reports, financials, ESG reports for stakeholders",
            icon: <FaChartBar className="w-8 h-8" />,
          },
          {
            title: "Direct marketing",
            subtitle: "Postcards, flyers, dimensional mailers for direct response campaigns",
            icon: <FaEnvelopeOpenText className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="HOW WE WORK"
        title="From Google Doc to finished PDF-in record time"
        titleHighlight=""
        description="Our streamlined process turns raw content into polished, professional deliverables without the typical design bottlenecks or agency markups."
        steps={[
          {
            number: "1",
            title: "Content audit and planning",
            subtitle: "Review your raw content and define structure, key messaging, and visual hierarchy",
          },
          {
            number: "2",
            title: "Creative direction and layout",
            subtitle: "Develop comprehensive design system with typography, colors, and page architecture",
          },
          {
            number: "3",
            title: "Sample spread approval",
            subtitle: "Present first 2-3 pages for direction approval before full document execution",
          },
          {
            number: "4",
            title: "Full document production",
            subtitle: "Complete layout with custom graphics, data visualization, and production-ready files",
          },
          {
            number: "5",
            title: "Print and digital delivery",
            subtitle: "Receive press-ready PDFs, web-optimized files, and source files for future updates",
          },
        ]}
      />
      <DynamicOurWorks projects={projects} />
      <DynamicStateSection title="Our Publication Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialSlider />
      <EbookDigitalReportFAQSection />
    </div>
  )
}

export default page

