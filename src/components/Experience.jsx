import { SpotlightCard } from "@/components/ui/spotlight-card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Briefcase, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Full Stack Developer & Tech Lead",
      company: "Braincuber Technologies Pvt Ltd",
      location: "Surat, Gujarat",
      period: "Aug 2024 - Present",
      type: "Full-time",
      description: [
        "Architecting scalable systems with Node.js and React.js",
        "Leading a mission-critical backend migration to microservices",
        "Managing cloud infrastructure on AWS and DigitalOcean",
        "Implementing advanced security protocols and JWT-based auth"
      ],
      technologies: ["Node.js", "MongoDB", "Docker", "Redis", "AWS"],
      color: "#4353FF",
      isCurrent: true
    },
    {
      title: "Backend Specialist (Hybrid)",
      company: "VNSGU & Freelance Projects",
      location: "Surat, India",
      period: "2022 - 2024",
      type: "Freelance",
      description: [
        "Developed custom ERP solutions for local logistics firms",
        "Built responsive frontend dashboards using React and Bootstrap",
        "Optimized database queries for 40% faster load times",
        "Successfully delivered 5+ full-stack freelance projects"
      ],
      technologies: ["Node.js", "React.js", "MySQL", "MongoDB", "Nginx"],
      color: "#6366f1",
      isCurrent: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="experience" className="py-32 md:py-44 bg-[#000101] relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.06] pointer-events-none" />

      {/* Timeline vertical line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(67, 83, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          y: [0, -30, 0],
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
            <span className="tag-primary flex items-center gap-2">
              <Briefcase className="w-3 h-3" />
              Career Path
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-xl text-white mb-8"
          >
            Professional{" "}
            <span className="relative inline-block">
              <span className="gradient-text-primary">Journey</span>
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#4353FF] to-[#6366f1] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body-lg max-w-2xl mx-auto"
          >
            A track record of building robust systems and leading technical initiatives across diverse projects.
          </motion.p>
        </div>

        {/* Experience Cards */}
        <motion.div
          className="space-y-16 lg:space-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:mb-24 
                ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Spacer for timeline effect */}
              <div className="flex-1 hidden lg:block" />

              {/* Timeline Center Point */}
              <div className="relative z-20 hidden lg:flex items-center justify-center">
                <motion.div
                  className="w-6 h-6 rounded-full border-4 border-[#000101] shadow-[0_0_30px_rgba(67,83,255,0.5)]"
                  style={{ backgroundColor: exp.color }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Connecting line */}
                <motion.div
                  className={`absolute top-1/2 h-px w-12 ${index % 2 === 0 ? 'left-full' : 'right-full'}`}
                  style={{ backgroundColor: exp.color }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                />
              </div>

              {/* Card Content */}
              <div className="flex-1 w-full max-w-2xl">
                <motion.div
                  className="group relative"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated border glow on hover */}
                  <motion.div
                    className="absolute -inset-[1px] rounded-[2rem] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${exp.color}50, transparent, ${exp.color}30)`,
                    }}
                  />

                  <SpotlightCard className="relative p-8 lg:p-10 border-gradient rounded-[2rem] overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-grid-modern opacity-[0.04] pointer-events-none" />

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8 relative z-10">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          {exp.isCurrent && (
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#27ca40]/10 border border-[#27ca40]/20 text-[#27ca40] text-[10px] font-bold uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#27ca40] animate-pulse" />
                              Current
                            </span>
                          )}
                          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-wider">
                            {exp.type}
                          </span>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-black text-white mb-2 group-hover:text-[#4353FF] transition-colors duration-300 leading-tight">
                          {exp.title}
                        </h3>
                        <p className="text-sm font-bold tracking-wide" style={{ color: exp.color }}>
                          {exp.company}
                        </p>
                      </div>

                      {/* Meta badges */}
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center gap-2 text-white/40 text-xs font-semibold bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                          <Calendar className="w-3 h-3" style={{ color: exp.color }} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-white/40 text-xs font-semibold bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                          <MapPin className="w-3 h-3" style={{ color: exp.color }} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description list */}
                    <ul className="space-y-4 mb-10 relative z-10">
                      {exp.description.map((item, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-4 text-white/50 text-sm lg:text-base font-medium leading-relaxed group/item"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                        >
                          <CheckCircle2
                            className="w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover/item:text-[#27ca40]"
                            style={{ color: exp.color + '60' }}
                          />
                          <span className="group-hover/item:text-white/70 transition-colors duration-300">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="pt-6 border-t border-white/[0.06] relative z-10">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">
                        Technologies Used
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-white/50 text-xs font-semibold hover:border-white/20 transition-all duration-300"
                            whileHover={{
                              scale: 1.05,
                              color: exp.color,
                              borderColor: exp.color + '40',
                              backgroundColor: exp.color + '10',
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div
                      className="absolute top-0 right-0 w-32 h-32 pointer-events-none rounded-tr-[2rem]"
                      style={{
                        background: `linear-gradient(to bottom left, ${exp.color}10, transparent)`,
                      }}
                    />
                  </SpotlightCard>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-16 lg:mt-24"
        >
          <div className="flex items-center gap-4 text-white/30 text-sm">
            <Sparkles className="w-4 h-4 text-[#4353FF]" />
            <span className="font-medium">Growing with Every Challenge</span>
            <Sparkles className="w-4 h-4 text-[#4353FF]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;