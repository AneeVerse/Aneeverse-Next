"use client";

import { useState } from "react";
import Image from "next/image";
import Layout from "@/components/common/Layout";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaSearch, FaGlobe, FaCode, FaAmazon, FaEbay, FaEtsy } from "react-icons/fa";
import { Clock } from "lucide-react";
import ConsultationFormModal from "./ConsultationFormModal";

const services = [
  {
    id: "google-ads",
    name: "Google Ads",
    badge: "Google Ads",
    icon: <FaGoogle className="w-5 h-5 text-[#4285F4]" />,
    image: "/images/ads-digital-marketing/service-card/google-ads.png",
    subtitle: [
      { text: "Qualified Leads From Google", accent: false },
      { text: "Not Just Clicks", accent: true },
    ],
    description:
      "One dedicated manager. Weekly optimization. Conversion tracking verified before a single rupee goes live.",
    deliverables: [
      "Live in 7 days",
      "Weekly bid and budget review",
      "Monday report: spend, leads, cost per lead",
    ],
  },
  {
    id: "meta-ads",
    name: "Meta Ads",
    badge: "Meta Ads",
    icon: <FaFacebookF className="w-5 h-5 text-[#1877F2]" />,
    image: "/images/ads-digital-marketing/service-card/meta-ads.png",
    subtitle: [
      { text: "Facebook & Instagram Leads", accent: false },
      { text: "Not Just Reach", accent: true },
    ],
    description:
      "Weekly creative testing. Pixel tracking set up correctly. One manager from build to results.",
    deliverables: [
      "Live in 7 days",
      "3–4 ad variations tested from week one",
      "Monday report: spend, ROAS, cost per result",
    ],
  },
  {
    id: "seo",
    name: "SEO",
    badge: "SEO",
    icon: <FaSearch className="w-5 h-5 text-[#03151a]" />,
    image: "/images/ads-digital-marketing/service-card/seo.png",
    subtitle: [
      { text: "First-Page Google Rankings", accent: false },
      { text: "Without Paid Clicks", accent: true },
    ],
    description:
      "Full audit, on-page fixes, content, and link building – every month, on a clear plan.",
    deliverables: [
      "Audit delivered in 7 days",
      "Buyer-intent keywords, not just high-volume",
      "Monthly report: rankings, traffic, links",
    ],
  },
  {
    id: "website-development",
    name: "Website Development",
    badge: "Website Development",
    icon: <FaGlobe className="w-5 h-5 text-[#03151a]" />,
    image: "/images/ads-digital-marketing/service-card/website-dev.png",
    subtitle: [
      { text: "Websites Built to Convert", accent: false },
      { text: "Not Just Look Good", accent: true },
    ],
    description:
      "Strategy before design. Mobile-first. Built to load fast and rank on Google.",
    deliverables: [
      "First concept in 7 days",
      "Fixed timeline, written before work starts",
      "30-day post-launch support",
    ],
  },
  {
    id: "platform-development",
    name: "Platform Development",
    badge: "Platform Development",
    icon: <FaCode className="w-5 h-5 text-[#03151a]" />,
    image: "/images/ads-digital-marketing/service-card/platform-dev.png",
    subtitle: [
      { text: "Built to Spec. Delivered on a", accent: false },
      { text: "Fixed Timeline.", accent: true },
    ],
    description:
      "Web apps, marketplaces, automation tools, internal platforms – scoped, built, and handed over clean.",
    deliverables: [
      "Written scope and estimate in 3 days",
      "Milestone delivery, no open-ended sprints",
      "60-day post-launch support",
    ],
  },
  {
    id: "amazon",
    name: "Amazon",
    badge: "Amazon Management",
    icon: <FaAmazon className="w-5 h-5 text-black" />,
    image: "/ads/amazon6.png",
    subtitle: [
      { text: "Ranking on Page 3 Is the Same as", accent: false },
      { text: "Not Existing.", accent: true },
    ],
    description: "Listings fixed. Keywords ranked. PPC restructured. Margin protected.",
    deliverables: [
      "Listings fixed. Keywords ranked.",
      "PPC restructured. Margin protected.",
      "35%+ ranking growth within 90 days",
    ],
  },
  {
    id: "ebay",
    name: "eBay",
    badge: "eBay Management",
    icon: <FaEbay className="w-6 h-4 text-[#6557D2]" />,
    image: "/ads/ebay1.png",
    subtitle: [
      { text: "If Your Listing Doesn't Stop Them,", accent: false },
      { text: "Someone Else's Does.", accent: true },
    ],
    description: "Storefront built. Listings ranked. Promoted campaigns that sell, not just spend.",
    deliverables: [
      "Storefront built. Listings ranked.",
      "Promoted campaigns that sell, not just spend.",
      "50%+ impression increase in first 60 days",
    ],
  },
  {
    id: "etsy",
    name: "Etsy",
    badge: "Etsy Management",
    icon: <FaEtsy className="w-5 h-5 text-[#D5641C]" />,
    image: "/ads/etsy1.png",
    subtitle: [
      { text: "Title & Tags Decide Everything —", accent: false },
      { text: "Most Sellers Get Both Wrong.", accent: true },
    ],
    description: "Every listing optimised for how Etsy actually ranks.",
    deliverables: [
      "Every listing optimised for how Etsy actually ranks.",
      "Etsy Ads built to convert — not just run.",
      "3x search visibility in first 60 days",
    ],
  },
];

