import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      initial={{ scaleX: 0 }}
    >
      <div className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary w-full" />
    </motion.div>
  );
};

export default ScrollProgress;
