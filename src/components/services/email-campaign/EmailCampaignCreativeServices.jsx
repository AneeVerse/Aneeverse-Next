"use client"
import { useRef, useState } from "react";
import Layout from "../../common/Layout";

export default function EmailCampaignCreativeServices() {
  const team = [
    {
      name: "Email Campaign Strategy",
      about: "Developing tailored email strategies that align with your business goals, ensuring maximum engagement and conversions.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Automated Email Sequences",
      about: "Setting up automated email sequences to nurture leads, re-engage customers, and improve retention through personalized messaging.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Targeted Email Segmentation",
      about: "Segmenting your email lists to send targeted messages, ensuring your emails reach the right audience with the right content.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "A/B Testing for Emails",
      about: "Running A/B tests on subject lines, content, and design to maximize open rates and drive higher engagement.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Personalized Campaigns",
      about: "Creating personalized email campaigns that speak directly to your audience, increasing conversion rates and customer loyalty.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Email List Growth",
      about: "Helping you grow your email list with proven strategies, ensuring that your emails reach a larger, more relevant audience.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Analytics & Reporting",
      about: "Analyzing email campaign data to track performance and optimize future campaigns for better results.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Mobile-Optimized Emails",
      about: "Ensuring all email campaigns are mobile-optimized, providing a seamless experience for users on any device.",
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
            <p className="uppercase text-sm tracking-widest">{"Transform Your Email Campaigns".toUpperCase()}</p>
            <h2 className="text-4xl mt-3 md:text-6xl max-w-4xl mx-auto font-bold">
              <span className="italic">Effective Email Campaigns</span> That Drive Engagement
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