"use client";

import { motion } from "framer-motion";
import Layout from "@/components/common/Layout";
import Image from "next/image";
import { FaStar, FaGoogle /* , FaPlay */ } from "react-icons/fa";

/* Before / After cards — hidden until final screenshots are ready
const beforeAfterCards = [
  {
    label: "Google Ads",
    before: "CPL Before",
    beforeValue: "₹850",
    after: "CPL After 60 Days",
    afterValue: "₹490",
  },
  {
    label: "SEO",
    before: "Page 3",
    beforeValue: "Position 28",
    after: "Page 1 After 90 Days",
    afterValue: "Position 4",
  },
  {
    label: "Website",
    before: "Old Homepage",
    beforeValue: "2.1% Conv.",
    after: "New Design",
    afterValue: "3.8% Conv.",
  },
];
*/

const reviews = [
  {
    name: "[Client Name]",
    role: "Business Owner",
    avatar: "/images/testimonals/Vmc.png",
    rating: 5,
    text: "[Specific outcome]",
    placeholder: true,
  },
  {
    name: "[Client Name]",
    role: "Business Owner",
    avatar: "/images/testimonals/jm-visa.png",
    rating: 5,
    text: "[Specific outcome]",
    placeholder: true,
  },
  {
    name: "Vikram Manghnani",
    role: "Founder, VMC",
    avatar: "/images/testimonals/Vmc.png",
    rating: 5,
    text: "They felt like a team that genuinely cared about our vision and became a key part of our expansion.",
    placeholder: false,
  },
  {
    name: "[Client Name]",
    role: "Business Owner",
    avatar: "/images/testimonals/navino.png",
    rating: 5,
    text: "[Specific outcome]",
    placeholder: true,
  },
];

export default function ResultsSection() {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="bg-[#03151a] text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#88d7f0]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <Layout>
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-bw-gradual text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight max-w-4xl mx-auto mb-6"
          >
            What Have Our Clients Seen?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.1] rounded-full px-4 py-2">
              <FaGoogle className="w-4 h-4 text-white/90" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-wider">5.0 out of 5</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                ))}
              </div>
            </div>
            <span className="text-white/40 text-[11px] font-medium uppercase tracking-widest">
              200+ Google reviews
            </span>
          </motion.div>
        </div>

        {/* Before / After row — hidden until final screenshots are ready
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {beforeAfterCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#072d36] rounded-2xl p-5 border border-white/[0.05] hover:border-[#88d7f0]/20 transition-colors"
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#88d7f0] mb-4">
                Before / After – {card.label}
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#03151a] rounded-xl p-4 border border-white/[0.05]">
                  <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">{card.before}</p>
                  <p className="text-lg font-bold text-white/60">{card.beforeValue}</p>
                  <div className="mt-3 h-16 rounded-lg bg-white/[0.03] border border-dashed border-white/10 flex items-center justify-center">
                    <span className="text-[9px] text-white/30 uppercase tracking-wider">Screenshot</span>
                  </div>
                </div>
                <div className="bg-[#03151a] rounded-xl p-4 border border-[#88d7f0]/20">
                  <p className="text-[10px] uppercase tracking-wider text-[#88d7f0] mb-1">{card.after}</p>
                  <p className="text-lg font-bold text-[#88D7F0]">{card.afterValue}</p>
                  <div className="mt-3 h-16 rounded-lg bg-[#88d7f0]/5 border border-dashed border-[#88d7f0]/20 flex items-center justify-center">
                    <span className="text-[9px] text-[#88d7f0]/50 uppercase tracking-wider">Screenshot</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        */}

        {/* Video testimonial placeholder — hidden until final video is ready
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-3xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#072d36] border border-white/[0.08] flex items-center justify-center group cursor-default">
            <div className="absolute inset-0 bg-gradient-to-br from-[#073742]/50 to-[#03151a]/80" />
            <div className="relative z-10 text-center px-6">
              <div className="w-14 h-14 rounded-full bg-[#88D7F0]/20 border border-[#88D7F0]/40 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <FaPlay className="w-5 h-5 text-[#88D7F0] ml-1" />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-white/60">Video Testimonial</p>
              <p className="text-[11px] text-white/40 mt-1">60–90 sec · real client, specific outcome</p>
            </div>
          </div>
        </motion.div>
        */}
      </Layout>

      {/* Review cards scroll */}
      <div className="relative mt-4">
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#03151a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#03151a] to-transparent z-10 pointer-events-none" />

        <div className="overflow-x-auto md:overflow-x-visible scrollbar-hide snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 45, ease: "linear" },
            }}
            className="flex gap-6 w-fit px-6 md:px-0 pointer-events-auto"
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={index}
                className={`w-[280px] md:w-[380px] flex-shrink-0 snap-center bg-[#072d36] rounded-2xl p-5 md:p-6 flex flex-col hover:bg-[#093540] transition-colors duration-300 group relative overflow-hidden ${
                  review.placeholder ? "opacity-80" : ""
                }`}
              >
                <div className="absolute left-0 top-[85%] w-[2px] h-[60px] bg-gradient-to-b from-transparent via-[#88d7f0] to-transparent opacity-0 group-hover:opacity-100 group-hover:top-[10%] transition-all duration-1000 ease-in-out z-10" />

                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="w-3.5 h-3.5 text-yellow-400" />
                  ))}
                </div>

                <blockquote
                  className={`text-[13px] md:text-[14px] leading-relaxed mb-5 font-medium italic flex-1 ${
                    review.placeholder ? "text-white/40" : "text-gray-300"
                  }`}
                >
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0 bg-white">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-contain"
                      sizes="48px"
                      unoptimized
                    />
                  </div>
                  <div>
                    <p
                      className={`font-bold text-[15px] leading-tight mb-1 uppercase tracking-tight ${
                        review.placeholder ? "text-white/50" : "text-white"
                      }`}
                    >
                      {review.name}
                    </p>
                    <p className="text-[#88d7f0] text-[11px] font-bold uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
