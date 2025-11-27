import HeroSection from "../components/home/HeroSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SlidingLogos from "@/components/home/SlidingLogos";
import HumanCreativity from "@/components/home/HumanCreativity";
import SupportSection from "@/components/home/SupportSection";
import CreativeSection from "@/components/home/CreativeSection";
import TableComponent from "@/components/home/TableComponent";
import DynamicOurWorks from "@/components/home/DynamicOurWorks";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialSlider from "@/components/about/TestimonialSlider";
import BottomAboutSection from "@/components/home/BottomAboutSection";

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
      <HeroSection />
      <SlidingLogos />
      <HumanCreativity />
      <CreativeSection />
      <TableComponent />
      <DynamicOurWorks />
      <TestimonialSlider />
      <FeaturesSection />
      <BottomAboutSection />
    </div>
  );
}
