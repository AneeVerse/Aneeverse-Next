"use client";
import React, { use, useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Layout from "../common/Layout";
import { UiSubheading } from "../common/typography/UiSubheading";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";
import Link from "next/link";

const OurWorkSection = () => {
  const projects = [
    {
      image: "/images/home/works-ban-1.avif",
      title: "Social Media Marketing",
      url: "/works/social-media-marketing",
      description:
        "Social Media Management, Content Creation, Campaign Strategy",
      colSpan: 2,
    },
    {
      image: "/images/home/works2.avif",
      title: "SEO Optimization",
      url: "/works/seo-optimization",
      description: "Keyword Research, On-Page SEO, Technical SEO Audits",
      colSpan: 1,
    },
    {
      image: "/images/home/works3.avif",
      title: "PPC Advertising",
      url: "/works/ppc-advertising",
      description: "Google Ads Management, Facebook Ads, Remarketing Campaigns",
      colSpan: 1,
    },
    {
      image: "/images/home/works4.avif",
      title: "Email Marketing",
      url: "/works/email-marketing",
      description:
        "Newsletter Design, Automation Workflows, Analytics Tracking",
      colSpan: 1,
    },
    {
      image: "/images/home/works5.avif",
      title: "Content Marketing",
      url: "/works/content-marketing",
      description: "Blog Writing, Video Production, Infographic Design",
      colSpan: 2,
    },
    {
      image: "/images/home/works6.avif",
      title: "Influencer Marketing",
      url: "/works/influencer-marketing",
      description:
        "Creator Partnerships, Campaign Management, Performance Analysis",
      colSpan: 1,
    },
    // Duplicated entries for infinite scroll effect
    {
      image: "/images/home/works-ban-1.avif",
      title: "Brand Strategy",
      url: "/works/brand-strategy",
      description:
        "Market Research, Competitor Analysis, Positioning Development",
      colSpan: 2,
    },
    {
      image: "/images/home/works2.avif",
      title: "E-commerce SEO",
      url: "/works/ecommerce-seo",
      description: "Product Page Optimization, Schema Markup, Local SEO",
      colSpan: 1,
    },
    {
      image: "/images/home/works3.avif",
      title: "Conversion Rate Optimization",
      url: "/works/conversion-rate-optimization",
      description: "A/B Testing, Landing Page Design, User Experience Analysis",
      colSpan: 1,
    },
    {
      image: "/images/home/works4.avif",
      title: "Marketing Automation",
      url: "/works/marketing-automation",
      description: "CRM Integration, Lead Nurturing, Behavioral Targeting",
      colSpan: 1,
    },
    {
      image: "/images/home/works5.avif",
      title: "Video Marketing",
      url: "/works/video-marketing",
      description: "YouTube Strategy, Short-form Video Production, Video SEO",
      colSpan: 2,
    },
    {
      image: "/images/home/works6.avif",
      title: "Analytics & Reporting",
      url: "/works/analytics-reporting",
      description: "ROI Tracking, Custom Dashboards, KPI Monitoring",
      colSpan: 1,
    },
  ];
  const [smallScreen, setSmallScreen] = useState(false);
  // if width is less than 768px, set colSpan to 1

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSmallScreen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-primary-500 py-16">
      <Layout>
        {/* Section Header */}
        <div className="flex justify-between items-center ">
          <div className="max-w-3xl  ">
            <UiSubheading className="text-secondary-500 mb-2">
              Our Works
            </UiSubheading>
            <Heading
              level="h2"
              color="dark"
              spacing="lg"
              className="text-left font-semibold"
            >
              See Our{" "}
              <AccentText
                size="lg"
                className={"text-orange-500 whitespace-nowrap  "}
              >
                works
              </AccentText>
            </Heading>
         
           
          </div>
        </div>

        {/* Project Grid */}
        <div className=" grid grid-cols-1  md:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link
              href={project.url}
              key={index}
              // col span
              style={{
                gridColumn: `span ${smallScreen ? 1 : project.colSpan || 1}`,
              }}
              className={`group rounded-lg cursor-pointer  overflow-hidden ${
                project.colSpan ? ` md:col-span-${project.colSpan}` : ""
              }`}
            >
              {/* Image */}
              <div className=" rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[200px] sm:h-[280px] xl:h-[340px]  2xl:h-[380px] w-full group-hover:scale-105 transition-transform duration-300 rounded-lg object-cover"
                />
              </div>
              {/* Text Content */}
              <div className="py-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>

                  {/* arrow */}
                  <MdOutlineArrowOutward className="opacity-0 self-center translate-x-[-50%] translate-y-[50%] group-hover:translate-y-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default OurWorkSection;
