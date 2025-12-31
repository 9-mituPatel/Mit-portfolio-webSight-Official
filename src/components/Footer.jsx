import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000101] border-t border-white/5 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#4353FF] flex items-center justify-center font-bold text-white text-sm">
                  M
                </div>
                <div className="text-lg font-bold text-white tracking-tight">
                  MIT <span className="text-[#4353FF]">BHARODIYA</span>
                </div>
              </div>
              <p className="text-[#94A3B8] text-sm max-w-sm leading-relaxed">
                Specialized in building high-performance backend systems and
                scalable full-stack applications with the MERN ecosystem.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex items-center gap-4">
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
                    className="w-12 h-12 rounded-2xl bg-[#080809] border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-[#4353FF] hover:border-[#4353FF]/30 transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <p className="text-[#94A3B8] text-xs font-mono">
                &copy; {currentYear} MIT BHARODIYA. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-[#4353FF]/50">
              <span className="hover:text-[#4353FF] cursor-pointer transition-colors">Clean Code</span>
              <span className="hover:text-[#4353FF] cursor-pointer transition-colors">High Performance</span>
              <span className="hover:text-[#4353FF] cursor-pointer transition-colors">Scalable Architecture</span>
            </div>
            <div className="text-[#94A3B8] text-[10px] uppercase tracking-widest">
              Built with Passion <span className="text-[#4353FF]">&bull;</span> Surat, India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;