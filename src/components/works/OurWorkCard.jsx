import Link from "next/link";
import { IoOpenOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
const services = [
  {
    title: "Design Portfolio",
    url: "/works/design-portfolio",
    description:
      "We create visually appealing designs for your digital products.",
    highlights: [
      "Custom illustrations",
      "User-friendly interfaces",
      "Creative design solutions",
    ],
    image: "/images/works/design/design1.webp", // Replace with the actual image path
  },
  {
    title: "Website Development",
    url: "/works/website-development",
    description:
      "We build responsive, SEO-friendly websites tailored for e-commerce and businesses.",
    highlights: [
      "Responsive design",
      "SEO-friendly structure",
      "E-commerce ready",
    ],
    image: "/images/works/design/design2.webp", // Replace with the actual image path
  },
  {
    title: "SEO Optimization",
    url: "/works/seo-optimization",
    description:
      "Optimize your website for better search rankings with advanced strategies.",
    highlights: [
      "Keyword research",
      "Content optimization",
      "Link building strategies",
    ],
    image: "/images/works/design/design3.webp", // Replace with the actual image path
  },
  {
    title: "Mobile App Development",
    url: "/works/mobile-app-development",
    description:
      "Create high-performance, cross-platform mobile apps with user-friendly interfaces.",
    highlights: [
      "Cross-platform apps",
      "High performance",
      "User-friendly UI/UX",
    ],
    image: "/images/works/design/design1.webp", // Replace with the actual image path
  },
  {
    title: "UI/UX Design",
    url: "/works/ui-ux-design",
    description:
      "Deliver visually appealing and user-focused designs for your digital products.",
    highlights: [
      "Interactive prototypes",
      "Creative design solutions",
      "User-centric approach",
    ],
    image: "/images/works/design/design4.webp", // Replace with the actual image path
  },
  {
    title: "Video Production",
    url: "/works/video-production",
    description:
      "Create engaging video content for your brand with our video production services.",
    highlights: [
        "Scriptwriting",
        "Storyboarding",
        "Motion graphics",
        ],
    image: "/images/works/video.webp", // Replace with the actual image path
    },
  
];

const OurWorkCard = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-8 px-6 py-8">
      {services.map((service, index) => (
        <Link
          href={service.url}
          key={index}
          className="relative text-gray-800 rounded-2xl shadow overflow-hidden  items-center gap-6 p-6 cursor-pointer flex flex-col sm:flex-row transition-transform group duration-300 max-w-4xl mx-auto"
        >
          {/* bakground image */}
          <div className="absolute top-0 left-0 w-full h-full bg-green-500 bg-opacity-20 z-[-1]">
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-full"
            />
            {/* background color */}
            <div className="absolute top-0 left-0 w-full backdrop-blur-sm h-full bg-black bg-opacity-60"></div>
          </div>
          {/* Image Section */}
          <div className="w-full sm:w-[40%]  border border-white rounded-lg shadow-md relative overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white">{service.title}</h2>
            <p className="mt-2 text-white">{service.description}</p>

            {/* Highlights */}
            <ul className="mt-4 space-y-2">
              {service.highlights.map((highlight, i) => (
                <li key={i} className="flex items-center">
                  <FaCheck className="text-white self-center mr-2 text-sm" />

                  <span className="text-gray-100">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <IoOpenOutline className="text-gray-300 hover:text-gray-400 absolute text-2xl bottom-4 sm:top-6 right-3 cursor-pointer" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OurWorkCard;
