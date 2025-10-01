import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SimpleScrollButton = ({ className = '' }) => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Section mapping for navigation
  const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'education', name: 'Education' },
    { id: 'contact', name: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Show button when scrolled down
      setShowButton(currentScrollY > 300);
      
      // Find current section
      let foundSectionIndex = 0;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            foundSectionIndex = i;
            break;
          }
        }
      }
      
      setCurrentSection(foundSectionIndex);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    console.log('Scrolling to:', sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsExpanded(false);
    } else {
      console.log('Element not found:', sectionId);
    }
  };

  if (!showButton) return null;

  return (
    <>
      {/* Navigation Menu */}
      <AnimatePresence>
        {showButton && (
          <motion.div
            className={`fixed bottom-8 right-8 z-50 ${className}`}
            initial={{ opacity: 0, y: 100, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25
            }}
          >
            <div className="flex flex-col items-end gap-2">
              {/* Navigation Menu */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    className="flex flex-col gap-2 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ staggerChildren: 0.05 }}
                  >
                    {sections.slice().reverse().map((section, index) => (
                      <motion.div
                        key={section.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Button
                          variant={sections.length - 1 - index === currentSection ? "default" : "outline"}
                          size="sm"
                          onClick={() => scrollToSection(section.id)}
                          className="min-w-[120px] justify-start bg-background/90 backdrop-blur-md border-primary/20 hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <span className="text-sm font-medium">{section.name}</span>
                        </Button>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Menu Toggle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-10 h-10 rounded-full border-primary/20 bg-background/70 backdrop-blur-md hover:bg-primary hover:text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <motion.div
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
        style={{
          scaleX: scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
        }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.1 }}
      >
        <div className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary" />
      </motion.div>
    </>
  );
};

export default SimpleScrollButton;

