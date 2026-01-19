import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { seoRoutes } from "@/config/seoRoutes";

const AboutHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-[#000101]">
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Pill Label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block mb-8"
        >
          <span className="text-[#4C91C9] font-black tracking-[0.4em] uppercase text-xs px-6 py-2 border border-[#4C91C9]/20 rounded-full bg-[#4C91C9]/5">
            About GoCodexa
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]"
        >
          Transforming Ideas
          <br />
          <span className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#4C91C9] via-[#9d85fc] to-[#fbc72d] bg-clip-text text-transparent">
            INTO DIGITAL MAGIC
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/60 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          We are a team of passionate creators, designers, and developers
          dedicated to building digital experiences that make an impact.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => navigate(seoRoutes.contact.path)}
            className="group flex items-center gap-2 px-8 py-2.5 bg-[#0F172A] border border-[#1E293B] hover:border-[#4C91C9]/50 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(76,145,201,0.2)]"
          >
            <Calendar className="w-5 h-5 text-[#4C91C9]" />
            <span className="text-white font-bold">Schedule a Meeting</span>
            <ArrowRight className="w-4 h-4 text-[#4C91C9] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              navigate(seoRoutes.projects.path);
              window.scrollTo(0, 0);
            }}
            className="px-8 py-2.5 bg-transparent border border-white/10 hover:border-white/30 rounded-xl transition-all duration-300 hover:bg-white/5"
          >
            <span className="text-white font-bold">View Our Work</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
