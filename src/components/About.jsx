import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Server, Code, Zap, Trophy, Users, Calendar, Star } from "lucide-react";
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
    { icon: Star, number: 100, suffix: "%", label: "Commitment" }
  ];

  const highlights = [
    {
      icon: Database,
      title: "Scalable Architecture",
      description: "Expertise in designing high-concurrency backend systems using Node.js, Redis, and MongoDB for mission-critical applications."
    },
    {
      icon: Code,
      title: "API Excellence",
      description: "Crafting robust RESTful and GraphQL APIs with security at the core, utilizing JWT, OAuth, and advanced middleware patterns."
    }
  ];

  return (
    <section id="about" className="py-32 bg-[#000101] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
                Engineering <span className="text-[#4353FF]">Digital</span> Backbone
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
                I am a specialized Backend Architect and MERN Stack Developer with over 2 years of professional experience.
                My focus lies in building the invisible engines that power modern web applications—ensuring they are fast,
                secure, and infinitely scalable.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="border-l border-white/10 pl-6">
                    <div className="text-3xl font-bold text-white mb-1">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-[#4353FF] font-semibold uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-[#080809] border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-[#4353FF]/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <Server className="w-12 h-12 text-[#4353FF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Core Philosophy</h3>
                    <p className="text-[#94A3B8]">
                      Clean code is not enough. It must be resilient, observable, and optimized for performance at every layer.
                    </p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#4353FF]/10 blur-[60px] rounded-full" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#4353FF]/5 blur-[40px] rounded-full" />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-[#080809] border border-white/5 rounded-3xl hover:border-[#4353FF]/30 transition-all group"
              >
                <item.icon className="w-10 h-10 text-[#4353FF] mb-6" />
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#4353FF] transition-all">
                  {item.title}
                </h4>
                <p className="text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;