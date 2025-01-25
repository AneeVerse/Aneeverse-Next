"use client"
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/common/Button"; // Import your reusable Button component
import Container from "../common/Container";
import { motion } from "framer-motion";

const images = [
  "/images/home/creative/creative1.png",
  "/images/home/creative/creative2.png",
  "/images/home/creative/creative3.png",
  "/images/home/creative/creative4.png",
  "/images/home/creative/creative1.png",
  "/images/home/creative/creative1.png",
];

const HeroSection = () => {
  return (
    <div className="bg-[#073742] text-[#EBFAFE]">
    <Container className="pt-[120px] pb-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 px-3 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
          DESIGN, OPTIMIZE, ADVERTISE <div className="font-Rock_Salt text-orange-500">{"we got you covered.".toUpperCase()}</div>
          </h1>
          <p className="text-lg mb-6">
            Get access to high-velocity creative team that works with your brand. Ship campaigns —
            faster, more reliably, and at scale.
          </p>

          {/* Features */}
          <ul className="flex flex-col gap-4 mb-8">
            {["Dependable Services", "Proven Results", "100% Better results"].map(
              (feature, index) => (
                <li key={index} className="flex items-center gap-2 ">
                  <FaCheckCircle className="text-[#EBFAFE]" />
                  {feature}
                </li>
              )
            )}
          </ul>

          {/* Call to Action */}
          <div className="flex flex-col lg:flex-row items-center gap-4">
            {/* Updated Button */}
            <button className="px-6 py-3 bg-[#88D7F0]  text-secondary-500 font-semibold text-md rounded-full">
              GET STARTED
            </button>
           
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 items-center relative w-full lg:h-full">
        {/* Column 1 */}
        <div className="space-y-4">
          {images.slice(0, 2).map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt=""
              className="w-full h-48 object-cover rounded-lg shadow-lg"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          {images.slice(2, 4).map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt=""
              className="w-full h-48 object-cover rounded-lg shadow-lg"
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Column 3 */}
        <div className="space-y-4 hidden md:block">
          {images.slice(0, 2).map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt=""
              className="w-full h-48 object-cover rounded-lg shadow-lg"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>
      </div>
    </Container>
    </div>
  );
};

export default HeroSection;
