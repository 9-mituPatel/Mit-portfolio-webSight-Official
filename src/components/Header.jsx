import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import ScrollProgress from "./ScrollProgress";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { scrollY } = useScroll();

  // Transform for header blur based on scroll
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(0, 1, 1, 0)", "rgba(0, 1, 1, 0.8)"]);

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
        { label: 'Backend Core', id: 'skills', description: 'Node.js, Express, APIs' },
        { label: 'Frontend', id: 'skills', description: 'React, Next.js, UI/UX' },
        { label: 'DevOps', id: 'skills', description: 'Docker, AWS, CI/CD' }
      ]
    },
    {
      label: 'Services',
      id: 'services',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Web Development', id: 'design', description: 'Full-stack solutions' },
        { label: 'API Development', id: 'develop', description: 'RESTful & GraphQL' },
        { label: 'Consulting', id: 'contact', description: 'Technical guidance' }
      ]
    },
    {
      label: 'Industries',
      id: 'projects',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Fintech', id: 'projects', description: 'Payment systems' },
        { label: 'EdTech', id: 'projects', description: 'Learning platforms' },
        { label: 'E-commerce', id: 'projects', description: 'Online stores' }
      ]
    },
    { label: 'Projects', id: 'projects', hasDropdown: false },
    { label: 'About', id: 'about', hasDropdown: false },
    { label: 'Contact', id: 'contact', hasDropdown: false },
  ];

  return (
    <>
      <ScrollProgress />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'py-3'
            : 'py-5'
          }`}
        style={{
          backgroundColor: isScrolled ? 'rgba(0, 1, 1, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="w-11 h-11 bg-gradient-to-br from-[#4353FF] to-[#6366f1] rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(67,83,255,0.4)] group-hover:shadow-[0_0_35px_rgba(67,83,255,0.6)] transition-shadow duration-300"
                whileHover={{ rotate: 5 }}
              >
                <span className="text-white font-black text-lg">&lt;/&gt;</span>
              </motion.div>
              <motion.span
                className="ml-3 text-white font-bold text-lg hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Dev
              </motion.span>
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
                  <motion.button
                    onClick={() => !hasDropdown && scrollToSection(id)}
                    className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${activeDropdown === label
                        ? 'text-white bg-white/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {label}
                    {hasDropdown && (
                      <motion.span
                        animate={{ rotate: activeDropdown === label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    )}
                  </motion.button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hasDropdown && activeDropdown === label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute top-full left-0 mt-2 w-64 bg-[#0a0a15]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-2">
                          {dropdownItems?.map((item, idx) => (
                            <motion.button
                              key={idx}
                              onClick={() => scrollToSection(item.id)}
                              className="w-full text-left px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 group/item"
                              whileHover={{ x: 4 }}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-sm font-semibold mb-0.5">{item.label}</div>
                                  <div className="text-xs text-white/40">{item.description}</div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Side Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="https://github.com/9-mituPatel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-300 hover:bg-white/5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                GitHub
              </motion.a>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-black hover:bg-[#4353FF] hover:text-white rounded-xl px-6 py-5 h-auto text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(67,83,255,0.4)]"
                >
                  Get in Touch
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                className="text-white p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0a15]/98 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
              >
                <div className="container mx-auto px-6 py-6">
                  <motion.div
                    className="flex flex-col space-y-1"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.05 }
                      }
                    }}
                  >
                    {navItems.map(({ label, id }) => (
                      <motion.button
                        key={id + label}
                        onClick={() => scrollToSection(id)}
                        className="text-left py-3 px-4 text-base font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {label}
                      </motion.button>
                    ))}

                    <motion.div
                      className="pt-4 mt-4 border-t border-white/10 space-y-3"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                      }}
                    >
                      <a
                        href="https://github.com/9-mituPatel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-3 px-4 text-base font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                      >
                        GitHub
                      </a>
                      <Button
                        onClick={() => scrollToSection('contact')}
                        className="w-full bg-gradient-to-r from-[#4353FF] to-[#5a6aff] hover:from-[#3142e8] hover:to-[#4353FF] text-white rounded-xl py-6 font-semibold transition-all duration-300"
                      >
                        Get in Touch
                      </Button>
                    </motion.div>
                  </motion.div>
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
