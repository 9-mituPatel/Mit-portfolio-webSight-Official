import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Database, Server, Code, Zap, Trophy, Users, Calendar, Star, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    { icon: Trophy, number: 14, suffix: "+", label: "Projects Delivered", color: "#4353FF" },
    { icon: Calendar, number: 2, suffix: "+", label: "Years Experience", color: "#6366f1" },
    { icon: Users, number: 10, suffix: "+", label: "Happy Clients", color: "#22d3ee" },
    { icon: Star, number: 100, suffix: "%", label: "Commitment", color: "#10b981" }
  ];

  const highlights = [
    {
      icon: Database,
      title: "Scalable Architecture",
      description: "Expertise in designing high-concurrency backend systems using Node.js, Redis, and MongoDB for mission-critical applications.",
      gradient: "from-[#4353FF] to-[#6366f1]"
    },
    {
      icon: Code,
      title: "API Excellence",
      description: "Crafting robust RESTful and GraphQL APIs with security at the core, utilizing JWT, OAuth, and advanced middleware patterns.",
      gradient: "from-[#6366f1] to-[#22d3ee]"
    }
  ];

  const techLogos = [
    "Node.js", "React.js", "MongoDB", "Redis", "Docker", "AWS", "Express.js", "Next.js"
  ];

  return (
    <section id="about" className="py-32 md:py-44 bg-[#000101] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.06] pointer-events-none" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-48 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(67, 83, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-7xl mx-auto">
          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 lg:mb-32">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block mb-8"
              >
                <span className="tag-primary flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  About Me
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="heading-xl text-white mb-8"
              >
                Engineering
                <br />
                <span className="relative inline-block">
                  <span className="gradient-text-primary">The Digital</span>
                </span>
                <br />
                Backbone
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="body-lg mb-12 max-w-lg"
              >
                Results-driven <span className="text-white font-semibold">Full Stack Developer</span> with 2 years of hands-on experience
                in designing and building scalable, high-performance web applications using Node.js, Express.js, MongoDB, SQL, React.js, Next.js.
                Proficient in crafting <span className="text-white font-semibold">RESTful APIs</span>, optimizing database operations, and implementing secure, maintainable systems.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredStat(idx)}
                    onMouseLeave={() => setHoveredStat(null)}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle, ${stat.color}20, transparent 70%)`,
                      }}
                    />

                    <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 group-hover:border-white/[0.12] transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                          style={{
                            backgroundColor: `${stat.color}15`,
                            borderColor: `${stat.color}30`,
                            borderWidth: '1px',
                          }}
                        >
                          <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                        </div>
                        <div className="text-3xl lg:text-4xl font-black text-white tracking-tight">
                          {isInView && <AnimatedCounter end={stat.number} suffix={stat.suffix} />}
                        </div>
                      </div>
                      <div className="text-[11px] text-white/40 font-bold uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Tech stack mini display */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-10 pt-8 border-t border-white/[0.06]"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">Primary Stack</div>
                <div className="flex flex-wrap gap-2">
                  {techLogos.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/50 text-xs font-semibold hover:text-[#4353FF] hover:border-[#4353FF]/30 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Premium Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                {/* Main card */}
                <SpotlightCard
                  containerClassName="aspect-[4/5] rounded-[2.5rem]"
                  className="p-10 lg:p-14 flex flex-col justify-end border-gradient overflow-hidden rounded-[2.5rem]"
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-grid-modern opacity-[0.08] pointer-events-none" />

                  {/* Animated accent lines */}
                  <motion.div
                    className="absolute top-8 right-8 w-20 h-1 bg-gradient-to-r from-[#4353FF] to-transparent rounded-full"
                    animate={{ width: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-12 right-8 w-12 h-1 bg-gradient-to-r from-[#6366f1] to-transparent rounded-full"
                    animate={{ width: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#4353FF]/20 to-[#6366f1]/10 rounded-3xl flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(67,83,255,0.15)] border border-[#4353FF]/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Server className="w-10 h-10 lg:w-12 lg:h-12 text-[#4353FF]" />
                    </motion.div>

                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
                      Core
                      <br />
                      <span className="gradient-text-primary">Philosophy</span>
                    </h3>

                    <div className="line-accent mb-8" />

                    <p className="text-white/60 text-base lg:text-lg font-medium leading-relaxed">
                      Clean code is not enough. It must be resilient, observable, and optimized for performance at every layer of the stack.
                    </p>

                    {/* Interactive element */}
                    <motion.div
                      className="mt-10 flex items-center gap-3 text-[#4353FF] font-semibold text-sm cursor-pointer group"
                      whileHover={{ x: 5 }}
                    >
                      <span>View My Work</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                    </motion.div>
                  </div>

                  {/* Decorative gradient glow */}
                  <motion.div
                    className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, rgba(67, 83, 255, 0.12) 0%, transparent 70%)',
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </SpotlightCard>

                {/* Floating accent card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-8 -left-8 lg:-left-12 glass-card rounded-2xl p-5 max-w-[200px]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#27ca40] animate-pulse" />
                    <span className="text-xs text-white/60 font-semibold">Available Now</span>
                  </div>
                  <p className="text-[11px] text-white/40">
                    Open for new opportunities and exciting projects
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Highlight Cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 lg:gap-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute -inset-[1px] bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-[2rem] blur-sm transition-opacity duration-500"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${item.gradient.includes('4353FF') ? '#4353FF50' : '#6366f150'}, transparent, ${item.gradient.includes('6366f1') ? '#6366f150' : '#22d3ee50'})`,
                  }}
                />

                <SpotlightCard className="relative p-8 lg:p-10 border-gradient h-full rounded-[2rem]">
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-grid-modern opacity-[0.03] pointer-events-none rounded-[2rem]" />

                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg relative z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${item.gradient.split(' ')[1]}20, ${item.gradient.split(' ')[3]}10)`,
                    }}
                  >
                    <item.icon className="w-8 h-8 text-[#4353FF]" />
                  </motion.div>

                  <h4 className="text-xl lg:text-2xl font-black text-white mb-4 group-hover:text-[#4353FF] transition-colors duration-300 relative z-10">
                    {item.title}
                  </h4>

                  <p className="text-white/50 leading-relaxed font-medium relative z-10">
                    {item.description}
                  </p>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#4353FF]/5 to-transparent pointer-events-none rounded-tr-[2rem]" />
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
