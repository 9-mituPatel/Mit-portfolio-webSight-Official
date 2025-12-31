import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor's in Computer Application",
      institution: "Utter Gujarat College, VNSGU",
      location: "Gujarat, India",
      period: "2021 - 2024",
      description: "Focused on core programming principles, database management systems, and modern web application architecture. Specialized in MERN stack during the final years.",
      subjects: ["Data Structures", "DBMS", "Web Dev", "Software Engineering", "JS", "SQL"]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Gopinath Gurukul, Surat",
      location: "Surat, Gujarat",
      period: "2019 - 2021",
      description: "Foundational STEM education with a focus on Mathematics and Computer Science. Participated in various competitive coding events.",
      subjects: ["Math", "Physics", "Computer Science"]
    }
  ];

  return (
    <section id="education" className="py-32 bg-[#000101] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Academic <span className="text-[#4353FF]">Journey</span>
          </motion.h2>
          <div className="h-1 w-20 bg-[#4353FF] mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#080809] border border-white/5 rounded-3xl p-8 hover:border-[#4353FF]/20 transition-all group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#4353FF]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#4353FF]/20 transition-colors">
                  <GraduationCap className="w-6 h-6 text-[#4353FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#4353FF] transition-colors">{edu.degree}</h3>
                  <p className="text-[#94A3B8] text-sm">{edu.institution}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-[#94A3B8] text-xs font-mono mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {edu.period}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {edu.location}
                </div>
              </div>

              <p className="text-[#94A3B8] text-sm leading-relaxed mb-8">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {edu.subjects.map((sub, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[#94A3B8] text-[10px] font-bold uppercase tracking-wider">
                    {sub}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
