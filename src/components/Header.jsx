import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import ScrollProgress from "./ScrollProgress";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <ScrollProgress />
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
          ? 'bg-[#000101]/80 backdrop-blur-xl border-white/10 py-3'
          : 'bg-transparent border-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Clean dev.co-style Logo */}
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-lg bg-[#4353FF] flex items-center justify-center font-bold text-white text-sm">
                M
              </div>
              <div className="text-lg font-bold text-white tracking-tight">
                MIT <span className="text-[#4353FF]">BHARODIYA</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              {[
                { label: 'About', id: 'about' },
                { label: 'Experience', id: 'experience' },
                { label: 'Projects', id: 'projects' },
                { label: 'Skills', id: 'skills' },
                { label: 'Education', id: 'education' },
              ].map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors"
                >
                  {label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-[#4353FF] hover:bg-[#4353FF]/90 text-white rounded-full px-6 h-10 text-sm font-semibold transition-all"
              >
                Let's Talk
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 h-10 w-10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 right-0 bg-[#080809] border-b border-white/10 px-6 py-8 md:hidden"
              >
                <div className="flex flex-col space-y-6 text-center">
                  {[
                    { label: 'About', id: 'about' },
                    { label: 'Experience', id: 'experience' },
                    { label: 'Projects', id: 'projects' },
                    { label: 'Skills', id: 'skills' },
                    { label: 'Education', id: 'education' },
                    { label: 'Contact', id: 'contact' },
                  ].map(({ label, id }) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className="text-lg font-medium text-[#94A3B8] hover:text-white transition-colors"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};


export default Header;
