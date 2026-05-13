"use client";

import Layout from "@/components/common/Layout";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AdsEcommerceContactBlock() {
  return (
    <section className="bg-white py-12">
      <Layout>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-[#072d36] rounded-[2rem] p-8 md:p-12 border border-white/[0.05] shadow-2xl"
        >
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#88d7f0]/[0.03] rounded-full blur-[100px] -mr-32 -mt-32"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
            {/* Left Side: Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                Not sure which plan <br className="hidden md:block" />
                <span className="text-[#88d7f0]">fits your store?</span>
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8 max-w-lg">
                Our team will review your account and give you a clear picture of what needs to happen first.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6">
                <a href="mailto:info@aneeverse.com" className="flex items-center gap-3 text-white/70 hover:text-[#88d7f0] transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#88d7f0]/50">
                    <FaEnvelope className="w-3 h-3" />
                  </div>
                  <span className="text-xs md:text-sm font-medium">info@aneeverse.com</span>
                </a>
                <a href="tel:+919152755529" className="flex items-center gap-3 text-white/70 hover:text-[#88d7f0] transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#88d7f0]/50">
                    <FaPhoneAlt className="w-3 h-3" />
                  </div>
                  <span className="text-xs md:text-sm font-medium">+91 91527 55529</span>
                </a>
              </div>
            </div>

            {/* Right Side: Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto min-w-[280px]">
              <Link
                href="https://wa.me/919152755529"
                target="_blank"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-[15px] hover:scale-[1.02] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <FaWhatsapp className="w-5 h-5" />
                Chat on WhatsApp
              </Link>
              
              <Link
                href="tel:+919152755529"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-[#072d36] font-bold text-[15px] hover:scale-[1.02] transition-all shadow-lg shadow-white/5"
              >
                <FaPhoneAlt className="w-4 h-4" />
                Call Expert
              </Link>

              <p className="text-center text-[10px] text-white/20 uppercase tracking-widest font-bold">
                Usually responds in under 15 minutes
              </p>
            </div>
          </div>
        </motion.div>
      </Layout>
    </section>
  );
}
