import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#2D5190]/10 z-[100]"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    >
      <div className="h-full bg-[#2D5190] shadow-[0_0_10px_rgba(45,81,144,0.8)]" />
    </motion.div>
  );
};

export default ScrollProgress;
