import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
  Database,
  Server,
  Code,
  Zap,
  Trophy,
  Users,
  Calendar,
  Star,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Trophy, number: 10, suffix: "+", label: "Projects Completed" },
    { icon: Calendar, number: 2, suffix: "+", label: "Years Experience" },
    { icon: Users, number: 2, suffix: "+", label: "Core Technologies" },
    { icon: Star, number: 100, suffix: "%", label: "Commitment" },
  ];

  const highlights = [
    {
      icon: Database,
      title: "Scalable Architecture",
      description:
        "Expertise in designing high-concurrency backend systems using Node.js, Redis, and MongoDB for mission-critical applications.",
    },
    {
      icon: Code,
      title: "API Excellence",
      description:
        "Crafting robust RESTful and GraphQL APIs with security at the core, utilizing JWT, OAuth, and advanced middleware patterns.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#000101] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-modern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none">
                Engineering <br />
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="font-bold bg-gradient-to-r from-[#4C91C9] to-[#fbc72d] bg-clip-text text-transparent mb-4 pb-4"
                >
                  The Digital Backbone
                </motion.span>
              </h2>
              <p className="text-white/50 text-xl leading-relaxed mb-12 font-medium max-w-xl">
                I am a specialized Backend Architect and MERN Stack Developer
                with over 2 years of professional experience. My focus lies in
                building the invisible engines that power modern web
                applications—ensuring they are fast, secure, and infinitely
                scalable.
              </p>

              <div className="grid grid-cols-2 gap-12">
                {stats.map((stat, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-6 top-1/2 -track-y-1/2 w-1 h-0 bg-[#4C91C9] group-hover:h-full transition-all duration-500 -translate-y-1/2" />
                    <div className="text-5xl font-black text-white mb-2 tracking-tighter">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-white/30 font-black uppercase tracking-[0.2em]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <SpotlightCard
                containerClassName="aspect-[4/5] rounded-[3rem]"
                className="p-12 flex flex-col justify-end border-gradient overflow-hidden"
              >
                <div className="absolute inset-0 bg-grid-modern opacity-20 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-[#4C91C9]/20 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(67,83,255,0.2)]">
                    <Server className="w-10 h-10 text-[#4C91C9]" />
                  </div>
                  <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">
                    Core <br />
                    Philosophy
                  </h3>
                  <div className="w-16 h-1.5 bg-[#4C91C9] mb-8" />
                  <p className="text-white/60 text-lg font-medium leading-relaxed">
                    Clean code is not enough. It must be resilient, observable,
                    and optimized for performance at every layer of the stack.
                  </p>
                </div>

                {/* Decorative glows */}
                <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-[#4C91C9]/10 blur-[100px] rounded-full group-hover:bg-[#4C91C9]/20 transition-all duration-700 pointer-events-none" />
              </SpotlightCard>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <SpotlightCard className="p-12 border-gradient h-full">
                  <div className="w-16 h-16 bg-[#4C91C9]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#4C91C9]/20 group-hover:scale-110 transition-transform duration-500 relative z-10">
                    <item.icon className="w-8 h-8 text-[#4C91C9]" />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4 group-hover:text-[#4C91C9] transition-all duration-300 uppercase tracking-tight relative z-10">
                    {item.title}
                  </h4>
                  <p className="text-white/50 leading-relaxed font-medium relative z-10">
                    {item.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
