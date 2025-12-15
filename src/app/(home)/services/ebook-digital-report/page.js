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
import { FaBook, FaFileAlt, FaChartBar, FaMobile, FaDownload, FaShareAlt } from "react-icons/fa"
import React from 'react'

export const metadata = {
  title: "Ebook & Digital Report | Aneeverse",
  description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
  openGraph: {
    title: "Ebook & Digital Report | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    url: `https://aneeverse.com/services/ebook-digital-report`,
    images: [{ url: "/images/meta/phone.avif", width: 1200, height: 630, alt: "Ebook & Digital Report | Aneeverse" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebook & Digital Report | Aneeverse",
    description: "Aneeverse is a Digital Marketing Agency that helps businesses grow online.",
    image: "/images/meta/phone.avif",
  },
}

const page = () => {
  const items = [
    { name: "Digital Publications", about: "Creating engaging digital publications that inform and engage your audience.", image: "/images/services/email-design/email-design.avif", bgColor: "bg-secondary-500", textColor: "text-primary-500" },
    { name: "Interactive Reports", about: "Designing interactive reports that make data accessible and engaging.", image: "/images/services/email-design/email-strategy.avif", bgColor: "bg-[#c0e2ff]", textColor: "text-[#0a211f]" },
    { name: "PDF Design", about: "Creating professional PDF documents optimized for digital viewing and sharing.", image: "/images/services/email-design/email-html5.avif", bgColor: "bg-[#f9f9f9]", textColor: "text-[#3d3d3d]" },
    { name: "Ebook Layout", about: "Designing ebook layouts that enhance readability and engagement across all devices.", image: "/images/services/email-design/email-design-templates.avif", bgColor: "bg-[#292423]", textColor: "text-[#ffafed]" },
    { name: "Data Visualization", about: "Transforming complex data into clear, visual representations in reports and publications.", image: "/images/services/email-design/email-newsletter-design.avif", bgColor: "bg-[#d8ff85]", textColor: "text-[#1c4437]" },
    { name: "Digital Document Design", about: "Creating professional digital documents that are easy to read and share.", image: "/images/services/email-design/email-ui-ux-audits.avif", bgColor: "bg-[#edf4ea]", textColor: "text-[#1c4437]" },
  ];

  const stats = [
    { value: "200+", description: "Ebooks and digital reports created." },
    { value: "100%", description: "Mobile-responsive designs for all devices." },
    { value: "95%", description: "Client satisfaction with design quality." },
    { value: "24/7", description: "Support for digital publication needs." },
  ];

  return (
    <div>
      <ServiceSchema serviceName="Ebook & Digital Report Services" serviceType="ProfessionalService" description="Create professional ebooks and digital reports that engage readers and showcase your expertise. From layout design to interactive elements." slug="ebook-digital-report" priceRange="$1000-$8000" category="Design Services" features={["Digital Publications", "Interactive Reports", "PDF Design", "Ebook Layout", "Data Visualization", "Document Design", "HTML Publications", "Digital Distribution"]} benefits={["Professional Appearance", "Better Engagement", "Mobile Compatible", "Easy Sharing", "Interactive Elements", "Brand Consistency"]} serviceOutput="Professional ebooks and digital reports ready for distribution." audience="Content creators, businesses, publishers, and organizations needing digital publications." additionalType="https://schema.org/CreativeWork" />
      <CommonServicesHeroSection title="Ebook & Digital Report Services" subtitle="Design Services" description="Create professional ebooks and digital reports that engage readers and showcase your expertise. From layout design to interactive elements." ctaText="Book a Call" ctaLink="/contact" backgroundImage="/images/services/email-design/hero-banner.avif" />
      <SlidingLogos />
      <DynamicSupportSection subtitle="BUILT FOR CONTENT CREATORS" title="Digital Publications That " highlightText="engage & inform" imageSrc="/images/services/email-design/about-email.avif" imageAlt="Ebook & Digital Report" description="Transform your content into professional digital publications. Our design services ensure your ebooks and reports are visually appealing and easy to consume." additionalText="From interactive reports to ebook layouts, we create digital publications that engage readers, showcase your expertise, and maintain professional standards." />
      <DynamicCreativeSection subtitle="Publication Excellence" title="Ebook & Digital Report Services" heighlightText="Professional " items={items} />
      <ChannelTailoredSection
        subtitle="Publications for every purpose"
        title="Digital publications that work for your content"
        titleHighlight="your content"
        description="From ebooks to annual reports, we create professional digital publications that engage readers and showcase your expertise."
        channels={[
          {
            title: "Ebooks",
            subtitle: "Engaging ebook layouts with professional design that enhances readability and engagement.",
            icon: <FaBook className="w-8 h-8" />,
          },
          {
            title: "Digital Reports",
            subtitle: "Interactive digital reports with data visualization and engaging design for better comprehension.",
            icon: <FaFileAlt className="w-8 h-8" />,
          },
          {
            title: "Annual Reports",
            subtitle: "Professional annual reports that showcase your company's achievements and financial performance.",
            icon: <FaChartBar className="w-8 h-8" />,
          },
          {
            title: "Mobile-Optimized",
            subtitle: "Responsive designs that work seamlessly across all devices for optimal reading experience.",
            icon: <FaMobile className="w-8 h-8" />,
          },
          {
            title: "PDF Design",
            subtitle: "Professional PDF documents optimized for digital viewing, sharing, and printing.",
            icon: <FaDownload className="w-8 h-8" />,
          },
          {
            title: "Interactive Elements",
            subtitle: "Engaging interactive features that enhance reader engagement and comprehension.",
            icon: <FaShareAlt className="w-8 h-8" />,
          },
        ]}
      />
      <HowItWorksSection
        subtitle="HOW WE WORK"
        title="From content to publication without the hassle"
        titleHighlight="hassle"
        description="Our publication design process ensures your content is presented professionally and engages readers effectively."
        steps={[
          {
            number: "1",
            title: "Content Review & Planning",
            subtitle: "We review your content, understand your goals, and plan the layout and design approach.",
          },
          {
            number: "2",
            title: "Design & Layout",
            subtitle: "We create professional layouts with typography, imagery, and visual elements that enhance readability.",
          },
          {
            number: "3",
            title: "Data Visualization",
            subtitle: "We transform complex data into clear, engaging visualizations that make insights easy to understand.",
          },
          {
            number: "4",
            title: "Review & Refinement",
            subtitle: "We refine designs based on your feedback, ensuring accuracy and alignment with your brand.",
          },
          {
            number: "5",
            title: "Final Delivery",
            subtitle: "We deliver publication-ready files in multiple formats optimized for digital distribution and sharing.",
          },
        ]}
      />
      <DynamicOurWorks />
      <DynamicStateSection title="Our Publication Impact" subtitle="PROVEN RESULTS" stats={stats} />
      <TestimonialSlider />
      <EbookDigitalReportFAQSection />
    </div>
  )
}

export default page

