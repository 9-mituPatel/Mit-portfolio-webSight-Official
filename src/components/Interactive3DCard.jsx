import { useState } from 'react';
import { motion } from 'framer-motion';

const Interactive3DCard = ({ children, className = '', intensity = 15, ...props }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!isHovering) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateXValue = ((e.clientY - centerY) / (rect.height / 2)) * -intensity;
    const rotateYValue = ((e.clientX - centerX) / (rect.width / 2)) * intensity;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        scale: isHovering ? 1.05 : 1
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30
      }}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
      {...props}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{
          boxShadow: isHovering
            ? '0 25px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)'
            : '0 10px 30px rgba(0, 0, 0, 0.1)'
        }}
        transition={{
          duration: 0.3
        }}
      >
        {children}
        
        {/* Subtle glow effect */}
        <motion.div
          className="absolute -inset-px rounded-lg bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 blur-sm"
          animate={{
            opacity: isHovering ? 0.6 : 0
          }}
          transition={{
            duration: 0.3
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Interactive3DCard;

