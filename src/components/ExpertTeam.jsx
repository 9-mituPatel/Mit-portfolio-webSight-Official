import React from "react";
import {
  Users,
  PenTool,
  Database,
  Smartphone,
  Cloud,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { seoRoutes } from "@/config/seoRoutes";
import { motion } from "framer-motion";

const ExpertTeam = () => {
  const navigate = useNavigate();

  const teams = [
    {
      title: "Frontend Architects",
      description: "Crafting pixel-perfect, immersive digital experiences",
      icon: <PenTool className="w-6 h-6" />,
      tags: ["React JS", "Angular", "TypeScript", "Next.js"],
      color: "#4C91C9",
    },
    {
      title: "Backend Engine",
      description: "Powering applications with robust, scalable logic",
      icon: <Database className="w-6 h-6" />,
      tags: ["Node.js", ".NET Core", "Laravel", "Microservices"],
      color: "#fbc72d",
    },
    {
      title: "Mobile Innovators",
      description: "Building seamless apps for the on-the-go world",
      icon: <Smartphone className="w-6 h-6" />,
      tags: ["Flutter", "React Native", "Swift", "Kotlin"],
      color: "#9d85fc",
    },
    {
      title: "Cloud Commanders",
      description: "Orchestrating secure, high-performance infrastructure",
      icon: <Cloud className="w-6 h-6" />,
      tags: ["AWS", "Azure", "Docker", "Kubernetes"],
      color: "#4FC08D",
    },
  ];

  return (
    <section className="py-24 bg-[#000101] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <span className="text-[#4C91C9] font-black tracking-[0.4em] uppercase text-xs px-6 py-2 border border-[#4C91C9]/20 rounded-full bg-[#4C91C9]/5">
              Meet Our Team{" "}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Expert Team <br />
            <span className="text-white">Exceptional Results</span>
          </h2>

          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A fusion of creative minds and technical masters, united to build
            the extraordinary.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {teams.map((team, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-[#0F1115] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-white/5"
                  style={{
                    backgroundColor: `${team.color}15`,
                    color: team.color,
                  }}
                >
                  {team.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4C91C9] transition-colors">
                    {team.title}
                  </h3>
                  <p className="text-white/50 mb-6 text-sm">
                    {team.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {team.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium text-white/60 bg-white/5 rounded-full border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-white/50 mb-6">
            Want to be part of our amazing team?
          </p>
          <button
            onClick={() => navigate(seoRoutes.contact.path)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-white/20 hover:border-white/40 text-white rounded-full transition-all duration-300 hover:bg-white/5 group"
          >
            <span className="font-bold">Join Our Team</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;
