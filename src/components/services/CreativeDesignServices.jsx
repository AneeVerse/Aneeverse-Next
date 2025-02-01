import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import Layout from "../common/Layout";

export default function CreativeDesignServices() {
  const creativeServices = [
    {
      title: "Brochure Design",
      description:
        "Create compelling brochures that showcase your offerings in a polished and eye-catching format.",
      imgUrl: "/images/services/creative/borchore.png",
      pageUrl: "/services/brochure-design",
    },
    {
      title: "Social Media Creatives",
      description:
        "Engage your audience with visually striking social media posts and short videos tailored to your brand.",
        imgUrl: "/images/services/creative/social-media-creative.png",
      pageUrl: "/services/social-media-creatives",
    },
    {
      title: "Presentation Design",
      description:
        "Elevate your business pitches with professional, visually appealing presentation designs.",
        imgUrl: "/images/services/creative/presentation-design.png",
      pageUrl: "/services/presentation-design",
    },
  ];

  return (
    <section id="creative-design-services" className="py-6 text-white">
      <Layout>
        {/* Heading */}
        <h2 className="text-4xl mb-12 text-center">
          <span className="font-Rock_Salt">creative</span>{" "}
          <span className="ml-2">Design Services</span>
        </h2>

        {/* Grid */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {creativeServices.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden `}
            >
              {/* Image */}
              <div className="overflow-hidden h-full w-full">
                <img
                  src={service.imgUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 absolute top-2 left-2">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-[#F7F9F2] text-sm mb-4">
                  {service.description}
                </p>
              </div>
              <Link
                href={service.pageUrl}
                className="text-[#F7F9F2] absolute bottom-3 left-6 font-medium text-sm flex items-center gap-2 hover:underline"
              >
               <span> Learn more </span> <MdOutlineArrowOutward  className="self-center"/>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </section>
  );
}
