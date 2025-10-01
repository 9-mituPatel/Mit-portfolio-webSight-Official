import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';
import { cn } from '@/lib/utils';

const EnhancedButton = forwardRef(({ 
  children, 
  variant = 'default',
  size = 'default',
  className,
  onClick,
  icon,
  hoverScale = 1.05,
  hoverY = -2,
  ...props 
}, ref) => {
  return (
    <motion.div
      whileHover={{ 
        scale: hoverScale, 
        y: hoverY,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 10
      }}
    >
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          'relative overflow-hidden transition-all duration-300',
          'before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/0 before:via-primary/20 before:to-primary/0',
          'before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000',
          className
        )}
        onClick={(e) => {
          // Add click ripple effect
          const button = e.currentTarget;
          const circle = document.createElement('span');
          const diameter = Math.max(button.clientWidth, button.clientHeight);
          const radius = diameter / 2;

          circle.style.width = circle.style.height = `${diameter}px`;
          circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
          circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
          circle.classList.add('ripple');

          const ripple = button.getElementsByClassName('ripple')[0];
          if (ripple) {
            ripple.remove();
          }

          button.appendChild(circle);

          if (onClick) {
            onClick(e);
          }
        }}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {icon && <span className="text-lg">{icon}</span>}
          {children}
        </span>
      </Button>
    </motion.div>
  );
});

EnhancedButton.displayName = 'EnhancedButton';

export { EnhancedButton };