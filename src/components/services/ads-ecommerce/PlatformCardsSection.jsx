"use client";

import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/common/Layout";
import { motion } from "framer-motion";
import { FaAmazon, FaEbay, FaEtsy } from "react-icons/fa";
import { TrendingUp } from "lucide-react";
import AnimatedButton from "@/components/common/AnimatedButton";

const platforms = [
  {
    id: "amazon",
    name: "Amazon",
    badge: "Amazon Management",
    icon: <FaAmazon className="w-6 h-6 text-black" />,
    image: "/ads/amazon6.png",
    brandColor: "#FF9900",
    stat: "35%+",
    statLabel: "ranking growth within 90 days",
    headline: [
      { text: "Ranking on Page 3 is\nthe same as ", accent: false },
      { text: "not existing.", accent: true },
    ],
    body: "✦ Listings fixed. Keywords ranked.\n✦ PPC restructured. Margin protected.\n✦ Problems handled before you see them.",
    cta: "Get Free Amazon Audit →",
  },
  {
    id: "ebay",
    name: "eBay",
    badge: "eBay Management",
    icon: <FaEbay className="w-7 h-5 text-[#6557D2]" />,
    image: "/ads/ebay1.png",
    brandColor: "#6557D2",
    stat: "50%+",
    statLabel: "impression increase in first 60 days",
    headline: [
      { text: "If your listing doesn't stop them ", accent: false },
      { text: "someone else's does.", accent: true },
    ],
    body: "✦ Storefront built. Listings ranked.\n✦ Promoted campaigns that sell not just spend.\n✦ Daily ops handled. You source. We sell.",
    cta: "Get Free eBay Audit →",
  },
  {
    id: "etsy",
    name: "Etsy",
    badge: "Etsy Management",
    icon: <FaEtsy className="w-6 h-6 text-[#D5641C]" />,
    image: "/ads/etsy1.png",
    brandColor: "#1A7849",
    stat: "3x",
    statLabel: "search visibility in first 60 days",
    headline: [
      { text: "Title & Tags decide everything, ", accent: false },
      { text: " Most sellers get both wrong.", accent: true },
    ],
    body: "✦ Every listing optimised for how Etsy actually ranks.\n✦ Etsy Ads built to convert — not just run.\n✦ Star Seller profile that sells before they read a word.",
    cta: "Get Free Etsy Audit →",
  },
];

function PlatformCard({ platform, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group flex flex-col bg-[#f1f5f9] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.1)] border border-white/10 hover:shadow-[0_0_60px_rgba(0,0,0,0.18)] transition-all duration-300"
    >
      {/* ── Image Top with Overlay ── */}
      <div className="relative w-full h-[220px] overflow-hidden">
        <Image
          src={platform.image}
          alt={`${platform.name} Management`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5">
          <div className="flex items-center gap-3 text-white mb-0.5">
            <span className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
              {platform.icon}
            </span>
            <span className="text-xl font-bold tracking-tight uppercase">{platform.name}</span>
          </div>
          <p className="text-white/70 text-[9px] uppercase tracking-[2px] font-bold">Marketplace Management</p>
        </div>
      </div>

      {/* ── Content Bottom ── */}
      <div className="flex flex-col flex-1 p-5 bg-white">
        {/* Service Badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {["PPC Strategy", "Listing Audit"].map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-md bg-gray-50 text-gray-400 text-[9px] font-bold uppercase tracking-wider border border-gray-100">
              {tag}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h3 className="font-bw-gradual text-[1rem] md:text-[1.1rem] font-bold text-gray-900 leading-tight mb-4 uppercase tracking-tight">
          {platform.headline.map((part, i) => (
            <span
              key={i}
              className={part.accent ? "inline-block bg-[#ff9900] text-[#03151a] px-1.5 py-0.5 rounded-sm mx-0.5 font-black" : ""}
            >
              {part.text}
            </span>
          ))}
        </h3>

        {/* Body */}
        <p className="text-[12px] text-gray-900 font-bold leading-relaxed mb-6 whitespace-pre-line">
          {platform.body}
        </p>

        {/* Key Result Line (Compact) */}
        <div className="flex items-center gap-2 mb-4 py-2 border-y border-gray-50">
          <TrendingUp className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[10px] font-bold text-gray-900 uppercase tracking-tight">
            Avg. Result: <span className="text-[#FF9900]">{platform.stat} {platform.statLabel}</span>
          </span>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <AnimatedButton
            href="#store-audit-form"
            className="w-full py-3.5 rounded-full font-bold text-[13px] shadow-lg shadow-black/5 flex items-center justify-center text-center"
            style={{
              backgroundColor: "#073742",
              color: "#EBFAFE",
            }}
            mainTextSlide="-130%"
            duplicateTextStart="100%"
            duplicateTextEnd="-100%"
          >
            {platform.cta}
          </AnimatedButton>
        </div>
      </div>
    </motion.div>
  );
}

export default function PlatformCardsSection() {
  return (
    <section className="bg-[#073742] py-20 md:py-28 relative overflow-hidden">
      <Layout>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 px-4">
          <p className="text-[11px] uppercase font-bold tracking-[4px] text-primary-500 mb-3">
            Platform Specific Solutions
          </p>
          <h2 className="font-bw-gradual text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-[1.1] text-white mb-6 flex flex-col items-center">
            <span className="md:whitespace-nowrap text-center">Your Store Is Losing Sales on Every</span>
            <span className="inline-block bg-[#FF6B00] text-[#03151a] px-5 py-2 rounded-2xl text-[0.6em] mt-4 text-center font-black tracking-tight">
              Platform You&apos;re Not Optimising
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto">
            Pick your platform. See exactly what we fix - and what it&apos;s been costing you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-0 max-w-[1200px] mx-auto">
          {platforms.map((platform, index) => (
            <PlatformCard key={platform.id} platform={platform} index={index} />
          ))}
        </div>
      </Layout>
    </section>
  );
}
