import dynamic from "next/dynamic";
import HeroSection from "../components/home/HeroSection";
import LazySection from "@/components/common/LazySection";

// Lazy load all components below the fold using dynamic imports
// Note: ssr: false is not allowed in Server Components in Next.js 15
// Components are already client components, so they'll work without it
const SlidingLogos = dynamic(() => import("@/components/home/SlidingLogos"));

const HumanCreativity = dynamic(() => import("@/components/home/HumanCreativity"));

const CreativeSection = dynamic(() => import("@/components/home/CreativeSection"));

const CommandCenter = dynamic(() => import("@/components/home/CommandCenter"));

const TableComponent = dynamic(() => import("@/components/home/TableComponent"));

const DynamicOurWorks = dynamic(() => import("@/components/home/DynamicOurWorks"));

const TestimonialSlider = dynamic(() => import("@/components/about/TestimonialSlider"));

const WeRecommend = dynamic(() => import("@/components/home/WeRecommend"));

const DiscoveryCall = dynamic(() => import("@/components/home/DiscoveryCall"));

const BottomAboutSection = dynamic(() => import("@/components/home/BottomAboutSection"));

// NEW: Default SEO metadata for the homepage
export const metadata = {
  title: "Aneeverse: Your creative team's growth partner",
  description:
    "Aneeverse is your dedicated, on-call creative & digital marketing team. Design, optimise and advertise your brand—ship campaigns faster, more reliably and at scale.",
  openGraph: {
    title: "Aneeverse: Your creative team's growth partner",
    description:
      "Aneeverse is your dedicated, on-call creative & digital marketing team. Design, optimise and advertise your brand—ship campaigns faster, more reliably and at scale.",
    url: `https://aneeverse.com/`,
    images: [
      {
        url: "/images/meta/phone.avif",
        width: 1200,
        height: 630,
        alt: "Aneeverse: Your creative team's growth partner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aneeverse: Your creative team's growth partner",
    description:
      "Aneeverse is your dedicated, on-call creative & digital marketing team. Design, optimise and advertise your brand—ship campaigns faster, more reliably and at scale.",
    image: "/images/meta/phone.avif",
  },
};

export default function Home() {
  return (
    <div>
      {/* HeroSection loads immediately - above the fold content */}
      <HeroSection />
      
      {/* All other components lazy load when they're about to enter viewport */}
      <LazySection>
        <SlidingLogos />
      </LazySection>
      
      <LazySection>
        <HumanCreativity />
      </LazySection>
      
      <LazySection>
        <CreativeSection />
      </LazySection>
      
      <LazySection>
        <CommandCenter />
      </LazySection>
      
      <LazySection>
        <TableComponent />
      </LazySection>
      
      <LazySection>
        <DynamicOurWorks />
      </LazySection>
      
      <LazySection>
        <TestimonialSlider />
      </LazySection>
      
      <LazySection>
        <WeRecommend />
      </LazySection>
      
      {/* <FeaturesSection /> */}
      
      <LazySection>
        <DiscoveryCall />
      </LazySection>
      
      <LazySection>
        <BottomAboutSection />
      </LazySection>
    </div>
  );
}
