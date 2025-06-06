"use client";
import Layout from "../common/Layout";
import { useRef, useState, useEffect } from "react";

export default function TeamSectionAbout() {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
        // Add event listeners to document to handle mouse events outside the container
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    const team = [
      {
        name: "Fredrik Thomassen",
        role: "Co-founder and CEO",
        bio: "Previously Head of Marketing at Revolut, where he led growth across Europe and established global partnerships with brands such as Visa, Mastercard, and Samsung.",
        image: "/images/about/team1.avif",
        bgColor: "bg-[#edf4ea]",
        textColor: "text-[#1c4437]",
      },
      {
        name: "Haakon Heir",
        role: "Co-founder and CTO",
        bio: "Led engineering at Dropbox, where he scaled the platform's infrastructure to serve millions of users worldwide. Expert in cloud architecture and AI integration.",
        image: "/images/about/team2.avif",
        bgColor: "bg-[#edf4ea]",
        textColor: "text-[#1c4437]",
      },
      {
        name: "Jing Kjeldsen",
        role: "Co-founder and CPO",
        bio: "Former Design Lead at Airbnb, where he revolutionized the user experience and visual identity. Passionate about creating beautiful, functional products that solve real problems.",
        image: "/images/about/team3.avif",
        bgColor: "bg-[#e7f9d1]",
        textColor: "text-[#365314]",
      },
      {
        name: "Jen Rapp",
        role: "Co-founder and CMO",
        bio: "Previously Marketing Director at Patagonia, where she led award-winning campaigns focused on sustainability and social impact. Experienced in building purpose-driven brands.",
        image: "/images/about/team4.avif",
        bgColor: "bg-[#f6edf9]",
        textColor: "text-[#4a124f]",
      },
      {
        name: "Kai Kjeldsen",
        role: "Co-founder and COO",
        bio: "Former Operations Director at Spotify, where he optimized global team structures and workflows. Expert in scaling businesses efficiently while maintaining culture and quality.",
        image: "/images/about/team5.avif",
        bgColor: "bg-[#f9f9f9]",
        textColor: "text-[#3d3d3d]",
      },
      {
        name: "Kari Rapp",
        role: "Co-founder and CCO",
        bio: "Previously Creative Director with Ogilvy in New York where she worked on brands such as IBM, American Express, IKEA, and Coca-Cola. Award-winning designer with multiple Cannes Lions.",
        image: "/images/about/team6.avif",
        bgColor: "bg-[#f6edf9]",
        textColor: "text-[#4a124f]",
      },
    ];
  
    return (
      <section className="bg-primary-500 py-12">
        <Layout>
          {/* Heading */}
          <div className="text-center mb-8">
            <p className="uppercase text-sm text-secondary-500 tracking-wide">
              Our Executive Team
            </p>
            <h2 className="text-4xl mt-3 md:text-5xl max-w-4xl mx-auto font-bold text-secondary-500">
              A team of <span className="font-Rock_Salt">experts and leaders</span> helping democratize access to{" "}
              <span className="italic">good creative</span>
            </h2>
          </div>
  
          {/* Horizontal Scroll Section */}
          <div 
            ref={scrollContainerRef}
            className={`flex gap-6 overflow-x-auto py-4 scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
          >
            {team.map((member, index) => (
              <div
                key={index}
                className={`min-w-[350px] relative h-[480px] pb-[30px] hover:pb-[90px] hover:mt-[-5px] transition-all duration-300 ${isDragging ? '' : 'cursor-pointer'} group ${member.bgColor} shadow-sm rounded-lg overflow-hidden`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:-translate-y-10"
                  draggable="false"
                />
                <div className={`p-4 h-[80px] group-hover:h-[150px] transition-all duration-300 absolute bottom-0 left-0 w-full ${member.bgColor}`}>
                  <p className={`text-2xl font-semibold ${member.textColor}`}>
                    {member.name}
                  </p>
                  <p className={`${member.textColor} text-md font-medium`}>
                    {member.role}
                  </p>
                  <p className="text-md h-0 group-hover:h-fit group-hover:mt-2 overflow-hidden duration-300 transition-transform">
                    <span className={`${member.textColor} text-sm line-clamp-3`}>{member.bio}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
         
        </Layout>
      </section>
    );
  }
  