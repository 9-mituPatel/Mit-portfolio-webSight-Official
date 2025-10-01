import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const education = [
    {
      degree: "Bachelor's in Computer Application",
      institution: "Utter Gujarat College, VNSGU",
      location: "Gujarat, India", 
      period: "2021 - 2024",
      description: [
        "Completed comprehensive coursework in computer science fundamentals",
        "Gained expertise in programming languages, database systems, and software development", 
        "Specialized in backend development with Node.js and Express.js during studies",
        "Developed strong problem-solving skills through practical projects and internships",
        "Focused on MERN stack development and modern web technologies"
      ],
      subjects: ["Data Structures", "Database Management", "Web Development", "Software Engineering", "JavaScript", "SQL"]
    },
    {
      degree: "Higher Secondary Education", 
      institution: "Gopinath Gurukul, Surat",
      location: "Surat, Gujarat",
      period: "2019 - 2021",
      description: [
        "Completed higher secondary education with focus on science and mathematics",
        "Built strong foundation in logical thinking and analytical skills",
        "Developed initial interest in technology and computer programming",
        "Achieved excellent academic performance with focus on STEM subjects",
        "Prepared for higher studies in computer applications"
      ],
      subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science", "English"]
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
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background with animated gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(var(--primary)/0.05), hsl(var(--background)), hsl(var(--secondary)/0.1))",
            "linear-gradient(225deg, hsl(var(--secondary)/0.1), hsl(var(--background)), hsl(var(--primary)/0.05))",
            "linear-gradient(315deg, hsl(var(--primary)/0.05), hsl(var(--background)), hsl(var(--secondary)/0.1))"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div 
          className="max-w-4xl mx-auto"
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
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6" />
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              My educational foundation that built the groundwork for my career in backend development.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={containerVariants}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group"
              >
                <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5 
                          }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mt-1 group-hover:bg-primary/20 transition-colors duration-300"
                        >
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </motion.div>
                        <div>
                          <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {edu.institution}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                      {edu.description.map((item, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                        Key Subjects:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <Badge 
                              variant="secondary"
                              className="bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors duration-200"
                            >
                              {subject}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
