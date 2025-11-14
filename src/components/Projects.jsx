import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Layers, Code, ArrowUpRight } from "lucide-react";
import { motion, useInView, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import Interactive3DCard from "@/components/Interactive3DCard";
import RippleButton from "@/components/RippleButton";

const EnhancedProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const rotateX = useMotionValue(0); 
  const rotateY = useMotionValue(0);
  const shadowBlur = useMotionValue(20);
  const shadowOpacity = useMotionValue(0.25);
  
  // Glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    
    // Calculate rotation based on mouse position
    const x = (e.clientX - centerX) / (width / 2);
    const y = (e.clientY - centerY) / (height / 2);
    
    rotateY.set(x * 7); // Limit rotation to 7 degrees
    rotateX.set(-y * 7);
    shadowBlur.set(30);
    shadowOpacity.set(0.35);
    
    // Calculate for glow effect
    const px = Math.abs(e.clientX - rect.left) / width;
    const py = Math.abs(e.clientY - rect.top) / height;
    mouseX.set(px);
    mouseY.set(py);
  };
  
  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    shadowBlur.set(20);
    shadowOpacity.set(0.25);
    setIsHovered(false);
  };
  
  const cardStyle = {
    transform: useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    boxShadow: useMotionTemplate`0 ${shadowBlur}px 50px -15px rgba(0, 0, 0, ${shadowOpacity})`,
    transition: 'box-shadow 0.3s, transform 0.3s',
  };
  
  const glowStyle = {
    background: useMotionTemplate`
      radial-gradient(
        circle at ${mouseX * 100}% ${mouseY * 100}%, 
        rgba(var(--accent-purple-rgb), 0.15), 
        transparent 40%
      )
    `,
  };
  
  return (
    <motion.div
      className="group h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.7, 
        ease: [0.21, 0.45, 0.15, 1],
        delay: 0.1 * index 
      }}
      whileHover={{ y: -8 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        className="h-full relative z-10"
        style={cardStyle}
      >
        <Card className="h-full flex flex-col relative overflow-hidden border border-white/20 bg-background/50 backdrop-blur-lg">
          {/* Glow effect layer */}
          <motion.div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={glowStyle}
          />
          
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Subtle border glow */}
          <div className="absolute inset-0 rounded-xl border border-primary/10 group-hover:border-primary/30 transition-colors duration-500" />
          
          <CardHeader className="relative z-10">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <CardTitle className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <div className="flex gap-2 items-center">
                  <Layers className="w-4 h-4 text-primary/80" />
                  <p className="text-xs font-medium text-muted-foreground">Full-stack project</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Code className="w-5 h-5 text-primary" />
              </div>
            </div>
            <CardDescription className="text-muted-foreground leading-relaxed mt-4">
              {project.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="flex-1 relative z-10">
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                Key Features:
              </h4>
              <ul className="space-y-2">
                {project.features.slice(0, 4).map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    className="text-sm text-muted-foreground flex items-start"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span className="w-1 h-1 bg-primary/60 rounded-full mt-2 mr-2 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {project.technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge 
                    variant="outline" 
                    className="bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-colors duration-200"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>

          <CardFooter className="flex gap-3 relative z-10">
            <motion.div 
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-primary/30 hover:border-primary bg-background/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
              >
                <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-6 transition-transform duration-300" />
                Code
              </Button>
            </motion.div>
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-primary to-accent-purple/80 hover:from-primary/90 hover:to-accent-purple/70 shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <ArrowUpRight className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                View Live
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const projects = [
    {
      title: "OmniFastag",
      description: "Led the development of a comprehensive FastTag management system with role-based UI for admin, distributor, agent, and user dashboards. Implemented RESTful APIs with JWT authentication.",
      technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT", "REST APIs", "BullMQ", "PM2", "Amazon S3", "Redis", "Elasticsearch"],
      features: [
        "Multi-role dashboard system (Admin, Distributor, Agent, User)",
        "RESTful API architecture with comprehensive role management",
        "MongoDB database operations and optimization",
        "JWT-based authentication and authorization",
        "Led project development team with quality control",
        "React.js frontend integration"
      ],
      githubUrl: "#",
      liveUrl: "http://omnifastaguat.website.s3-website.ap-south-1.amazonaws.com/"
    },
    {
      title: "YouthEducation",
      description: "Developed scalable REST APIs supporting mobile and admin platforms with Redis caching optimization. Coordinated directly with clients for requirement gathering.",
      technologies: ["Node.js", "Express.js","react.js", "Redis", "Amazon S3", "SQL", "MongoDB", "JWT", "REST APIs", "Sequelize","Db Migration","microservices","notification"],
      features: [
        "Scalable REST APIs for mobile and admin platforms",
        "Redis caching for optimized data access",
        "Amazon S3 integration for file storage",
        "Direct client coordination for requirements",
        "Multi-database architecture (SQL + MongoDB)",
        "Performance optimizations with caching strategies"
      ],
      githubUrl: "#",
      liveUrl: "https://play.google.com/store/apps/details?id=youth.ncert.papergeneration&hl=en_IN"
    },
    {
      title: "ECMS: Omni Card",
      description: "Built high-performance backend system with Elasticsearch integration for lightning-fast search on customer data. Used PM2 for zero-downtime deployments.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "Elasticsearch", "BullMQ", "PM2"],
      features: [
        "High-performance backend handling heavy traffic",
        "Elasticsearch integration for fast search functionality",
        "Redis caching for optimal performance",
        "BullMQ for background job processing",
        "PM2 process management for zero-downtime",
        "Customer and transaction data management"
      ],
      githubUrl: "#",
      liveUrl: "https://ecms.omnicard.in/"
    },
    {
      title: "Study Master",
      description: "Developed secure authentication system with JWT for student data protection. Integrated real-time lecture streaming with interactive chat for online classes.",
      technologies: ["Node.js", "Express.js", "SQL", "JWT", "Real-time Streaming"],
      features: [
        "Secure JWT authentication for student data protection",
        "Real-time lecture streaming capabilities",
        "Interactive chat system for live classes",
        "APIs supporting mobile and admin platforms",
        "SQL database integration",
        "Student data security and privacy protocols"
      ],
      githubUrl: "#",
      liveUrl: "https://play.google.com/store/apps/details?id=co.kevin.gnfgm&hl=en_IN"
    },
    {
      title: "BounDev",
      description: "Designed and developed a comprehensive blog management API with role-based access control and JWT authentication using Strapi CMS.",
      technologies: ["Node.js", "Express.js", "SQL", "Strapi", "JWT", "CMS"],
      features: [
        "Blog management API with full CRUD operations",
        "Role-based access control system",
        "JWT authentication and authorization",
        "Strapi CMS integration",
        "SQL database management",
        "Content management workflow"
      ],
      githubUrl: "#",
      liveUrl: "https://www.linkedin.com/company/boundev/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-primary/5" />
      
      {/* Cinematic background with dynamic gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-accent-purple/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.08),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center mb-16"
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
            }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-foreground mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6" />
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              A collection of projects showcasing my backend development skills and problem-solving abilities.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {projects.map((project, index) => (
              <EnhancedProjectCard 
                key={index} 
                project={project} 
                index={index} 
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;