import { useState, useEffect } from 'react';

const TechSkillsGrid = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
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

        const element = document.getElementById('tech-skills-grid');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    const techIcons = [
        // Row 1 - Languages & Core
        { name: 'JavaScript', icon: 'JS', color: '#F7DF1E', row: 1 },
        { name: 'TypeScript', icon: 'TS', color: '#3178C6', row: 1 },
        { name: 'Node.js', icon: '🟢', color: '#339933', row: 1 },
        { name: 'React.js', icon: '⚛️', color: '#61DAFB', row: 1 },
        { name: 'Next.js', icon: 'N', color: '#ffffff', row: 1 },
        { name: 'Angular', icon: 'A', color: '#DD0031', row: 1 },
        { name: 'Express.js', icon: 'Ex', color: '#ffffff', row: 1 },
        { name: 'HTML5', icon: '🌐', color: '#E44D26', row: 1 },
        { name: 'CSS3', icon: '🎨', color: '#1572B6', row: 1 },
        // Row 2 - Databases & Storage
        { name: 'MongoDB', icon: '🍃', color: '#47A248', row: 2 },
        { name: 'MySQL', icon: '🐬', color: '#4479A1', row: 2 },
        { name: 'Redis', icon: '🔴', color: '#DC382D', row: 2 },
        { name: 'PostgreSQL', icon: '🐘', color: '#4169E1', row: 2 },
        { name: 'Amazon RDS', icon: '☁️', color: '#FF9900', row: 2 },
        { name: 'Elasticsearch', icon: '🔍', color: '#005571', row: 2 },
        { name: 'SQL', icon: 'SQL', color: '#CC2927', row: 2 },
        { name: 'BullMQ', icon: '🐂', color: '#E34C26', row: 2 },
        // Row 3 (center row with logo)
        { name: 'Tailwind CSS', icon: '💨', color: '#06B6D4', row: 3 },
        { name: 'Bootstrap', icon: 'B', color: '#7952B3', row: 3 },
        { name: 'Mediasoup', icon: '📹', color: '#27ca40', row: 3 },
        { name: 'CENTER', icon: '</>', color: '#4353FF', row: 3, isCenter: true },
        { name: 'Mongoose', icon: 'M', color: '#880000', row: 3 },
        { name: 'Sequelize', icon: 'S', color: '#52B0E7', row: 3 },
        { name: 'Strapi', icon: 'S', color: '#4945FF', row: 3 },
        // Row 4 - DevOps & Cloud
        { name: 'Docker', icon: '🐳', color: '#2496ED', row: 4 },
        { name: 'AWS', icon: '☁️', color: '#FF9900', row: 4 },
        { name: 'PM2', icon: 'PM2', color: '#2b037a', row: 4 },
        { name: 'FFmpeg', icon: '🎬', color: '#007808', row: 4 },
        { name: 'Nginx', icon: 'N', color: '#009639', row: 4 },
        { name: 'Linux', icon: '🐧', color: '#FCC624', row: 4 },
        { name: 'Ubuntu', icon: 'U', color: '#E95420', row: 4 },
        // Row 5 - Tools & Others
        { name: 'Git', icon: '📂', color: '#F05032', row: 5 },
        { name: 'Postman', icon: '📬', color: '#FF6C37', row: 5 },
        { name: 'JWT', icon: '🔐', color: '#000000', row: 5 },
        { name: 'Socket.IO', icon: '🔌', color: '#010101', row: 5 },
        { name: 'WebRTC', icon: '📞', color: '#333333', row: 5 },
        { name: 'Coturn', icon: '🔄', color: '#0099CC', row: 5 },
    ];

    return (
        <section
            id="tech-skills-grid"
            className="relative py-32 overflow-hidden bg-[#000101]"
        >
            {/* Background gradient */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(67,83,255,0.15),transparent_70%)]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-[#4353FF] animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-white/60">Technology Stack</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                        My <span className="text-[#4353FF]">Technology</span> Expertise
                    </h2>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto">
                        Mastering cutting-edge technologies to build scalable, modern applications
                    </p>
                </div>

                {/* Tech Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Grid Container */}
                        <div className="grid gap-3 sm:gap-4">
                            {[1, 2, 3, 4, 5].map((row) => (
                                <div
                                    key={row}
                                    className={`flex justify-center gap-3 sm:gap-4 ${row % 2 === 0 ? 'ml-8' : ''
                                        }`}
                                    style={{
                                        transform: `translateX(${row % 2 === 0 ? '20px' : '0'})`,
                                    }}
                                >
                                    {techIcons
                                        .filter(tech => tech.row === row)
                                        .map((tech, index) => {
                                            const globalIndex = techIcons.findIndex(t => t === tech);

                                            if (tech.isCenter) {
                                                return (
                                                    <div
                                                        key={tech.name}
                                                        className={`
                              relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28
                              rounded-2xl
                              bg-gradient-to-br from-[#1a1f4d] to-[#0d1233]
                              border-2 border-[#4353FF]/60
                              shadow-[0_0_60px_rgba(67,83,255,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)]
                              flex items-center justify-center
                              transition-all duration-500
                              z-20
                              ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                            `}
                                                        style={{
                                                            transitionDelay: `${globalIndex * 50}ms`,
                                                        }}
                                                    >
                                                        <span className="text-4xl sm:text-5xl font-black text-[#4353FF]">&lt;/&gt;</span>
                                                    </div>
                                                );
                                            }

                                            return (
                                                <div
                                                    key={`${tech.name}-${index}`}
                                                    className={`
                            relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                            rounded-xl sm:rounded-2xl
                            bg-gradient-to-br from-[#12163a] to-[#080b1f]
                            border border-white/5
                            shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]
                            flex items-center justify-center
                            cursor-pointer
                            transition-all duration-300
                            hover:border-[#4353FF]/40
                            hover:shadow-[0_0_30px_rgba(67,83,255,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)]
                            hover:scale-105
                            group
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                          `}
                                                    style={{
                                                        transitionDelay: `${globalIndex * 30}ms`,
                                                    }}
                                                    onMouseEnter={() => setHoveredIndex(globalIndex)}
                                                    onMouseLeave={() => setHoveredIndex(null)}
                                                >
                                                    {/* Glow effect on hover */}
                                                    <div
                                                        className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                        style={{
                                                            background: `radial-gradient(circle at center, ${tech.color}20 0%, transparent 70%)`,
                                                        }}
                                                    />

                                                    {/* Icon */}
                                                    <span
                                                        className="text-xl sm:text-2xl lg:text-3xl relative z-10 transition-transform duration-300 group-hover:scale-110"
                                                        style={{
                                                            color: tech.color,
                                                            textShadow: hoveredIndex === globalIndex ? `0 0 20px ${tech.color}` : 'none'
                                                        }}
                                                    >
                                                        {tech.icon}
                                                    </span>

                                                    {/* Tooltip */}
                                                    <div className={`
                            absolute -top-10 left-1/2 -translate-x-1/2
                            px-3 py-1.5 rounded-lg
                            bg-[#12163a] border border-white/10
                            text-xs font-bold text-white whitespace-nowrap
                            transition-all duration-200
                            ${hoveredIndex === globalIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                            pointer-events-none
                          `}>
                                                        {tech.name}
                                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#12163a] border-r border-b border-white/10" />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            ))}
                        </div>

                        {/* Floating particles */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {[...Array(15)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1 h-1 rounded-full bg-[#4353FF]/30 animate-float"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 5}s`,
                                        animationDuration: `${3 + Math.random() * 4}s`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
        </section>
    );
};

export default TechSkillsGrid;
