import Header from "@/components/Header";
import About from "@/components/About";
import AboutHero from "@/components/AboutHero";
import MissionVision from "@/components/MissionVision";
import ExpertTeam from "@/components/ExpertTeam";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import TransformVision from "@/components/TransformVision";
import Newsletter from "@/components/Newsletter";
import MegaFooter from "@/components/MegaFooter";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#000101]">
      <Header />
      <div className="pt-24">
        <AboutHero />
        <MissionVision />
        <ExpertTeam />
        <About />
        {/* <Experience /> */}
        {/* <Skills /> */}
        {/* <Education /> */}
      </div>
      <TransformVision />
      <Newsletter />
      <MegaFooter />
    </div>
  );
};

export default AboutPage;
