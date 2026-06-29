"use client";


import Layout from "@/components/common/Layout";
import { Heading } from "@/components/common/typography/Heading";
import { UiSubheading } from "@/components/common/typography/UiSubheading";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "@/components/common/AnimatedButton";

// ✅ Infinite Scroll Animation
const scrollVariants = {
  animate: {
    x: ["0%", "-25%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 50,
      ease: "linear",
    },
  },
};

// ✅ Services Data (for scrolling cards) - Default
const defaultServices = [
  { title: "Webflow Development", image: "/images/services/website/card/webflow-development.avif" },
  { title: "Website Illustrations", image: "/images/services/website/card/website-illustration.avif" },
  { title: "UX UI Audit", image: "/images/services/website/card/ui-ux-audit.avif" },
  { title: "Design Systems", image: "/images/services/website/card/design-system.avif" },
  { title: "Content Development", image: "/images/services/website/card/content-development.avif" },
  { title: "Website Strategy", image: "/images/services/website/card/website-strategy.avif" },
  { title: "Website Design", image: "/images/services/website/card/website-design.avif" },
  { title: "Landing Page Design", image: "/images/services/website/card/landing-page-design.avif" },
];


export default function CommonServicesHeroSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
  scrollServices = null,
}) {
  const services = scrollServices || defaultServices;
  return (
    <div className="relative mt-0 text-white overflow-hidden">
      {/* ✅ Hero Section */}
      <div className="relative w-full min-h-[80vh] lg:min-h-[90vh] py-20 lg:py-32 flex items-center">
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 opacity-100"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <Layout className="relative z-10 pb-12 lg:pb-20">
          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="relative z-10 lg:w-[70%] xl:w-[65%]">
              <UiSubheading className="text-primary-500 mb-2">
                {subtitle}
              </UiSubheading>
              <Heading
                level="h1"
                color="light"
                spacing="md"
                className="text-left font-semibold"
              >
                {title}
              </Heading>

              <p className="text-lg text-gray-200">{description}</p>

              <AnimatedButton
                href={ctaLink}
                className="mt-6 min-w-fit whitespace-nowrap px-6 py-3 rounded-full font-medium text-primary-500 bg-transparent border border-primary-500 hover:bg-primary-500 hover:text-[#073742] transition-colors"
                mainTextSlide="-130%"
                duplicateTextStart="100%"
                duplicateTextEnd="-100%"
              >
                {ctaText}
              </AnimatedButton>
            </div>
          </div>
        </Layout>
        {/* ✅ Scrolling Services */}
        <div className="absolute bottom-4 lg:bottom-8 w-full overflow-hidden">
          <motion.div
            className="flex gap-4 w-max"
            variants={scrollVariants}
            animate="animate"
          >
            {[...services, ...services, ...services, ...services].map(
              (service, index) => (
                <div
                  key={index}
                  className="flex items-center w-fit px-3 py-2 bg-primary-500  rounded-lg shadow-lg overflow-hidden"
                >
                  <div className=" h-[54px] w-[75px] relative  rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="ml-3 text-md text-secondary-500 font-medium">
                    {service.title}
                  </p>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
