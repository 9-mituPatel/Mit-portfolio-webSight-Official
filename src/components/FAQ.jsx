import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
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

        const element = document.getElementById('faq');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

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

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faq" className="relative py-24 sm:py-32 overflow-hidden bg-[#000101]">
            {/* Background */}
            <div className="absolute inset-0 bg-grid-modern opacity-[0.02] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
                        <div>
                            <div className={`
                inline-flex items-center gap-2 mb-6
                transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}>
                                <span className="text-[#4353FF] font-bold">—</span>
                                <span className="text-sm font-bold uppercase tracking-widest text-[#4353FF]">FAQs</span>
                            </div>
                            <h2 className={`
                text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight
                transition-all duration-700 delay-100
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}>
                                Frequently Asked<br />Questions
                            </h2>
                        </div>
                        <div className={`
              flex items-end
              transition-all duration-700 delay-200
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}>
                            <p className="text-white/50 text-lg leading-relaxed">
                                Here are some of the most common questions regarding our software dev services
                            </p>
                        </div>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-0">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`
                  border-b border-white/10
                  transition-all duration-500
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
                                style={{ transitionDelay: `${300 + index * 100}ms` }}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full py-6 sm:py-8 flex items-center justify-between text-left group"
                                >
                                    <h3 className={`
                    text-lg sm:text-xl font-bold pr-8
                    transition-colors duration-300
                    ${openIndex === index ? 'text-white' : 'text-white/70 group-hover:text-white'}
                  `}>
                                        {faq.question}
                                    </h3>
                                    <div className={`
                    flex-shrink-0 w-8 h-8 rounded-lg
                    flex items-center justify-center
                    transition-all duration-300
                    ${openIndex === index
                                            ? 'bg-[#4353FF]/20 text-[#4353FF]'
                                            : 'bg-white/5 text-white/40 group-hover:text-white/70'
                                        }
                  `}>
                                        <ChevronDown
                                            className={`
                        w-5 h-5 transition-transform duration-300
                        ${openIndex === index ? 'rotate-180' : ''}
                      `}
                                        />
                                    </div>
                                </button>

                                {/* Answer */}
                                <div className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${openIndex === index ? 'max-h-96 opacity-100 pb-6 sm:pb-8' : 'max-h-0 opacity-0'}
                `}>
                                    <p className="text-white/50 text-base leading-relaxed pr-16">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
