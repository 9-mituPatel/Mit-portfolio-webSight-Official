import React from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { seoRoutes } from "@/config/seoRoutes";

const TransformVision = () => {
  return (
    <section className="py-24 bg-[#000101]">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
            <Sparkles className="w-4 h-4 text-[#fbc72d]" />
            <span className="text-white/80 text-sm font-medium">
              Innovate. Create. Scale.
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4C91C9] via-[#9d85fc] to-[#fbc72d]">
              Transform
            </span>
            <br />
            Your Digital Vision?
          </h1>

          {/* Sub headline (stronger & shorter) */}
          <p className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            We design, build & scale high-performance digital products for
            startups and growing businesses.
          </p>

          {/* Trust Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-14 text-white/70 text-sm">
            <span>🚀 100+ Projects Delivered</span>
            <span>🌍 Clients in 10+ Countries</span>
            <span>⚡ Fast & Scalable Solutions</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
            <Link
              to={seoRoutes.contact.path}
              className="group relative px-8 py-4 bg-[#4C91C9] rounded-xl font-bold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(76,145,201,0.5)]"
              aria-label="Start your project"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 motion-reduce:hidden" />
              <span className="relative flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to={seoRoutes.projects.path}
              className="px-8 py-4 border border-white/10 text-white font-bold rounded-xl transition-all hover:bg-white/5 hover:border-white/30"
            >
              View Portfolio
            </Link>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919409495765"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-[#25D366]/10 text-[#25D366] font-bold flex items-center gap-2 hover:bg-[#25D366]/20 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="tel:+919409495765"
              className="group p-4 rounded-xl bg-[#0F1115]/50 border border-white/5 hover:border-[#4C91C9]/50 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-[#4C91C9] group-hover:bg-[#4C91C9] group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-white/40 text-xs font-bold uppercase">
                    Call Us
                  </p>
                  <p className="text-white font-bold text-lg">
                    +91 94094 95765
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#4C91C9] transition-all" />
            </a>

            <a
              href="mailto:Team@gocodexa.com"
              className="group p-4 rounded-xl bg-[#0F1115]/50 border border-white/5 hover:border-[#9d85fc]/50 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-[#9d85fc] group-hover:bg-[#9d85fc] group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-white/40 text-xs font-bold uppercase">
                    Email Us
                  </p>
                  <p className="text-white font-bold text-lg">
                    Team@gocodexa.com
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#9d85fc] transition-all" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex justify-center animate-bounce text-white/30">
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformVision;
