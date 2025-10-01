import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 80; // Adjust for header

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Add focus ring animation
    element.style.outline = '2px solid rgba(var(--primary-rgb), 0.5)';
    element.style.outlineOffset = '8px';
    element.style.borderRadius = '8px';
    element.style.transition = 'all 0.3s ease-out';

    // Remove focus ring after animation
    setTimeout(() => {
      element.style.outline = 'none';
      element.style.outlineOffset = '0';
    }, 1000);
  }, []);

  const scrollWithCallback = useCallback((sectionId, callback) => {
    scrollToSection(sectionId);
    if (callback) {
      setTimeout(callback, 1000);
    }
  }, [scrollToSection]);

  return { scrollToSection, scrollWithCallback };
};