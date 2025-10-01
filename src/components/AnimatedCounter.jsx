import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ end, duration = 2, prefix = "", suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {isInView && (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          decimals={decimals}
          prefix={prefix}
          suffix={suffix}
        />
      )}
    </motion.div>
  );
};

export default AnimatedCounter;
