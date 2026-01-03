import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Code, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <SpotlightCard className="p-10 flex flex-col h-full border-gradient">
        <div className="flex justify-between items-start mb-8 relative z-10">
          <div className="p-4 bg-[#4353FF]/10 rounded-2xl border border-[#4353FF]/20 group-hover:scale-110 transition-transform duration-500">
            <Code className="w-8 h-8 text-[#4353FF]" />
          </div>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white/40 hover:text-white transition-all duration-300 pointer-events-auto"
            whileHover={{ rotate: 45, scale: 1.1 }}
          >
            <ArrowUpRight className="w-6 h-6" />
          </motion.a>
        </div>

        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#4353FF] transition-colors duration-300 tracking-tight relative z-10">
          {project.title}
        </h3>

        <p className="text-white/50 text-base leading-relaxed mb-8 flex-grow font-medium relative z-10">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2.5 pt-6 border-t border-white/5 relative z-10">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-black uppercase tracking-widest text-white/40 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 group-hover:border-[#4353FF]/20 group-hover:text-[#4353FF] transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "OmniFastag",
      description: "FastTag management system with role-based UI for admin, distributor, agent, and user dashboards. Implemented RESTful APIs with JWT authentication.",
      technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "Redis"],
      liveUrl: "http://omnifastaguat.website.s3-website.ap-south-1.amazonaws.com/"
    },
    {
      title: "YouthEducation",
      description: "Scalable REST APIs supporting mobile and admin platforms with Redis caching optimization for NCERT paper generation.",
      technologies: ["Node.js", "Express.js", "react.js", "Redis", "Amazon S3"],
      liveUrl: "https://play.google.com/store/apps/details?id=youth.ncert.papergeneration&hl=en_IN"
    },
    {
      title: "ECMS: Omni Card",
      description: "High-performance backend system with Elasticsearch integration for lightning-fast search on customer card data.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Elasticsearch", "BullMQ"],
      liveUrl: "https://ecms.omnicard.in/"
    },
    {
      title: "Study Master",
      description: "Secure authentication system with JWT for student data protection. Integrated real-time lecture streaming with interactive chat.",
      technologies: ["Node.js", "Express.js", "SQL", "JWT", "Socket.IO"],
      liveUrl: "https://play.google.com/store/apps/details?id=co.kevin.gnfgm&hl=en_IN"
    },
    {
      title: "V-KYC Omni Card",
      description: "Self-hosted Video-KYC (V-CIP) demo with mediasoup WebRTC SFU, client-side recording, and server-side ffmpeg processing.",
      technologies: ["Angular", "Node.js", "Mediasoup", "coturn", "ffmpeg"],
      liveUrl: "https://www.linkedin.com/company/boundev/"
    },
    {
      title: "BounDev CMS",
      description: "Comprehensive blog management API with role-based access control and JWT authentication using Strapi CMS.",
      technologies: ["Node.js", "Strapi", "JWT", "PostgreSQL"],
      liveUrl: "https://www.linkedin.com/company/boundev/"
    }
  ];

  return (
    <section id="projects" className="py-40 bg-[#000101] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-modern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="text-[#4353FF] font-black tracking-[0.3em] uppercase text-sm px-6 py-2 border border-[#4353FF]/20 rounded-full bg-[#4353FF]/5">
              Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter"
          >
            Selected <span className="text-[#4353FF] text-glow">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 text-xl md:text-2xl max-w-3xl mx-auto font-medium"
          >
            A collection of high-impact backend systems and full-stack applications
            engineered for performance and scale.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/4 h-1/2 bg-[#4353FF]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-[#4353FF]/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};


export default Projects;