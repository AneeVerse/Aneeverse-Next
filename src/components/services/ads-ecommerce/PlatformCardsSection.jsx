"use client";

import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/common/Layout";
import { motion } from "framer-motion";
import { FaAmazon, FaEbay, FaEtsy } from "react-icons/fa";
import { TrendingUp } from "lucide-react";

const platforms = [
  {
    id: "amazon",
    name: "Amazon",
    badge: "Amazon Management",
    icon: <FaAmazon className="w-4 h-4" />,
    image: "/ads/amazon.png",
    brandColor: "#FF9900",
    badgeBg: "#FF9900",
    stat: "35%+",
    statLabel: "ranking growth within 90 days",
    headline: [
      { text: "Ranking on Page 3 is\nthe same as ", accent: false },
      { text: "not existing.", accent: true },
    ],
    body: "We fix your listings, restructure your PPC, and protect your account health - so you stop losing sales to competitors with worse products but better execution.",
    cta: "Get Free Amazon Audit →",
  },
  {
    id: "ebay",
    name: "eBay",
    badge: "eBay Management",
    icon: <FaEbay className="w-5 h-4" />,
    image: "/ads/ebay.png",
    brandColor: "#6557D2",
    badgeBg: "#6557D2",
    stat: "50%+",
    statLabel: "impression increase in first 60 days",
    headline: [
      { text: "eBay buyers don't search.\n", accent: false },
      { text: "They scroll.", accent: true },
      { text: " If your listing\ndoesn't stop them -\nsomeone else's does.", accent: false },
    ],
    body: "We build your storefront, write listings that rank in Cassini, and run Promoted Listings that don't bleed margin. You source. We sell.",
    cta: "Get Free eBay Audit →",
  },
  {
    id: "etsy",
    name: "Etsy",
    badge: "Etsy Management",
    icon: <FaEtsy className="w-4 h-4" />,
    image: "/ads/etsy.png",
    brandColor: "#1A7849",
    badgeBg: "#1A7849",
    stat: "3x",
    statLabel: "search visibility in first 60 days",
    headline: [
      { text: "On Etsy, your ", accent: false },
      { text: "title and tags\ndecide everything.", accent: true },
      { text: " Most sellers\nget both wrong.", accent: false },
    ],
    body: "We optimise every listing for how Etsy's algorithm actually works - right keywords, right tags, right positions. Plus Etsy Ads that convert, and a Star Seller profile that sells before a buyer reads a word.",
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
      className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.13)] transition-shadow duration-300"
    >
      {/* ── Image Top ── */}
      <div className="relative w-full h-[280px] overflow-hidden">
        <Image
          src={platform.image}
          alt={`${platform.name} Management`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
        />
      </div>

      {/* ── Content Bottom ── */}
      <div className="flex flex-col flex-1 p-6 bg-white">
        {/* Headline */}
        <h3 className="text-[1.25rem] font-extrabold text-gray-900 leading-snug mb-3 whitespace-pre-line">
          {platform.headline.map((part, i) =>
            part.accent ? (
              <span key={i} style={{ color: platform.brandColor }}>
                {part.text}
              </span>
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
        </h3>

        {/* Body */}
        <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
          {platform.body}
        </p>

        {/* Stat Box */}
        <div
          className="flex items-center gap-4 rounded-2xl px-4 py-3 mb-5"
          style={{ backgroundColor: `${platform.brandColor}12` }}
        >
          <TrendingUp
            className="w-8 h-8 flex-shrink-0"
            style={{ color: platform.brandColor }}
          />
          <div>
            <span
              className="text-3xl font-extrabold leading-none"
              style={{ color: platform.brandColor }}
            >
              {platform.stat}
            </span>{" "}
            <span className="text-[12px] text-gray-500 font-medium">
              {platform.statLabel}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Link
            href="#store-audit-form"
            className="flex items-center justify-center w-full py-3.5 rounded-2xl text-white text-[14px] font-bold transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
            style={{
              backgroundColor: platform.brandColor,
              boxShadow: `0 6px 20px ${platform.brandColor}35`,
            }}
          >
            {platform.cta}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function PlatformCardsSection() {
  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden">
      <Layout>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <p className="text-[11px] uppercase font-bold tracking-[4px] text-gray-400 mb-3">
            Platform Specific Solutions
          </p>
          <h2 className="font-bw-gradual text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight text-gray-900 mb-4 flex flex-col items-center">
            <span className="whitespace-nowrap">Your Store Is Losing Sales on Every</span>
            <span className="font-Rock_Salt text-[#FF6B00] normal-case text-[0.6em] block -rotate-1 mt-2">
              Platform You&apos;re Not Optimising
            </span>
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Pick your platform. See exactly what we fix - and what it&apos;s been costing you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {platforms.map((platform, index) => (
            <PlatformCard key={platform.id} platform={platform} index={index} />
          ))}
        </div>
      </Layout>
    </section>
  );
}
