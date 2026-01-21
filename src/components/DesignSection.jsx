import { motion } from "framer-motion";
import {
  Compass,
  Search,
  Layers,
  TestTube,
  Eye,
  Link2,
  Palette,
  MousePointer,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const DesignSection = () => {
  const designProcess = [
    { icon: Compass, label: "Goal Identification" },
    { icon: Search, label: "Research & Discovery" },
    { icon: Layers, label: "Prototyping" },
    { icon: TestTube, label: "Testing & Review" },
  ];

  const whyInvest = [
    { icon: Eye, label: "Influence visitor behavior" },
    { icon: Link2, label: "Eliminate barriers to conversion" },
    { icon: Palette, label: "Deliver a branded experience online" },
    { icon: MousePointer, label: "Clear calls to action" },
  ];

  return (
    <section
      id="design"
      className="py-16 sm:py-24 md:py-32 bg-[#000101] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-modern opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-10 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">Design</h2>
            <p className="text-white/50 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
              I believe great software starts with exceptional design. By aligning my
              solutions with your vision and goals, I become a true partner in
              building user-centric interfaces that drive results.
            </p>
          </motion.div>

          {/* Right side buttons - hide on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden sm:flex items-center justify-start lg:justify-end gap-4"
          >
            <span className="text-white/40 text-sm">Design</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-white/5 border-white/10 text-white/70 rounded-full text-xs">
                GitHub
              </Button>
              <Button size="sm" className="bg-white text-black rounded-full text-xs">
                View Code
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Process Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16 lg:mb-20">
          {/* DEV.co Design Process Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a12] border border-white/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-[#4353FF]/30 transition-all duration-300"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#4353FF]/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 border border-[#4353FF]/20">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-[#4353FF]" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">My Design Process</h3>
            <p className="text-white/40 text-xs sm:text-sm mb-4 sm:mb-8 leading-relaxed">
              I follow a systematic approach to understand
              your users and create experiences that
              convert visitors into customers.
            </p>

            <div className="space-y-4">
              {designProcess.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#4353FF]/10 transition-colors">
                    <item.icon className="w-4 h-4 text-white/50 group-hover:text-[#4353FF] transition-colors" />
                  </div>
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Invest Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0a0a12] border border-white/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-[#4353FF]/30 transition-all duration-300"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#4353FF]/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 border border-[#4353FF]/20">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#4353FF]" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Why Choose Me</h3>
            <p className="text-white/40 text-xs sm:text-sm mb-4 sm:mb-8 leading-relaxed">
              I focus on creating intuitive interfaces that
              help users achieve their goals quickly and
              efficiently.
            </p>

            <div className="space-y-4">
              {whyInvest.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#4353FF]/10 transition-colors">
                    <item.icon className="w-4 h-4 text-white/50 group-hover:text-[#4353FF] transition-colors" />
                  </div>
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Preview Cards Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Stacked Preview Cards */}
            <div className="relative h-full flex items-center justify-center">
              {/* Card 1 */}
              <div className="absolute top-0 left-0 w-48 bg-white rounded-xl shadow-xl p-4 transform -rotate-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">&lt;/&gt;</span>
                  </div>
                  <span className="text-gray-800 text-xs font-semibold">HTML5</span>
                </div>
                <p className="text-gray-500 text-xs">Semantic markup for modern web.</p>
              </div>

              {/* Card 2 */}
              <div className="absolute top-8 right-0 w-48 bg-white rounded-xl shadow-xl p-4 transform rotate-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <span className="text-black text-xs font-bold">JS</span>
                  </div>
                  <span className="text-gray-800 text-xs font-semibold">JavaScript</span>
                </div>
                <p className="text-gray-500 text-xs">Interactive and dynamic experiences.</p>
              </div>

              {/* Card 3 */}
              <div className="absolute bottom-8 left-4 w-48 bg-white rounded-xl shadow-xl p-4 transform rotate-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">N</span>
                  </div>
                  <span className="text-gray-800 text-xs font-semibold">Next.js</span>
                </div>
                <p className="text-gray-500 text-xs">React framework for production.</p>
              </div>

              {/* Globe Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border border-white/20">
                <Globe className="w-7 h-7 text-white/60" />
              </div>

              {/* Deployment Label */}
              <div className="absolute bottom-0 right-0 bg-[#0a0a12] border border-white/10 rounded-lg px-4 py-2">
                <span className="text-white/70 text-sm">Deployment for Web</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
