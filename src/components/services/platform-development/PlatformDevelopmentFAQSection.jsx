"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../../common/Layout";

const faqs = [
  { question: "What exactly is platform development?", answer: "Platform development is the process of designing, building, and deploying scalable software solutions - typically cloud-based applications like SaaS products - that solve business problems and support users through a web interface or app." },
  { question: "What services are included in SaaS platform development?", answer: "SaaS platform development typically includes strategy consulting, UI/UX design, custom coding, API and third-party integrations, QA/testing, cloud deployment, and long-term support and maintenance." },
  { question: "How long does it take to build a SaaS platform?", answer: "Development time varies based on complexity and features, but building a minimum viable product (MVP) often takes a few months, while fully featured platforms can take longer depending on scope and integrations needed." },
  { question: "What technologies are commonly used in platform development?", answer: "Platforms often use modern frontend and backend frameworks, cloud infrastructure, databases, API services, and security tools - chosen based on performance needs, scalability, and your product goals." },
  { question: "Do I need my own development team to build a SaaS platform?", answer: "No - you can partner with expert platform developers who provide a full team of strategists, designers, and engineers to handle development, saving you from building an in-house team." },
  { question: "What’s the difference between an MVP and a full-scale platform?", answer: "An MVP (Minimum Viable Product) includes just the core features needed to get early user feedback quickly. A full-scale platform adds more advanced features, integrations, security layers, and scalability for broader audiences." },
  { question: "Can you integrate existing tools into my platform (like CRM, payment systems, or analytics)?", answer: "Yes - modern platforms are often built with API integrations so your system can connect with CRMs, payment processors, analytics services, and other business tools seamlessly." },
  { question: "How do you ensure my platform is secure and scalable?", answer: "Development includes architecture planning, data encryption, compliance standards, and cloud infrastructure design so the platform can securely handle growth, user load, and future enhancements." },
  { question: "What happens after the platform is launched?", answer: "After launch, teams usually offer ongoing support, maintenance, performance monitoring, security updates, and new feature development to keep the platform running smoothly and evolving with user needs." },
  { question: "How much does platform development typically cost?", answer: "Costs vary widely depending on complexity, feature set, technology choices, and integrations required. A provider will assess your goals to offer a custom estimate that fits your budget." },
];

export default function PlatformDevelopmentFAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-secondary-500 text-primary-500 py-16">
      <Layout>
        <div className="text-md font-light tracking-[2px] mb-3">FAQs</div>
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          Frequently <span className="font-Rock_Salt">asked questions</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-b border-gray-700 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left text-lg font-medium"
                >
                  {faq.question}
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-b border-gray-700 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index + Math.ceil(faqs.length / 2))}
                  className="w-full flex justify-between items-center text-left text-lg font-medium"
                >
                  {faq.question}
                  <motion.div
                    animate={{
                      rotate: activeIndex === index + Math.ceil(faqs.length / 2) ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                {activeIndex === index + Math.ceil(faqs.length / 2) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

