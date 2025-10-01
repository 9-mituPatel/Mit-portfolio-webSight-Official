import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/use-mouse-position';
import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
    }
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) {
    return null;
  }

  const variants = {
    default: {
      x: x - 8,
      y: y - 8,
      height: 16,
      width: 16,
      backgroundColor: 'hsl(var(--primary))',
      opacity: 0.8,
      transition: { type: 'spring', stiffness: 500, damping: 28 }
    },
    hover: {
      x: x - 24,
      y: y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'hsl(var(--primary))',
      opacity: 0.2,
      transition: { type: 'spring', stiffness: 500, damping: 28 }
    }
  };

  return (
    <motion.div
      variants={variants}
      animate={isHovering ? 'hover' : 'default'}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference"
    />
  );
};

export default CustomCursor;

