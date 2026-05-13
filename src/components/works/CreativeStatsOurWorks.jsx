import React from "react";
import Layout from "../common/Layout";
import { MdOutlineArrowOutward } from "react-icons/md";
import { AccentText } from "../common/typography/AccentText";

const stats = [
  {
    percentage: "240%",
    description: "Increase in CTR for PointCard",
    caseStudy: "PointCard case study",
  },
  {
    percentage: "50%",
    description: "Reduction in cost per asset for Amazon",
    caseStudy: "Amazon case study",
  },
  {
    percentage: "70%",
    description: "Reduction in turnaround time for Salesforce",
    caseStudy: "Salesforce case study",
  },
];

const CreativeStatsOurWorks = () => {
  return (
    <div className="bg-primary-500 text-[#1a3c34] py-20 sm:py-24 lg:py-28">
      <Layout>
        <div className="max-w-9xl mx-auto text-center px-4 sm:px-6 lg:px-8 mt-10">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.5rem] font-light text-[#1a3c34] mb-6 lg:mb-8 tracking-tight">
            Creative that <AccentText className="text-[2.0rem] xl:text-[3.5rem] ml-2 text-orange-500">
              works
            </AccentText>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-[1.45rem] text-[#4c5c55] max-w-xl mx-auto leading-relaxed mb-32 lg:mb-32">
            We help the world's leading brands create standout ads and campaigns
            at speed-from concept to execution to results.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-y-0">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-center text-left px-0 lg:px-8 py-6 lg:py-12 border-b border-[#d5dcd8]"
              >
                {/* Description and Case Study Link - Left Side */}
                <div className="flex flex-col flex-1 lg:mr-8">
                  <h3 className="text-base lg:text-lg text-gray-400 font-normal mb-2 lg:mb-3">
                    {item.description}
                  </h3>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm text-black hover:text-[#1a3c34] transition-colors group hover:underline"
                  >
                    {item.caseStudy}
                    <MdOutlineArrowOutward className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                {/* Percentage Value - Right Side */}
                <div className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4.90rem] font-light text-[#1a3c34] tracking-tight ml-4 lg:ml-0" style={{ fontFamily: 'CalmSerif, serif', lineHeight: '1.2' }}>
                  {item.percentage}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CreativeStatsOurWorks;
