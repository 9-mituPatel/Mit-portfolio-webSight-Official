import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Sparkles, Zap } from "lucide-react";

const MissionVision = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const hiccupVariant = {
    hover: {
      y: [0, -15, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    idle: { y: 0 },
  };

  return (
    <section className="py-20 bg-[#000101] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            onMouseEnter={() => setHoveredCard("mission")}
            onMouseLeave={() => setHoveredCard(null)}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-8 rounded-3xl bg-[#0F1115] border border-white/5 overflow-hidden hover:border-[#4C91C9]/50 hover:shadow-[0_20px_40px_-15px_rgba(76,145,201,0.4)] transition-all duration-300"
          >
            {/* Glow effect */}
            <div className="absolute top-0 right-0 p-4 opacity-50">
              <Sparkles className="w-6 h-6 text-white/20" />
            </div>

            <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#4C91C9] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />

            <div className="relative z-10">
              <motion.div
                variants={hiccupVariant}
                animate={hoveredCard === "mission" ? "hover" : "idle"}
                className="w-16 h-16 rounded-2xl bg-[#1A1D25] border border-white/5 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(76,145,201,0.1)]"
              >
                <Target className="w-8 h-8 text-white/40 group-hover:text-[#4C91C9] transition-colors duration-300" />
              </motion.div>

              <h3 className="text-3xl font-black text-white mb-6 tracking-tight">
                Our Mission
              </h3>

              <p className="text-white/60 text-lg leading-relaxed">
                To accelerate digital evolution. At GoCodexa Infotech, we craft
                intelligent, scalable, and intuitive software solutions that
                empower businesses to lead in a fast-paced digital world.
              </p>
            </div>

            {/* Bottom decoration */}
            <div className="absolute bottom-4 left-4">
              <Zap className="w-5 h-5 text-[#4C91C9]/40" />
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            onMouseEnter={() => setHoveredCard("vision")}
            onMouseLeave={() => setHoveredCard(null)}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative p-8 rounded-3xl bg-[#0F1115] border border-white/5 overflow-hidden hover:border-[#fbc72d]/50 hover:shadow-[0_20px_40px_-15px_rgba(251,199,45,0.4)] transition-all duration-300"
          >
            {/* Glow effect */}
            <div className="absolute top-0 right-0 p-4 opacity-50">
              <Sparkles className="w-6 h-6 text-white/20" />
            </div>

            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#fbc72d] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />

            <div className="relative z-10">
              <motion.div
                variants={hiccupVariant}
                animate={hoveredCard === "vision" ? "hover" : "idle"}
                className="w-16 h-16 rounded-2xl bg-[#1A1D25] border border-white/5 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(251,199,45,0.1)]"
              >
                <Sparkles className="w-8 h-8 text-white/40 group-hover:text-[#fbc72d] transition-colors duration-300" />
              </motion.div>

              <h3 className="text-3xl font-black text-white mb-6 tracking-tight">
                Our Vision
              </h3>

              <p className="text-white/60 text-lg leading-relaxed">
                To be the architects of tomorrow's digital landscape. We aspire
                to set new benchmarks in technology, driving global innovation
                while keeping user experience at the core of everything we
                build.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
