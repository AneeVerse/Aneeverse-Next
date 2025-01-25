import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";



const DynamicOurWorks = () => {
  const projects = [
    {
      image: "/images/home/works-ban-1.avif",
      title: "Webflow",
      description: "Illustration Design, Ad Creative",
      colSpan: 2, // Dynamic column span
    },
    {
      image: "/images/home/works2.avif",
      title: "Pernod Ricard",
      description: "eBook & Digital Reports, Video Production",
      colSpan: 1,
    },
    {
      image: "/images/home/works3.avif",
      title: "Salesforce",
      description: "Motion Design, Ad Creative",
      colSpan: 1,
    },
    {
      image: "/images/home/works4.avif",
      title: "Shopify",
      description: "Ad Creative",
      colSpan: 1, // Dynamic column span
    },
    {
      image: "/images/home/works5.avif",
      title: "Antler",
      description: "Brand Identity, Motion Design, Social Media Creative",
      colSpan: 2,
    },
    {
      image: "/images/home/works6.avif",
      title: "Reddit",
      description: "Motion Design, Social Media Creative",
      colSpan: 1,
    },
  ];
  return (
    <div className="bg-primary-500 py-16 px-6">
      {/* Section Header */}
      <div className="flex justify-between max-w-7xl mx-auto items-center mb-12">
      <div className="max-w-3xl  ">
        <p className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
          Our Works
        </p>
        <h2 className="text-4xl font-bold text-gray-800 mt-2">
          {"See Our".toUpperCase()}{" "}
          <span className="text-orange-500 font-Rock_Salt">{"Top Works".toUpperCase()}</span>
        </h2>
      </div>
        <button className="mt-4 px-6 py-2 border border-black rounded-full hover:bg-gray-800 hover:text-white transition">
          Explore all our work
        </button>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            // col span
            style={{ gridColumnEnd: `span ${project.colSpan || 1}` }}
            className={`group rounded-lg cursor-pointer  overflow-hidden ${
              project.colSpan ? ` col-span-${project.colSpan}` : ""
            }`}
          >
            {/* Image */}
            <div className="h-[280px] rounded-lg overflow-hidden">

            <img
              src={project.image}
              alt={project.title}
              className="h-[280px] w-full group-hover:scale-105 transition-transform duration-300 rounded-lg object-cover"
            />
            </div>
            {/* Text Content */}
            <div className="py-4">
                <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>

              {/* arrow */}
              <MdOutlineArrowOutward className="opacity-0 self-center translate-x-[-50%] translate-y-[50%] group-hover:translate-y-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />

                </div>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicOurWorks;
