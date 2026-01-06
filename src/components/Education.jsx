import { SpotlightCard } from "@/components/ui/spotlight-card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, GraduationCap, BookOpen, Award, Star } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bachelor's in Computer Application",
      institution: "Utter Gujarat College, VNSGU",
      location: "Gujarat, India",
      period: "2021 - 2024",
      grade: "First Division",
      description: "Focused on core programming principles, database management systems, and modern web application architecture. Specialized in MERN stack during the final years.",
      subjects: ["Data Structures", "DBMS", "Web Dev", "Software Engineering", "JavaScript", "SQL"],
      highlights: ["MERN Stack Specialization", "Project Lead for Final Year"]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Gopinath Gurukul, Surat",
      location: "Surat, Gujarat",
      period: "2019 - 2021",
      grade: "Science Stream",
      description: "Foundational STEM education with a focus on Mathematics and Computer Science. Participated in various competitive coding events.",
      subjects: ["Mathematics", "Physics", "Computer Science"],
      highlights: ["Competitive Coding Events", "Science Olympiad"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="education" className="py-32 md:py-44 bg-[#000101] relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.06] pointer-events-none" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-20 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(67, 83, 255, 0.12) 0%, transparent 70%)',
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

      <motion.div
        className="absolute bottom-20 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
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
              <BookOpen className="w-3 h-3" />
              Academic Background
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl text-white mb-8"
          >
            Scholastic{" "}
            <span className="relative inline-block">
              <span className="gradient-text-primary">Journey</span>
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#4353FF] to-[#6366f1] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-lg max-w-2xl mx-auto"
          >
            The foundation of my technical expertise and problem-solving mindset,
            built through rigorous academics and hands-on learning.
          </motion.p>
        </div>

        {/* Education Cards */}
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Animated border glow on hover */}
              <motion.div
                className="absolute -inset-[1px] bg-gradient-to-r from-[#4353FF]/50 via-[#6366f1]/30 to-[#4353FF]/50 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
              />

              <SpotlightCard
                className="relative p-8 lg:p-10 border-gradient h-full rounded-[2rem] overflow-hidden"
                containerClassName="rounded-[2rem]"
              >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-grid-modern opacity-[0.04] pointer-events-none" />

                {/* Header */}
                <div className="flex items-start gap-6 mb-8 relative z-10">
                  <motion.div
                    className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#4353FF]/20 to-[#6366f1]/10 rounded-2xl flex items-center justify-center border border-[#4353FF]/20 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GraduationCap className="w-8 h-8 lg:w-10 lg:h-10 text-[#4353FF]" />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-black text-white mb-2 group-hover:text-[#4353FF] transition-colors duration-300 leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-[#4353FF] font-bold text-sm tracking-wide">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-3 mb-6 relative z-10">
                  <div className="flex items-center gap-2 text-white/40 text-xs font-semibold bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <Calendar className="w-3 h-3 text-[#4353FF]" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-xs font-semibold bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <MapPin className="w-3 h-3 text-[#4353FF]" />
                    {edu.location}
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-xs font-semibold bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <Award className="w-3 h-3 text-[#4353FF]" />
                    {edu.grade}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/50 text-sm lg:text-base leading-relaxed mb-8 font-medium relative z-10">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div className="mb-8 relative z-10">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">
                    Key Highlights
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <motion.span
                        key={idx}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#4353FF]/10 border border-[#4353FF]/20 text-[#4353FF] text-xs font-bold"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Star className="w-3 h-3" />
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Subjects */}
                <div className="pt-6 border-t border-white/[0.06] relative z-10">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">
                    Core Subjects
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject, idx) => (
                      <motion.span
                        key={idx}
                        className="tag-secondary"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: 'rgba(67, 83, 255, 0.1)',
                        }}
                      >
                        {subject}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4353FF]/10 to-transparent pointer-events-none rounded-tr-[2rem]" />
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-4 text-white/30 text-sm">
            <div className="line-accent" />
            <span className="font-medium">Continuous Learning is Key</span>
            <div className="line-accent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
