import Image from "next/image";
import AnimatedButton from "../common/AnimatedButton";
import { useEffect, useState } from "react";

const Newsletter = ({ wide = false }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isDesktop) {
    // Mobile: Card with image on top, text/button below, solid dark bg for text
    return (
      <div className={`mt-8 mb-6 rounded-xl overflow-hidden shadow-md bg-[#f7faef] ${wide ? 'w-full' : 'max-w-md mx-auto'}`}>
        <div className="relative w-full h-48">
          <Image
            src="/images/custom-bg.avif"
            alt="Custom video production astronaut"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="bg-[#073742] p-6 flex flex-col items-start">
          <h2 className="text-xl font-bold text-white mb-4 text-left">
            Custom video production at scale
          </h2>
          <p className="text-white text-sm mb-6 text-left">
            Aneeverse covers all video needs whether you're telling your brand story, launching a product or running ads. Discover how we can help you scale.
          </p>
          <AnimatedButton
            href="/contact"
            className="bg-[#C0FF7C] text-black font-bold w-full px-4 py-2 rounded-full hover:bg-[#C0FF7C] transition text-center text-base shadow-lg"
            mainTextSlide="-130%"
            duplicateTextStart="40%"
            duplicateTextEnd="-100%"
          >
            Book a call
          </AnimatedButton>
        </div>
      </div>
    );
  }

  // Desktop: Split horizontal, text over image
  return (
    <div className={`relative mt-10 mb-6 rounded-xl overflow-hidden shadow-md bg-[#f7faef] ${wide ? 'w-full' : 'max-w-6xl mx-auto'}`} style={{height: '360px'}}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/custom-desktop-bg.avif"
          alt="Custom video production astronaut"
          fill
          className="object-cover object-right"
          priority
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-5 md:px-10">
        <div className="max-w-lg">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg text-left">
            Custom video production at scale
          </h2>
          <p className="text-white text-base md:text-lg mb-6 drop-shadow-lg text-left">
            Aneeverse covers all video needs whether you're telling your brand story, launching a product or running ads. Discover how we can help you scale.
          </p>
          <AnimatedButton
            href="/contact"
            className="bg-[#C0FF7C] text-black font-bold px-6 py-2 rounded-full hover:bg-[#C0FF7C] transition text-center text-base shadow-lg text-left"
            mainTextSlide="-130%"
            duplicateTextStart="40%"
            duplicateTextEnd="-100%"
          >
            Book a call
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
  