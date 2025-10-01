import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Server, Code, Zap, Trophy, Users, Calendar, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const highlights = [
    {
      icon: Database,
      title: "MongoDB & Database Management",
      description: "Expert in MongoDB, MySQL, Redis, and Amazon RDS with proven experience in database operations, optimization, and designing scalable data structures for enterprise applications."
    },
    {
      icon: Server,
      title: "Backend Systems",
      description: "Specialized in Node.js and Express.js for building high-performance, scalable backend systems with RESTful APIs, JWT authentication, and secure data handling."
    },
    {
      icon: Code,
      title: "Full-Stack MERN Development",
      description: "Comprehensive experience in React.js, HTML5, CSS3, Bootstrap, jQuery, and modern frontend technologies seamlessly integrated with Node.js and Express.js backend solutions."
    },
    {
      icon: Zap,
      title: "Enterprise Solutions",
      description: "Proven track record in developing RESTful APIs, role-based UI systems, and multi-role dashboards for admin, distributor, agent, and user platforms across various industries."
    }
  ];

  const stats = [
    { 
      icon: Trophy, 
      number: 5, 
      suffix: "+", 
      label: "Projects Completed",
      color: "text-yellow-500"
    },
    { 
      icon: Calendar, 
      number: 1.5, 
      suffix: "+", 
      label: "Years Experience",
      color: "text-blue-500"
    },
    { 
      icon: Users, 
      number: 1, 
      suffix: "+", 
      label: "Companies Worked",
      color: "text-green-500"
    },
    { 
      icon: Star, 
      number: 95, 
      suffix: "%", 
      label: "Success Rate",
      color: "text-purple-500"
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
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Elegant Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-pastel-lavender/10 to-pastel-mint/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(160,200,180,0.05),transparent_50%)]" />
      
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6" />
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              I'm a results-driven MERN Stack Developer with 1.5 years of hands-on experience in designing and building scalable, 
              high-performance web applications using MongoDB, Express.js, React.js, and Node.js. Proficient in crafting RESTful APIs 
              and implementing secure, maintainable full-stack systems.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group"
                >
                  <Card className="text-center relative overflow-hidden border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500">
                    {/* Glassmorphism overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardContent className="p-6 relative z-10">
                      <motion.div
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 10 
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className={`w-12 h-12 mx-auto mb-4 ${stat.color} flex items-center justify-center`}
                      >
                        <IconComponent className="w-8 h-8" />
                      </motion.div>
                      <div className="text-3xl font-bold text-foreground mb-2">
                        <AnimatedCounter 
                          end={stat.number} 
                          suffix={stat.suffix}
                          duration={2.5}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Highlights Section */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
          >
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group"
                >
                  <Card className="h-full relative overflow-hidden border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500">
                    {/* Glassmorphism overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardHeader className="relative z-10">
                      <motion.div 
                        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5 
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <IconComponent className="w-6 h-6 text-primary" />
                      </motion.div>
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                        {highlight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Journey and Approach Section */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            <motion.div variants={cardVariants} className="group">
              <Card className="h-full relative overflow-hidden border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    My Journey
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    My journey in MERN Stack development began with a Bachelor's in Computer Application from Utter Gujarat College, VNSGU (2021-2024). 
                    Through practical experience at Braincuber Technologies Pvt Ltd, I've mastered the complete MERN stack - MongoDB, Express.js, React.js, and Node.js. 
                    I specialize in designing and implementing RESTful APIs, role-based UI systems, and multi-role dashboards for admin, distributor, agent, and user platforms 
                    across various industries including fintech and education.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} className="group">
              <Card className="h-full relative overflow-hidden border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    Technical Approach
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I believe in writing clean, maintainable code that scales. My approach focuses on:
                  </p>
                  <ul className="space-y-3">
                    {[
                      { title: "Problem Solving", desc: "Understanding requirements thoroughly before implementing solutions" },
                      { title: "Performance First", desc: "Optimizing queries and code for maximum efficiency" },
                      { title: "Continuous Learning", desc: "Staying updated with emerging technologies and industry trends" }
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start text-muted-foreground"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <div>
                          <strong className="text-foreground">{item.title}:</strong> {item.desc}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;