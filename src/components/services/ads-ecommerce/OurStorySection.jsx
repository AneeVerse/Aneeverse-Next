"use client";

import Layout from "@/components/common/Layout";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

export default function OurStorySection() {
  return (
    <section className="bg-primary-500 py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-500/[0.03] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-500/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <Layout>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Side — Narrative */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[13px] uppercase font-bold tracking-[3px] text-secondary-500/40 mb-5">
                Our Story
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold text-secondary-500 leading-[1.1] mb-10">
                Why We Started{" "}
                <span className="italic text-secondary-500/60">Aneeverse</span>
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-px h-12 bg-secondary-500/20 mt-2"></div>
                  <p className="text-secondary-500/70 text-lg leading-relaxed">
                    Marketplace selling gets difficult to manage at scale. Listings stop
                    ranking. Ads spend without clear returns. An account health warning
                    shows up with no warning, and fixing it takes days you do not have.
                  </p>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-px h-12 bg-secondary-500/20 mt-2"></div>
                  <p className="text-secondary-500/70 text-lg leading-relaxed">
                    Most sellers either hire in-house (expensive, slow to ramp up) or
                    work with an agency that sends reports but does not do much else.
                  </p>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-px h-12 bg-secondary-500/20 mt-2"></div>
                  <p className="text-secondary-500/70 text-lg leading-relaxed">
                    We built Aneeverse to sit in the middle. A proper team behind your
                    store – running weekly sprints, fixing what breaks, and reporting on
                    what moved. No long-term retainer traps. No hand-holding required
                    from your end.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-secondary-500/[0.03] border border-secondary-500/[0.05]">
                  <p className="text-secondary-500 font-semibold text-lg italic leading-relaxed">
                    "If you are unsure what is holding your store back, we will show you.
                    That is what the free audit is for."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side — Contact Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary-500 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-secondary-500/20 relative overflow-hidden group"
            >
              {/* Card Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500">
                    <FaClock className="w-4 h-4" />
                  </div>
                  <span className="text-primary-500 text-sm font-medium tracking-wide">Available Now</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Need a Direct Answer?
                </h3>
                <p className="text-white/50 text-base leading-relaxed mb-10">
                  Our team will review your account and give you a clear picture of what needs to happen first. No sales pitch, just data.
                </p>

                <div className="space-y-4 mb-10">
                  <a href="mailto:info@aneeverse.com" className="flex items-center gap-4 text-white/70 hover:text-primary-500 transition-colors group/item">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover/item:bg-primary-500/10 transition-colors">
                      <FaEnvelope className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">info@aneeverse.com</span>
                  </a>
                  <a href="tel:+919152755529" className="flex items-center gap-4 text-white/70 hover:text-primary-500 transition-colors group/item">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover/item:bg-primary-500/10 transition-colors">
                      <FaPhoneAlt className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">+91 91527 55529</span>
                  </a>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <a
                    href="https://wa.me/919152755529"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] text-white text-[15px] font-bold hover:bg-[#20BD5A] hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-[#25D366]/20"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                  <a
                    href="tel:+919152755529"
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-white/10 text-white hover:bg-white/5 transition-all duration-300 text-[15px] font-medium"
                  >
                    <FaPhoneAlt className="w-3.5 h-3.5" />
                    Call Expert
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </Layout>
    </section>
  );
}
