import { motion } from "framer-motion";
import {
    FileCode, FileText, Braces,
    Atom, Globe, Hexagon, ShoppingBag
} from "lucide-react";

const ServicesFrameworks = () => {
    const services = [
        { icon: FileCode, label: "HTML", color: "#E34F26" },
        { icon: FileText, label: "CSS", color: "#1572B6" },
        { icon: Braces, label: "JavaScript", color: "#F7DF1E" }
    ];

    const frameworks = [
        { icon: Atom, label: "React.js", color: "#61DAFB" },
        { icon: Globe, label: "Next.js", color: "#FFFFFF" },
        { icon: Hexagon, label: "Webflow", color: "#4353FF" },
        { icon: ShoppingBag, label: "Shopify", color: "#96BF48" }
    ];

    return (
        <section id="services" className="py-24 bg-[#000101] relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-grid-modern opacity-5 pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Services Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0a0a12] border border-white/5 rounded-2xl p-8 hover:border-[#4353FF]/30 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-[#4353FF]/10 rounded-xl flex items-center justify-center mb-6 border border-[#4353FF]/20 group-hover:scale-110 transition-transform">
                            <FileCode className="w-6 h-6 text-[#4353FF]" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3">Services</h3>
                        <p className="text-white/40 text-sm mb-8 leading-relaxed">
                            We provide support for all of your custom
                            software development projects.
                        </p>

                        <div className="space-y-4">
                            {services.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 group/item cursor-pointer"
                                >
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                                        style={{ backgroundColor: `${item.color}15` }}
                                    >
                                        <item.icon
                                            className="w-5 h-5 transition-colors"
                                            style={{ color: item.color }}
                                        />
                                    </div>
                                    <span className="text-white/70 text-base group-hover/item:text-white transition-colors font-medium">
                                        {item.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Frameworks Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0a0a12] border border-white/5 rounded-2xl p-8 hover:border-[#4353FF]/30 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-[#4353FF]/10 rounded-xl flex items-center justify-center mb-6 border border-[#4353FF]/20 group-hover:scale-110 transition-transform">
                            <Atom className="w-6 h-6 text-[#4353FF]" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3">Frameworks</h3>
                        <p className="text-white/40 text-sm mb-8 leading-relaxed">
                            The best software development firms start
                            their web development projects at the
                            design phase.
                        </p>

                        <div className="space-y-4">
                            {frameworks.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 group/item cursor-pointer"
                                >
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                                        style={{ backgroundColor: item.label === "Next.js" ? 'rgba(255,255,255,0.1)' : `${item.color}15` }}
                                    >
                                        <item.icon
                                            className="w-5 h-5 transition-colors"
                                            style={{ color: item.color }}
                                        />
                                    </div>
                                    <span className="text-white/70 text-base group-hover/item:text-white transition-colors font-medium">
                                        {item.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Preview - Code Editor Mock */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#4353FF]/10 to-transparent rounded-3xl" />

                        {/* Floating Code Cards */}
                        <div className="relative h-full p-6 flex flex-col gap-4">
                            {/* API Code Block */}
                            <div className="bg-[#0a0a12]/80 backdrop-blur border border-white/10 rounded-xl p-4 transform hover:-translate-y-1 transition-transform">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                    <span className="text-white/30 text-xs ml-2">api.js</span>
                                </div>
                                <pre className="text-xs font-mono">
                                    <span className="text-purple-400">const</span>{" "}
                                    <span className="text-blue-400">fetchData</span>{" "}
                                    <span className="text-white/50">=</span>{" "}
                                    <span className="text-purple-400">async</span>{" "}
                                    <span className="text-white/50">()</span>{" "}
                                    <span className="text-purple-400">=&gt;</span>{" "}
                                    <span className="text-white/50">{"{"}</span>
                                    {"\n"}
                                    <span className="text-white/30">  </span>
                                    <span className="text-purple-400">const</span>{" "}
                                    <span className="text-white/70">res</span>{" "}
                                    <span className="text-white/50">=</span>{" "}
                                    <span className="text-purple-400">await</span>{" "}
                                    <span className="text-yellow-400">fetch</span>
                                    <span className="text-white/50">(</span>
                                    <span className="text-green-400">'/api'</span>
                                    <span className="text-white/50">)</span>
                                    {"\n"}
                                    <span className="text-white/30">  </span>
                                    <span className="text-purple-400">return</span>{" "}
                                    <span className="text-white/70">res</span>
                                    <span className="text-white/50">.</span>
                                    <span className="text-yellow-400">json</span>
                                    <span className="text-white/50">()</span>
                                    {"\n"}
                                    <span className="text-white/50">{"}"}</span>
                                </pre>
                            </div>

                            {/* Component Code Block */}
                            <div className="bg-[#0a0a12]/80 backdrop-blur border border-white/10 rounded-xl p-4 transform hover:-translate-y-1 transition-transform">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                    <span className="text-white/30 text-xs ml-2">Component.jsx</span>
                                </div>
                                <pre className="text-xs font-mono">
                                    <span className="text-purple-400">export</span>{" "}
                                    <span className="text-purple-400">default</span>{" "}
                                    <span className="text-purple-400">function</span>{" "}
                                    <span className="text-yellow-400">Card</span>
                                    <span className="text-white/50">() {"{"}</span>
                                    {"\n"}
                                    <span className="text-white/30">  </span>
                                    <span className="text-purple-400">return</span>{" "}
                                    <span className="text-white/50">(</span>
                                    {"\n"}
                                    <span className="text-white/30">    </span>
                                    <span className="text-blue-400">&lt;div</span>{" "}
                                    <span className="text-green-400">className</span>
                                    <span className="text-white/50">=</span>
                                    <span className="text-orange-400">"card"</span>
                                    <span className="text-blue-400">&gt;</span>
                                    {"\n"}
                                    <span className="text-white/30">      </span>
                                    <span className="text-white/60">...</span>
                                    {"\n"}
                                    <span className="text-white/30">    </span>
                                    <span className="text-blue-400">&lt;/div&gt;</span>
                                    {"\n"}
                                    <span className="text-white/30">  </span>
                                    <span className="text-white/50">)</span>
                                    {"\n"}
                                    <span className="text-white/50">{"}"}</span>
                                </pre>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute bottom-4 right-4 bg-[#4353FF] rounded-full px-4 py-2 shadow-lg shadow-[#4353FF]/30">
                                <span className="text-white text-xs font-semibold">100% Custom Code</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesFrameworks;
