import { motion } from "framer-motion";

const TechStack = () => {
  const technologies = [
    { name: "php", icon: "php" },
    { name: "unity", icon: "unity" },
    { name: "python", icon: "python" },
    { name: "React", icon: "react" },
    { name: "Java", icon: "java" },
    { name: "node", icon: "node" },
  ];

  return (
    <section className="py-24 bg-[#000101] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-modern opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Web Development & Software Engineering
          </h2>
          <p className="text-white/50 text-lg">
            From next-gen startups to established enterprises.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.1,
              }}
              className="flex flex-col items-center justify-center group cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2.5 + (index % 3) * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  filter: "brightness(1.2)",
                }}
                className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-3 group-hover:drop-shadow-[0_0_20px_rgba(67,83,255,0.5)] transition-all duration-300"
              >
                {/* Tech Icons - Using branded SVG representations */}
                {tech.icon === "php" && (
                  <svg
                    viewBox="0 0 100 50"
                    className="w-full h-full fill-white/70 group-hover:fill-[#4F5B93] transition-colors"
                  >
                    <text
                      x="50"
                      y="35"
                      textAnchor="middle"
                      fontSize="32"
                      fontFamily="Arial Black"
                      fontWeight="bold"
                    >
                      php
                    </text>
                  </svg>
                )}
                {tech.icon === "unity" && (
                  <div className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 fill-white/70 group-hover:fill-gray-500 transition-colors"
                    >
                      <path d="M10.4 17.8l-6.4-7.8 6.4-7.8L12 5l-4 5h8l1.6-2.8L21 12l-3.4 4.8L16 14H8l4 5-1.6 2.8zM7 12l-4.6 5.6 4.6 2.8V12z" />
                    </svg>
                    <span className="text-lg font-bold text-white/70 group-hover:text-gray-500">
                      unity
                    </span>
                  </div>
                )}
                {tech.icon === "python" && (
                  <div className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 fill-white/70 transition-colors"
                    >
                      <path
                        className="group-hover:fill-[#3776AB] transition-colors"
                        d="M12 0C5.4 0 5.8 2.6 5.8 2.6v2.7h6.3v.8H3.9S0 5.7 0 12.2s3.4 6.3 3.4 6.3h2v-3s-.1-3.4 3.3-3.4h5.7s3.2.1 3.2-3.1V3.5S18.1 0 12 0zm-3.2 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                      />
                      <path
                        className="group-hover:fill-[#FFD43B] transition-colors"
                        d="M12 24c6.6 0 6.2-2.6 6.2-2.6v-2.7h-6.3v-.8h8.2s3.9.4 3.9-6.1-3.4-6.3-3.4-6.3h-2v3s.1 3.4-3.3 3.4H9.6s-3.2-.1-3.2 3.1v5.5S5.9 24 12 24zm3.2-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                      />
                    </svg>
                    <span className="text-lg font-bold text-white/70 group-hover:text-white">
                      python
                    </span>
                  </div>
                )}
                {tech.icon === "react" && (
                  <div className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 fill-white/70 group-hover:fill-[#61DAFB] transition-colors"
                    >
                      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9" />
                    </svg>
                    <span className="text-lg font-bold text-white/70 group-hover:text-white">
                      React
                    </span>
                  </div>
                )}
                {tech.icon === "java" && (
                  <div className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 fill-white/70 group-hover:fill-[#ED8B00] transition-colors"
                    >
                      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.154 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
                    </svg>
                    <span className="text-lg font-bold text-white/70 group-hover:text-white">
                      Java
                    </span>
                  </div>
                )}
                {tech.icon === "node" && (
                  <div className="flex items-center">
                    <span className="text-2xl md:text-3xl font-bold text-white/70 group-hover:text-[#68A063] transition-colors tracking-tighter">
                      n<span className="text-[#68A063]">o</span>de
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 ml-1 fill-white/70 group-hover:fill-[#68A063] transition-colors"
                    >
                      <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.774.165" />
                    </svg>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
