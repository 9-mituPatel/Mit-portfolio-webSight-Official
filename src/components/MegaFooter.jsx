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

const MegaFooter = () => {
  const currentYear = new Date().getFullYear();
  const [openTech, setOpenTech] = useState(null);

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
                </div>
              ))}
            </div>
          </div>
        </div>

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
};

export default MegaFooter;
