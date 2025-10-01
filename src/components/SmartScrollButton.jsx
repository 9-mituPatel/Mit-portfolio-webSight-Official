import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUp, Home, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SmartScrollButton = ({ className = '' }) => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');
  const [showButton, setShowButton] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Section mapping for navigation
  const sections = [
    { id: 'hero', name: 'Home', icon: Home },
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
      
      // Hide button when at very bottom
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = currentScrollY + windowHeight >= documentHeight - 100;
      setShowButton(!isAtBottom);
      
      // Find current section
      let foundSection = 'hero';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section's top is above the middle of the screen
          if (rect.top <= window.innerHeight / 2) {
            foundSection = sections[i].id;
            break;
          }
        }
      }
      
      setCurrentSection(foundSection);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsExpanded(false);
    }
  };

  const scrollToNext = () => {
    const currentIndex = sections.findIndex(section => section.id === currentSection);
    const nextIndex = currentIndex + 1;
    
    console.log('Scroll to next - Current:', currentSection, 'Index:', currentIndex, 'Next index:', nextIndex);
    
    if (nextIndex < sections.length) {
      const nextSectionId = sections[nextIndex].id;
      console.log('Scrolling to:', nextSectionId);
      scrollToSection(nextSectionId);
    } else {
      console.log('Already at last section');
    }
  };

  const scrollToTop = () => {
    console.log('Scrolling to top');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentSection('hero');
  };
  
  const isScrolledDown = scrollY > 200;
  const isAtLastSection = currentSection === sections[sections.length - 1].id;

  if (!showButton && scrollY < 100) return null;

  return (
    <>
      {/* Main Scroll Button */}
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
                    {sections.slice(0, -1).reverse().map((section, index) => {
                      const IconComponent = section.icon || ArrowDown;
                      return (
                        <motion.div
                          key={section.id}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 50 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Button
                            variant={currentSection === section.id ? "default" : "outline"}
                            size="sm"
                            onClick={() => scrollToSection(section.id)}
                            className="min-w-[120px] justify-start bg-background/90 backdrop-blur-md border-primary/20 hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            {section.icon && <IconComponent className="w-4 h-4 mr-2" />}
                            <span className="text-sm font-medium">{section.name}</span>
                          </Button>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Button Group */}
              <div className="flex flex-col gap-2">
                {/* Multi-function Button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      console.log('Button clicked - Scrolled down:', isScrolledDown, 'Current section:', currentSection, 'Is at last:', isAtLastSection);
                      if (isScrolledDown && !isAtLastSection) {
                        scrollToNext();
                      } else {
                        scrollToTop();
                      }
                    }}
                    className="w-12 h-12 rounded-full border-primary/30 bg-background/80 backdrop-blur-md hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Background ripple effect */}
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                    
                    <motion.div
                      animate={{
                        y: isScrolledDown && !isAtLastSection ? [0, 3, 0] : [0, -3, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      {isScrolledDown && !isAtLastSection ? (
                        <ArrowDown className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      ) : (
                        <ArrowUp className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      )}
                    </motion.div>
                  </Button>
                  
                  {/* Progress indicator */}
                  <motion.div
                    // className="absolute -inset-1 rounded-full border-2 border-primary/30"
                    // style={{
                    //   background: `conic-gradient(hsl(var(--primary)) ${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%, transparent 0%)`
                    // }}
                    // initial={{ rotate: 0 }}
                    // animate={{ rotate: 360 }}
                    // transition={{
                    //   duration: 20,
                    //   repeat: Infinity,
                    //   ease: 'linear'
                    // }}
                  />
                </motion.div>

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
            </div>
            
            {/* Floating label */}
            <AnimatePresence>
              {isScrolledDown && !isAtLastSection && (
                <motion.div
                  className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full border border-primary/20 shadow-lg"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                    Next: {sections[Math.min(sections.findIndex(s => s.id === currentSection) + 1, sections.length - 1)]?.name}
                  </span>
                </motion.div>
              )}
              {isScrolledDown && isAtLastSection && (
                <motion.div
                  className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full border border-primary/20 shadow-lg"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                    Back to Top
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
        style={{
          scaleX: scrollY / (document.documentElement.scrollHeight - window.innerHeight)
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollY / (document.documentElement.scrollHeight - window.innerHeight) }}
        transition={{ duration: 0.1 }}
      >
        <div className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary" />
      </motion.div>
    </>
  );
};

export default SmartScrollButton;

