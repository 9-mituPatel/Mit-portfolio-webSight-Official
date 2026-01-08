import React from "react";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <div className="py-20 text-center mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block mb-6"
      >
        <span className="text-[#4C91C9] font-black tracking-[0.3em] uppercase text-sm px-6 py-2 border border-[#4C91C9]/20 rounded-full bg-[#4C91C9]/5">
          Get in touch{" "}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter"
      >
        Let's Build Something
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#4C91C9] to-[#fbc72d] bg-clip-text text-transparent mb-4 pb-4"
      >
        Amazing Together
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-white/50 text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        Whether you have a project in mind or just want to say hi, my inbox is
        always open. I'm currently looking for new opportunities and would love
        to hear from you.
      </motion.p>
    </div>
  );
};

export default GetInTouch;
