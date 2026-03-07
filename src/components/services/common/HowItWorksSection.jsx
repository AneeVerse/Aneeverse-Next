"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Layout from "../../common/Layout";
import { UiSubheading } from "@/components/common/typography/UiSubheading";
import { Heading } from "@/components/common/typography/Heading";

// Lazy load GSAP only when needed
const loadGSAP = async () => {
  const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger")
  ]);
  gsap.registerPlugin(ScrollTrigger);
  return { gsap, ScrollTrigger };
};

const HowItWorksSection = ({
  subtitle = "HOW WE WORK",
  title = "A faster, easier way to get high-performing ad creative",
  titleHighlight = "high-performing ad creative",
  description = "Our process removes bottlenecks and adds scale, with high-quality creative teams, clear communication, and delivery built for speed.",
  steps = [],
}) => {
  const sectionRef = useRef(null);
  const progressLineRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const gsapInitialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || steps.length === 0) return;

    let scrollTriggerInstance = null;
    let timelineInstance = null;
    let observer = null;
    let refreshTimeout = null;

    const initGSAP = async () => {
      if (gsapInitialized.current) return;
      gsapInitialized.current = true;

      try {
        const { gsap, ScrollTrigger } = await loadGSAP();

        const section = sectionRef.current;
        const progressLine = progressLineRef.current;
        if (!section || !progressLine) {
          gsapInitialized.current = false;
          return;
        }

        // Use a small delay to ensure DOM is fully laid out
        await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

        // Animate progress line based on scroll
        timelineInstance = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              const stepIndex = Math.min(
                Math.floor(progress * steps.length),
                steps.length - 1
              );
              setActiveStep(stepIndex);
            },
          },
        });

        timelineInstance.fromTo(
          progressLine,
          { height: "0%" },
          { height: "100%", ease: "none" }
        );

        scrollTriggerInstance = timelineInstance.scrollTrigger;

        // Refresh after a short delay to ensure all layout calculations are correct
        refreshTimeout = setTimeout(() => {
          ScrollTrigger.refresh();
        }, 200);
      } catch (error) {
        console.error("Error loading GSAP:", error);
        gsapInitialized.current = false;
      }
    };

    // Lazy load GSAP when section is about to enter viewport
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !gsapInitialized.current) {
          initGSAP();
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (refreshTimeout) clearTimeout(refreshTimeout);
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
      if (timelineInstance) timelineInstance.kill();
      gsapInitialized.current = false;
    };
  }, [steps.length]);

  return (
    <section ref={sectionRef} className="bg-primary-500 text-secondary-500 py-24">
      <Layout>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Title and Description */}
          <div className="lg:sticky lg:top-24">
            <UiSubheading className="text-secondary-500 mb-6 text-sm tracking-[0.2em] uppercase font-medium">
              {subtitle}
            </UiSubheading>
            <h2 className="font-normal text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 text-secondary-500 leading-[1.1] break-words">
              {title.includes(titleHighlight) && titleHighlight ? (
                <>
                  {title.split(titleHighlight)[0]}
                  <span className="italic">{titleHighlight}</span>
                  {title.split(titleHighlight)[1]}
                </>
              ) : (
                title
              )}
            </h2>
            {description && (
              <p className="text-lg text-secondary-500/80 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Right Side - Steps with Scroll-based Timeline */}
          <div className="relative">
            <div className="relative flex flex-col gap-12">
              {/* Background vertical line */}
              <div className="absolute left-7 top-0 bottom-0 w-px bg-secondary-500/20 z-0"></div>

              {/* Animated progress line */}
              <div
                ref={progressLineRef}
                className="absolute left-7 top-0 w-px bg-secondary-500 z-10"
                style={{ height: "0%" }}
              ></div>

              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-6 transition-all duration-500"
                >
                  {/* Spacer to maintain flex layout */}
                  <div className="w-14 flex-shrink-0"></div>

                  {/* Number Circle - Positioned absolutely to cover the line */}
                  <div className="absolute left-7 z-30" style={{ transform: 'translateX(-50%)' }}>
                    <div
                      className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${index <= activeStep
                        ? "bg-secondary-500 border-secondary-500"
                        : "bg-primary-500 border-secondary-500/40"
                        }`}
                    >
                      <span
                        className={`text-xl font-medium transition-all duration-500 ${index <= activeStep
                          ? "text-primary-500"
                          : "text-secondary-500/60"
                          }`}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pt-2 transition-all duration-500 ${index <= activeStep ? "opacity-100" : "opacity-50"}`}>
                    <h3 className="text-2xl font-medium text-secondary-500 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-secondary-500/70 text-base leading-relaxed">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default HowItWorksSection;
