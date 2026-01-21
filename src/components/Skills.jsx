import { SpotlightCard } from "@/components/ui/spotlight-card";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Database, Server, Code, Terminal, Cpu, Globe } from "lucide-react";

const SkillBadge = ({ skill, level }) => (
  <div className="mb-6">
    <div className="flex justify-between items-end mb-2">
      <span className="text-white font-bold text-sm tracking-wider uppercase">
        {skill}
      </span>
      <span className="text-[#4C91C9] font-mono text-xs">{level}%</span>
    </div>
    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full bg-[#4C91C9]"
      />
    </div>
  </div>
);

const SkillCategory = ({ title, icon: Icon, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="group h-full"
  >
    <SpotlightCard className="p-8 h-full border-gradient">
      <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className="w-12 h-12 bg-[#4C91C9]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#4C91C9]/20 transition-colors">
          <Icon className="w-6 h-6 text-[#4C91C9]" />
        </div>
        <h3 className="text-xl font-bold text-white transition-colors">
          {title}
        </h3>
      </div>
      <div className="relative z-10">
        {skills.map((s, i) => (
          <SkillBadge key={i} skill={s.name} level={s.level} />
        ))}
      </div>
    </SpotlightCard>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Core",
      icon: Server,
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Express.js", level: 90 },
        { name: "RESTful APIs", level: 92 },
        { name: "Microservices", level: 85 },
      ],
    },
    {
      title: "Data Systems",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "SQL / MySQL", level: 85 },
        { name: "Redis", level: 88 },
        { name: "Elasticsearch", level: 80 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Terminal,
      skills: [
        { name: "Docker", level: 82 },
        { name: "AWS S3", level: 85 },
        { name: "Git / GitHub", level: 90 },
        { name: "Postman", level: 95 },
      ],
    },
    {
      title: "Frontend Hybrid",
      icon: Code,
      skills: [
        { name: "React.js", level: 85 },
        { name: "Angular", level: 75 },
        { name: "HTML5 / CSS3", level: 90 },
        { name: "Tailwind CSS", level: 88 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-40 bg-[#000101] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-modern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 sm:mb-6"
          >
            <span className="text-[#4C91C9] font-black tracking-[0.4em] uppercase text-xs px-6 py-2 border border-[#4C91C9]/20 rounded-full bg-[#4C91C9]/5">
              Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-white mb-4 sm:mb-8 tracking-tighter"
          >
            Technical{" "}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#4C91C9] to-[#fbc72d] bg-clip-text text-transparent mb-4 pb-4"
            >
              Arsenal
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            A comprehensive set of tools and technologies I've mastered to build
            enterprise-grade digital products.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {skillCategories.map((cat, i) => (
            <SkillCategory key={i} {...cat} delay={i * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-[#080809] border border-white/5 rounded-[2.5rem] text-center border-gradient relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-modern opacity-[0.05] pointer-events-none" />
          <h3 className="text-white font-black text-2xl mb-10 tracking-tight uppercase">
            Infrastructure &{" "}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-bold bg-gradient-to-r from-[#4C91C9] to-[#fbc72d] bg-clip-text text-transparent mb-4 pb-4"
            >
              Ecosystem
            </motion.span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {[
              "Amazon S3",
              "Redis Labs",
              "BullMQ",
              "PM2 Runtime",
              "Elastic Cloud",
              "NGINX Reverse Proxy",
              "Docker Swarm",
              "Ubuntu Core",
            ].map((item, i) => (
              <span
                key={i}
                className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-white/40 text-xs font-black uppercase tracking-widest hover:border-[#4C91C9]/30 hover:text-[#4C91C9] hover:bg-[#4C91C9]/5 transition-all duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