function ServiceCard({ service, index, onCtaClick, isCarousel = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, ...(isCarousel ? {} : { y: 30 }) }}
      whileInView={{ opacity: 1, ...(isCarousel ? {} : { y: 0 }) }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-[#f1f5f9] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.1)] border border-white/10 hover:shadow-[0_0_60px_rgba(0,0,0,0.18)] transition-all duration-300 h-full w-full"
    >
      <div className="relative w-full h-[220px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover object-top brightness-[0.9] transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-5">
          <div className="flex items-center gap-3 text-white mb-0.5">
            <span className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
              {service.icon}
            </span>
            <span className="text-xl font-bold tracking-tight uppercase">{service.name}</span>
          </div>
          <p className="text-white/70 text-[9px] uppercase tracking-[2px] font-bold">{service.badge}</p>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 bg-white">
        <h3 className="font-bw-gradual text-[1rem] md:text-[1.05rem] font-bold text-gray-900 leading-tight mb-3 uppercase tracking-tight">
          {Array.isArray(service.subtitle) ? (
            service.subtitle.map((part, i) => (
              <span
                key={i}
                className={part.accent ? "block w-fit bg-[#ff9900] text-[#03151a] px-1.5 py-0.5 rounded-sm font-black mt-1" : ""}
              >
                {part.text}
              </span>
            ))
          ) : (
            service.subtitle
          )}
        </h3>

        <p className="text-[12px] text-gray-600 leading-relaxed mb-4">{service.description}</p>

        <ul className="space-y-2 mb-5 flex-1">
          {service.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[12px] text-gray-900 font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <button
            type="button"
            onClick={() => onCtaClick(service.id)}
            className="w-full py-3.5 rounded-full font-bold text-[13px] shadow-lg shadow-black/5 flex items-center justify-center text-center bg-[#073742] text-[#EBFAFE] hover:bg-[#0a4f5e] transition-colors"
          >
            Get a free audit →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServiceCardsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (serviceId) => {
    setSelectedService(serviceId);
    setModalOpen(true);
  };

  return (
    <section id="service-cards" className="bg-[#073742] py-20 md:py-28 relative overflow-hidden">
      <Layout>
        <div className="text-center max-w-4xl mx-auto mb-16 px-4">
          <p className="text-[11px] uppercase font-bold tracking-[4px] text-primary-500 mb-3">
            What Do You Need to Grow Online?
          </p>
          <h2 className="font-bw-gradual text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-[1.1] text-white mb-6">
            Pick a Service.{" "}
            <span className="inline-block bg-[#FF6B00] text-[#03151a] px-5 py-2 rounded-2xl text-[0.65em] mt-2 font-black tracking-tight">
              See What We Deliver.
            </span>
          </h2>
        </div>

        <div className="flex md:hidden overflow-x-auto overflow-y-visible overscroll-x-contain snap-x snap-mandatory scrollbar-hide -mx-4 px-4 gap-4 pb-6 items-stretch">
          {services.map((service, index) => (
            <div key={service.id} className="flex-shrink-0 snap-center w-[85vw] sm:w-[320px] flex">
              <ServiceCard service={service} index={index} onCtaClick={openModal} isCarousel />
            </div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-6 gap-8 px-4 lg:px-0 max-w-[1200px] mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`lg:col-span-2 ${index === 6 ? "lg:col-start-2" : ""}`}
            >
              <ServiceCard service={service} index={index} onCtaClick={openModal} />
            </div>
          ))}
        </div>
      </Layout>

      <ConsultationFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </section>
  );
}
