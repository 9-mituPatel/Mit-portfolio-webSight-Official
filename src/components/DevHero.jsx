import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import heroBg from "@/assets/hero-bg.png";

const DevHero = () => {
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DevHero;
