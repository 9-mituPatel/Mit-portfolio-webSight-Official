import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollProgress from "./ScrollProgress";
import { useNavigate, useLocation } from "react-router-dom";
import { seoRoutes } from "@/config/seoRoutes";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id) => {
    // Define which IDs belong to separate pages and their routes
    const pageRoutes = {
      projects: seoRoutes.projects.path,
      about: seoRoutes.about.path,
      contact: seoRoutes.contact.path,
      skills: seoRoutes.skills.path,
      home: "/",
    };

    if (pageRoutes[id]) {
      navigate(pageRoutes[id]);
      window.scrollTo(0, 0);
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
      return;
    }

    // Handle Home page sections (design, develop, tech-stack, services)
    const element = document.getElementById(id);
    if (location.pathname !== "/") {
      // If not on home, navigate home then scroll
      navigate("/");
      // Use a timeout to allow navigation to complete before scrolling
      // Ideally this is handled by a useEffect in Home listening for a state/hash,
      // but simple timeout works for basic cases or just landing at top of Home is acceptable fallback.
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Already on home
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (id === "services") {
        // Fallback for services if no exact ID, maybe scroll to ServicesFrameworks if it had an ID
        // Assuming there is a section with id replaced by simple scroll top or specific section
      }
    }

    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    { label: "Home", id: "home", hasDropdown: false },
    {
      label: "Services",
      id: "services",
      hasDropdown: true,
      dropdownItems: [
        { label: "Design", id: "design" },
        { label: "Development", id: "develop" },
        { label: "Consulting", id: "contact" },
      ],
    },
    { label: "Technology", id: "tech-stack", hasDropdown: false },
    { label: "Portfolio", id: "projects", hasDropdown: false },
    { label: "About", id: "about", hasDropdown: false },
    { label: "Contact", id: "contact", hasDropdown: false },
  ];

  return (
    <div>
      <ScrollProgress />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#000101]/80 backdrop-blur-2xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center cursor-pointer"
              onClick={() => handleNavigation("devhero")} // Or navigate to home
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-auto object-contain"
              />
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
                    onClick={() => !hasDropdown && handleNavigation(id)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/70 hover:text-[#3C74B1] transition-colors rounded-lg hover:bg-white/5"
                  >
                    {label}
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === label ? "rotate-180" : ""
                        }`}
                      />
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
                            onClick={() => handleNavigation(item.id)}
                            className="w-full text-left px-4 py-3 text-sm text-white/60 hover:text-[#3C74B1] hover:bg-white/5 transition-colors"
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
                onClick={() => handleNavigation("contact")}
                className="bg-transparent border border-[#3C74B1] hover:bg-[#3C74B1] hover:text-white text-white rounded-lg px-5 h-10 text-sm font-medium transition-all duration-300"
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
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0a12] border-b border-white/10 overflow-hidden"
              >
                <div className="container mx-auto px-6 py-6">
                  <div className="flex flex-col space-y-1">
                    {navItems.map(({ label, id }) => (
                      <button
                        key={id + label}
                        onClick={() => scrollToSection(id)}
                        className="text-left py-3 px-4 text-base font-medium text-white/70 hover:text-[#2D5190] hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {label}
                      </button>
                    ))}
                    <div className="pt-4 mt-4 border-t border-white/10 flex flex-col gap-3">
                      <Button
                        onClick={() => scrollToSection("contact")}
                        className="bg-[#4C91C9] hover:bg-[#2D5190]/80 text-white"
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
    </div>
  );
};

export default Header;
