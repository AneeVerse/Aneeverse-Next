"use client"
import React, { use, useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Layout from "../common/Layout";



const OurWorkSection = () => {
    const projects = [
        {
          image: "/images/home/works-ban-1.avif",
          title: "Social Media Marketing",
          description: "Social Media Management, Content Creation, Campaign Strategy",
          colSpan: 2,
        },
        {
          image: "/images/home/works2.avif",
          title: "SEO Optimization",
          description: "Keyword Research, On-Page SEO, Technical SEO Audits",
          colSpan: 1,
        },
        {
          image: "/images/home/works3.avif",
          title: "PPC Advertising",
          description: "Google Ads Management, Facebook Ads, Remarketing Campaigns", 
          colSpan: 1,
        },
        {
          image: "/images/home/works4.avif",
          title: "Email Marketing",
          description: "Newsletter Design, Automation Workflows, Analytics Tracking",
          colSpan: 1,
        },
        {
          image: "/images/home/works5.avif",
          title: "Content Marketing",
          description: "Blog Writing, Video Production, Infographic Design",
          colSpan: 2,
        },
        {
          image: "/images/home/works6.avif",
          title: "Influencer Marketing",
          description: "Creator Partnerships, Campaign Management, Performance Analysis",
          colSpan: 1,
        },
        // Duplicated entries for infinite scroll effect
        {
          image: "/images/home/works-ban-1.avif",
          title: "Brand Strategy",
          description: "Market Research, Competitor Analysis, Positioning Development",
          colSpan: 2,
        },
        {
          image: "/images/home/works2.avif",
          title: "E-commerce SEO",
          description: "Product Page Optimization, Schema Markup, Local SEO",
          colSpan: 1,
        },
        {
          image: "/images/home/works3.avif",
          title: "Conversion Rate Optimization",
          description: "A/B Testing, Landing Page Design, User Experience Analysis",
          colSpan: 1,
        },
        {
          image: "/images/home/works4.avif",
          title: "Marketing Automation",
          description: "CRM Integration, Lead Nurturing, Behavioral Targeting",
          colSpan: 1,
        },
        {
          image: "/images/home/works5.avif",
          title: "Video Marketing",
          description: "YouTube Strategy, Short-form Video Production, Video SEO",
          colSpan: 2,
        },
        {
          image: "/images/home/works6.avif",
          title: "Analytics & Reporting",
          description: "ROI Tracking, Custom Dashboards, KPI Monitoring",
          colSpan: 1,
        }
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
      <div className="flex justify-between items-center mb-12">
      <div className="max-w-3xl  ">
        <p className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
          Our Works
        </p>
        <h2 className="text-4xl font-bold text-gray-800 mt-2">
          {"See Our"}{" "}
          <span className="text-orange-500 text-2xl font-Rock_Salt">{" Works"}</span>
        </h2>
      </div>
      </div>

      {/* Project Grid */}
      <div className=" grid grid-cols-1  md:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            // col span
            style={{ gridColumn: `span ${ smallScreen ? 1 : project.colSpan || 1}` }}
            className={`group rounded-lg cursor-pointer  overflow-hidden ${
              project.colSpan ? ` md:col-span-${project.colSpan}` : ""
            }`}
          >
            {/* Image */}
            <div className="h-[200px] sm:h-[280px] rounded-lg overflow-hidden">

            <img
              src={project.image}
              alt={project.title}
              className="h-[280px] w-full group-hover:scale-105 transition-transform duration-300 rounded-lg object-cover"
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
          </div>
        ))}
      </div>
      </Layout>
    </div>
  );
};

export default OurWorkSection;
