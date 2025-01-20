"use client"
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const CaseStudyCard = ({ title, stat, description, linkText, logo }) => (
  <motion.div
    className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-center justify-between mb-2">
    <h4 className="text-pink-600 text-sm font-semibold">{title}</h4>

    <img src={logo} alt="logo" className="h-8 w-auto" />
    </div>
    <h2 className="text-3xl font-bold mb-4">{stat}</h2>
    <p className="text-gray-700 mb-6">{description}</p>
    <div className="flex items-center justify-between">
      <a
        href="#"
        className="text-purple-600 font-medium flex items-center gap-2 hover:underline"
      >
        {linkText} <FaArrowRight />
      </a>
    </div>
  </motion.div>
);

const CaseStudies = () => (
  <div className="max-w-5xl mx-auto px-4 py-12">
    <div className="grid md:grid-cols-2 gap-6">
      <CaseStudyCard
        title="HIGHER CONVERSIONS"
        stat="7X"
        description="High CTR Ad Creatives, Digital Design, and Customer Marketing."
        linkText="Read Tailwind case study"
        logo="/images/home/Tailwind-grey.webp" // Replace with actual Tailwind logo path
      />
      <CaseStudyCard
        title="ANNUALIZED SAVINGS"
        stat="$600K"
        description="Rebranding Design Assets, Scale Product Videos, and Podcast Production."
        linkText="Read ServiceNow case study"
        logo="/images/home/Servicenw-logo-home.png" // Replace with actual ServiceNow logo path
      />
    </div>
    <div className="text-center mt-8">
      <motion.a
        href="#"
        className="bg-purple-600 text-white px-6 py-3 border-[2px] hover:bg-white rounded-lg text-sm font-medium border-purple-600 transition-all duration-300 hover:text-purple-600  items-center gap-2 justify-center inline-flex"
      >
        Read more case studies <FaArrowRight />
      </motion.a>
    </div>
  </div>
);

export default CaseStudies;
