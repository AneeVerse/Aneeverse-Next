"use client";
import React from "react";
import Container from "../common/Container"; // Assuming the Container component is in the same folder

const LogoAndG2Section = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        {/* Logo Section */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {[
            { src: "/images/home/ManyChat-logo-homeV2.png", alt: "ManyChat" },
            { src: "/images/home/Servicenw-logo-home.png", alt: "Recurly" },
            { src: "/images/home/Servicenw-logo-home.png", alt: "Snorkel" },
            { src: "/images/home/Servicenw-logo-home.png", alt: "ServiceNow" },
            { src: "/images/home/Servicenw-logo-home.png", alt: "CheckPoint" },
          ].map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-12 grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>

        {/* G2 Badges Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Badge 1 */}
          <div className="border flex gap-5 items-center border-gray-200 rounded-lg p-6 text-center">
            <img
              src="/images/home/G2-Leader-Fall-2024.webp"
              alt="Leader Fall 2024"
              className=" h-[130px] "
            />
            <h3 className="text-lg font-medium">Video Production</h3>
          </div>

          {/* Badge 2 */}
          <div className="border flex gap-5 h-full items-center justify-center border-gray-200 rounded-lg p-6 text-center">
            <img
              src="/images/home/High-Performer-fall-G2.webp"
              alt="High Performer Fall 2024"
              className=" h-[130px] "
            />
            <h3 className="text-lg font-medium">Design Creatives</h3>
          </div>

          {/* Badge 3 */}
          <div className="border flex items-center gap-5 border-gray-200 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img
                src="/images/home/CB-G2-icon.png"
                alt="G2 Logo"
                className=" h-[80px] self-center object-contain"
              />
              <div>
              <h3 className="text-2xl font-bold">4.7/5</h3>
            <p className="text-gray-600 text-sm italic">“Fast turnaround”</p>
            <p className="text-gray-600 text-sm italic">“Easy to work”</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LogoAndG2Section;
