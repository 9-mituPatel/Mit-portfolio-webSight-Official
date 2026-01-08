import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Code, ArrowUpRight, Github, Globe, Sparkles, Layers, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border glow on hover */}
      <motion.div
        className="absolute -inset-[1px] rounded-[2rem] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${project.color}50, transparent, ${project.color}30)`,
        }}
      />

      <SpotlightCard className="relative p-8 lg:p-10 flex flex-col h-full border-gradient rounded-[2rem] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-grid-modern opacity-[0.04] pointer-events-none" />

        {/* Header */}
        <div className="flex justify-between items-start mb-8 relative z-10">
<<<<<<< HEAD
          <motion.div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
            style={{
              backgroundColor: `${project.color}15`,
              borderColor: `${project.color}30`,
              borderWidth: '1px',
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
=======
          <div className="p-4 bg-[#4C91C9]/10 rounded-2xl border border-[#4C91C9]/20 group-hover:scale-110 transition-transform duration-500">
            <Code className="w-8 h-8 text-[#4C91C9]" />
          </div>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white/40 hover:text-white transition-all duration-300 pointer-events-auto"
            whileHover={{ rotate: 45, scale: 1.1 }}
>>>>>>> ab60e23 (GoCodexa Commit)
          >
            <project.icon className="w-7 h-7" style={{ color: project.color }} />
          </motion.div>

          <div className="flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
              </motion.a>
            )}
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 45 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

