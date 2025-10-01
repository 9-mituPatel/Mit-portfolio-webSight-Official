import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-16">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-pastel-lavender/15 to-pastel-sage/15" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(160,200,180,0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-12">
            {/* Logo and Brand */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-soft">
                <span className="text-lg font-bold text-primary-foreground">M</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Mit Bharodiya
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Passionate MERN Stack Developer crafting scalable, high-performance web applications 
              with modern technologies and elegant design principles.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              {[
                { icon: Github, url: '#', label: 'GitHub', color: 'hover:bg-gray-100 dark:hover:bg-gray-800' },
                { icon: Linkedin, url: 'https://www.linkedin.com/in/mit-bharodiya-4a6007256', label: 'LinkedIn', color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600' },
                { icon: Mail, url: 'mailto:bharodiyamit@gmail.com', label: 'Email', color: 'hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600' }
              ].map(({ icon: Icon, url, label, color }) => (
                <a 
                  key={label}
                  href={url}
                  target={url.startsWith('http') ? '_blank' : '_self'}
                  rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`w-12 h-12 rounded-full border border-border/40 bg-background/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground transition-all duration-300 shadow-subtle hover:shadow-soft hover:scale-105 ${color}`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-border/40 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Mit Bharodiya. Crafted with passion and precision.
              </p>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <span className="hover:text-foreground transition-colors cursor-pointer">
                  Privacy Policy
                </span>
                <span className="hover:text-foreground transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="text-center mt-6 pt-6 border-t border-border/30">
              <p className="text-xs text-muted-foreground/80">
                Built with React.js, Node.js, Tailwind CSS, and lots of ☕
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;