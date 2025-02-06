"use client"
import { useRef, useState } from "react";
import Layout from "../../common/Layout";

export default function WebDesignCreativeServices() {
    const team = [
        {
            name: "Website Strategy",
            about: "Our marketing consulting team can help you craft channel and campaign plans that drive traffic to your website.",
            image: "/images/services/website/website-strategy.avif",
            bgColor: "bg-secondary-500",
            textColor: "text-primary-500",
        },
        {
            name: "Website Design",
            about: "Superside creates conversion-focused websites and landing pages that are tailored to your campaign goals",
            image: "/images/services/website/website-design.avif",
            bgColor: "bg-[#c0e2ff]",
            textColor: "text-[#0a211f]",
        },
        {
            name: "Landing Page Design",
            about: "Our team of designers can create high-converting landing pages that are optimized for your campaign goals.",
            image: "/images/services/website/landing-page-design.avif",
            bgColor: "bg-[#f9f9f9]",
            textColor: "text-[#3d3d3d]",
        },
        {
            name: "Illustration Design",
            about: "Our team of illustrators can create custom illustrations that bring your brand to life.",
            image: "/images/services/website/website-illustrations.avif",
            bgColor: "bg-[#292423]",
            textColor: "text-[#ffafed]",
        },
        // add webflow development, ux ui audit, design system, content development
        {
            name: "Webflow Development",
            about: "Our team of developers can build custom websites using Webflow that are tailored to your campaign goals.",
            image: "/images/services/website/webflow-development.avif",
            bgColor: "bg-[#d8ff85]",
            textColor: "text-[#1c4437]",
        },
        {
            name: "UX UI Audit",
            about: "Our team of designers can audit your website and provide recommendations to improve user experience and user interface.",
            image: "/images/services/website/ux-ui-audit.avif",
            bgColor: "bg-[#edf4ea]",
            textColor: "text-[#1c4437]",
        },
        {
            name: "Design Systems",
            about: "Our team of designers can create design systems that help maintain brand consistency across all marketing materials.",
            image: "/images/services/website/design-systems.avif",
            bgColor: "bg-[#e7f9d1]",
            textColor: "text-[#365314]",
        },
        {
            name: "Content Development",
            about: "Our team of copywriters can create compelling content that resonates with your target audience.",
            image: "/images/services/website/content-development.avif",
            bgColor: "bg-[#f6edf9]",
            textColor: "text-[#4a124f]",
        }
      
        
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
            <p className="uppercase text-sm tracking-wide">TAILORED CREATIVE SOLUTIONS</p>
            <h2 className="text-4xl mt-3 md:text-6xl max-w-4xl mx-auto font-bold">
              <span className="italic">Full-stack</span> web design services
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
                  <p style={{ lineHeight: "48px" }} className={`text-2xl font-semibold ${member.textColor}`}>
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