import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import Layout from "../common/Layout";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

export default function ServicesPageGrid() {
  const mainServices = [
    {
      title: "E-Commerce Marketplace Management",
      description: "Manage Amazon, eBay & multi-channel marketplaces for scalable growth.",
      imgUrl: "/images/services/website/website-design.png",
      pageUrl: "/services#ecommerce-marketplace",
      highlightColor: "from-[#FF6B00]/40 to-black/80"
    },
    {
      title: "Platform & Website Development",
      description: "Scalable, secure and high-performance web platforms built to grow.",
      imgUrl: "/images/services/website/landing-page.png",
      pageUrl: "/services/platform-development",
      highlightColor: "from-[#00A896]/40 to-black/80"
    },
    {
      title: "AI SEO (GEO) (AEO) (AIO)",
      description: "AI-first SEO strategies to improve visibility in AI and traditional search.",
      imgUrl: "/images/services/website/seo-optimization.png",
      pageUrl: "/services/ai-seo-geo-aeo-aio",
      highlightColor: "from-[#2563EB]/40 to-black/80"
    },
    {
      title: "Marketing & Google / Meta Ads Management",
      description: "ROI-focused ad campaigns that deliver measurable results.",
      imgUrl: "/images/services/website/local-seo.png",
      pageUrl: "/services/marketing-strategy",
      highlightColor: "from-[#E76F51]/40 to-black/80"
    },
    {
      title: "Social, Printable & Ads Creative Designs",
      description: "Eye-catching designs that boost engagement and drive conversions.",
      imgUrl: "/images/services/creative/social-media-creative.png",
      pageUrl: "/services/ad-creative",
      highlightColor: "from-[#7C3AED]/40 to-black/80"
    },
    {
      title: "Blogs & SEO Services",
      description: "High-ranking content and SEO strategies that drive organic traffic.",
      imgUrl: "/images/services/creative/presentation-design.png",
      pageUrl: "/services/blog-writing",
      highlightColor: "from-[#EC4899]/40 to-black/80"
    },
    {
      title: "n8n & AI Automation Workflows",
      description: "Automate tasks, integrate tools and scale your operations.",
      imgUrl: "/images/services/creative/borchore.png",
      pageUrl: "/services/n8n-workflows",
      highlightColor: "from-[#10B981]/40 to-black/80"
    }
  ];

  return (
    <section className="py-6 text-white scroll-mt-24">
      <Layout>
        {/* Heading */}
        <Heading
          level="h2"
          color="light"
          spacing="lg"
          className="text-center font-medium"
        >
          Our <AccentText size="lg">Core </AccentText> Services
        </Heading>

        {/* 3-Column Grid for clean visual flow of 7 items (2 rows of 3, with 7th featured or aligned) */}
        <div className="grid gap-6 grid-cols-1 mt-12 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {mainServices.map((service, index) => {
            // Feature the first item to fill the grid layout naturally
            const isFirst = index === 0;
            return (
              <Link
                key={index}
                href={service.pageUrl}
                className={`group block relative rounded-2xl overflow-hidden shadow-xl border border-white/5 transition-all duration-300 hover:scale-[1.02] hover:border-white/10 min-h-[320px] sm:min-h-[380px] lg:min-h-[400px] ${
                  isFirst ? "lg:col-span-3 lg:min-h-[450px]" : ""
                }`}
              >
                {/* Image background */}
                <div className="absolute inset-0 overflow-hidden w-full h-full">
                  <img
                    src={service.imgUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.highlightColor} mix-blend-multiply opacity-80 transition-opacity duration-300 group-hover:opacity-90`} />
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content Container */}
                <div className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10 ${
                  isFirst ? "lg:p-12 lg:max-w-[70%]" : ""
                }`}>
                  <div>
                    <h3 className={`font-bold text-white mb-3 tracking-tight ${
                      isFirst ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`text-gray-200 leading-relaxed mb-6 font-medium ${
                      isFirst ? "text-base sm:text-lg" : "text-sm sm:text-base"
                    }`}>
                      {service.description}
                    </p>
                  </div>
                  <div className="text-[#88D7F0] font-bold text-sm sm:text-base flex items-center gap-2 group-hover:underline w-fit">
                    <span>Explore service</span>
                    <MdOutlineArrowOutward className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Layout>
    </section>
  );
}
