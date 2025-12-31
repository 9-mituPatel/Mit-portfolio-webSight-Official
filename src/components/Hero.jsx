import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      ref={containerRef}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-[#000101]"
      initial="hidden"
      animate={isLoaded && inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* dev.co Glowing Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-[#4353FF]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#4353FF]/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div className="max-w-4xl mx-auto space-y-12" variants={containerVariants}>
          <motion.div
            className="flex flex-col items-center space-y-8"
            variants={itemVariants}
          >
            <div className="space-y-6" ref={ref}>
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold tracking-tight leading-[1.1] relative z-10 text-white"
                variants={itemVariants}
              >
                Mit Bharodiya
              </motion.h1>

              <motion.div
                className="flex items-center justify-center"
                variants={itemVariants}
              >
                <div className="relative">
                  <TypeAnimation
                    sequence={[
                      'MERN Stack Developer',
                      2500,
                      'Backend Development Expert',
                      2500,
                      'Node.js Specialist',
                      2500,
                      'RESTful API Architect',
                      2500,
                    ]}
                    wrapper="h2"
                    speed={40}
                    className="text-xl md:text-2xl lg:text-3xl font-body font-medium text-[#4353FF] relative z-10"
                    repeat={Infinity}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-3xl mx-auto font-body"
            variants={itemVariants}
          >
            Results-driven MERN Stack Developer with 2+ years of hands-on experience
            in designing and building scalable, high-performance web applications.
            Specialized in crafting RESTful APIs and delivering elegant full-stack solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-[#4353FF] hover:bg-[#4353FF]/90 text-white px-10 py-7 text-lg rounded-full shadow-[0_0_20px_rgba(67,83,255,0.3)] font-semibold transition-all"
              >
                View My Work
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white/10 bg-white/5 hover:bg-white/10 text-white px-10 py-7 text-lg rounded-full font-medium transition-all"
                onClick={() => window.open('https://youth-education-v2.s3.ap-south-1.amazonaws.com/1759394267576-870-MitBharodiya_resume.pdf', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6"
            variants={itemVariants}
          >
            {[
              { icon: Github, label: 'GitHub', url: 'https://github.com/9-mituPatel' },
              { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/mit-bharodiya-4a6007256' },
              { icon: Mail, label: 'Email', url: 'mailto:bharodiyamit@gmail.com' }
            ].map(({ icon: Icon, label, url }) => (
              <motion.a
                key={label}
                href={url}
                target={url.startsWith('http') ? '_blank' : '_self'}
                rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#4353FF]/50 hover:bg-[#4353FF]/10 transition-all duration-300"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col items-center pt-16"
            variants={itemVariants}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-[#4353FF]/30 rounded-full flex justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-[#4353FF]/50 rounded-full"
              />
            </motion.div>
            <p className="text-sm text-[#94A3B8] mt-3 font-body">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;