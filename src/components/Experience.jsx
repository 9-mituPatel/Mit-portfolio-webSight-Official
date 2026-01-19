import { SpotlightCard } from "@/components/ui/spotlight-card";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer & Tech Lead",
      company: "Braincuber Technologies Pvt Ltd",
      location: "Surat, Gujarat",
      period: "Aug 2024 - Present",
      description: [
        "Architecting scalable systems with Node.js and React.js",
        "Leading a mission-critical backend migration to microservices",
        "Managing cloud infrastructure on AWS and DigitalOcean",
        "Implementing advanced security protocols and JWT-based auth",
      ],
      technologies: ["Node.js", "MongoDB", "Docker", "Redis", "AWS"],
    },
    {
      title: "Backend Specialist (Hybrid)",
      company: "VNSGU & Freelance Projects",
      location: "Surat, India",
      period: "2022 - 2024",
      description: [
        "Developed custom ERP solutions for local logistics firms",
        "Built responsive frontend dashboards using React and Bootstrap",
        "Optimized database queries for 40% faster load times",
        "Successfully delivered 5+ full-stack freelance projects",
      ],
      technologies: ["Node.js", "React.js", "MySQL", "MongoDB", "Nginx"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-40 bg-[#000101] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-modern opacity-10 pointer-events-none" />

      {/* Background line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="text-[#4C91C9] font-black tracking-[0.4em] uppercase text-xs px-6 py-2 border border-[#4C91C9]/20 rounded-full bg-[#4C91C9]/5">
              Path
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter"
          >
            Professional{" "}
            <span className="text-[#4C91C9] text-glow">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 text-xl font-medium max-w-2xl mx-auto"
          >
            A track record of building robust systems and leading technical
            initiatives across diverse projects.
          </motion.p>
        </div>

        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Spacer for timeline effect */}
              <div className="flex-1 hidden md:block" />

              {/* Timeline Center Point */}
              <div className="relative z-10 hidden md:block">
                <div className="w-6 h-6 rounded-full bg-[#4C91C9] border-[6px] border-[#000101] shadow-[0_0_20px_rgba(67,83,255,0.6)] group-hover:scale-125 transition-transform duration-500" />
              </div>

              {/* Card Content */}
              <div className="flex-1 w-full">
                <SpotlightCard className="p-12 border-gradient relative overflow-hidden group">
                  <div className="absolute inset-0 bg-grid-modern opacity-[0.05] pointer-events-none" />

                  <div className="flex flex-col mb-10 gap-6 relative z-10">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div className="space-y-2">
                        <h3 className="text-3xl font-black text-white group-hover:text-[#4C91C9] transition-colors duration-300 tracking-tight leading-none uppercase">
                          {exp.title}
                        </h3>
                        <p className="text-[#4C91C9] font-black text-xs tracking-[0.3em] uppercase">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-4 text-white/30 text-[10px] font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3 text-[#4C91C9]" />{" "}
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-[#4C91C9]" />{" "}
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-5 mb-12 relative z-10">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-5 text-white/50 text-base font-medium leading-relaxed group/item"
                      >
                        <div className="mt-2 w-2 h-2 rounded-full bg-[#4C91C9]/30 group-hover/item:bg-[#4C91C9] transition-colors duration-300 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 pt-8 border-t border-white/5 relative z-10">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/30 text-[10px] font-black uppercase tracking-widest group-hover:text-[#4C91C9] group-hover:border-[#4C91C9]/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
