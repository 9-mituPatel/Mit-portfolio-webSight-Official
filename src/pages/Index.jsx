import Header from "@/components/Header";
import DevHero from "@/components/DevHero";
import TechStack from "@/components/TechStack";
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
import MegaFooter from "@/components/MegaFooter";
import KeyboardNavigation from "@/components/KeyboardNavigation";
import SimpleScrollButton from "@/components/SimpleScrollButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#000101]">
      <Header />
      {/* New dev.co style sections */}
      <DevHero />
      <TechStack />
      <DesignSection />
      <ServicesFrameworks />
      <DevelopSection />
      {/* New premium sections */}
      <TechSkillsGrid />
      <Partnership />
      {/* Original portfolio sections */}
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      {/* FAQ & Contact */}
      <FAQ />
      <Contact />
      <MegaFooter />
      <KeyboardNavigation />
      <SimpleScrollButton />
    </div>
  );
};

export default Index;