import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const SpotlightCard = ({ children, className, containerClassName }) => {
    const containerRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#080809] p-px",
                containerClassName
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(67, 83, 255, 0.15), transparent 40%)`,
                }}
            />
            <div className={cn("relative h-full w-full rounded-[calc(2.5rem-1px)] bg-[#080809] transition-colors duration-500", className)}>
                {children}
            </div>
        </div>
    );
};
