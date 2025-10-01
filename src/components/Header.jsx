import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import ScrollProgress from "./ScrollProgress";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <header className="fixed top-0 left-0 right-0 z-50 glass-premium bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Elegant Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-accent-purple/80 to-accent-cyan/60 flex items-center justify-center shadow-lg glow-primary"
                whileHover={{ 
                  rotate: 10,
                  boxShadow: "0 0 30px rgba(var(--accent-purple-rgb), 0.6)"
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-lg font-bold text-primary-foreground drop-shadow-sm">M</span>
              </motion.div>
              <div className="text-xl font-heading font-semibold text-foreground">
                Mit Bharodiya
              </div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { label: 'About', id: 'about' },
                { label: 'Experience', id: 'experience' },
                { label: 'Projects', id: 'projects' },
                { label: 'Skills', id: 'skills' },
                { label: 'Education', id: 'education' },
                { label: 'Contact', id: 'contact' }
              ].map(({ label, id }, index) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 group px-3 py-2 rounded-lg"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(var(--primary-rgb), 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.1 + index * 0.05,
                    type: "spring",
                    stiffness: 400
                  }}
                >
                  {label}
                  <motion.span 
                    className="absolute -bottom-1 left-3 h-0.5 bg-gradient-to-r from-primary to-accent-purple rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "calc(100% - 1.5rem)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <ThemeToggle />
              </motion.div>
              
              {/* Mobile Menu Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden w-10 h-10 rounded-xl border border-white/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 glass-premium"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <motion.div
                    animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-6 pb-6 border-t border-border/40 pt-6">
              <div className="flex flex-col space-y-4">
                {[
                  { label: 'About', id: 'about' },
                  { label: 'Experience', id: 'experience' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Skills', id: 'skills' },
                  { label: 'Education', id: 'education' },
                  { label: 'Contact', id: 'contact' }
                ].map(({ label, id }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300 py-2"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
