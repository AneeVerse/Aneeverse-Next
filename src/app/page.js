import LogoAndG2Section from "@/components/home/LogoAndG2Section";
import HeroSection from "../components/home/HeroSection";
import Image from "next/image";
import FeelsFamiliar from "@/components/home/FeelsFamiliar";
import CreativeTeamSection from "@/components/home/CreativeTeamSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import OurWorkSection from "@/components/home/OurWorkSection";
import CaseStudies from "@/components/home/CaseStudies";
import ComparisonPage from "@/components/home/ComparisonPage";
import HowItWorks from "@/components/home/HowItWorks";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoAndG2Section />
      <FeelsFamiliar />
      <CreativeTeamSection />
      <TestimonialsSection />
      <OurWorkSection />
      <CaseStudies/>
      <ComparisonPage/>
      <HowItWorks/>
      <ContactSection/>
      <Footer />

    </div>
  );
}
