import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import Layout from "../common/Layout";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

export default function CreativeDesignServices() {
  const creativeServices = [
    {
      title: "Ad Creative",
      description:
        "Eye-catching ad creatives that convert. High-performance visual assets for your paid campaigns.",
      imgUrl: "/images/services/creative/social-media-creative.png",
      pageUrl: "/services/ad-creative",
    },
    {
      title: "Presentation Design",
      description:
        "Elevate your business pitches with professional, visually appealing presentation designs.",
      imgUrl: "/images/services/creative/presentation-design.png",
      pageUrl: "/services/presentation-design",
    },
    {
      title: "Branding System & Merchandise",
      description:
        "Complete brand identity solutions. Logos, guidelines, and branded materials that stand out.",
      imgUrl: "/images/services/creative/borchore.png",
      pageUrl: "/services/branding-services",
    },
    {
      title: "Ebook, Report & Print Design",
      description:
        "Professional digital publications. High-converting ebooks, reports, and polished print materials.",
      imgUrl: "/images/services/creative/social-media-creative.png",
      pageUrl: "/services/ebook-digital-report",
    },
  ];

  return (
    <section id="creative-design-services" className="py-6 text-white">
      <Layout>
        {/* Heading */}
        <Heading
          level="h2"
          color="light"
          spacing="lg"
          className="text-center  font-medium"
        >
          <AccentText size="lg">creative </AccentText>
          Design Services
        </Heading>

        {/* Grid */}
        <div className="grid mt-8 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {creativeServices.map((service, index) => (
            <Link
              href={service.pageUrl}
              key={index}
              className={`group relative rounded-2xl overflow-hidden `}
            >
              {/* Image */}
              <div className="overflow-hidden relative h-[250px] sm:h-full w-full">
                <img
                  src={service.imgUrl}
                  alt={service.title}
                  className="w-full h-[250px] sm:h-full object-cover group-hover:scale-110 transition duration-300"
                />
                {/* overlap */}
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-all duration-300 opacity-30 "></div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-6 absolute top-2 left-2">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-[#F7F9F2] text-sm mb-4">
                  {service.description}
                </p>
              </div>
              <div className="text-[#F7F9F2] absolute bottom-3 left-6 font-medium text-sm flex items-center gap-2 group-hover:underline">
                <span> Learn more </span>{" "}
                <MdOutlineArrowOutward className="self-center" />
              </div>
            </Link>
          ))}
        </div>
      </Layout>
    </section>
  );
}
