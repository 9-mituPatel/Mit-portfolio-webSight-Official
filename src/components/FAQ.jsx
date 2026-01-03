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
            question: "What is Software Development?",
            answer: "Software development is a process that can be used to create custom software for a customer or client. This process can be used to create custom applications, middleware, or even operating systems. A software development company can provide these services to businesses of all sizes, from small businesses to large enterprise organizations. Software development is a process that can be used to create custom software for a customer or client. This process can be used to create custom applications, middleware, or even operating systems."
        },
        {
            question: "How Do You Choose the Best Software Development Company?",
            answer: "Choosing the best software development company involves evaluating their technical expertise, portfolio, client testimonials, communication practices, and project management methodologies. Look for companies with experience in your industry and the specific technologies you need. Consider their team's qualifications, their approach to quality assurance, and their ability to scale with your project requirements."
        },
        {
            question: "What is Agile Software Development?",
            answer: "Agile software development is an iterative approach to building software that emphasizes flexibility, collaboration, and customer feedback. It breaks projects into smaller sprints, allowing teams to adapt quickly to changes and deliver working software incrementally. This methodology promotes continuous improvement, close collaboration between developers and stakeholders, and rapid response to evolving requirements."
        },
        {
            question: "How Much Do Your Custom Software Engineering Services Cost?",
            answer: "The cost of custom software engineering services varies based on project complexity, technology requirements, team size, and timeline. We offer flexible engagement models including fixed-price projects, time and materials, and dedicated team arrangements. Contact us for a detailed quote tailored to your specific project needs and budget constraints."
        },
        {
            question: "What Are the Benefits of Custom Software Development?",
            answer: "Custom software development offers numerous benefits including tailored solutions that fit your exact business requirements, competitive advantages through unique features, better scalability and flexibility, improved integration with existing systems, enhanced security measures, and long-term cost efficiency. Custom solutions grow with your business and can be continuously optimized."
        },
        {
            question: "How Long Does it Take to Create and Build Custom Software?",
            answer: "The timeline for custom software development depends on project scope, complexity, and requirements. Simple applications might take 2-4 months, while complex enterprise solutions can require 6-12+ months. Our agile methodology allows us to deliver working features incrementally, so you start seeing value early in the development process rather than waiting for the complete product."
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
