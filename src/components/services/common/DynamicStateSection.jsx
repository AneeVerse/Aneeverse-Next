"use client";
import { useRef, useEffect, useState } from "react";
import { UiSubheading } from "@/components/common/typography/UiSubheading";
import Layout from "../../common/Layout";
import { Heading } from "@/components/common/typography/Heading";

// Animated counter hook
function useCountUp(target, isVisible, duration = 2000) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    // Extract numeric part
    const numericMatch = target.match(/[\d.]+/);
    if (!numericMatch) {
      setCount(target);
      return;
    }

    const end = parseFloat(numericMatch[0]);
    const prefix = target.slice(0, target.indexOf(numericMatch[0]));
    const suffix = target.slice(target.indexOf(numericMatch[0]) + numericMatch[0].length);
    const isDecimal = numericMatch[0].includes(".");
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = eased * end;

      if (isDecimal) {
        setCount(`${prefix}${currentVal.toFixed(1)}${suffix}`);
      } else {
        setCount(`${prefix}${Math.floor(currentVal)}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return count;
}

// Individual stat card with count-up
function StatCard({ stat, index, isVisible }) {
  const displayValue = useCountUp(stat.value, isVisible, 1800);

  return (
    <div
      className={`group relative rounded-2xl p-6 sm:p-8 transition-all duration-500 border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/[0.12] hover:scale-[1.02] ${isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8"
        }`}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >
      {/* Category indicator (Minimalist) */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-500/80">
          {stat.description.split(" ").slice(0, 2).join(" ")}
        </span>
      </div>

      {/* Value */}
      <div className="mb-3">
        <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none">
          {displayValue || stat.value}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
        {stat.description}
      </p>
    </div>
  );
}

const DynamicStateSection = ({
  title = "",
  subtitle = "",
  stats = [
    {
      value: "",
      description: "",
    },
  ],
  theme = {
    bgColor: "bg-secondary-500",
    textColor: "text-primary-500",
    textParagraphColor: "text-gray-400",
    borderColor: "border-gray-500",
    valueColor: "text-white",
  },
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${theme.bgColor} ${theme.textColor} py-16 md:py-24 relative overflow-hidden`}
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.04] rounded-full blur-3xl pointer-events-none"></div>

      <Layout>
        {/* Heading */}
        <div className="text-center mb-14">
          <UiSubheading className="text-primary-500 text-center mb-2">
            {subtitle}
          </UiSubheading>
          <Heading
            level="h2"
            color="light"
            spacing="lg"
            className="font-semibold"
          >
            {title}
          </Heading>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default DynamicStateSection;
