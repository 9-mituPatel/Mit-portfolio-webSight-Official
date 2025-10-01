import { useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

const ParticleEffect = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    size: Math.random() * 4 + 2,
    color: i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'accent-purple' : 'accent-cyan'
  }));

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute w-${Math.floor(particle.size)} h-${Math.floor(particle.size)} rounded-full bg-${particle.color}/20 backdrop-blur-sm`}
          initial={{
            x: `${particle.initialX}%`,
            y: `${particle.initialY}%`,
            opacity: 0.4
          }}
          animate={{
            x: [
              `${particle.initialX}%`,
              `${particle.initialX + (Math.random() * 20 - 10)}%`
            ],
            y: [
              `${particle.initialY}%`,
              `${particle.initialY + (Math.random() * 20 - 10)}%`
            ],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            x: useMotionValue(`${particle.initialX}%`),
            y: useMotionValue(`${particle.initialY}%`),
            filter: 'blur(4px)'
          }}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
          whileHover={{
            scale: 2,
            opacity: 0.8,
            filter: 'blur(2px)'
          }}
        />
      ))}
      
      {/* Mouse follow effect */}
      <motion.div
        className="absolute w-40 h-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.15), transparent 70%)',
          x: useMotionValue('-50%'),
          y: useMotionValue('-50%'),
          filter: 'blur(20px)'
        }}
        animate={{
          x: mouseX.get() * 100 + '%',
          y: mouseY.get() * 100 + '%'
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20
        }}
      />
    </div>
  );
};

export default ParticleEffect;