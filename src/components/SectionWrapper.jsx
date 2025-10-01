import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

const SectionWrapper = ({ 
  children, 
  className = '', 
  delay = 0, 
  variant = 'default',
  backgroundVariant = 'none',
  id,
  ...props 
}) => {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.6, 0.01, 0.05, 0.95],
        staggerChildren: 0.15
      }
    }
  };

  const variantStyles = {
    default: 'py-24',
    alternate: 'py-24',
    hero: 'min-h-screen flex items-center justify-center',
    compact: 'py-16'
  };

  const backgroundStyles = {
    none: '',
    subtle: 'bg-gradient-to-br from-background via-pastel-lavender/8 to-pastel-mint/8',
    alternate: 'bg-gradient-to-br from-background via-pastel-sage/10 to-pastel-peach/10',
    elegant: 'bg-gradient-to-br from-background via-secondary/15 to-background',
    soft: 'bg-gradient-to-br from-background to-pastel-lavender/12'
  };

  return (
    <motion.section
      id={id}
      ref={elementRef}
      initial="hidden"
      animate={hasIntersected ? "visible" : "hidden"}
      variants={sectionVariants}
      className={cn(
        'relative overflow-hidden',
        variantStyles[variant],
        backgroundStyles[backgroundVariant],
        className
      )}
      {...props}
    >
      {/* Subtle Decorative Background Elements */}
      {backgroundVariant !== 'none' && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(160,200,180,0.03),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(220,200,240,0.03),transparent_50%)]" />
        </>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;

