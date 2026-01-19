import React from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="py-20 bg-[#000000] relative overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-[-120px] left-[-120px] w-[520px] h-[520px] bg-[#4C91C9]/20 rounded-full blur-[160px] pointer-events-none"
        animate={{
          x: [0, 120, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-[-120px] right-[-120px] w-[520px] h-[520px] bg-[#9d85fc]/20 rounded-full blur-[160px] pointer-events-none"
        animate={{
          x: [0, -120, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 22,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Soft Center Glow */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_70%)] pointer-events-none"
        animate={{ opacity: [0.4, 0.65, 0.4] }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <Mail className="w-4 h-4 text-[#4C91C9]" />
            <span className="text-sm font-medium text-white/70">
              Newsletter
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Never Miss an Update from{" "}
            <span className="bg-gradient-to-r from-[#4C91C9] via-[#9d85fc] to-[#fbc72d] bg-clip-text text-transparent">
              GoCodexa
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Weekly tech insights, project updates, and exclusive offers —
            delivered straight to your inbox.
          </p>

          {/* Form */}
          <form className="max-w-xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-5 py-3 text-white placeholder:text-white/30
                focus:outline-none focus:border-[#4C91C9]/60 focus:bg-white/10
                focus:shadow-[0_0_0_3px_rgba(76,145,201,0.25)]
                transition-all"
              />
              <button
                type="submit"
                className="px-8 py-3 font-bold text-white rounded-lg
                bg-gradient-to-r from-[#6366f1] via-[#9d85fc] to-[#4C91C9]
                hover:scale-[1.03] active:scale-[0.98]
                transition-all duration-300
                shadow-[0_6px_25px_rgba(99,102,241,0.45)]
                hover:shadow-[0_8px_35px_rgba(157,133,252,0.55)]"
              >
                Subscribe
              </button>
            </div>
          </form>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60"
          >
            {[
              "Practical tech insights (not theory)",
              "Members-only offers & updates",
              "100% spam-free. Unsubscribe anytime",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-[#4FC08D]" />
                <span>{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
