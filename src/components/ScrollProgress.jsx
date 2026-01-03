import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#4353FF]/10 z-[100]"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    >
      <div className="h-full bg-[#4353FF] shadow-[0_0_10px_rgba(67,83,255,0.8)]" />
    </motion.div>
  );
};

export default ScrollProgress;
