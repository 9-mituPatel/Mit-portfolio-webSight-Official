import Header from "@/components/Header";
import Projects from "@/components/Projects";
import TransformVision from "@/components/TransformVision";
import Newsletter from "@/components/Newsletter";
import MegaFooter from "@/components/MegaFooter";

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-[#000101]">
      <Header />
      <div className="pt-24">
        <Projects />
      </div>
      <TransformVision />
      <Newsletter />
      <MegaFooter />
    </div>
  );
};

export default WorkPage;
