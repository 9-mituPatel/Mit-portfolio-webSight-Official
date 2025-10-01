import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollIndicator = ({ targetId, className = '' }) => {
  const scrollToTarget = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTarget}
          className="rounded-full border-primary/30 bg-background/80 backdrop-blur-sm hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
        >
          <motion.div
            animate={{
              y: [0, 3, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <ArrowDown className="w-5 h-5 text-primary group-hover:text-primary/80" />
          </motion.div>
        </Button>
      </motion.div>
      
      <motion.div
        className="absolute -inset-2 bg-primary/20 rounded-full blur-lg -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </motion.div>
  );
};

export default ScrollIndicator;

