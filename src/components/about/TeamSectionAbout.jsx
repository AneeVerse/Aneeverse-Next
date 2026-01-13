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
        bgColor: "bg-[#004235]",
        textColor: "text-white",
      },
      {
        name: "Haakon Heir",
        role: "Co-founder and CTO",
        bio: "Led engineering at Dropbox, where he scaled the platform's infrastructure to serve millions of users worldwide. Expert in cloud architecture and AI integration.",
        image: "/images/about/team2.avif",
        bgColor: "bg-[#fff9e7]",
        textColor: "text-[#002f2c]",
      },
      {
        name: "Jing Kjeldsen",
        role: "Co-founder and CPO",
        bio: "Former Design Lead at Airbnb, where he revolutionized the user experience and visual identity. Passionate about creating beautiful, functional products that solve real problems.",
        image: "/images/about/team3.avif",
        bgColor: "bg-[#c6e9c5]",
        textColor: "text-[#104218]",
      },
      {
        name: "Jen Rapp",
        role: "Co-founder and CMO",
        bio: "Previously Marketing Director at Patagonia, where she led award-winning campaigns focused on sustainability and social impact. Experienced in building purpose-driven brands.",
        image: "/images/about/team4.avif",
        bgColor: "bg-[#c8e1ff]",
        textColor: "text-[#002f75]",
      },
      {
        name: "Kai Kjeldsen",
        role: "Co-founder and COO",
        bio: "Former Operations Director at Spotify, where he optimized global team structures and workflows. Expert in scaling businesses efficiently while maintaining culture and quality.",
        image: "/images/about/team5.avif",
        bgColor: "bg-[#fff5d1]",
        textColor: "text-[#654b00]",
      },
      {
        name: "Kari Rapp",
        role: "Co-founder and CCO",
        bio: "Previously Creative Director with Ogilvy in New York where she worked on brands such as IBM, American Express, IKEA, and Coca-Cola. Award-winning designer with multiple Cannes Lions.",
        image: "/images/about/team6.avif",
        bgColor: "bg-[#ffe3e1]",
        textColor: "text-[#6d1213]",
      },
    ];
  
    return (
      <section className="bg-primary-500 py-8 md:py-12">
        <Layout>
          {/* Heading */}
          <div className="text-center mb-6 md:mb-8 px-4">
            <p className="uppercase text-xs md:text-sm text-secondary-500 tracking-wide">
              Our Executive Team
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mt-2 md:mt-3 md:max-w-4xl mx-auto font-bold text-secondary-500">
              A team of <span className="font-Rock_Salt">experts and leaders</span> helping democratize access to{" "}
              <span className="italic">good creative</span>
            </h2>
          </div>
  
          {/* Horizontal Scroll Section */}
          <div 
            ref={scrollContainerRef}
            className={`flex gap-3 md:gap-6 overflow-x-auto py-2 md:py-4 px-4 md:px-0 scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onTouchStart={(e) => {
              setIsDragging(true);
              setStartX(e.touches[0].clientX - scrollContainerRef.current.offsetLeft);
              setScrollLeft(scrollContainerRef.current.scrollLeft);
            }}
            onTouchMove={(e) => {
              if (!isDragging) return;
              const x = e.touches[0].clientX - scrollContainerRef.current.offsetLeft;
              const walk = (x - startX) * 2;
              scrollContainerRef.current.scrollLeft = scrollLeft - walk;
            }}
            onTouchEnd={handleMouseUp}
          >
            {team.map((member, index) => (
              <div
                key={index}
                className={`min-w-[270px] sm:min-w-[300px] md:min-w-[350px] relative h-[400px] md:h-[500px] lg:h-[550px] hover:mt-[-5px] transition-all duration-300 ${isDragging ? '' : 'cursor-pointer'} group overflow-hidden rounded-lg`}>
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:-translate-y-[120px]"
                    draggable="false"
                  />
                </div>
                <div className={`absolute inset-x-0 bottom-0 ${member.bgColor} transition-transform duration-500 ease-out group-hover:h-[200px]`}>
                  <div className="p-4 md:p-6">
                    <h3 className={`text-xl sm:text-2xl md:text-3xl font-light ${member.textColor}`}>
                      {member.name}
                    </h3>
                    
                    <div className="h-0 group-hover:h-[120px] transition-all overflow-hidden">
                      <p className={`mt-2 text-base md:text-lg font-medium ${member.textColor}`}>
                        {member.role}
                      </p>
                      <p className={`mt-2 md:mt-4 text-sm md:text-base ${member.textColor} leading-relaxed`}>
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
         
        </Layout>
      </section>
    );
  }
  
