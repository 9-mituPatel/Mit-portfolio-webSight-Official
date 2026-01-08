<<<<<<< HEAD
import { Github, Linkedin, Mail, ArrowUpRight, Heart, Code, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
=======
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import logo from "../assets/logo.png";
import { seoRoutes } from "@/config/seoRoutes";
>>>>>>> ab60e23 (GoCodexa Commit)

const MegaFooter = () => {
  const currentYear = new Date().getFullYear();
  const [openTech, setOpenTech] = useState(null);

<<<<<<< HEAD
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
=======
  const toggleTech = (index) => {
    setOpenTech(openTech === index ? null : index);
  };

  const contactInfo = {
    phone: "+91 94094 95765",
    email: "Team@gocodexa.com",
    address:
      "219 Silver Trade Center, Opp Utran Power House, Mota Varachha, Surat 395006",
  };

  const companyLinks = [
    { name: "About", path: seoRoutes.about.path },
    { name: "Career", path: seoRoutes.projects.path },
    { name: "Contact", path: seoRoutes.contact.path },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
  ];

  const servicesLinks = [
    "Web Development",
    "Mobile Development",
    "Application Development",
    "UI/UX Design",
    "Technology Architecture",
    "Software/IT Staffing",
    "DevOps Services",
    "Quality Assurance Testing",
    "MVP Development",
    "SaaS Development",
    "API Development",
    "Project Management",
  ];

  const industries = [
    "Enterprise",
    "Government",
    "Education",
    "Small Business",
    "Marketing",
    "Finance",
    "Healthcare",
    "Agriculture",
    "eCommerce",
  ];

  const technologies = [
    {
      category: "Frontend",
      items: ["React.js", "Angular", "Vue.js", "Next.js"],
    },
    { category: "Backend", items: ["Node.js", "Python", "Java", ".NET"] },
    {
      category: "Mobile",
      items: ["Flutter", "React Native", "iOS", "Android"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Azure", "Docker", "Kubernetes"],
    },
    { category: "UI/UX", items: ["Figma", "Adobe XD", "Sketch"] },
    {
      category: "Digital Marketing & SEO",
      items: ["SEO", "SEM", "Content Marketing"],
    },
  ];

  return (
    <footer className="bg-[#000000] text-white pt-16 pb-6 border-t border-white/10 font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Logo & Contact */}
          <div className="space-y-6">
            <Link to="/" className="inline-block mb-4">
              <div className="flex items-center gap-2">
                <img src={logo} alt="GoCodexa" className="h-10 w-auto" />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Partner with GoCodexa Infotech for hassle-free IT solutions. From
              concept to deployment, we bring expertise, innovation, and
              attention to detail to every project.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#4C91C9] transition-colors"
              >
                <Phone className="w-4 h-4 text-gray-500" />
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#4C91C9] transition-colors"
              >
                <Mail className="w-4 h-4 text-gray-500" />
                {contactInfo.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-gray-500 mt-1 shrink-0" />
                <span className="max-w-xs">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#4C91C9] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              {servicesLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-[#4C91C9] transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Industries (New) */}
          <div>
            <h3 className="text-lg font-bold mb-6">Industries</h3>
            <ul className="space-y-4">
              {industries.map((industry) => (
                <li key={industry}>
                  <Link
                    to="/industries"
                    className="text-gray-400 hover:text-[#4C91C9] transition-colors text-sm"
                  >
                    {industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 5: Technologies */}
          <div>
            <h3 className="text-lg font-bold mb-6">Technologies</h3>
            <div className="space-y-2">
              {technologies.map((tech, index) => (
                <div
                  key={tech.category}
                  className="border-b border-white/5 last:border-0"
                >
                  <button
                    onClick={() => toggleTech(index)}
                    className="w-full flex items-center justify-between py-3 text-sm text-gray-300 hover:text-[#4C91C9] transition-colors"
                  >
                    {tech.category}
                    {openTech === index ? (
                      <ChevronUp className="w-3 h-3" />
                    ) : (
                      <ChevronDown className="w-3 h-3" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openTech === index
                        ? "max-h-40 opacity-100 pb-3"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-wrap gap-2 pl-2">
                      {tech.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
>>>>>>> ab60e23 (GoCodexa Commit)
                </div>
              ))}
            </div>
          </div>
        </div>

<<<<<<< HEAD
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
=======
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            {[Linkedin, Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded bg-[#111] hover:bg-[#4C91C9] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-xs text-center md:text-right">
            <p>&copy; {currentYear} GoCodexa Infotech. All rights reserved.</p>
            <p className="mt-1 opacity-60">Crafted with precision</p>
          </div>
        </div>
      </div>
    </footer>
  );
>>>>>>> ab60e23 (GoCodexa Commit)
};

export default MegaFooter;
