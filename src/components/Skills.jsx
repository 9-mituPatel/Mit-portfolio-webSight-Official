import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Database, Server, Code, Wrench, Award, Zap } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animatedProgress, setAnimatedProgress] = useState({});
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Express.js", level: 90 },
        { name: "RESTful APIs", level: 88 },
        { name: "JWT Authentication", level: 85 }
      ]
    },
    {
      title: "Databases & Caching",
      skills: [
        { name: "MongoDB", level: 89 },
        { name: "MySQL", level: 87 },
        { name: "Redis", level: 85 },
        { name: "Elasticsearch", level: 80 }
      ]
    },
    {
      title: "Frontend & Styling",
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML5 & CSS3", level: 88 },
        { name: "Bootstrap", level: 85 },
        { name: "jQuery", level: 78 }
      ]
    },
    {
      title: "Tools & Cloud Services",
      skills: [
        { name: "Git & GitHub", level: 87 },
        { name: "Postman", level: 92 },
        { name: "Amazon S3", level: 82 },
        { name: "PM2", level: 85 }
      ]
    }
  ];

  const certifications = [
    "MERN Stack Development Expert",
    "Node.js Backend Specialist", 
    "MongoDB Database Operations",
    "Redis Caching & Performance",
    "RESTful API Design & Security",
    "Elasticsearch Integration",
    "JWT Authentication & Authorization",
    "Team Leadership & Project Management"
  ];

  const getSkillColor = (level) => {
    if (level >= 85) return "bg-green-500";
    if (level >= 70) return "bg-blue-500";
    if (level >= 55) return "bg-yellow-500";
    return "bg-red-500";
  };

  const categoryIcons = {
    "Backend Development": Server,
    "Databases": Database,
    "Frontend Technologies": Code,
    "Tools & Technologies": Wrench
  };

  useEffect(() => {
    if (isInView) {
      // Reset progress first
      setAnimatedProgress({});
      
      const timeouts = skillCategories.flatMap((category, index) =>
        category.skills.map((skill, idx) =>
          setTimeout(() => {
            setAnimatedProgress((prev) => ({ ...prev, [skill.name]: skill.level }));
          }, (index * 300) + (idx * 150) + 500) // Adjusted timing for better visibility
        )
      );
      return () => timeouts.forEach(clearTimeout);
    } else {
      // Reset when not in view
      setAnimatedProgress({});
    }
  }, [isInView]);

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
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background with animated gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/5"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(var(--secondary)/0.1), hsl(var(--background)), hsl(var(--primary)/0.05))",
            "linear-gradient(225deg, hsl(var(--primary)/0.05), hsl(var(--background)), hsl(var(--secondary)/0.1))",
            "linear-gradient(315deg, hsl(var(--secondary)/0.1), hsl(var(--background)), hsl(var(--primary)/0.05))"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Premium cinematic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-accent-purple/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(147,51,234,0.08),transparent_60%),radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
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
            <motion.h2 
              className="text-4xl md:text-5xl font-heading font-bold text-center text-foreground mb-4 bg-gradient-to-r from-foreground via-primary to-accent-purple bg-clip-text text-transparent"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              Technical Skills
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            />
            <motion.p 
              className="text-lg text-muted-foreground text-center max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
          >
            {skillCategories.map((category, index) => {
              const IconComponent = categoryIcons[category.title] || Code;
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
                      <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-3 group-hover:text-primary transition-colors duration-300">
                        <motion.div
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: 10,
                            color: "hsl(var(--primary))"
                          }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <IconComponent className="w-6 h-6" />
                        </motion.div>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="space-y-4">
                        {category.skills.map((skill, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-foreground flex items-center gap-2">
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ 
                                    duration: 2, 
                                    repeat: Infinity, 
                                    delay: idx * 0.2 
                                  }}
                                >
                                  <Zap className="w-3 h-3 text-primary/60" />
                                </motion.div>
                                {skill.name}
                              </span>
                              <motion.span 
                                className="text-sm text-primary font-mono font-bold"
                                animate={{ 
                                  scale: animatedProgress[skill.name] ? [1, 1.1, 1] : 1
                                }}
                                transition={{ duration: 0.5 }}
                              >
                                {Math.round(animatedProgress[skill.name] || 0)}%
                              </motion.span>
                            </div>
                            <div className="relative">
                              <Progress 
                                value={animatedProgress[skill.name] || 0} 
                                className="h-3 bg-secondary/30"
                              />
                              <motion.div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${animatedProgress[skill.name] || 0}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-semibold text-foreground text-center flex items-center justify-center gap-3 group-hover:text-primary transition-colors duration-300">
                  <motion.div
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      color: "hsl(var(--primary))"
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Award className="w-6 h-6" />
                  </motion.div>
                  Certifications & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap justify-center gap-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors duration-200 cursor-pointer"
                      >
                        {cert}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;