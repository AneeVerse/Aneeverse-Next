import React from "react";
import Layout from "../common/Layout";

import { MdOutlineArrowOutward } from "react-icons/md";
import { Heading } from "../common/typography/Heading";
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
    <div className="bg-primary-500 text-secondary-500 py-12 sm:py-16 lg:py-24 text-center">
      <Layout>
        <Heading
          level="h1"
          color="dark"
          spacing="lg"
          className="text-center font-medium px-4 sm:px-0"
        >
          Creative that{" "}
          <AccentText size="xl" className={""}>
          works
          </AccentText>
        </Heading>
        <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
          We help the world's leading brands create standout ads and campaigns
          at speed—from concept to execution to results.
        </p>
        <div className="mt-12 sm:mt-16 space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-12 lg:gap-16 border-b border-gray-300 pb-8 sm:pb-12">
          {stats.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 text-left md:text-center">
              {/* Mobile: Percentage first, then content */}
              <div className="md:hidden mb-4">
                <AccentText size="xl" className="text-orange-500 text-6xl font-light">
                  {item.percentage}
                </AccentText>
              </div>
              
              <div className="md:mb-6">
                <p className="text-base sm:text-lg font-medium text-gray-700 leading-relaxed mb-3">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-orange-500 hover:underline transition-colors"
                >
                  {item.caseStudy} <MdOutlineArrowOutward className="w-4 h-4" />
                </a>
              </div>
              
              {/* Desktop: Percentage at bottom */}
              <div className="hidden md:block">
                <AccentText size="xl" className="text-orange-500 text-5xl lg:text-6xl xl:text-7xl font-light">
                  {item.percentage}
                </AccentText>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default CreativeStatsOurWorks;
