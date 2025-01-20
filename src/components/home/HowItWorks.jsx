"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown , IoIosArrowUp} from "react-icons/io";

const data = [
    {
        title: "Subscribe",
        content: "Subscribe to our service to get started!",
    },
    {
        title: "Submit Brief",
        content: "Fill out and submit the creative brief for your project.",
    },
    {
        title: "Review & Feedback",
        content:
            "Your Account Manager will promptly send over the initial design draft. Feel free to request as many revisions as needed.",
    },
    {
        title: "Download Video and Design Creatives",
        content: "Easily download the finalized video and design files.",
    },
];

const HowItWorks = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white max-w-6xl mx-auto py-12 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        How it works?
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Fix Your Creative Content Bottleneck, Guaranteed.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
        {/* Left side illustration */}
        <motion.div
          className="w-full md:w-1/3 mx-auto"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/home/how-it-works.webp"
            alt="How it works illustration"
            className="w-full"
          />
        </motion.div>

        {/* Right side accordion */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Step 1 */}
        {data.map((val, ind)=>{


       return (  <div key={ind} className=" p-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(ind)}
            >
              <h3 className="text-lg font-semibold">{val.title}</h3>
              {openIndex === ind ? (
                <IoIosArrowUp className="text-gray-500" />
              ) : (
                <IoIosArrowDown className="text-gray-500" />
              )}
            </div>
            {openIndex === ind && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-gray-600"
              >
              {val.content}
              </motion.div>
            )}
          </div>
      )  })} 

        </div>
      </div>

      {/* Footer Button */}
      <div className="text-center mt-12">
        <button className="bg-purple-500 text-white px-6 py-3 border-[2px] border-purple-500 rounded-lg shadow-lg hover:bg-white hover:text-purple-500 transition">
          See plans →
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;
