import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Code2, Database, Server, Zap, Terminal, Globe, Layers } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useRef, useEffect, useState } from "react";
import ParticleEffect from "./ParticleEffect";
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Enhanced parallax transforms
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const yFloating = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityFloating = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.9, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "8px"]);
  
  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const x = (clientX - centerX) / centerX;
      const y = (clientY - centerY) / centerY;
      
      setMousePosition({ x, y });
      mouseX.set(x * 20);
      mouseY.set(y * 20);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      initial="hidden"
      animate={isLoaded && inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <ParticleEffect />
      {/* Advanced Cinematic Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          y: yBg, 
          scale,
          filter: blur
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/5 via-transparent to-accent-cyan/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_40%_20%,rgba(168,85,247,0.06),transparent_50%)]" />
      </motion.div>
      
      {/* Dynamic mesh gradient overlay */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(147,51,234,0.15), transparent 50%)`
        }}
      />
      
      {/* Advanced Floating Tech Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: yFloating, opacity: opacityFloating }}
      >
        {/* Background Coding Icons Pattern */}
        <div className="absolute inset-0">
          {/* Left side coding symbols - Made transparent/invisible */}
          <motion.div 
            className="absolute top-1/4 left-8 lg:left-16 text-8xl font-mono text-transparent select-none"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* &lt;/&gt; */}
          </motion.div>
          
          <motion.div 
            className="absolute bottom-1/3 left-12 lg:left-20 text-7xl font-mono text-transparent select-none"
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          >
            [ ]
          </motion.div>
          
          <motion.div 
            className="absolute top-3/4 left-6 lg:left-12 text-5xl font-mono text-transparent select-none"
            animate={{
              rotate: [0, -12, 12, 0],
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 6
            }}
          >
            &&
          </motion.div>
          
          <motion.div 
            className="absolute bottom-1/6 left-10 lg:left-16 text-3xl font-mono text-transparent select-none"
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          >
            #
          </motion.div>
          
          {/* Right side coding symbols - Made transparent/invisible */}
          <motion.div 
            className="absolute top-1/2 right-8 lg:right-16 text-6xl font-mono text-transparent select-none"
            animate={{
              rotate: [0, -10, 10, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            {"{ }"}
          </motion.div>
          
          <motion.div 
            className="absolute top-1/6 right-10 lg:right-20 text-5xl font-mono text-transparent select-none"
            animate={{
              rotate: [0, -20, 20, 0],
              opacity: [0, 0, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            ( )
          </motion.div>
          
          <motion.div 
            className="absolute bottom-1/4 right-12 lg:right-24 text-6xl font-mono text-transparent select-none"
            animate={{
              rotate: [0, 8, -8, 0],
              x: [0, -10, 10, 0]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          >
            =&gt;
          </motion.div>
          
          <motion.div 
            className="absolute top-1/8 right-6 lg:right-12 text-4xl font-mono text-transparent select-none"
            animate={{
              rotate: [0, 25, -25, 0],
              y: [0, 15, 0]
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 7
            }}
          >
            ||
          </motion.div>
          
          <motion.div 
            className="absolute bottom-1/8 right-8 lg:right-16 text-3xl font-mono text-transparent select-none"
            animate={{
              scale: [0.8, 1.3, 0.8],
              opacity: [0, 0, 0]
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 8
            }}
          >
            !
          </motion.div>
        </div>
        
        {/* Animated tech icons with mouse tracking */}
        <motion.div 
          className="absolute top-20 left-10 lg:left-20"
          style={{
            x: springX,
            y: springY
          }}
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative">
            <Code2 className="w-12 h-12 text-primary/20" />
            <div className="absolute inset-0 animate-pulse">
              <Code2 className="w-12 h-12 text-primary/40 blur-sm" />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute top-32 right-16 lg:right-32"
          style={{
            x: springX * -0.5,
            y: springY * -0.5
          }}
          animate={{
            y: [15, -15, 15],
            x: [0, 8, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="relative">
            <Database className="w-10 h-10 text-accent-cyan/30" />
            <div className="absolute -inset-2 bg-accent-cyan/10 rounded-full blur-md animate-pulse" />
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-32 left-8 lg:left-24"
          style={{
            x: springX * 0.3,
            y: springY * 0.3
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        >
          <div className="relative">
            <Sparkles className="w-14 h-14 text-accent-purple/25" />
            <motion.div 
              className="absolute inset-0"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-14 h-14 text-accent-pink/20 blur-sm" />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 right-8 lg:right-16"
          style={{
            x: springX * -0.7,
            y: springY * -0.7
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <div className="relative">
            <Server className="w-11 h-11 text-primary/35" />
            <div className="absolute -inset-1 bg-primary/5 rounded-lg blur-sm" />
          </div>
        </motion.div>
        
        {/* Additional tech elements */}
        {/* <motion.div 
          className="absolute top-1/4 left-1/3 hidden lg:block"
          style={{
            x: springX * 0.2,
            y: springY * 0.2
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Terminal className="w-8 h-8 text-accent-orange/25" />
        </motion.div> */}
        
        <motion.div 
          className="absolute bottom-1/4 right-1/3 hidden lg:block"
          style={{
            x: springX * -0.4,
            y: springY * -0.4
          }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <Globe className="w-9 h-9 text-accent-cyan/30" />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div className="max-w-4xl mx-auto space-y-12" variants={containerVariants}>
          {/* Refined Profile Section */}
          <motion.div 
            className="flex flex-col items-center space-y-8"
            variants={itemVariants}
          >

            {/* Refined Typography */}
            <div className="space-y-6" ref={ref}>
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-normal leading-[1.15] relative z-10 text-balance heading-gradient"
                variants={itemVariants}
              >
                <motion.span 
                  className="inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent whitespace-nowrap pb-10"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  Mit Bharodiya
                </motion.span>
                <motion.span
                  className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-accent-purple/20 to-accent-cyan/20 rounded-lg z-[-1] filter blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
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
                    className="text-xl md:text-2xl lg:text-3xl font-body font-medium text-primary relative z-10"
                    repeat={Infinity}
                  />
                  <motion.div
                    className="absolute -inset-x-6 -inset-y-2 bg-primary/5 rounded-lg z-0"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Elegant Description */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-body"
            variants={itemVariants}
          >
            Results-driven MERN Stack Developer with 2+ years of hands-on experience 
            in designing and building scalable, high-performance web applications. 
            Specialized in crafting RESTful APIs and delivering elegant full-stack solutions.
          </motion.p>
          
          {/* Refined CTA Buttons */}
          <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-float"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
className="btn-cta-primary px-8 py-4 font-medium"
              >
                View My Work
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button 
                variant="outline" 
                size="lg"
className="btn-cta-outline px-8 py-4 font-medium"
                onClick={() => window.open('https://youth-education-v2.s3.ap-south-1.amazonaws.com/1759394267576-870-MitBharodiya_resume.pdf', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Elegant Social Links */}
          <motion.div 
            className="flex items-center justify-center gap-6"
            variants={itemVariants}
          >
            {[
              { icon: Github, label: 'GitHub', url: 'https://github.com/9-mituPatel' },
              { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/mit-bharodiya-4a6007256' },
              { icon: Mail, label: 'Email', url: 'mailto:bharodiyamit@gmail.com' }
            ].map(({ icon: Icon, label, url }, index) => (
              <motion.a
                key={label}
                href={url}
                target={url.startsWith('http') ? '_blank' : '_self'}
                rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-subtle hover:shadow-soft"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Icon className="w-5 h-5" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Subtle Scroll Indicator */}
          <motion.div 
            className="flex flex-col items-center pt-16"
            variants={itemVariants}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-primary/50 rounded-full"
              />
            </motion.div>
            <p className="text-sm text-muted-foreground mt-3 font-body">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;