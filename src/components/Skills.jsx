import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Database, Server, Code, Terminal, Cpu, Globe } from "lucide-react";

const SkillBadge = ({ skill, level }) => (
  <div className="mb-6">
    <div className="flex justify-between items-end mb-2">
      <span className="text-white font-bold text-sm tracking-wider uppercase">{skill}</span>
      <span className="text-[#4353FF] font-mono text-xs">{level}%</span>
    </div>
    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full bg-[#4353FF]"
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
    className="bg-[#080809] border border-white/5 rounded-3xl p-8 hover:border-[#4353FF]/20 transition-all group"
  >
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-12 bg-[#4353FF]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#4353FF]/20 transition-colors">
        <Icon className="w-6 h-6 text-[#4353FF]" />
      </div>
      <h3 className="text-xl font-bold text-white transition-colors">{title}</h3>
    </div>
    <div>
      {skills.map((s, i) => (
        <SkillBadge key={i} skill={s.name} level={s.level} />
      ))}
    </div>
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
        { name: "Microservices", level: 85 }
      ]
    },
    {
      title: "Data Systems",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "SQL / MySQL", level: 85 },
        { name: "Redis", level: 88 },
        { name: "Elasticsearch", level: 80 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Terminal,
      skills: [
        { name: "Docker", level: 82 },
        { name: "AWS S3", level: 85 },
        { name: "Git / GitHub", level: 90 },
        { name: "Postman", level: 95 }
      ]
    },
    {
      title: "Frontend Hybrid",
      icon: Code,
      skills: [
        { name: "React.js", level: 85 },
        { name: "Angular", level: 75 },
        { name: "HTML5 / CSS3", level: 90 },
        { name: "Tailwind CSS", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-[#000101] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Technical <span className="text-[#4353FF]">Stack</span>
          </motion.h2>
          <div className="h-1 w-20 bg-[#4353FF] mx-auto mb-8" />
          <p className="text-[#94A3B8] text-lg">
            A comprehensive set of tools and technologies I've mastered to build
            enterprise-grade digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCategory key={i} {...cat} delay={i * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-[#080809] border border-white/5 rounded-3xl text-center"
        >
          <h3 className="text-white font-bold text-xl mb-6">Cloud & Infrastructure</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Amazon S3", "Redis", "BullMQ", "PM2", "Elasticsearch", "Nginx", "Docker Desktop", "Ubuntu Server"].map((item, i) => (
              <span key={i} className="px-5 py-2 rounded-full border border-white/5 bg-white/5 text-[#94A3B8] text-sm hover:border-[#4353FF]/30 hover:text-white transition-all">
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