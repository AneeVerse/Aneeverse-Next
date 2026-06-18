"use client";

import { motion } from "framer-motion";
import Layout from "@/components/common/Layout";
import AnimatedButton from "@/components/common/AnimatedButton";

export default function FinalCTASection() {
  return (
    <section className="bg-[#073742] py-16 md:py-12 lg:py-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#03151a]/30 to-transparent pointer-events-none" />

      <Layout>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto px-4 relative z-10"
        >
          <h2 className="font-bw-gradual text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight text-white mb-5">
            Ready to Stop Guessing and{" "}
            <span className="inline-block bg-[#FF6B00] text-[#03151a] px-4 py-1 rounded-xl text-[0.7em] mt-2 font-black tracking-tight">
              Start Growing?
            </span>
          </h2>

          <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
            One call. One plan. We handle the rest.
          </p>

          <AnimatedButton
            href="#consultation-form"
            className="px-8 py-4 rounded-full font-bold text-sm md:text-base flex items-center justify-center text-center mx-auto mb-4"
            style={{ backgroundColor: "#88D7F0", color: "#073742" }}
            mainTextSlide="-130%"
            duplicateTextStart="100%"
            duplicateTextEnd="-100%"
          >
            Book My Free Call Now
          </AnimatedButton>

          <p className="text-white/50 text-sm md:text-[15px]">
            30 minutes. Free. No pitch. Just a clear next step.
          </p>
        </motion.div>
      </Layout>
    </section>
  );
}
