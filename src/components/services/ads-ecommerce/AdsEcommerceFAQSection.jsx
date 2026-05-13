"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";
import Layout from "@/components/common/Layout";

const faqs = [
  {
    question: "Do I have to give you access to my Seller Central account?",
    answer: "Yes and here's why that's safe. We use sub-user access with limited permissions. We can manage your listings, ads, and account health without ever touching your bank details or being able to remove your account. Every access is logged. You stay in full control.",
  },
  {
    question: "How long before I see actual results?",
    answer: "Most clients see ranking and traffic movement within the first 60 days. Significant revenue impact typically shows in 60-90 days. We'll be honest with you in the audit about your store's starting point and what's realistic; we don't promise overnight miracles. We promise consistent weekly execution.",
  },
  {
    question: "We have hired agencies before and been disappointed. What's different about Aneeverse?",
    answer: "Most agencies assign you an account manager who manages the relationship, not the store. At Aneeverse, you get a dedicated PM plus a specialist team who are inside your account every week executing. You get a Monday scorecard showing exactly what moved, what was fixed, and what's next. No hiding behind reports. No excuses. Just work.",
  },
  {
    question: "What if I'm just starting out and don't have a store yet?",
    answer: "We handle full store setup: account creation, listing builds, brand store, initial PPC structure. Whether you're launching from scratch or scaling an existing store, we have a plan for where you are right now. Book a free audit and we'll tell you exactly what you need.",
  },
];

export default function AdsEcommerceFAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-[#03151a] py-20 md:py-32 overflow-hidden">
      <Layout>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Header */}
          <div className="lg:w-1/3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#88d7f0] mb-4"
            >
              FAQ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-bw-gradual text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 uppercase"
            >
              4 Questions. <br />
              Honest Answers. <br />
              <span className="font-Rock_Salt text-[#FF6B00] normal-case text-[0.6em] block -rotate-1 mt-2">
                No Fluff.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block"
            >
              <a 
                href="https://wa.me/919152755529"
                target="_blank"
                className="inline-flex items-center gap-3 text-white/50 hover:text-[#88d7f0] transition-colors font-medium text-sm"
              >
                Still have questions? <span className="text-[#88d7f0] border-b border-[#88d7f0]/30 pb-0.5">Chat on WhatsApp →</span>
              </a>
            </motion.div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl border transition-all duration-300 ${
                  activeIndex === index 
                    ? "bg-[#072d36] border-[#88d7f0]/30" 
                    : "bg-white/[0.02] border-white/[0.05] hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <span className="text-base md:text-lg font-bold text-white pr-8">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeIndex === index ? "bg-[#88d7f0] text-[#03151a]" : "bg-white/5 text-white/40"
                  }`}>
                    {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                        <div className="h-px w-full bg-white/5 mb-6" />
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* Mobile CTA */}
            <div className="lg:hidden pt-8 text-center">
              <a 
                href="https://wa.me/919152755529"
                target="_blank"
                className="inline-flex items-center gap-3 text-white/50 hover:text-[#88d7f0] transition-colors font-medium text-sm"
              >
                Still have questions? <span className="text-[#88d7f0] border-b border-[#88d7f0]/30 pb-0.5">Chat on WhatsApp →</span>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}
