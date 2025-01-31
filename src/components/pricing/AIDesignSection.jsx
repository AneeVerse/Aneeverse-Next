import React from "react";
import Layout from "../common/Layout";

export default function AIDesignSection() {
  return (
    <section className="bg-primary-500 py-12 px-2">
      <Layout className="relative  flex flex-col md:flex-row items-center gap-8 rounded-lg overflow-hidden">
         {/* Right Side (Image) */}
         <div className="absolute z-0 inset-0">
          <img
            src="/images/pricing/ai-banner.avif" // Replace with actual image path
            alt="AI Design Services"
            className="rounded-lg object-cover w-full h-full shadow-lg"
          />
        </div>
        {/* overlap */}
        <div className="bg-gradient-to-r from-black/50 to-transparent absolute z-0 top-0 left-0 h-full w-full"></div>

        {/* Left Side (Text Content) */}
        <div className=" w-full  md:w-[40%] relative z-20 text-white px-2 py-4 md:p-10 rounded-lg">
          <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-2 md:mb-4">
            AI DESIGN SERVICES
          </h4>
          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            Save <span className=" font-Rock_Salt">up to 70%</span> on production costs
          </h2>
          <p className="mt-4 text-sm md:text-md text-gray-300">
            Through AI, customers like Amazon, Reddit, and Salesforce managed to spend less
            than half of what they normally would on similar projects.
          </p>
          <button className="mt-6 border border-white text-white py-2 px-5 rounded-full hover:bg-white hover:text-black transition">
            Book a demo
          </button>
        </div>

       
      </Layout>
    </section>
  );
}
