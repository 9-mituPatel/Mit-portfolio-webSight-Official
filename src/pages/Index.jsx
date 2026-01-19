import Header from "@/components/Header";
import DevHero from "@/components/DevHero";

import DesignSection from "@/components/DesignSection";
import ServicesFrameworks from "@/components/ServicesFrameworks";
import DevelopSection from "@/components/DevelopSection";
import TechSkillsGrid from "@/components/TechSkillsGrid";
import Partnership from "@/components/Partnership";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import TransformVision from "@/components/TransformVision";
import Newsletter from "@/components/Newsletter";
import MegaFooter from "@/components/MegaFooter";
import KeyboardNavigation from "@/components/KeyboardNavigation";
import SimpleScrollButton from "@/components/SimpleScrollButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#000101]">
      <Header />
      {/* New dev.co style sections */}
      <DevHero />

      <DesignSection />
      <ServicesFrameworks />
      <DevelopSection />
      {/* New premium sections */}
      <TechSkillsGrid />
      <Partnership />
      {/*  */}
      <TransformVision />
      <Newsletter />
      <MegaFooter />
      <KeyboardNavigation />
      <SimpleScrollButton />
    </div>
  );
};

export default Index;
