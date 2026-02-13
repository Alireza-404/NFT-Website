"use client";

import { useState } from "react";
import { motion, useMotionTemplate } from "framer-motion";

const GlowBox = ({
  className,
  childrenParentClassName,
  children,
}: {
  className?: string;
  childrenParentClassName?: string;
  children: React.ReactNode;
}) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setMousePosition({ x, y });
  };

  return (
    <div
      className={`group bg-[#2E314F] relative overflow-hidden w-full p-0.5 ${
        className || ""
      }`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute z-10 inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none"
        style={{
          background: useMotionTemplate`radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px,
            #a95bf3, transparent 70%)`,
        }}
      ></motion.div>

      <div
        className={`bg-[#161929] w-full h-full relative z-20 ${childrenParentClassName || ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default GlowBox;
