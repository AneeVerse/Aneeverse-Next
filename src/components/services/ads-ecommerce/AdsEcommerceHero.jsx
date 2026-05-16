"use client";

import { motion } from "framer-motion";
import Layout from "@/components/common/Layout";
import Image from "next/image";
import AnimatedButton from "@/components/common/AnimatedButton";
import { FaUserTie, FaRocket, FaChartLine, FaStore } from "react-icons/fa";
import AuditForm from "./AuditForm";

const trustLabels = [
  { icon: <FaUserTie className="w-3 h-3" />, text: "Dedicated PM" },
  { icon: <FaRocket className="w-3 h-3" />, text: "Fast Execution" },
  { icon: <FaChartLine className="w-3 h-3" />, text: "Weekly Reporting" },
  { icon: <FaStore className="w-3 h-3" />, text: "Amazon · eBay · Etsy" },
];

const scrollServices = [
  { title: "Amazon Listing Optimization", image: "/images/services/website/website-design.avif" },
  { title: "Dedicated PM", image: "/images/services/website/website-strategy.avif" },
  { title: "Brand Store & A+ Content", image: "/images/services/website/website-strategy.avif" },
  { title: "Amazon Ads Setup", image: "/images/services/website/webflow-development.avif" },
  { title: "FBA Support", image: "/images/services/website/design-systems.avif" },
  { title: "Weekly Reporting", image: "/images/services/website/website-illustrations.avif" },
  { title: "Account Health Management", image: "/images/services/website/website-illustrations.avif" },
  { title: "Amazon, eBay & Etsy", image: "/images/services/website/ux-ui-audit.avif" },
  { title: "Orders & Returns Management", image: "/images/services/website/ux-ui-audit.avif" },
  { title: "WhatsApp Support", image: "/images/services/website/website-design.avif" },
  { title: "Performance Reporting", image: "/images/services/website/website-strategy.avif" },
  { title: "eBay Promoted Listings", image: "/images/services/website/website-design.avif" },
  { title: "Etsy SEO & Ads", image: "/images/services/website/webflow-development.avif" },
];

const scrollVariants = {
  animate: {
    x: [0, "-50%"],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" },
    },
  },
};

export default function AdsEcommerceHero() {
  return (
    <div className="bg-[#073742] relative text-white overflow-hidden">
      {/* Top fade from nav */}
      <div className="absolute -top-[20px] left-0 w-full h-[200px] bg-gradient-to-b z-20 from-[#021115] via-[#073742]/80 to-transparent pointer-events-none" />

      <Layout className="relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch min-h-[calc(100vh-100px)] pt-24 pb-10 lg:py-32">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col justify-center text-left">
            <p className="text-[10px] md:text-[11px] uppercase font-bold tracking-[3px] md:tracking-[4px] text-primary-500/80 mb-4 md:mb-5">
              Marketplace Management
            </p>

            <h1 className="font-bw-gradual font-extrabold leading-[1.1] tracking-tighter uppercase mb-6 text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3rem]">
              <span className="text-white">Every Day Your<br />Listing Sits on Page 3,</span>
              <span className="inline-block bg-[#FF6B00] text-[#03151a] px-3 sm:px-4 py-1.5 sm:py-1 rounded-lg sm:rounded-xl text-[0.65em] sm:text-[0.65em] mt-4 sm:mt-5 font-black tracking-tight">
                Someone Else Gets Your Sale.
              </span>
            </h1>

            <p className="text-[15px] sm:text-lg text-white/90 leading-relaxed max-w-xl mb-6 md:mb-8">
              One leaking listing. One broken PPC campaign. One ignored warning. That&apos;s all it takes to lose months of rank. We make sure none of that happens.
            </p>

            <p className="text-[13px] sm:text-sm text-white font-medium mb-6 md:mb-8 max-w-md opacity-80">
              No long-term contract to start. No upfront risk. Just a free audit.
            </p>

            {/* Trust labels */}
            <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
              {trustLabels.map((label, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 bg-white/[0.05] border border-white/[0.07] rounded-full px-3 py-1.5 text-[10px] md:text-[11px] text-white/60"
                >
                  <span className="text-primary-500">{label.icon}</span>
                  {label.text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <AnimatedButton
                href="#platform-cards"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm flex items-center justify-center text-center"
                style={{ backgroundColor: "#88D7F0", color: "#073742" }}
                mainTextSlide="-130%"
                duplicateTextStart="100%"
                duplicateTextEnd="-100%"
              >
                Find Out What My Store Is Losing →
              </AnimatedButton>
              <AnimatedButton
                href="#platform-cards"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm border border-white/20 bg-white/[0.05] flex items-center justify-center text-center"
                mainTextSlide="-130%"
                duplicateTextStart="100%"
                duplicateTextEnd="-100%"
              >
                Book a Free Audit
              </AnimatedButton>
            </div>

            {/* Trust bar below CTAs - aligned with buttons above */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-5 pt-5 border-t border-white/10">
              {/* Stars + rating - matches width of first CTA */}
              <div className="flex flex-col gap-1.5 w-full sm:w-auto sm:min-w-[300px]">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FFB800] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[13px] text-white font-bold leading-none">
                  4.9/5 <span className="text-white/50 font-normal ml-2">Based on 200+ reviews</span>
                </p>
              </div>

              {/* Avatars + label - matches width of second CTA */}
              <div className="flex items-center gap-3 w-full sm:w-auto sm:min-w-[220px]">
                <div className="flex -space-x-2.5">
                  {[
                    "/images/testimonals/Vmc.png",
                    "/images/testimonals/jm-visa.png",
                    "/images/testimonals/navino.png",
                  ].map((src, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#073742] relative overflow-hidden bg-white/10">
                      <Image src={src} alt="Seller" fill className="object-cover" sizes="40px" />
                    </div>
                  ))}
                </div>
                <p className="text-[13px] leading-tight text-white/70">
                  Trusted by <span className="font-bold text-white">500+</span><br />Sellers Worldwide
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div id="store-audit-form" className="flex items-center justify-end w-full scroll-mt-24 h-full">
            <AuditForm />
          </div>

        </div>
      </Layout>

      {/* ── Infinite scroll strip (image cards) ── */}
      <div className="bg-[#073742] py-6 md:py-8 border-t border-white/[0.05] overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#073742] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#073742] to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-4 items-center w-max"
          variants={scrollVariants}
          animate="animate"
        >
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
