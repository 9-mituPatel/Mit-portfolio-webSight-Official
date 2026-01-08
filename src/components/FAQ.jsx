import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { seoRoutes } from "@/config/seoRoutes";

const FAQ = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("faq");
    if (element) {
      observer.observe(element);
    }

<<<<<<< HEAD
    const faqs = [
        {
            question: "What technologies do you specialize in?",
            answer: "I specialize in the MERN Stack (MongoDB, Express.js, React.js, Node.js) along with Next.js, TypeScript, Redis, Elasticsearch, and AWS. I'm proficient in building RESTful APIs, implementing real-time features with Socket.IO and WebRTC, and deploying applications using Docker and PM2. I also have experience with Angular, SQL databases (MySQL, PostgreSQL), and message queues like BullMQ."
        },
        {
            question: "What types of projects have you worked on?",
            answer: "I've worked on diverse projects including Video-KYC (V-CIP) systems with WebRTC and Mediasoup, FastTag management platforms (OmniFastag), education platforms (Youth Education - NCERT), healthcare ERP systems (Healthray, HevMed), e-commerce platforms, and enterprise-grade CMS solutions. My experience spans from payment systems handling soundbox inventory to migration services handling 50Cr+ records."
        },
        {
            question: "Do you provide freelance services?",
            answer: "Yes! I'm open to freelance projects, full-time opportunities, and interesting collaborations. I've successfully delivered freelance projects like Sparkle Diamond Boutique (SDB) - a diamond trading platform. Whether you need a full-stack application, API development, or technical consultation, feel free to reach out."
        },
        {
            question: "What is your approach to building scalable applications?",
            answer: "I follow industry best practices including microservices architecture, efficient database design with proper indexing, caching strategies using Redis, and implementing message queues for heavy operations. I use CI/CD pipelines with Docker for zero-downtime deployments and PM2 for process management. I also integrate Elasticsearch for fast search capabilities when dealing with large datasets."
        },
        {
            question: "Can you lead a development team?",
            answer: "Absolutely! At Braincuber Technologies, I currently serve as a Tech Lead where I lead a team of developers, provide code reviews, mentoring, and guidance. I collaborate with clients to gather requirements, plan project timelines, and deliver high-quality solutions. I believe in clean code practices, proper documentation, and effective communication."
        },
        {
            question: "How can I contact you for a project?",
            answer: "You can reach me via email at bharodiyamit@gmail.com or call me at +91-9409010977. I'm based in Surat, Gujarat, India. I usually respond within 24 hours. You can also connect with me on LinkedIn or check out my GitHub profile for my open-source contributions."
        }
    ];
=======
    return () => observer.disconnect();
  }, []);
>>>>>>> ab60e23 (GoCodexa Commit)

  const faqs = [
    {
      question: "What is Software Development?",
      answer:
        "Software development is a process that can be used to create custom software for a customer or client. This process can be used to create custom applications, middleware, or even operating systems. A software development company can provide these services to businesses of all sizes, from small businesses to large enterprise organizations. Software development is a process that can be used to create custom software for a customer or client. This process can be used to create custom applications, middleware, or even operating systems.",
    },
    {
      question: "How Do You Choose the Best Software Development Company?",
      answer:
        "Choosing the best software development company involves evaluating their technical expertise, portfolio, client testimonials, communication practices, and project management methodologies. Look for companies with experience in your industry and the specific technologies you need. Consider their team's qualifications, their approach to quality assurance, and their ability to scale with your project requirements.",
    },
    {
      question: "What is Agile Software Development?",
      answer:
        "Agile software development is an iterative approach to building software that emphasizes flexibility, collaboration, and customer feedback. It breaks projects into smaller sprints, allowing teams to adapt quickly to changes and deliver working software incrementally. This methodology promotes continuous improvement, close collaboration between developers and stakeholders, and rapid response to evolving requirements.",
    },
    {
      question: "How Much Do Your Custom Software Engineering Services Cost?",
      answer:
        "The cost of custom software engineering services varies based on project complexity, technology requirements, team size, and timeline. We offer flexible engagement models including fixed-price projects, time and materials, and dedicated team arrangements. Contact us for a detailed quote tailored to your specific project needs and budget constraints.",
    },
    {
      question: "What Are the Benefits of Custom Software Development?",
      answer:
        "Custom software development offers numerous benefits including tailored solutions that fit your exact business requirements, competitive advantages through unique features, better scalability and flexibility, improved integration with existing systems, enhanced security measures, and long-term cost efficiency. Custom solutions grow with your business and can be continuously optimized.",
    },
    {
      question: "How Long Does it Take to Create and Build Custom Software?",
      answer:
        "The timeline for custom software development depends on project scope, complexity, and requirements. Simple applications might take 2-4 months, while complex enterprise solutions can require 6-12+ months. Our agile methodology allows us to deliver working features incrementally, so you start seeing value early in the development process rather than waiting for the complete product.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 overflow-hidden bg-[#000101]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.02] pointer-events-none" />
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block mb-6"
        >
          <span className="text-[#4C91C9] font-black tracking-[0.4em] uppercase text-xs px-6 py-2.5 mb-3 border border-[#4C91C9]/20 rounded-full bg-[#4C91C9]/5">
            Got Questions?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter"
        >
          Frequently Asked{" "}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bold bg-gradient-to-r from-[#4C91C9] to-[#fbc72d] bg-clip-text text-transparent mb-4 pb-4"
          >
            Questions
          </motion.span>
        </motion.h2>

        <p className="text-white/50 text-xl font-medium max-w-2xl mx-auto">
          Here are some of the most common questions regarding our software dev
          services
        </p>
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`
                  border-b border-white/10
                  transition-all duration-500
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }
                `}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 sm:py-8 flex items-center justify-between text-left group"
                >
                  <h3
                    className={`
                    text-lg sm:text-xl font-bold pr-8
                    transition-colors duration-300
                    ${
                      openIndex === index
                        ? "text-white"
                        : "text-white/70 group-hover:text-white"
                    }
                  `}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`
                    flex-shrink-0 w-8 h-8 rounded-lg
                    flex items-center justify-center
                    transition-all duration-300
                    ${
                      openIndex === index
                        ? "bg-[#4C91C9]/20 text-[#4C91C9]"
                        : "bg-white/5 text-white/40 group-hover:text-white/70"
                    }
                  `}
                  >
                    <ChevronDown
                      className={`
                        w-5 h-5 transition-transform duration-300
                        ${openIndex === index ? "rotate-180" : ""}
                      `}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${
                    openIndex === index
                      ? "max-h-96 opacity-100 pb-6 sm:pb-8"
                      : "max-h-0 opacity-0"
                  }
                `}
                >
                  <p className="text-white/50 text-base leading-relaxed pr-16">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="flex justify-center mt-20">
            <button
              onClick={() => {
                if (location.pathname === seoRoutes.contact.path) {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                } else {
                  navigate(seoRoutes.contact.path);
                  window.scrollTo(0, 0);
                }
              }}
              className="group flex items-center gap-3 px-8 py-3 bg-[#1A1A1A] hover:bg-[#4C91C9] border border-white/10 rounded-lg transition-all duration-300 hover:scale-105 hover:border-white/20"
            >
              <span className="text-white font-bold text-lg">
                Still have questions? Let's talk!
              </span>
              <ArrowRight className="w-5 h-5 text-[#4C91C9] group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
