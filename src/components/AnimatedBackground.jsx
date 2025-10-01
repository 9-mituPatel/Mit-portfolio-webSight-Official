import { motion } from 'framer-motion';

const AnimatedBackground = ({ variant = 'gradient', className = '' }) => {
  const gradientVariants = {
    animate: {
      background: [
        'linear-gradient(45deg, hsl(var(--background)) 0%, hsl(var(--secondary)/0.1) 50%, hsl(var(--primary)/0.05) 100%)',
        'linear-gradient(90deg, hsl(var(--primary)/0.05) 0%, hsl(var(--background)) 50%, hsl(var(--secondary)/0.1) 100%)',
        'linear-gradient(135deg, hsl(var(--secondary)/0.1) 0%, hsl(var(--primary)/0.05) 50%, hsl(var(--background)) 100%)',
        'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--primary)/0.05) 50%, hsl(var(--secondary)/0.1) 100%)',
        'linear-gradient(225deg, hsl(var(--primary)/0.05) 0%, hsl(var(--secondary)/0.1) 50%, hsl(var(--background)) 100%)',
        'linear-gradient(270deg, hsl(var(--secondary)/0.1) 0%, hsl(var(--background)) 50%, hsl(var(--primary)/0.05) 100%)',
        'linear-gradient(315deg, hsl(var(--background)) 0%, hsl(var(--primary)/0.05) 50%, hsl(var(--secondary)/0.1) 100%)',
        'linear-gradient(360deg, hsl(var(--primary)/0.05) 0%, hsl(var(--secondary)/0.1) 50%, hsl(var(--background)) 100%)'
      ]
    }
  };

  if (variant === 'gradient') {
    return (
      <motion.div
        className={`absolute inset-0 ${className}`}
        variants={gradientVariants}
        animate="animate"
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    );
  }

  if (variant === 'particles') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() > 0.5 ? 10 : -10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    );
  }

  return null;
};

export default AnimatedBackground;

