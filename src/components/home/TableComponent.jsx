import React from "react";
import { FaCheck, FaTimes, FaUsers, FaPaintBrush, FaUserTie, FaToolbox } from "react-icons/fa";

const data = [
  {
    title: "Aneeverse",
    description:
      "Work with the top 1% of global creative talent, recruited from the best brands and agencies.",
    features: [true, true, true, true, true],
    icon: <FaUsers className="text-3xl min-w-fit text-secondary-500" />,
    highlight: true,
  },
  {
    title: "In-house team",
    description:
      "In-house teams don’t always have the skill mix or bandwidth to handle every request that the business needs.",
    features: [false, false, true, true, false],
    icon: <FaUserTie className="text-3xl min-w-fit text-primary-500" />,
    highlight: false,
  },
  {
    title: "Creative agencies",
    description:
      "Working with full-scale creative agencies can be slow, costly, and inflexible.",
    features: [false, false, true, true, false],
    icon: <FaPaintBrush className="text-3xl min-w-fit text-primary-500" />,
    highlight: false,
  },
  {
    title: "Freelancers",
    description:
      "Freelancers can be unreliable and hard to scale, leading to inconsistent work and questionable quality.",
    features: [false, false, true, true, true],
    icon: <FaUsers className="text-3xl min-w-fit text-primary-500" />,
    highlight: false,
  },
  {
    title: "Self-service tools",
    description:
      "These solutions make incremental improvements to capacity, and work mostly for simpler, repetitive tasks.",
    features: [false, false, true, true, false],
    icon: <FaToolbox className="text-3xl min-w-fit text-primary-500" />,
    highlight: false,
  },
];

const TableComponent = () => {
  const headers = [
    "Speed",
    "Flexibility",
    "Quality",
    "Scalability",
    "Cost-effectiveness",
  ];

  return (
    <div className="bg-secondary-500 text-white py-16 px-6">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl max-w-lg  mx-auto font-bold">Hiring or traditional outsourcing? <span className="font-Rock_Salt text-purple-400">{"Neither".toUpperCase()}</span></h2>
        
      </div>

      {/* Table Section */}
      <div className="max-w-6xl mx-auto overflow-hidden rounded-lg ">
        {/* Headers */}
        <div className="grid grid-cols-8 items-center  text-sm font-semibold">
          <div className="p-4 col-span-3 text-center"></div>
          {headers.map((header, index) => (
            <div key={index} className="p-4 text-center">
              {header}
            </div>
          ))}
        </div>

        {/* Data Rows */}
        {data.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-8 my-2 items-center ${
              item.highlight ? "bg-[#88D7F0] rounded-full text-secondary-500" : " "
            } ${index !== data.length - 1 ? "border-b border-gray-700" : ""}`}
          >
            {/* Icon + Title + Description */}
            <div className="p-4  col-span-3 flex gap-4 items-center">
              {item.icon}
              <div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm mt-1">{item.description}</p>
              </div>
            </div>

            {/* Features */}
            {item.features.map((feature, idx) => (
              <div
                key={idx}
                className={`p-4 ${index == 0 ? " text-secondary-500 " : " text-primary-500 "} text-center flex justify-center items-center`}
              >
                {feature ? (
                  <FaCheck className=" text-2xl" />
                ) : (
                  <FaTimes className=" text-2xl" />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableComponent;
