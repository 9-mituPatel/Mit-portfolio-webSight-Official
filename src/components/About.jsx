import { SpotlightCard } from "@/components/ui/spotlight-card";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code, Users, Award, Briefcase, TrendingUp, Zap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Briefcase, value: "14+", label: "Projects Delivered", color: "#4353FF" },
    { icon: Users, value: "2+", label: "Years Experience", color: "#6366f1" },
    { icon: Award, value: "100%", label: "Client Satisfaction", color: "#8b5cf6" },
    { icon: TrendingUp, value: "50Cr+", label: "Records Migrated", color: "#a855f7" },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Full Stack Expertise",
      description: "Proficient in MERN stack with deep knowledge of Node.js, Express.js, MongoDB, React.js, and Next.js",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Optimized applications handling millions of requests with Redis caching and efficient database indexing",
    },
    {
      icon: Award,
      title: "Leadership & Mentoring",
      description: "Currently leading development teams, conducting code reviews, and mentoring junior developers",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 md:py-32 lg:py-44 bg-[#000101] relative overflow-hidden"
      ref={ref}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.06] pointer-events-none" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(67, 83, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <span className="tag-primary flex items-center gap-2 justify-center">
              <Users className="w-3 h-3" />
              About Me
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl text-white mb-8"
          >
            Building{" "}
            <span className="relative inline-block">
              <span className="gradient-text-primary">Scalable Solutions</span>
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#4353FF] to-[#6366f1] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
            <br />
            That Matter
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-lg max-w-3xl mx-auto"
          >
            I'm a passionate Full Stack Developer and Tech Lead with 2+ years of experience in building
            enterprise-grade applications. Specialized in MERN stack, I've delivered solutions ranging from
            Video-KYC systems to healthcare ERPs, handling millions of users and records.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="glass-card p-6 lg:p-8 text-center rounded-2xl border-gradient group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-grid-modern opacity-[0.03] pointer-events-none rounded-2xl" />

                <motion.div
                  className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${stat.color}15`,
                    borderColor: `${stat.color}30`,
                    borderWidth: '1px',
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="w-6 h-6 lg:w-8 lg:h-8" style={{ color: stat.color }} />
                </motion.div>

                <div className="text-3xl lg:text-4xl font-black text-white mb-2 relative z-10">
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm text-white/40 font-semibold uppercase tracking-wider relative z-10">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <SpotlightCard className="p-8 h-full border-gradient rounded-2xl">
                <div className="absolute inset-0 bg-grid-modern opacity-[0.03] pointer-events-none" />

                <motion.div
                  className="w-14 h-14 bg-[#4353FF]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#4353FF]/20 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <highlight.icon className="w-7 h-7 text-[#4353FF]" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4 relative z-10 group-hover:text-[#4353FF] transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed relative z-10">
                  {highlight.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-20"
        >
          <div className="flex items-center gap-4 text-white/30 text-sm">
            <div className="line-accent" />
            <span className="font-medium">Let's build something amazing together</span>
            <div className="line-accent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
