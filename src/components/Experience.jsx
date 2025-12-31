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
        "Implementing advanced security protocols and JWT-based auth"
      ],
      technologies: ["Node.js", "MongoDB", "Docker", "Redis", "AWS"]
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
        "Successfully delivered 5+ full-stack freelance projects"
      ],
      technologies: ["Node.js", "React.js", "MySQL", "MongoDB", "Nginx"]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-[#000101] relative">
      {/* Background line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Work <span className="text-[#4353FF]">History</span>
          </motion.h2>
          <div className="h-1 w-20 bg-[#4353FF] mx-auto" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Spacer for timeline effect */}
              <div className="flex-1 hidden md:block" />

              {/* Timeline Center Point */}
              <div className="relative z-10 hidden md:block">
                <div className="w-4 h-4 rounded-full bg-[#4353FF] border-4 border-[#000101] shadow-[0_0_15px_rgba(67,83,255,0.5)]" />
              </div>

              {/* Card Content */}
              <div className="flex-1 w-full">
                <div className="bg-[#080809] border border-white/5 rounded-3xl p-8 hover:border-[#4353FF]/20 transition-all group">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#4353FF] transition-colors">{exp.title}</h3>
                      <p className="text-[#4353FF] font-semibold text-sm tracking-wide uppercase">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end text-[#94A3B8] text-xs font-mono">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-3 h-3" /> {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-[#94A3B8] text-sm leading-relaxed">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4353FF]/40 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[#94A3B8] text-[10px] font-bold uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;