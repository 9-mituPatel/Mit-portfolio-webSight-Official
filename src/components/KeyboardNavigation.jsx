import { useEffect } from 'react';
import { toast } from 'sonner';

const KeyboardNavigation = () => {
  useEffect(() => {
    const sections = [
      'hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'
    ];

    let currentIndex = 0;

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    const handleKeyDown = (event) => {
      // Only handle navigation if not typing in an input
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
      }

      switch (event.key) {
        case 'ArrowDown':
        case 'j':
          event.preventDefault();
          currentIndex = Math.min(currentIndex + 1, sections.length - 1);
          scrollToSection(sections[currentIndex]);
          toast(`Navigated to ${sections[currentIndex].charAt(0).toUpperCase() + sections[currentIndex].slice(1)}`, {
            duration: 1000,
            position: 'bottom-right'
          });
          break;
        
        case 'ArrowUp':
        case 'k':
          event.preventDefault();
          currentIndex = Math.max(currentIndex - 1, 0);
          scrollToSection(sections[currentIndex]);
          toast(`Navigated to ${sections[currentIndex].charAt(0).toUpperCase() + sections[currentIndex].slice(1)}`, {
            duration: 1000,
            position: 'bottom-right'
          });
          break;
        
        case 'Home':
        case 'g':
          if (event.shiftKey || event.key === 'Home') {
            event.preventDefault();
            currentIndex = 0;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            toast('Navigated to Top', {
              duration: 1000,
              position: 'bottom-right'
            });
          }
          break;
        
        case 'End':
        case 'G':
          event.preventDefault();
          currentIndex = sections.length - 1;
          scrollToSection(sections[currentIndex]);
          toast('Navigated to Contact', {
            duration: 1000,
            position: 'bottom-right'
          });
          break;
        
        case '?':
          event.preventDefault();
          toast('Keyboard Shortcuts: ↑/↓ or j/k to navigate, Home/g for top, End/G for bottom', {
            duration: 4000,
            position: 'top-center'
          });
          break;
      }
    };

    // Show initial help after a delay
    const helpTimer = setTimeout(() => {
      toast('💡 Tip: Use arrow keys or j/k to navigate, ? for help', {
        duration: 3000,
        position: 'bottom-left'
      });
    }, 3000);

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(helpTimer);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default KeyboardNavigation;

