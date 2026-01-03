import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000101] border-t border-white/5 py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-modern opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-24 mb-24">
            <div className="max-w-md">
              <div className="flex items-center space-x-3 mb-8 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="w-10 h-10 rounded-xl bg-[#4353FF] flex items-center justify-center font-black text-white text-lg shadow-[0_0_20px_rgba(67,83,255,0.4)] transition-transform duration-500 group-hover:rotate-12">
                  M
                </div>
                <div className="flex flex-col">
                  <div className="text-xl font-black text-white tracking-[0.2em] leading-none uppercase">
                    MIT
                  </div>
                  <div className="text-[10px] font-black text-[#4353FF] tracking-[0.4em] mt-1 uppercase">
                    Bharodiya
                  </div>
                </div>
              </div>
              <p className="text-white/40 text-lg font-medium leading-relaxed">
                Specialized in building high-performance backend systems and
                scalable full-stack applications with the MERN ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-24">
              <div className="space-y-6">
                <h4 className="text-white font-black uppercase tracking-widest text-[10px] opacity-40">Navigation</h4>
                <ul className="space-y-4">
                  {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-white/60 hover:text-[#4353FF] transition-colors duration-300 font-bold text-sm tracking-tight"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-white font-black uppercase tracking-widest text-[10px] opacity-40">Connect</h4>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: Github, url: 'https://github.com/9-mituPatel', label: 'GitHub' },
                    { icon: Linkedin, url: 'https://www.linkedin.com/in/mit-bharodiya-4a6007256', label: 'LinkedIn' },
                    { icon: Mail, url: 'mailto:bharodiyamit@gmail.com', label: 'Email' }
                  ].map(({ icon: Icon, url, label }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/60 hover:text-[#4353FF] transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#4353FF]/50 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-sm tracking-tight">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-white/20 text-xs font-black uppercase tracking-[0.3em]">
              &copy; {currentYear} MIT BHARODIYA. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/10">
              <span className="hover:text-[#4353FF] cursor-default transition-colors">Clean Code</span>
              <span className="hover:text-[#4353FF] cursor-default transition-colors">High Performance</span>
              <span className="hover:text-[#4353FF] cursor-default transition-colors">Scalable Architecture</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;