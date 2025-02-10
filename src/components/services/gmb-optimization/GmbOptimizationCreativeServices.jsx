"use client"
import { useRef, useState } from "react";
import Layout from "../../common/Layout";

export default function GmbOptimizationCreativeServices() {
  const team = [
    {
      name: "Google My Business Profile Setup",
      about: "Setting up your Google My Business profile to ensure that all business details are accurate and complete for maximum visibility.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "GMB Profile Optimization",
      about: "Optimizing your GMB profile with keyword-rich descriptions and media to enhance local search rankings and engagement.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Local SEO Integration for GMB",
      about: "Integrating local SEO strategies to ensure your business shows up in the right local searches and attracts relevant customers.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Review Management for GMB",
      about: "Managing customer reviews to build trust, increase visibility, and enhance your brand’s reputation on Google.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "GMB Insights & Analytics",
      about: "Using GMB insights and analytics to monitor performance, track customer interactions, and refine your optimization strategies.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "GMB Posts & Updates",
      about: "Regularly posting updates, offers, and news to your GMB profile to keep your audience engaged and informed.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "GMB Media Optimization",
      about: "Optimizing images and videos on your GMB profile to enhance your brand's visual appeal and improve engagement.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "GMB Q&A Management",
      about: "Managing the questions and answers section on your GMB profile to provide helpful information and build customer trust.",
      image: "/images/services/email-design/email-design-systems.avif",
      bgColor: "bg-[#f6edf9]",
      textColor: "text-[#4a124f]",
    },
  ];
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    // Start Dragging
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    };
  
    // Stop Dragging
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    // Scroll while dragging
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Adjust speed
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };
  
    return (
      <section className="text-secondary-500 py-12 select-none">
        <Layout>
          {/* Heading */}
          <div className="text-center mb-8">
            <p className="uppercase text-sm tracking-widest">{"Boost Your Local Visibility".toUpperCase()}</p>
            <h2 className="text-4xl mt-3 md:text-6xl max-w-4xl mx-auto font-bold">
              <span className="italic">GMB Optimization</span> Services
            </h2>
          </div>
  
          {/* ✅ Click & Drag Scroll Section */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto py-4 scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {team.map((member, index) => (
              <div
                key={index}
                className={`min-w-[280px] sm:min-w-[350px] md:min-w-[470px] relative h-[440px] sm:h-[480px] md:min-h-[580px] pb-[30px] hover:pb-[90px] hover:mt-[-5px] transition-all duration-300 group ${member.bgColor} shadow-md shadow-primary-500 rounded-lg overflow-hidden`}
              >
                <img src={member.image} alt={member.name} className="w-full h-full object-cover " draggable={false} />
                <div className={`p-4 h-[80px] group-hover:h-[190px] transition-all duration-300 absolute bottom-0 left-0 w-full ${member.bgColor}`}>
                  <p style={{ lineHeight: "48px" }} className={`text-2xl line-clamp-1 font-semibold ${member.textColor}`}>
                    {member.name}
                  </p>
                  <p className="text-md h-0 group-hover:h-fit group-hover:mt-2 overflow-hidden duration-300 transition-transform">
                    <span className={`${member.textColor} line-clamp-4`}>{member.about}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Layout>
      </section>
    );
  }