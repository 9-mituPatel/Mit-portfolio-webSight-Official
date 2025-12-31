import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
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
      <div className="relative h-full bg-[#080809] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#4353FF]/30 hover:shadow-[0_0_30px_rgba(67,83,255,0.1)]">
        {/* Glow effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#4353FF]/10 blur-[60px] rounded-full group-hover:bg-[#4353FF]/20 transition-all duration-500" />

        <div className="p-8 flex flex-col h-full relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-[#4353FF]/30 transition-colors">
              <Code className="w-6 h-6 text-[#4353FF]" />
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#94A3B8] hover:text-white transition-colors"
            >
              <ArrowUpRight className="w-6 h-6" />
            </a>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#4353FF] transition-colors">
            {project.title}
          </h3>

          <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] font-bold uppercase tracking-wider text-[#4353FF]/80 bg-[#4353FF]/5 px-3 py-1 rounded-full border border-[#4353FF]/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
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
      technologies: ["Node.js", "SQL", "Strapi", "JWT", "CMS"],
      liveUrl: "https://www.linkedin.com/company/boundev/"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-[#000101] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Featured <span className="text-[#4353FF]">Work</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-[#4353FF] mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#94A3B8] text-lg max-w-2xl mx-auto"
          >
            A compilation of projects where I've specialized in backend architecture,
            API development, and cloud integrations.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#4353FF]/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default Projects;