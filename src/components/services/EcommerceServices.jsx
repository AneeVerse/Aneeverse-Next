import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import Layout from "../common/Layout";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";

export default function EcommerceServices() {
    const services = [
        {
            title: "Amazon Marketplace Management",
            description:
                "Scale more on Amazon without troubleshooting. We handle listings, ads, and account health.",
            imgUrl: "/images/services/website/website-design.png",
            pageUrl: "/services/amazon-marketplace-management",
        },
        {
            title: "eBay Marketplace Management",
            description:
                "Profitable eBay store management. From listing optimization to Promoted Listings campaigns.",
            imgUrl: "/images/services/website/landing-page.png",
            pageUrl: "/services/ebay-marketplace-management",
        },
        {
            title: "Zepto Management",
            description:
                "Win in quick commerce. End-to-end execution for Zepto onboarding and operations.",
            imgUrl: "/images/services/website/seo-optimization.png",
            pageUrl: "/services/zepto-marketplace-management",
        },
    ];

    return (
        <section id="ecommerce-services" className="py-6 text-white border-t border-white/10 pt-16">
            <Layout>
                {/* Heading */}
                <Heading
                    level="h2"
                    color="light"
                    spacing="lg"
                    className="text-center font-medium"
                >
                    <AccentText size="lg">Ecommerce </AccentText>
                    Marketplace
                </Heading>

                {/* Grid */}
                <div className="grid gap-4 grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.pageUrl}
                            className={`group block h-[250px] sm:h-[370px] lg:h-auto relative rounded-2xl overflow-hidden`}
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
                                <p className="text-[#F7F9F2] text-sm mb-4 max-w-[90%]">
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
