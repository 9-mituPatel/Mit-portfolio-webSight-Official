import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const MegaFooter = () => {
    const currentYear = new Date().getFullYear();

    const services = [
        'Web Development',
        'Mobile Development',
        'Application Development',
        'UX/UI Design',
        'Technology Architecture',
        'Software/IT Staffing',
        'DevOps Services',
        'Quality Assurance Testing',
        'MVP Development',
        'SaaS Development',
        'API Development',
        'Project Management'
    ];

    const skills = [
        { name: 'Java', highlighted: false },
        { name: 'JavaScript', highlighted: false },
        { name: 'Next.js', highlighted: false },
        { name: 'Node.js', highlighted: false },
        { name: 'React.js', highlighted: false },
        { name: 'Electron.js', highlighted: false },
        { name: 'OpenCV', highlighted: false },
        { name: 'HTML5', highlighted: false },
        { name: 'PHP', highlighted: false },
        { name: 'Python', highlighted: false },
        { name: 'C#/.NET', highlighted: false },
        { name: 'Labview', highlighted: false },
        { name: 'Unity', highlighted: false },
        { name: 'Webflow', highlighted: false },
        { name: 'Shopify', highlighted: false },
        { name: 'SAP', highlighted: false },
        { name: 'Kubernetes', highlighted: false },
    ];

    const skills2 = [
        { name: 'iOS', highlighted: false },
        { name: 'Android', highlighted: false },
        { name: 'Solidworks', highlighted: false },
        { name: 'Azure', highlighted: false },
        { name: 'Sitefinity', highlighted: false },
        { name: 'Python', highlighted: false },
        { name: 'Laravel', highlighted: false },
        { name: 'AWS', highlighted: false },
        { name: 'WordPress', highlighted: false },
        { name: 'Salesforce', highlighted: true },
        { name: 'Oracle', highlighted: false },
        { name: 'Nextcloud', highlighted: false },
        { name: 'Netsuite', highlighted: false },
        { name: 'SQL', highlighted: false },
        { name: 'SQL Server', highlighted: false },
        { name: 'Tableau', highlighted: false },
        { name: 'Elastic Search', highlighted: false },
    ];

    const technology = [
        'Artificial Intelligence',
        'Cybersecurity',
        'Robotic Process Automation',
        'Blockchain (DLT)',
        'Extended Reality (AR/VR)',
        'ERP',
        'CRM',
        'Online Storage',
        'Big Data',
        'Business Intelligence',
        'Internet of Things (IOT)',
    ];

    const industries = [
        'Enterprise',
        'Government',
        'Education',
        'Small Business',
        'Marketing',
        'Finance',
        'Healthcare',
        'Agriculture',
        'eCommerce',
    ];

    return (
        <footer className="bg-[#000101] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-grid-modern opacity-[0.02] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Top Section - Logo and Contact */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
                        {/* Logo */}
                        <div className="flex items-center gap-4">
                            <div className="text-5xl font-black text-[#4353FF]">&lt;/&gt;</div>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col sm:flex-row gap-8 text-right">
                            <div>
                                <a
                                    href="tel:+919327808282"
                                    className="text-white/60 hover:text-[#4353FF] transition-colors text-sm"
                                >
                                    +91 9327808282
                                </a>
                            </div>
                            <div className="text-white/40 text-sm">
                                © {currentYear} Mit Bharodiya. All Rights Reserved
                            </div>
                        </div>
                    </div>

                    {/* Main Footer Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
                        {/* Services */}
                        <div>
                            <h4 className="text-white font-bold text-base mb-6">Services</h4>
                            <ul className="space-y-3">
                                {services.map((service) => (
                                    <li key={service}>
                                        <a
                                            href="#services"
                                            className="text-white/50 hover:text-[#4353FF] transition-colors text-sm"
                                        >
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Skills Column 1 */}
                        <div>
                            <h4 className="text-white font-bold text-base mb-6">Skills</h4>
                            <ul className="space-y-3">
                                {skills.map((skill) => (
                                    <li key={skill.name}>
                                        <a
                                            href="#skills"
                                            className={`text-sm transition-colors ${skill.highlighted
                                                    ? 'text-[#4353FF] hover:text-[#5a6aff]'
                                                    : 'text-white/50 hover:text-[#4353FF]'
                                                }`}
                                        >
                                            {skill.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Skills Column 2 (continuation) */}
                        <div>
                            <h4 className="text-white font-bold text-base mb-6 opacity-0">Skills</h4>
                            <ul className="space-y-3">
                                {skills2.map((skill) => (
                                    <li key={skill.name}>
                                        <a
                                            href="#skills"
                                            className={`text-sm transition-colors ${skill.highlighted
                                                    ? 'text-[#4353FF] hover:text-[#5a6aff]'
                                                    : 'text-white/50 hover:text-[#4353FF]'
                                                }`}
                                        >
                                            {skill.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technology */}
                        <div>
                            <h4 className="text-white font-bold text-base mb-6">Technology</h4>
                            <ul className="space-y-3">
                                {technology.map((tech) => (
                                    <li key={tech}>
                                        <a
                                            href="#tech"
                                            className="text-white/50 hover:text-[#4353FF] transition-colors text-sm"
                                        >
                                            {tech}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Industries */}
                        <div>
                            <h4 className="text-white font-bold text-base mb-6">Industries</h4>
                            <ul className="space-y-3">
                                {industries.map((industry) => (
                                    <li key={industry}>
                                        <a
                                            href="#industries"
                                            className="text-white/50 hover:text-[#4353FF] transition-colors text-sm"
                                        >
                                            {industry}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {[
                                { icon: Github, url: 'https://github.com/9-mituPatel', label: 'GitHub' },
                                { icon: Linkedin, url: 'https://www.linkedin.com/in/mit-bharodiya-4a6007256', label: 'LinkedIn' },
                                { icon: Mail, url: 'mailto:bharodiyamit@gmail.com', label: 'Email' },
                            ].map(({ icon: Icon, url, label }) => (
                                <a
                                    key={label}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#4353FF] hover:border-[#4353FF]/30 transition-all duration-300"
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>

                        {/* Taglines */}
                        <div className="flex flex-wrap justify-center gap-6 text-xs font-medium uppercase tracking-wider text-white/20">
                            <span className="hover:text-[#4353FF] cursor-default transition-colors">Clean Code</span>
                            <span className="hover:text-[#4353FF] cursor-default transition-colors">High Performance</span>
                            <span className="hover:text-[#4353FF] cursor-default transition-colors">Scalable Architecture</span>
                        </div>

                        {/* Back to top */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#4353FF] hover:border-[#4353FF]/30 transition-all duration-300 hover:-translate-y-1"
                            aria-label="Back to top"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating avatar - like in reference */}
            <div className="fixed bottom-6 right-6 z-50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4353FF] to-[#6366f1] border-2 border-white/20 shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">M</span>
                </div>
            </div>
        </footer>
    );
};

export default MegaFooter;
