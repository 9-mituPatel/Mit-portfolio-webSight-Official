import Header from "@/components/Header";
import Contact from "@/components/Contact";
import MegaFooter from "@/components/MegaFooter";
import FAQ from "@/components/FAQ";
import GetInTouch from "@/components/GetInTouch";
import Newsletter from "@/components/Newsletter";
import OfficeLocation from "@/components/OfficeLocation";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#000101]">
      <Header />
      <div className="pt-24">
        <GetInTouch />
        <Contact />
        <OfficeLocation />
        <FAQ />
      </div>
      <Newsletter />
      <MegaFooter />
    </div>
  );
};

export default ContactPage;