<<<<<<< HEAD
        {/* Category badge */}
        <div className="mb-4 relative z-10">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{
              backgroundColor: `${project.color}10`,
              color: project.color,
              borderColor: `${project.color}25`,
              borderWidth: '1px',
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 group-hover:text-[#4353FF] transition-colors duration-300 leading-tight relative z-10">
=======
        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#4C91C9] transition-colors duration-300 tracking-tight relative z-10">
>>>>>>> ab60e23 (GoCodexa Commit)
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm lg:text-base leading-relaxed mb-8 flex-grow font-medium relative z-10">
          {project.description}
        </p>

<<<<<<< HEAD
        {/* Key metric */}
        {project.metric && (
          <div className="mb-6 relative z-10">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#27ca40]/10 border border-[#27ca40]/20"
              whileHover={{ scale: 1.02 }}
=======
        <div className="flex flex-wrap gap-2.5 pt-6 border-t border-white/5 relative z-10">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-black uppercase tracking-widest text-white/40 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 group-hover:border-[#4C91C9]/20 group-hover:text-[#4C91C9] transition-all duration-300"
>>>>>>> ab60e23 (GoCodexa Commit)
            >
              <Zap className="w-4 h-4 text-[#27ca40]" />
              <span className="text-[#27ca40] text-sm font-semibold">{project.metric}</span>
            </motion.div>
          </div>
        )}

        {/* Technologies */}
        <div className="pt-6 border-t border-white/[0.06] relative z-10">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                className="text-[11px] font-bold uppercase tracking-widest text-white/40 bg-white/[0.03] px-3 py-1.5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  color: project.color,
                  borderColor: `${project.color}40`,
                  backgroundColor: `${project.color}10`,
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
            background: `linear-gradient(to bottom left, ${project.color}08, transparent)`,
          }}
        />

        {/* Hover overlay effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#4353FF]/5 to-transparent pointer-events-none rounded-[2rem]"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </SpotlightCard>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
<<<<<<< HEAD
      title: "V-KYC Video Call System",
      description: "Self-hosted Video-KYC (V-CIP) solution with mediasoup WebRTC SFU. Single-handedly developed with STUN/TURN server, video streaming, call recording service, and high-quality audio/video handling. Built for one-to-one sessions with minimum CPU usage.",
      technologies: ["Node.js", "Angular.js", "Mediasoup", "coturn", "FFmpeg", "Redis", "MongoDB"],
      liveUrl: "https://uat.agentportal.omnicard.co.in/",
      category: "WebRTC",
      icon: Layers,
      color: "#f59e0b",
      metric: "HD Video Quality"
    },
    {
      title: "OmniFastag",
      description: "FastTag management system with role-based UI for admin, distributor, agent, and user dashboards. Single-handedly developed and deployed with RESTful APIs and JWT authentication.",
      technologies: ["React.js", "Node.js", "MongoDB", "Redis", "Express.js"],
      liveUrl: "http://omnifastaguat.website.s3-website.ap-south-1.amazonaws.com/login",
      category: "Fintech",
      icon: Layers,
      color: "#4353FF",
      metric: "4 User Roles"
    },
    {
      title: "Youth Education - NCERT",
      description: "Comprehensive education platform with paper generation service, backend APIs, web version, mobile applications, admin panel, and notification microservice. Scalable REST APIs with Redis caching optimization.",
      technologies: ["Node.js", "Express.js", "React.js", "Redis", "Amazon S3", "SQL", "MongoDB"],
      liveUrl: "https://play.google.com/store/apps/details?id=youth.ncert.papergeneration&hl=en_IN",
      category: "EdTech",
      icon: Code,
      color: "#6366f1",
      metric: "10K+ Users"
    },
    {
      title: "ECMS: Omni Card",
      description: "High-performance backend system handling migrations for 50Cr+ records in single table. Integrated Elasticsearch for lightning-fast search on customer card data.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Elasticsearch", "BullMQ", "Redis", "PM2"],
      liveUrl: "https://ecms.omnicard.in/",
      category: "Enterprise",
      icon: Zap,
      color: "#22d3ee",
      metric: "50Cr+ Records"
    },
    {
      title: "Study Master",
      description: "Secure authentication system with JWT for student data protection. Integrated real-time lecture streaming with interactive features and video streaming service.",
      technologies: ["Node.js", "Express.js", "SQL", "JWT", "Socket.IO"],
      liveUrl: "https://play.google.com/store/apps/details?id=co.kevin.gnfgm&hl=en_IN",
      category: "EdTech",
      icon: Globe,
      color: "#10b981",
      metric: "Real-time Streaming"
    },
    {
      title: "SoundBox Inventory",
      description: "Payment-related SoundBox inventory management system. Single-handedly developed and deployed with complete inventory tracking and management features.",
      technologies: ["Node.js", "React.js", "Express.js", "Redis", "MongoDB"],
      liveUrl: "#",
      category: "Fintech",
      icon: Layers,
      color: "#8b5cf6",
      metric: "Single-hand Developed"
    },
    {
      title: "Healthray",
      description: "AI-powered hospital management system with automation tools and patient care systems. Enhances medical experience with real-time collaboration. Complete ERP product for healthcare.",
      technologies: ["React.js", "Node.js", "SQL", "Redis"],
      liveUrl: "https://healthray.com/",
      category: "Healthcare ERP",
      icon: Zap,
      color: "#ef4444",
      metric: "AI-Powered"
    },
    {
      title: "BounDev CMS",
      description: "Comprehensive blog management API with role-based access control and JWT authentication using Strapi CMS.",
      technologies: ["React.js", "Strapi", "Node.js", "JWT"],
      liveUrl: "https://www.boundev.com/",
      category: "CMS",
      icon: Code,
      color: "#ec4899",
      metric: "Custom CMS"
    },
    {
      title: "Metawar (Omnicard)",
      description: "Demo product for jewelry selling applications including payment service integration. Single-handedly implemented frontend and backend, deployed to production.",
      technologies: ["React.js", "Node.js"],
      liveUrl: "https://uat.metaver.website.s3-website.ap-south-1.amazonaws.com/",
      category: "E-Commerce",
      icon: Globe,
      color: "#f97316",
      metric: "Payment Integrated"
    },
    {
      title: "SDB - Sparkle Diamond Boutique",
      description: "Freelancing project for diamond-related buying and selling community. Complete platform for diamond trade and community engagement.",
      technologies: ["Flutter", "Node.js", "React.js", "SQL"],
      liveUrl: "#",
      category: "Freelance",
      icon: Layers,
      color: "#06b6d4",
      metric: "Diamond Trading"
    },
    {
      title: "HevMed",
      description: "Medical shop billing system with complete ERP functionality. Handled product communication with clients and requirement understanding as Tech Lead position at Webito Infotech.",
      technologies: ["Node.js", "SQL", "ERP"],
      liveUrl: "#",
      category: "Healthcare ERP",
      icon: Zap,
      color: "#84cc16",
      metric: "Complete ERP"
    },
    {
      title: "Omni Website Redesign",
      description: "Complete frontend redesign of the Omnicard website using Angular.js with modern UI/UX principles.",
      technologies: ["Angular.js", "TypeScript", "CSS"],
      liveUrl: "https://omnicard.in/",
      category: "Frontend",
      icon: Code,
      color: "#a855f7",
      metric: "UI Redesign"
    },
    {
      title: "Odoo VIP Login System",
      description: "Custom solution to bypass default Odoo login system with enhanced VIP login functionality for enterprise clients.",
      technologies: ["Node.js", "Python", "Odoo"],
      liveUrl: "#",
      category: "Enterprise",
      icon: Globe,
      color: "#14b8a6",
      metric: "Custom Auth"
    },
    {
      title: "Solar Products Inventory",
      description: "PowerPoint-based inventory management system for solar products with complete tracking and management features.",
      technologies: ["Node.js", "React.js", "MongoDB"],
      liveUrl: "#",
      category: "Inventory",
      icon: Layers,
      color: "#eab308",
      metric: "Solar Products"
    }
  ];

  return (
    <section id="projects" className="py-32 md:py-44 bg-[#000101] relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.06] pointer-events-none" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(67, 83, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
=======
      title: "OmniFastag",
      description:
        "FastTag management system with role-based UI for admin, distributor, agent, and user dashboards. Implemented RESTful APIs with JWT authentication.",
      technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "Redis"],
      liveUrl:
        "http://omnifastaguat.website.s3-website.ap-south-1.amazonaws.com/",
    },
    {
      title: "YouthEducation",
      description:
        "Scalable REST APIs supporting mobile and admin platforms with Redis caching optimization for NCERT paper generation.",
      technologies: ["Node.js", "Express.js", "react.js", "Redis", "Amazon S3"],
      liveUrl:
        "https://play.google.com/store/apps/details?id=youth.ncert.papergeneration&hl=en_IN",
    },
    {
      title: "ECMS: Omni Card",
      description:
        "High-performance backend system with Elasticsearch integration for lightning-fast search on customer card data.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Elasticsearch",
        "BullMQ",
      ],
      liveUrl: "https://ecms.omnicard.in/",
    },
    {
      title: "Study Master",
      description:
        "Secure authentication system with JWT for student data protection. Integrated real-time lecture streaming with interactive chat.",
      technologies: ["Node.js", "Express.js", "SQL", "JWT", "Socket.IO"],
      liveUrl:
        "https://play.google.com/store/apps/details?id=co.kevin.gnfgm&hl=en_IN",
    },
    {
      title: "V-KYC Omni Card",
      description:
        "Self-hosted Video-KYC (V-CIP) demo with mediasoup WebRTC SFU, client-side recording, and server-side ffmpeg processing.",
      technologies: ["Angular", "Node.js", "Mediasoup", "coturn", "ffmpeg"],
      liveUrl: "https://www.linkedin.com/company/boundev/",
    },
    {
      title: "BounDev CMS",
      description:
        "Comprehensive blog management API with role-based access control and JWT authentication using Strapi CMS.",
      technologies: ["Node.js", "Strapi", "JWT", "PostgreSQL"],
      liveUrl: "https://www.linkedin.com/company/boundev/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-[#000101] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-modern opacity-10 pointer-events-none" />
>>>>>>> ab60e23 (GoCodexa Commit)

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
<<<<<<< HEAD
            <span className="tag-primary flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              Featured Work
=======
            <span className="text-[#4C91C9] font-black tracking-[0.3em] uppercase text-sm px-6 py-2 border border-[#4C91C9]/20 rounded-full bg-[#4C91C9]/5">
              Our Portfolio
>>>>>>> ab60e23 (GoCodexa Commit)
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-xl text-white mb-8"
          >
            Selected{" "}
<<<<<<< HEAD
            <span className="relative inline-block">
              <span className="gradient-text-primary">Projects</span>
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#4353FF] to-[#6366f1] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
=======
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-bold bg-gradient-to-r from-[#4C91C9] to-[#fbc72d] bg-clip-text text-transparent mb-4 pb-4"
            >
              Projects
            </motion.span>
>>>>>>> ab60e23 (GoCodexa Commit)
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body-lg max-w-2xl mx-auto"
          >
            A collection of high-impact backend systems and full-stack
            applications engineered for performance and scale.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

<<<<<<< HEAD
        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/9-mituPatel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white/60 font-semibold hover:text-white hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
=======
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/4 h-1/2 bg-[#4C91C9]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-[#4C91C9]/5 blur-[120px] rounded-full pointer-events-none" />
>>>>>>> ab60e23 (GoCodexa Commit)
    </section>
  );
};

<<<<<<< HEAD
export default Projects;
=======
export default Projects;
>>>>>>> ab60e23 (GoCodexa Commit)
