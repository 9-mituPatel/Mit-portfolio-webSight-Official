import { Github, Linkedin, Mail, ArrowUpRight, Heart, Code, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const MegaFooter = () => {
  const currentYear = new Date().getFullYear();
  const [openTech, setOpenTech] = useState(null);

    const services = [
        { name: 'Web Development', id: 'design' },
        { name: 'Mobile Development', id: 'projects' },
        { name: 'API Development', id: 'develop' },
        { name: 'UX/UI Design', id: 'design' },
        { name: 'DevOps Services', id: 'skills' },
        { name: 'Quality Assurance', id: 'skills' },
        { name: 'MVP Development', id: 'projects' },
        { name: 'Consulting', id: 'contact' },
    ];

    const skills = [
        'Node.js', 'React.js', 'Next.js', 'MongoDB',
        'Express.js', 'TypeScript', 'Redis', 'Docker',
        'AWS', 'PostgreSQL', 'GraphQL', 'Socket.IO'
    ];

    const technology = [
        'Artificial Intelligence',
        'Cybersecurity',
        'Cloud Computing',
        'Blockchain',
        'Microservices',
        'CI/CD',
        'WebRTC',
    ];

    const quickLinks = [
        { name: 'About Me', id: 'about' },
        { name: 'Experience', id: 'experience' },
        { name: 'Projects', id: 'projects' },
        { name: 'Skills', id: 'skills' },
        { name: 'Education', id: 'education' },
        { name: 'Contact', id: 'contact' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <footer className="bg-[#000101] relative overflow-hidden">
            {/* Top border gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4353FF]/50 to-transparent" />

            {/* Background grid */}
            <div className="absolute inset-0 bg-grid-modern opacity-[0.03] pointer-events-none" />

            {/* Main Footer Content */}
            <div className="container mx-auto px-6 pt-20 pb-12 relative z-10">
                <div className="max-w-7xl mx-auto">

                    {/* Top Section */}
                    <motion.div
                        className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 pb-16 border-b border-white/[0.06]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Logo & Description */}
                        <div className="max-w-sm">
                            <motion.div
                                className="flex items-center gap-3 mb-6"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-[#4353FF] to-[#6366f1] rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(67,83,255,0.3)]">
                                    <span className="text-white font-black text-lg">&lt;/&gt;</span>
                                </div>
                                <span className="text-white font-bold text-xl">Mit Bharodiya</span>
                            </motion.div>
                            <p className="text-white/50 text-sm leading-relaxed mb-6">
                                Full Stack Developer & Backend Architect specializing in building scalable,
                                high-performance applications with modern technologies.
                            </p>

                            {/* Status */}
                            <div className="flex items-center gap-2 text-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27ca40] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#27ca40]"></span>
                                </span>
                                <span className="text-white/60">Available for new projects</span>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col sm:flex-row gap-8">
                            <a
                                href="tel:+919409010977"
                                className="text-white/60 hover:text-[#4353FF] transition-colors text-sm font-medium flex items-center gap-2 group"
                            >
                                +91 9409010977
                                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <a
                                href="mailto:bharodiyamit@gmail.com"
                                className="text-white/60 hover:text-[#4353FF] transition-colors text-sm font-medium flex items-center gap-2 group"
                            >
                                bharodiyamit@gmail.com
                                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Main Links Grid */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Services */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Services</h4>
                            <ul className="space-y-3">
                                {services.map((service) => (
                                    <li key={service.name}>
                                        <button
                                            onClick={() => scrollToSection(service.id)}
                                            className="text-white/40 hover:text-[#4353FF] transition-colors text-sm font-medium text-left"
                                        >
                                            {service.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Skills */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Skills</h4>
                            <ul className="space-y-3">
                                {skills.slice(0, 8).map((skill) => (
                                    <li key={skill}>
                                        <button
                                            onClick={() => scrollToSection('skills')}
                                            className="text-white/40 hover:text-[#4353FF] transition-colors text-sm font-medium text-left"
                                        >
                                            {skill}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* More Skills */}
                        <motion.div variants={itemVariants} className="hidden md:block">
                            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider opacity-0">Skills</h4>
                            <ul className="space-y-3">
                                {skills.slice(8).map((skill) => (
                                    <li key={skill}>
                                        <button
                                            onClick={() => scrollToSection('skills')}
                                            className="text-white/40 hover:text-[#4353FF] transition-colors text-sm font-medium text-left"
                                        >
                                            {skill}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Technology */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Technology</h4>
                            <ul className="space-y-3">
                                {technology.map((tech) => (
                                    <li key={tech}>
                                        <button
                                            onClick={() => scrollToSection('skills')}
                                            className="text-white/40 hover:text-[#4353FF] transition-colors text-sm font-medium text-left"
                                        >
                                            {tech}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Navigation</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => scrollToSection(link.id)}
                                            className="text-white/40 hover:text-[#4353FF] transition-colors text-sm font-medium text-left"
                                        >
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>

                    {/* Bottom Bar */}
                    <motion.div
                        className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {[
                                { icon: Github, url: 'https://github.com/9-mituPatel', label: 'GitHub' },
                                { icon: Linkedin, url: 'https://www.linkedin.com/in/mit-bharodiya-4a6007256', label: 'LinkedIn' },
                                { icon: Mail, url: 'mailto:bharodiyamit@gmail.com', label: 'Email' },
                            ].map(({ icon: Icon, url, label }) => (
                                <motion.a
                                    key={label}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-[#4353FF] hover:border-[#4353FF]/30 hover:bg-[#4353FF]/5 transition-all duration-300"
                                    aria-label={label}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Taglines */}
                        <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-white/20">
                            <motion.span
                                className="flex items-center gap-1.5 hover:text-[#4353FF] cursor-default transition-colors"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Code className="w-3 h-3" />
                                Clean Code
                            </motion.span>
                            <motion.span
                                className="flex items-center gap-1.5 hover:text-[#4353FF] cursor-default transition-colors"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Zap className="w-3 h-3" />
                                High Performance
                            </motion.span>
                            <motion.span
                                className="flex items-center gap-1.5 hover:text-[#4353FF] cursor-default transition-colors"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Shield className="w-3 h-3" />
                                Secure Systems
                            </motion.span>
                        </div>

                        {/* Copyright */}
                        <div className="text-white/30 text-xs font-medium flex items-center gap-1">
                            © {currentYear} Mit Bharodiya. Made with
                            <Heart className="w-3 h-3 text-[#ef4444] inline mx-0.5" />
                        </div>
                    </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

            {/* Back to top button */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-[#4353FF] to-[#6366f1] border border-white/20 flex items-center justify-center text-white shadow-[0_0_30px_rgba(67,83,255,0.3)] hover:shadow-[0_0_40px_rgba(67,83,255,0.5)] transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Back to top"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </motion.button>
        </footer>
    );
};

export default MegaFooter;
