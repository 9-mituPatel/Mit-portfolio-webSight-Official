import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Zap, Terminal } from "lucide-react";
import { useRef, useEffect, useState } from "react";

import heroBg from "@/assets/hero-bg.png";

const DevHero = () => {
<<<<<<< HEAD
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    // Smooth cursor following
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            setMousePosition({ x: clientX, y: clientY });
            mouseX.set(clientX);
            mouseY.set(clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Floating elements data
    const floatingElements = [
        { icon: Code2, delay: 0, x: '10%', y: '20%' },
        { icon: Sparkles, delay: 0.5, x: '85%', y: '15%' },
        { icon: Zap, delay: 1, x: '5%', y: '70%' },
        { icon: Terminal, delay: 1.5, x: '90%', y: '75%' },
    ];

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #0a0a1a 0%, #050510 40%, #000101 100%)',
            }}
        >
            {/* Animated gradient orbs */}
            <motion.div
                className="absolute w-[900px] h-[700px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(67, 83, 255, 0.35) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                    left: '50%',
                    top: '-20%',
                    x: '-50%',
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    right: '-10%',
                    bottom: '10%',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full pointer-events-none blob"
                style={{
                    background: 'radial-gradient(circle, rgba(67, 83, 255, 0.15) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    left: '10%',
                    bottom: '20%',
                }}
                animate={{
                    y: [0, -30, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-grid-modern opacity-[0.08] pointer-events-none" />

            {/* Floating decorative elements */}
            {floatingElements.map((el, index) => (
                <motion.div
                    key={index}
                    className="absolute hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm"
                    style={{ left: el.x, top: el.y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 0.6,
                        scale: 1,
                        y: [0, -15, 0],
                    }}
                    transition={{
                        delay: el.delay,
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <el.icon className="w-5 h-5 text-[#4353FF]/60" />
                </motion.div>
            ))}

            {/* Main content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="inline-flex items-center gap-2 mb-8"
                        >
                            <span className="tag-primary flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#4353FF] animate-pulse" />
                                Available for Projects
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="heading-xl text-white mb-8"
                        >
                            MERN Stack
                            <br />
                            <span className="relative inline-block">
                                <span className="gradient-text-primary">Developer</span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#4353FF] to-[#6366f1] rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                />
                            </span>
                            <br />
                            & Tech Lead
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="body-lg mb-12 max-w-lg"
                        >
                            Results-driven Full Stack Developer with 2+ years of experience in building
                            scalable, high-performance web applications using Node.js, Express.js, MongoDB,
                            React.js, Next.js. Proficient in RESTful APIs and secure, maintainable systems.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button
                                onClick={() => scrollToSection('contact')}
                                className="btn-primary group"
                            >
                                Contact Me
                                <motion.span
                                    className="ml-2 inline-block"
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </Button>

                            <Button
                                variant="ghost"
                                onClick={() => scrollToSection('projects')}
                                className="btn-secondary group"
                            >
                                View Projects
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>

                        {/* Stats row */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10"
                        >
                            {[
                                { value: '14+', label: 'Projects' },
                                { value: '2+', label: 'Years Exp.' },
                                { value: '100%', label: 'Commitment' },
                            ].map((stat, index) => (
                                <div key={index} className="group">
                                    <div className="text-3xl md:text-4xl font-black text-white group-hover:text-[#4353FF] transition-colors">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-white/40 font-semibold uppercase tracking-wider mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Premium Code Editor Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative perspective-2000 hidden lg:block"
                    >
                        <div className="relative" style={{ transform: 'rotateX(2deg) rotateY(-5deg)' }}>
                            {/* Main Editor Window */}
                            <motion.div
                                className="bg-[#0d0d1a]/90 backdrop-blur-2xl rounded-3xl border border-white/[0.08] shadow-2xl overflow-hidden"
                                whileHover={{
                                    scale: 1.02,
                                    borderColor: 'rgba(67, 83, 255, 0.3)',
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                {/* Editor Header */}
                                <div className="flex items-center justify-between px-5 py-4 bg-[#0a0a15]/80 border-b border-white/[0.05]">
                                    <div className="flex items-center gap-2">
                                        <motion.div
                                            className="w-3 h-3 rounded-full bg-[#ff5f56]"
                                            whileHover={{ scale: 1.2 }}
                                        />
                                        <motion.div
                                            className="w-3 h-3 rounded-full bg-[#ffbd2e]"
                                            whileHover={{ scale: 1.2 }}
                                        />
                                        <motion.div
                                            className="w-3 h-3 rounded-full bg-[#27ca40]"
                                            whileHover={{ scale: 1.2 }}
                                        />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs text-white/30 font-mono">portfolio.tsx</span>
                                        <div className="flex gap-1">
                                            <span className="px-2 py-1 text-xs bg-white/5 rounded text-white/40 font-medium">TypeScript</span>
                                            <span className="px-2 py-1 text-xs bg-[#4353FF]/20 rounded text-[#4353FF] font-medium">React</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Editor Content */}
                                <div className="p-6 font-mono text-sm">
                                    <div className="flex gap-6">
                                        {/* Line Numbers */}
                                        <div className="text-white/20 text-right select-none">
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(n => (
                                                <div key={n} className="leading-7 text-xs">{n}</div>
                                            ))}
                                        </div>

                                        {/* Code Content */}
                                        <div className="flex-1 code-block">
                                            <div className="leading-7"><span className="text-[#c792ea]">import</span> <span className="text-white/70">{'{'}</span> <span className="text-[#82aaff]">Developer</span> <span className="text-white/70">{'}'}</span> <span className="text-[#c792ea]">from</span> <span className="text-[#c3e88d]">'@mit/portfolio'</span><span className="text-white/40">;</span></div>
                                            <div className="leading-7">&nbsp;</div>
                                            <div className="leading-7"><span className="text-[#c792ea]">const</span> <span className="text-[#82aaff]">skills</span> <span className="text-[#89ddff]">=</span> <span className="text-white/70">[</span></div>
                                            <div className="leading-7 pl-4"><span className="text-[#c3e88d]">'Node.js'</span><span className="text-white/40">,</span> <span className="text-[#c3e88d]">'React'</span><span className="text-white/40">,</span> <span className="text-[#c3e88d]">'MongoDB'</span><span className="text-white/40">,</span></div>
                                            <div className="leading-7 pl-4"><span className="text-[#c3e88d]">'TypeScript'</span><span className="text-white/40">,</span> <span className="text-[#c3e88d]">'Redis'</span><span className="text-white/40">,</span> <span className="text-[#c3e88d]">'Docker'</span></div>
                                            <div className="leading-7"><span className="text-white/70">];</span></div>
                                            <div className="leading-7">&nbsp;</div>
                                            <div className="leading-7"><span className="text-[#c792ea]">export const</span> <span className="text-[#ffcb6b]">Mit</span><span className="text-white/70">:</span> <span className="text-[#82aaff]">Developer</span> <span className="text-[#89ddff]">=</span> <span className="text-white/70">{'{'}</span></div>
                                            <div className="leading-7 pl-4"><span className="text-[#82aaff]">name</span><span className="text-white/40">:</span> <span className="text-[#c3e88d]">'Mit Bharodiya'</span><span className="text-white/40">,</span></div>
                                            <div className="leading-7 pl-4"><span className="text-[#82aaff]">role</span><span className="text-white/40">:</span> <span className="text-[#c3e88d]">'Full Stack Developer'</span><span className="text-white/40">,</span></div>
                                            <div className="leading-7 pl-4"><span className="text-[#82aaff]">passion</span><span className="text-white/40">:</span> <span className="text-[#c3e88d]">'Building scalable systems'</span><span className="text-white/40">,</span></div>
                                            <div className="leading-7 pl-4"><span className="text-[#82aaff]">skills</span><span className="text-white/40">,</span></div>
                                            <div className="leading-7 pl-4"><span className="text-[#82aaff]">available</span><span className="text-white/40">:</span> <span className="text-[#89ddff]">true</span></div>
                                            <div className="leading-7"><span className="text-white/70">{'}'}</span><span className="text-white/40">;</span><span className="animate-pulse text-[#4353FF]">|</span></div>
                                            <div className="leading-7">&nbsp;</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Side Panel */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 1 }}
                                className="absolute -left-20 top-16 w-52 glass-card rounded-2xl p-5"
                                style={{ transform: 'rotateY(8deg)' }}
                            >
                                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-4">Tech Stack</div>
                                <div className="space-y-2">
                                    {['Node.js', 'React', 'MongoDB', 'Redis'].map((tech, i) => (
                                        <motion.div
                                            key={tech}
                                            className="flex items-center gap-3 text-xs"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.2 + i * 0.1 }}
                                        >
                                            <span className="w-2 h-2 rounded-full bg-[#4353FF]" />
                                            <span className="text-white/60 font-medium">{tech}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="mt-5 pt-4 border-t border-white/10">
                                    <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-3">Status</div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#27ca40] animate-pulse" />
                                        <span className="text-xs text-white/50">Ready to Build</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Terminal */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                className="absolute -right-10 -bottom-10 w-64 glass-card rounded-2xl p-4"
                                style={{ transform: 'rotateY(-5deg)' }}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <Terminal className="w-3 h-3 text-[#4353FF]" />
                                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Terminal</span>
                                </div>
                                <div className="font-mono text-xs space-y-1">
                                    <div className="text-white/30">$ npm run dev</div>
                                    <div className="text-[#27ca40]">✓ Server running on port 3000</div>
                                    <div className="flex items-center text-white/50">
                                        $ <span className="ml-1 w-2 h-4 bg-[#4353FF] animate-pulse" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Glow effect */}
                            <div className="absolute -inset-8 bg-[#4353FF]/10 blur-[60px] rounded-full pointer-events-none -z-10" />
                        </div>
                    </motion.div>
=======
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a1a]">
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1, x: 0 }}
        animate={{ scale: 1.2, x: -20 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <img
          src={heroBg}
          alt="Technical Background"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Gradient Overlay for Fade Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/70 via-[#0a0a1a]/50 to-[#000101] mix-blend-multiply" />
      </motion.div>

      {/* Grid pattern overlay with pulse - Keep or remove based on preference, keeping for texture */}
      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-grid-modern pointer-events-none z-0"
      />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#4C91C9] to-[#fbc72d] to-[40%] bg-clip-text text-transparent leading-tight tracking-tight mb-8 pb-3"
            >
              Software Development Company
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-lg"
            >
              We design, develop & deploy across the tech stack, maximizing your
              software development project team with expert technical talent.
              Get in touch regarding your next software or web development
              project!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-black hover:bg-[#3776AB] hover:text-white rounded-lg px-8 py-6 text-base font-semibold transition-all duration-300"
              >
                Contact Us
              </Button>

              <Button
                variant="ghost"
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-[#fbc72d] hover:bg-transparent px-6 py-6 text-base font-semibold group"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Code Editor Visual */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative perspective-1000"
          >
            <div
              className="relative transform rotate-x-5 rotate-y-[-10deg]"
              style={{ perspective: "1000px" }}
            >
              {/* Main Editor Window */}
              <div
                className="bg-[#1a1a2e]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500"
                style={{ transform: "rotateX(5deg) rotateY(-5deg)" }}
              >
                {/* Editor Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#12121f] border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-white/40">Node3D.gd</span>
                    <div className="flex gap-1">
                      <span className="px-2 py-1 text-xs bg-white/5 rounded text-white/50">
                        2D
                      </span>
                      <span className="px-2 py-1 text-xs bg-white/5 rounded text-white/50">
                        3D
                      </span>
                      <span className="px-2 py-1 text-xs bg-[#4C91C9]/20 rounded text-[#4C91C9]">
                        Script
                      </span>
                    </div>
                  </div>
>>>>>>> ab60e23 (GoCodexa Commit)
                </div>

                {/* Editor Content */}
                <div className="p-6 font-mono text-sm">
                  <div className="flex gap-4">
                    {/* Line Numbers */}
                    <div className="text-white/20 text-right select-none">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                        (n) => (
                          <div key={n} className="leading-6">
                            {n}
                          </div>
                        )
                      )}
                    </div>

                    {/* Code Content */}
                    <div className="flex-1">
                      <div className="text-pink-400 leading-6">
                        extends <span className="text-green-400">Node3D</span>
                      </div>
                      <div className="leading-6">&nbsp;</div>
                      <div className="text-white/40 leading-6">
                        # Declare member variables here. Examples:
                      </div>
                      <div className="text-white/40 leading-6"># var a = 2</div>
                      <div className="text-white/40 leading-6">
                        # var b = "text"
                      </div>
                      <div className="leading-6">&nbsp;</div>
                      <div className="text-white/40 leading-6">
                        # Called when the node enters the scene tree for the
                        first time.
                      </div>
                      <div className="leading-6">
                        <span className="text-pink-400">func</span>{" "}
                        <span className="text-yellow-400">_ready</span>
                        <span className="text-white/70">()</span>:
                      </div>
                      <div className="leading-6 pl-4">
                        <span className="text-pink-400">pass</span>{" "}
                        <span className="text-white/40">
                          # Replace with function body.
                        </span>
                      </div>
                      <div className="leading-6">&nbsp;</div>
                      <div className="text-white/40 leading-6">
                        # Called every frame. 'delta' is the elapsed time since
                        the previous frame.
                      </div>
                      <div className="leading-6">
                        <span className="text-pink-400">func</span>{" "}
                        <span className="text-yellow-400">_process</span>
                        <span className="text-white/70">(delta)</span>:
                      </div>
                      <div className="leading-6 pl-4">
                        <span className="text-pink-400">pass</span>
                      </div>
                      <div className="leading-6">&nbsp;</div>
                      <div className="leading-6">&nbsp;</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Side Panel */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -left-12 top-10 w-48 bg-[#1a1a2e]/90 backdrop-blur-xl rounded-xl border border-white/10 p-4 transform rotate-y-[5deg]"
                style={{ transform: "translateX(-20px) rotateY(5deg)" }}
              >
                <div className="text-xs text-white/40 uppercase tracking-wider mb-3">
                  Scene
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-red-400">●</span>
                    <span className="text-white/70">Node3D</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-3">
                    FileSystem
                  </div>
                  <div className="text-xs text-white/50 space-y-1">
                    <div>📁 res://</div>
                    <div className="pl-3">📄 Node3D.tscn</div>
                    <div className="pl-3">📄 Node3D.gd</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Glow Effect */}
              <div className="absolute -inset-4 bg-[#4C91C9]/10 blur-3xl rounded-3xl pointer-events-none -z-10" />
            </div>
<<<<<<< HEAD

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Scroll</span>
                <motion.div
                    className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1 h-2 rounded-full bg-[#4353FF]"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
=======
          </motion.div>
        </div>
      </div>
    </section>
  );
>>>>>>> ab60e23 (GoCodexa Commit)
};

export default DevHero;
