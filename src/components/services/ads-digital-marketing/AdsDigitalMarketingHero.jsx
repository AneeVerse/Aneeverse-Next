"use client";

import { motion } from "framer-motion";
import Layout from "@/components/common/Layout";
import Image from "next/image";
import AnimatedButton from "@/components/common/AnimatedButton";
import {
  FaGoogle,
  FaFacebookF,
  FaSearch,
  FaGlobe,
  FaCode,
} from "react-icons/fa";
import ConsultationForm from "./ConsultationForm";

const serviceLabels = [
  { icon: <FaGoogle className="w-3.5 h-3.5" />, text: "Google Ads" },
  { icon: <FaFacebookF className="w-3.5 h-3.5" />, text: "Meta Ads" },
  { icon: <FaSearch className="w-3.5 h-3.5" />, text: "SEO" },
  { icon: <FaGlobe className="w-3.5 h-3.5" />, text: "Website Development" },
  { icon: <FaCode className="w-3.5 h-3.5" />, text: "Platform Development" },
];

const scrollServices = [
  { title: "Google Ads Management", image: "/images/services/website/website-design.avif" },
  { title: "Meta Ads Management", image: "/images/services/website/website-strategy.avif" },
  { title: "SEO", image: "/images/services/website/webflow-development.avif" },
  { title: "Website Development", image: "/images/services/website/design-systems.avif" },
  { title: "Platform Development", image: "/images/services/website/website-illustrations.avif" },
  { title: "Conversion Tracking", image: "/images/services/website/ux-ui-audit.avif" },
  { title: "Weekly Reporting", image: "/images/services/website/website-strategy.avif" },
  { title: "Dedicated PM", image: "/images/services/website/website-design.avif" },
  { title: "Landing Pages", image: "/images/services/website/webflow-development.avif" },
  { title: "WhatsApp Support", image: "/images/services/website/website-illustrations.avif" },
  { title: "Ad Creative", image: "/images/services/website/design-systems.avif" },
  { title: "Technical SEO", image: "/images/services/website/ux-ui-audit.avif" },
  { title: "Link Building", image: "/images/services/website/website-design.avif" },
];

const clientLogos = [
  "/images/testimonals/Vmc.png",
  "/images/testimonals/jm-visa.png",
  "/images/testimonals/navino.png",
  "/images/testimonals/Vmc.png",
  "/images/testimonals/jm-visa.png",
];

const scrollVariants = {
  animate: {
    x: [0, "-50%"],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" },
    },
  },
};

export default function AdsDigitalMarketingHero() {
  return (
    <div className="bg-[#073742] relative text-white overflow-hidden">
      <div className="absolute -top-[20px] left-0 w-full h-[200px] bg-gradient-to-b z-20 from-[#021115] via-[#073742]/80 to-transparent pointer-events-none" />

      <Layout className="relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-stretch min-h-[calc(100vh-100px)] pt-24 pb-10 lg:py-32">
          <div className="flex flex-col justify-center text-left min-w-0 lg:pr-6 xl:pr-10">
            <p className="text-[11px] md:text-xs uppercase font-bold tracking-[3px] md:tracking-[4px] text-primary-500/90 mb-5 md:mb-6">
              Digital Marketing Services
            </p>

            <h1 className="font-bw-gradual font-extrabold leading-[1.1] max-md:leading-[1.15] tracking-tighter uppercase mb-6 text-[1.75rem] max-md:text-[1.35rem] sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3rem] max-w-full max-md:pr-0 max-md:overflow-hidden">
              <span className="text-white">
                One Team for All Your
                <br />
                Digital Marketing and Development.
              </span>
              <span className="inline-block max-w-full max-md:mr-0 max-md:pr-2.5 max-md:whitespace-normal bg-[#FF6B00] text-[#03151a] px-3 sm:px-4 py-1.5 sm:py-1 rounded-lg sm:rounded-xl text-[0.65em] max-md:text-[0.55em] max-md:leading-snug sm:text-[0.65em] mt-4 sm:mt-5 font-black tracking-tight">
                More Leads. Better Rankings. Less Chaos.
              </span>
            </h1>

            <p className="text-[15px] sm:text-lg text-white/90 leading-relaxed max-w-xl mb-6 md:mb-8">
              Google Ads, Meta Ads, SEO, Website Development, and Platform Development – handled by one
              dedicated team, reported back to you every week.
            </p>

            <div className="flex flex-nowrap items-center gap-2 mb-8 md:mb-10 overflow-x-auto pb-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {serviceLabels.map((label, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 bg-white/[0.06] border border-white/[0.1] rounded-full px-3 py-1.5 text-[10px] md:text-[11px] font-medium text-white/70 whitespace-nowrap flex-shrink-0"
                >
                  <span className="text-primary-500 flex-shrink-0">{label.icon}</span>
                  {label.text}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <AnimatedButton
                href="#consultation-form"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm flex items-center justify-center text-center"
                style={{ backgroundColor: "#88D7F0", color: "#073742" }}
                mainTextSlide="-130%"
                duplicateTextStart="100%"
                duplicateTextEnd="-100%"
              >
                Book a Free Call →
              </AnimatedButton>
              <AnimatedButton
                href="#our-works"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm border border-white/20 bg-white/[0.05] flex items-center justify-center text-center"
                mainTextSlide="-130%"
                duplicateTextStart="100%"
                duplicateTextEnd="-100%"
              >
                View Our Work
              </AnimatedButton>
            </div>
            <p className="text-[11px] sm:text-[12px] text-white/50 mt-3 max-w-md">
              No commitment. 30 minutes. We&apos;ll tell you exactly what to fix first.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-5 pt-5 border-t border-white/10">
              <div className="flex flex-col gap-1.5 w-full sm:w-auto sm:min-w-[300px]">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FFB800] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[13px] text-white font-bold leading-none">
                  5.0{" "}
                  <span className="text-white/50 font-normal ml-2">Based on 200+ Google Reviews</span>
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto sm:min-w-[280px]">
                <div className="flex -space-x-2.5">
                  {clientLogos.map((src, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-[#073742] relative overflow-hidden bg-white/10"
                    >
                      <Image src={src} alt="Client logo" fill className="object-cover" sizes="40px" />
                    </div>
                  ))}
                </div>
                <p className="text-[13px] leading-tight text-white/70">
                  Trusted by <span className="font-bold text-white">500+</span>
                  <br />
                  Businesses Worldwide
                </p>
              </div>
            </div>
          </div>

          <div id="consultation-form" className="flex items-stretch justify-end w-full min-w-0 scroll-mt-24 h-full lg:pl-2">
            <ConsultationForm />
          </div>
        </div>
      </Layout>

      <div className="bg-[#073742] py-6 md:py-8 border-t border-white/[0.05] overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#073742] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#073742] to-transparent z-10 pointer-events-none" />
        <motion.div className="flex gap-4 items-center w-max" variants={scrollVariants} animate="animate">
          {[...scrollServices, ...scrollServices].map((service, index) => (
            <div
              key={index}
              className="flex items-center w-fit px-3 py-2 bg-primary-500 rounded-lg shadow-lg overflow-hidden flex-shrink-0"
            >
              <div className="h-[54px] w-[75px] relative rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="75px"
                />
              </div>
              <p className="ml-3 text-sm text-secondary-500 font-medium whitespace-nowrap">{service.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
