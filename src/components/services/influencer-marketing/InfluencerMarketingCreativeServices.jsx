"use client"
import { useRef, useState } from "react";
import Layout from "../../common/Layout";

export default function InfluencerMarketingCreativeServices() {
  const team = [
    {
      name: "Influencer Partnership Strategy",
      about: "Creating tailored strategies to partner with influencers who align with your brand's values and target audience.",
      image: "/images/services/email-design/email-design.avif",
      bgColor: "bg-secondary-500",
      textColor: "text-primary-500",
    },
    {
      name: "Campaign Management & Execution",
      about: "Managing end-to-end influencer campaigns, ensuring smooth collaboration, and delivering measurable results.",
      image: "/images/services/email-design/email-strategy.avif",
      bgColor: "bg-[#c0e2ff]",
      textColor: "text-[#0a211f]",
    },
    {
      name: "Audience Targeting & Segmentation",
      about: "Leveraging data to identify and target the most relevant audiences for influencer-driven campaigns.",
      image: "/images/services/email-design/email-html5.avif",
      bgColor: "bg-[#f9f9f9]",
      textColor: "text-[#3d3d3d]",
    },
    {
      name: "Content Creation & Distribution",
      about: "Creating compelling content in collaboration with influencers and ensuring it reaches the right channels.",
      image: "/images/services/email-design/email-design-templates.avif",
      bgColor: "bg-[#292423]",
      textColor: "text-[#ffafed]",
    },
    {
      name: "Influencer Engagement & Outreach",
      about: "Building and maintaining strong relationships with influencers to ensure long-term collaborations.",
      image: "/images/services/email-design/email-newsletter-design.avif",
      bgColor: "bg-[#d8ff85]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Performance Tracking & Analytics",
      about: "Monitoring and analyzing the performance of influencer campaigns to optimize and improve future initiatives.",
      image: "/images/services/email-design/email-ui-ux-audits.avif",
      bgColor: "bg-[#edf4ea]",
      textColor: "text-[#1c4437]",
    },
    {
      name: "Event & Activation Marketing",
      about: "Collaborating with influencers for live events, product launches, and activations to boost brand awareness.",
      image: "/images/services/email-design/graphics-and-illustrations.avif",
      bgColor: "bg-[#e7f9d1]",
      textColor: "text-[#365314]",
    },
    {
      name: "Affiliate & Referral Programs",
      about: "Leveraging influencer networks to create affiliate and referral programs that drive sales and conversions.",
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
            <p className="uppercase text-sm tracking-widest">{"Maximize Your Brand's Reach".toUpperCase()}</p>
            <h2 className="text-4xl mt-3 md:text-6xl max-w-4xl mx-auto font-bold">
              <span className="italic">Influencer Marketing </span> Services
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