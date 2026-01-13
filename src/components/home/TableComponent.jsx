import React from "react";
import { FaCheck, FaTimes, FaUsers, FaPaintBrush, FaUserTie, FaToolbox } from "react-icons/fa";
import Layout from "../common/Layout";
import { AccentText } from "../common/typography/AccentText";
import { Heading } from "../common/typography/Heading";
import { GoPersonAdd } from "react-icons/go";
import { AiOutlineTeam } from "react-icons/ai";
import { PiPaintBrushDuotone, PiToolbox } from "react-icons/pi";
import AnimatedButton from "../common/AnimatedButton";
import Link from "next/link";
import Image from "next/image";
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
const data = [
  {
    title: "Aneeverse",
    description:
      "Work with the top 1% of global creative talent, recruited from the best brands and agencies.",
    features: [true, true, true, true, true],
    icon: <div className="p-2 sm:p-3 md:p-4 "><FaUsers className="text-xl sm:text-3xl min-w-fit text-secondary-500" /></div>,
    highlight: true,
  },
  {
    title: "In-house team",
    description:
      "In-house teams don’t always have the skill mix or bandwidth to handle every request that the business needs.",
    features: [false, false, true, true, false],
    icon: <div className="bg-primary-500/20 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg"> <AiOutlineTeam className="text-xl  sm:text-3xl min-w-fit text-primary-500" /></div>,
    highlight: false,
  },
  {
    title: "Creative agencies",
    description:
      "Working with full-scale creative agencies can be slow, costly, and inflexible.",
    features: [false, false, true, true, false],
    icon: <div className="bg-primary-500/20 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg"><PiPaintBrushDuotone className="text-xl sm:text-3xl min-w-fit text-primary-500" /></div>,
    highlight: false,
  },
  {
    title: "Freelancers",
    description:
      "Freelancers can be unreliable and hard to scale, leading to inconsistent work and questionable quality.",
    features: [false, false, true, true, true],
    icon: <div className="bg-primary-500/20 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg"> <GoPersonAdd className="text-xl sm:text-3xl min-w-fit text-primary-500" /></div>,
    highlight: false,
  },
  {
    title: "Self-service tools",
    description:
      "These solutions make incremental improvements to capacity, and work mostly for simpler, repetitive tasks.",
    features: [false, false, true, true, false],
    icon: <div className="bg-primary-500/20 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg"> <PiToolbox className="text-xl sm:text-3xl min-w-fit text-primary-500" /></div>,
    highlight: false,
  },
];

const headers = ["Speed", "Flexibility", "Quality", "Scalability", "Cost-effectiveness"];

const TableComponent = () => {
  return (
    <div className="bg-[#03151a] text-white py-20">
      <Layout>
        {/* ✅ Title Section - Layout from Image 2 */}
        <div className="flex flex-col items-center text-center mb-16 px-4">
          <h3 className="text-gray-400 text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 font-bold">
            Built For You
          </h3>
          <h2 className="text-white font-bw-gradual font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-10 tracking-tighter uppercase leading-[1.1] max-w-5xl">
            Hiring or traditional <br className="hidden md:block" /> outsourcing?{' '}
            <span className="font-Rock_Salt text-[#FC83E1] normal-case text-[0.55em] relative -top-3 md:-top-5 inline-block transform -rotate-3 mx-2">
              Neither
            </span>
          </h2>
          <AnimatedButton
            href="/pricing"
            className="px-10 py-4 rounded-full font-bold text-base shadow-[0_0_20px_rgba(136,215,240,0.1)]"
            style={{
              backgroundColor: "#88D7F0",
              color: "#073742"
            }}
            mainTextSlide="-140%"
            duplicateTextStart="100%"
            duplicateTextEnd="-100%"
          >
            GET STARTED
          </AnimatedButton>
        </div>

        {/* ✅ Table Container */}
        <div className="max-w-7xl mx-auto overflow-hidden rounded-[1rem] sm:rounded-[2rem] border border-gray-800 shadow-2xl">
          <div className="w-full">
            <div className="min-w-0">

              {/* ✅ Sticky Table Header (Black) */}
              <div className="bg-black py-4 sm:py-6 px-3 sm:px-10 flex items-center border-b border-gray-800">
                <div className="w-[35%] sm:w-[35%] flex items-center pr-2">
                  <Image
                    src="/images/aneeverse-logo.svg"
                    alt="Aneeverse Logo"
                    width={180}
                    height={40}
                    className="h-5 sm:h-10 w-auto object-contain brightness-200"
                  />
                </div>
                <div className="flex-1 grid grid-cols-5 gap-0 items-center">
                  {headers.map((header, index) => (
                    <div key={index} className="text-center text-[7px] min-[380px]:text-[8px] sm:text-[10px] md:text-xs uppercase tracking-tight sm:tracking-[0.15em] font-black text-gray-400 px-0.5">
                      <span className="sm:hidden">
                        {header === "Cost-effectiveness" ? "Cost" :
                          header === "Scalability" ? "Scale" :
                            header === "Flexibility" ? "Flex" : header}
                      </span>
                      <span className="hidden sm:inline">{header}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ✅ Data Rows */}
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-stretch transition-colors duration-300 ${item.highlight
                    ? "bg-[#88D7F0] text-[#073742]"
                    : "bg-[#07242e] text-white border-b border-gray-800 last:border-0"
                    }`}
                >
                  {/* Left content (Platform/Icon/Description) */}
                  <div className={`w-[35%] sm:w-[35%] p-3 sm:p-8 flex items-center gap-2 sm:gap-6 border-r ${item.highlight ? 'border-[#073742]/10' : 'border-gray-800'}`}>
                    <div className={`hidden sm:block ${item.highlight ? 'opacity-100' : 'opacity-80'}`}>
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[10px] min-[380px]:text-xs sm:text-xl md:text-2xl font-bold leading-tight whitespace-normal">
                        {item.title}
                      </h3>
                      <p className={`hidden md:block text-xs md:text-sm leading-relaxed ${item.highlight ? 'text-[#073742]/80 font-medium' : 'text-gray-400'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Feature columns with vertical separators */}
                  <div className="flex-1 grid grid-cols-5 items-stretch">
                    {item.features.map((feature, featureIdx) => (
                      <div
                        key={featureIdx}
                        className={`flex items-center justify-center border-r last:border-0 ${item.highlight ? 'border-[#073742]/10' : 'border-gray-800'
                          }`}
                      >
                        {feature ? (
                          <IoCheckmarkCircleOutline className={`text-base min-[380px]:text-lg sm:text-3xl md:text-4xl ${item.highlight ? 'text-[#073742]' : 'text-[#88D7F0]'}`} />
                        ) : (
                          <IoCloseCircleOutline className={`text-base min-[380px]:text-lg sm:text-3xl md:text-4xl ${item.highlight ? 'text-[#073742]/40' : 'text-gray-600'}`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TableComponent;
