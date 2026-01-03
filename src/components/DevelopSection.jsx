import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const DevelopSection = () => {
    return (
        <section id="develop" className="py-32 bg-[#000101] relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-grid-modern opacity-5 pointer-events-none" />

            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="grid lg:grid-cols-2 gap-16 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Develop</h2>
                        <p className="text-white/50 text-lg leading-relaxed max-w-lg">
                            Our development team brings designs to life with clean, efficient code.
                            We specialize in modern frameworks and scalable architecture that powers
                            enterprise applications worldwide.
                        </p>
                    </motion.div>

                    {/* Right side buttons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-end gap-4"
                    >
                        <span className="text-white/40 text-sm">Develop</span>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="bg-white/5 border-white/10 text-white/70 rounded-full text-xs">
                                GitHub
                            </Button>
                            <Button size="sm" className="bg-white text-black rounded-full text-xs">
                                Watch Video
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Code Editor Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* 3D Perspective Container */}
                    <div
                        className="relative mx-auto max-w-6xl"
                        style={{ perspective: '2000px' }}
                    >
                        {/* Main Editor Window */}
                        <motion.div
                            initial={{ rotateX: 20, rotateY: -10 }}
                            whileInView={{ rotateX: 10, rotateY: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="bg-[#12121f]/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Editor Top Bar */}
                            <div className="flex items-center justify-between px-6 py-4 bg-[#0a0a14] border-b border-white/5">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="flex gap-4 text-xs text-white/40">
                                        <span className="hover:text-white/70 cursor-pointer">Scene</span>
                                        <span className="hover:text-white/70 cursor-pointer">Project</span>
                                        <span className="hover:text-white/70 cursor-pointer">Debug</span>
                                        <span className="hover:text-white/70 cursor-pointer">Editor</span>
                                        <span className="hover:text-white/70 cursor-pointer">Help</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-red-400">● Node3D</span>
                                    <span className="text-xs text-white/30">×</span>
                                </div>
                            </div>

                            {/* Editor Body */}
                            <div className="flex">
                                {/* Left Sidebar - File Tree */}
                                <div className="w-56 border-r border-white/5 p-4 bg-[#0a0a14]/50">
                                    <div className="text-xs text-white/30 uppercase tracking-wider mb-4">Scene</div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-white/70">
                                            <span className="text-red-400">●</span> Node3D
                                        </div>
                                    </div>

                                    <div className="text-xs text-white/30 uppercase tracking-wider mt-8 mb-4">FileSystem</div>
                                    <div className="space-y-1 text-xs text-white/50">
                                        <div className="flex items-center gap-2">
                                            <span>📁</span> res://
                                        </div>
                                        <div className="flex items-center gap-2 pl-4">
                                            <span>📄</span> Node3D.tscn
                                        </div>
                                        <div className="flex items-center gap-2 pl-4 text-[#4353FF]">
                                            <span>📄</span> Node3D.gd
                                        </div>
                                    </div>
                                </div>

                                {/* Main Code Area */}
                                <div className="flex-1 p-6">
                                    <div className="flex gap-4 font-mono text-sm">
                                        {/* Line Numbers */}
                                        <div className="text-white/20 text-right select-none w-8">
                                            {Array.from({ length: 18 }, (_, i) => (
                                                <div key={i} className="leading-7">{i + 1}</div>
                                            ))}
                                        </div>

                                        {/* Code Content */}
                                        <div className="flex-1 overflow-x-auto">
                                            <div className="leading-7"><span className="text-pink-400">extends</span> <span className="text-green-400">Node3D</span></div>
                                            <div className="leading-7">&nbsp;</div>
                                            <div className="leading-7 text-white/30"># Declare member variables here. Examples:</div>
                                            <div className="leading-7 text-white/30"># var a = 2</div>
                                            <div className="leading-7 text-white/30"># var b = "text"</div>
                                            <div className="leading-7">&nbsp;</div>
                                            <div className="leading-7 text-white/30"># Called when the node enters the scene tree for the first time.</div>
                                            <div className="leading-7">
                                                <span className="text-pink-400">func</span>{" "}
                                                <span className="text-yellow-400">_ready</span>
                                                <span className="text-white/60">()</span>
                                                <span className="text-white/60">:</span>
                                            </div>
                                            <div className="leading-7 pl-6">
                                                <span className="text-pink-400">pass</span>
                                                <span className="text-white/30"> # Replace with function body.</span>
                                            </div>
                                            <div className="leading-7">&nbsp;</div>
                                            <div className="leading-7 text-white/30"># Called every frame. 'delta' is the elapsed time since the previous frame.</div>
                                            <div className="leading-7">
                                                <span className="text-pink-400">func</span>{" "}
                                                <span className="text-yellow-400">_process</span>
                                                <span className="text-white/60">(delta)</span>
                                                <span className="text-white/60">:</span>
                                            </div>
                                            <div className="leading-7 pl-6"><span className="text-pink-400">pass</span></div>
                                            <div className="leading-7">&nbsp;</div>
                                            <div className="leading-7 bg-[#4353FF]/10 -mx-2 px-2 border-l-2 border-[#4353FF]">
                                                <span className="text-pink-400">func</span>{" "}
                                                <span className="text-yellow-400">_process</span>
                                                <span className="text-white/60">(delta)</span>
                                                <span className="text-white/60">:</span>
                                            </div>
                                            <div className="leading-7 pl-6"><span className="text-pink-400">pass</span></div>
                                            <div className="leading-7">&nbsp;</div>
                                            <div className="leading-7">&nbsp;</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Sidebar */}
                                <div className="w-48 border-l border-white/5 p-4 bg-[#0a0a14]/50 hidden xl:block">
                                    <div className="text-xs text-white/30 uppercase tracking-wider mb-4">Node3D.gd</div>
                                    <div className="text-xs text-white/30 uppercase tracking-wider mb-2">Filter methods</div>
                                    <div className="space-y-2 text-xs text-white/50">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#4353FF]">ƒ</span> _ready
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#4353FF]">ƒ</span> _process
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Status Bar */}
                            <div className="flex items-center justify-between px-4 py-2 bg-[#0a0a14] border-t border-white/5 text-xs text-white/30">
                                <div className="flex items-center gap-4">
                                    <span>ln 17, col 1</span>
                                    <span>GDScript</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span>UTF-8</span>
                                    <span>4 spaces</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Glow */}
                        <div className="absolute -inset-8 bg-[#4353FF]/5 blur-[80px] rounded-full pointer-events-none -z-10" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DevelopSection;
