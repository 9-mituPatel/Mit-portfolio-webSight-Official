import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
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
      <div className="absolute inset-0 bg-grid-modern opacity-20 pointer-events-none" />

      {/* dev.co Glowing Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-2/3 bg-[#4C91C9]/20 blur-[150px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-[#4C91C9]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#4C91C9]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          className="max-w-5xl mx-auto space-y-12"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col items-center space-y-8"
            variants={itemVariants}
          >
            <div className="space-y-6" ref={ref}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="inline-block"
              >
                <span className="px-5 py-2 rounded-full border border-[#4C91C9]/30 bg-[#4C91C9]/10 text-[#4C91C9] text-sm font-bold tracking-widest uppercase mb-6 inline-block">
                  Available for new opportunities
                </span>
              </motion.div>

              <motion.h1
                className="text-7xl md:text-9xl lg:text-[11rem] font-heading font-black tracking-tighter leading-[0.85] relative z-10 text-white selection:bg-[#4C91C9] selection:text-white"
                variants={itemVariants}
              >
                MIT <br className="md:hidden" />
                <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  BHARODIYA
                </span>
              </motion.h1>

              <motion.div
                className="flex items-center justify-center"
                variants={itemVariants}
              >
                <div className="relative pt-4">
                  <TypeAnimation
                    sequence={[
                      "MERN Stack Developer",
                      2500,
                      "Backend Architecture Expert",
                      2500,
                      "Node.js & WebRTC Specialist",
                      2500,
                      "Cloud Infrastructure Architect",
                      2500,
                    ]}
                    wrapper="h2"
                    speed={40}
                    className="text-2xl md:text-3xl lg:text-4xl font-body font-bold text-[#4C91C9] relative z-10 tracking-tight"
                    repeat={Infinity}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl mx-auto font-body font-medium"
            variants={itemVariants}
          >
            I architect and build high-performance, scalable backend systems.
            Focused on reliability, speed, and exceptional code quality.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-[#4C91C9] hover:bg-[#4C91C9]/90 text-white px-12 py-8 text-xl rounded-full shadow-[0_0_40px_rgba(67,83,255,0.4)] font-bold transition-all"
              >
                Explore Projects
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white/10 bg-white/5 hover:bg-white/10 text-white px-12 py-8 text-xl rounded-full font-bold transition-all backdrop-blur-sm"
                onClick={() =>
                  window.open(
                    "https://youth-education-v2.s3.ap-south-1.amazonaws.com/1759394267576-870-MitBharodiya_resume.pdf",
                    "_blank"
                  )
                }
              >
                <Download className="w-6 h-6 mr-3" />
                Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-8 pt-8"
            variants={itemVariants}
          >
            {[
              {
                icon: Github,
                label: "GitHub",
                url: "https://github.com/9-mituPatel",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/mit-bharodiya-4a6007256",
              },
              {
                icon: Mail,
                label: "Email",
                url: "mailto:bharodiyamit@gmail.com",
              },
            ].map(({ icon: Icon, label, url }) => (
              <motion.a
                key={label}
                href={url}
                target={url.startsWith("http") ? "_blank" : "_self"}
                rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:border-[#4C91C9]/50 hover:bg-[#4C91C9]/10 transition-all duration-300 backdrop-blur-sm"
                whileHover={{
                  y: -5,
                  scale: 1.1,
                  rotate:
                    label === "GitHub" ? -5 : label === "LinkedIn" ? 5 : 0,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col items-center pt-20"
            variants={itemVariants}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-7 h-12 border-2 border-white/20 rounded-full flex justify-center p-2 backdrop-blur-sm"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-4 bg-[#4C91C9] rounded-full"
              />
            </motion.div>
            <p className="text-xs text-white/30 mt-4 font-bold tracking-widest uppercase">
              Scroll to learn more
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
