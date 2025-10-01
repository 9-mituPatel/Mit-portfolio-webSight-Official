import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Loading = ({ 
  className,
  size = 'default',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    default: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const variantClasses = {
    default: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent-purple'
  };

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <motion.div
        className={cn(
          'relative',
          sizeClasses[size]
        )}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Outer ring */}
        <motion.div
          className={cn(
            'absolute inset-0 border-2 rounded-full',
            variantClasses[variant]
          )}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        {/* Inner ring */}
        <motion.div
          className={cn(
            'absolute inset-1 border-2 rounded-full opacity-70',
            variantClasses[variant]
          )}
          animate={{ rotate: -360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        {/* Center dot */}
        <motion.div
          className={cn(
            'absolute inset-[35%] rounded-full',
            variantClasses[variant]
          )}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </motion.div>
    </div>
  );
};