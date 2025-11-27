"use client";

import { Zap, List, Star } from "lucide-react";
import Layout from "../common/Layout";
import { AccentText } from "../common/typography/AccentText";

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "SCALABLE",
      heading: "Boost your in-house creative",
      description: "We handle the heavy lifting so you can focus on strategic, high impact work without adding overhead to the team."
    },
    {
      icon: List,
      title: "FLEXIBLE",
      heading: "Say yes to more projects",
      description: "Whether you need more bandwidth or different skills, Superside has whatever resources you need to get the job done."
    },
    {
      icon: Star,
      title: "RESPONSIVE",
      heading: "Don't sacrifice quality for speed",
      description: "Our global team of creatives delivers agency-level work in a fraction of the time."
    }
  ];

  return (
    <section className="bg-[#072d36] py-20 md:py-24">
      <Layout>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-xs md:text-sm mb-4 tracking-widest uppercase">
            OUR DIFFERENCE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Aneeverse is the{" "}
            <AccentText
              size="lg"
              className={"text-blue-500 whitespace-nowrap mt-1 "}
            >
              perfect fit{" "}
            </AccentText>
            for fast moving brands
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="text-left">
              {/* Icon */}
              <div className="bg-[#0a1f2a] inline-block p-4 rounded-xl mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xs md:text-sm font-bold text-gray-300 uppercase tracking-widest mb-3">
                {feature.title}
              </h3>

              {/* Heading */}
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-3">
                {feature.heading}
              </h4>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Layout>
    </section>
  );
}
