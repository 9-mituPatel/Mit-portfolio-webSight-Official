import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollProgress from "./ScrollProgress";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
      setActiveDropdown(null);
    }
  };

  const navItems = [
    {
      label: 'Skills',
      id: 'skills',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Backend Core', id: 'skills' },
        { label: 'Frontend', id: 'skills' },
        { label: 'DevOps', id: 'skills' }
      ]
    },
    {
      label: 'Services',
      id: 'services',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Design', id: 'design' },
        { label: 'Development', id: 'develop' },
        { label: 'Consulting', id: 'contact' }
      ]
    },
    {
      label: 'Industries',
      id: 'projects',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Fintech', id: 'projects' },
        { label: 'Healthcare', id: 'projects' },
        { label: 'E-commerce', id: 'projects' }
      ]
    },
    {
      label: 'Technology',
      id: 'tech-stack',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Node.js', id: 'tech-stack' },
        { label: 'React', id: 'tech-stack' },
        { label: 'Cloud Services', id: 'tech-stack' }
      ]
    },
    { label: 'Our Work', id: 'projects', hasDropdown: false },
    { label: 'About', id: 'about', hasDropdown: false },
    { label: 'Contact', id: 'contact', hasDropdown: false },
  ];

  return (
    <>
      <ScrollProgress />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-[#000101]/80 backdrop-blur-2xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo - dev.co style */}
            <motion.div
              className="flex items-center cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 bg-[#4353FF] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(67,83,255,0.4)] group-hover:shadow-[0_0_30px_rgba(67,83,255,0.6)] transition-shadow">
                <span className="text-white font-black text-lg">&lt;/&gt;</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map(({ label, id, hasDropdown, dropdownItems }) => (
                <div
                  key={id + label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => !hasDropdown && scrollToSection(id)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                  >
                    {label}
                    {hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === label ? 'rotate-180' : ''}`} />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hasDropdown && activeDropdown === label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-[#0a0a12] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                      >
                        {dropdownItems?.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => scrollToSection(item.id)}
                            className="w-full text-left px-4 py-3 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {item.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Side Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/5 rounded-lg px-4 h-10 text-sm font-medium"
                onClick={() => scrollToSection('about')}
              >
                Login
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-transparent border border-white/20 hover:bg-white hover:text-black text-white rounded-lg px-5 h-10 text-sm font-medium transition-all duration-300"
              >
                Book a Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 h-10 w-10 rounded-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0a12] border-b border-white/10 overflow-hidden"
              >
                <div className="container mx-auto px-6 py-6">
                  <div className="flex flex-col space-y-1">
                    {navItems.map(({ label, id }) => (
                      <button
                        key={id + label}
                        onClick={() => scrollToSection(id)}
                        className="text-left py-3 px-4 text-base font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {label}
                      </button>
                    ))}
                    <div className="pt-4 mt-4 border-t border-white/10 flex flex-col gap-3">
                      <Button
                        variant="ghost"
                        className="justify-start text-white/70 hover:text-white"
                        onClick={() => scrollToSection('about')}
                      >
                        Login
                      </Button>
                      <Button
                        onClick={() => scrollToSection('contact')}
                        className="bg-[#4353FF] hover:bg-[#4353FF]/80 text-white"
                      >
                        Book a Demo
                      </Button>
                    </div>
                  </div>
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
