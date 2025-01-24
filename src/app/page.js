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
import SlidingLogos from "@/components/home/SlidingLogos";
import SupportSection from "@/components/home/SupportSection";
import CreativeSection from "@/components/home/CreativeSection";
import TableComponent from "@/components/home/TableComponent";
import DynamicOurWorks from "@/components/home/DynamicOurWorks";
import FeaturesSection from "@/components/home/FeaturesSection";
import NewFooter from "@/components/layout/NewFooter";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SlidingLogos />
      <SupportSection />
      <TestimonialsSection />
      <CreativeSection />
      <TableComponent />
      <DynamicOurWorks />
      <FeaturesSection />
      <NewFooter />
      <CreativeTeamSection />
      <LogoAndG2Section />
      <FeelsFamiliar />
      <OurWorkSection />
      <CaseStudies/>
      <ComparisonPage/>
      <HowItWorks/>
      <ContactSection/>
      <Footer />

    </div>
  );
}
