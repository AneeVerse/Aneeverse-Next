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
    <div className="bg-primary-500 text-secondary-500 py-16 pt-24 text-center">
      <Layout>
        <Heading
          level="h1"
          color="dark"
          spacing="lg"
          className="text-center font-medium mt-8"
        >
          Creative that{" "}
          <AccentText size="xl" className={""}>
          works
          </AccentText>
        </Heading>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          We help the world's leading brands create standout ads and campaigns
          at speed—from concept to execution to results.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 border-b border-gray-300 pb-12">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center text-secondary-500">
              <div className="mb-6">
                <p className="text-lg font-medium text-gray-600">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="flex items-center justify-center gap-1 text-gray-600 hover:underline mt-1"
                >
                  {item.caseStudy} <MdOutlineArrowOutward />
                </a>
              </div>
              <AccentText size="xl" className="text-orange-500 text-7xl md:text-8xl font-light mt-auto">
                {item.percentage}
              </AccentText>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default CreativeStatsOurWorks;
