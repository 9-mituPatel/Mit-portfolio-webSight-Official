import { SpotlightCard } from "@/components/ui/spotlight-card";
import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor's in Computer Application",
      institution: "Utter Gujarat College, VNSGU",
      location: "Gujarat, India",
      period: "2021 - 2024",
      description:
        "Focused on core programming principles, database management systems, and modern web application architecture. Specialized in MERN stack during the final years.",
      subjects: [
        "Data Structures",
        "DBMS",
        "Web Dev",
        "Software Engineering",
        "JS",
        "SQL",
      ],
    },
    {
      degree: "Higher Secondary Education",
      institution: "Gopinath Gurukul, Surat",
      location: "Surat, Gujarat",
      period: "2019 - 2021",
      description:
        "Foundational STEM education with a focus on Mathematics and Computer Science. Participated in various competitive coding events.",
      subjects: ["Math", "Physics", "Computer Science"],
    },
  ];

  return (
    <section
      id="education"
      className="py-40 bg-[#000101] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-modern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="text-[#4C91C9] font-black tracking-[0.4em] uppercase text-xs px-6 py-2 border border-[#4C91C9]/20 rounded-full bg-[#4C91C9]/5">
              Academic
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter"
          >
            Scholastic{" "}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-bold bg-gradient-to-r from-[#4C91C9] to-[#fbc72d] bg-clip-text text-transparent mb-4 pb-4"
            >
              Background
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 text-xl font-medium max-w-2xl mx-auto"
          >
            The foundation of my technical expertise and problem-solving
            mindset.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <SpotlightCard className="p-10 border-gradient h-full">
                <div className="flex items-center gap-6 mb-10 relative z-10">
                  <div className="w-16 h-16 bg-[#4C91C9]/10 rounded-2xl flex items-center justify-center border border-[#4C91C9]/20 group-hover:scale-110 transition-transform duration-500">
                    <GraduationCap className="w-8 h-8 text-[#4C91C9]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-[#4C91C9] transition-colors leading-tight uppercase tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-[#4C91C9] font-black text-[10px] tracking-[0.3em] uppercase">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-white/30 text-[10px] font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-8 relative z-10 w-fit">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-[#4C91C9]" /> {edu.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-[#4C91C9]" /> {edu.location}
                  </div>
                </div>

                <p className="text-white/50 text-base leading-relaxed mb-10 font-medium relative z-10">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-2.5 pt-8 border-t border-white/5 relative z-10">
                  {edu.subjects.map((sub, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/30 text-[10px] font-black uppercase tracking-widest group-hover:text-[#4C91C9] group-hover:border-[#4C91C9]/20 transition-all duration-300"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
