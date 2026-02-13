"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "fadeDown";
  start: string;
  className?: string;
}

gsap.registerPlugin(ScrollTrigger);

const GSAPAnimation = ({
  children,
  delay = 0,
  animation = "fadeUp",
  start,
  className,
}: Props) => {
  const container = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animations = {
        fadeUp: { y: 75, opacity: 0 },
        fadeDown: { y: -75, opacity: 0 },
        fadeLeft: { x: 75, opacity: 0 },
        fadeRight: { x: -75, opacity: 0 },
      };

      gsap.from(container.current, {
        scrollTrigger: {
          trigger: container.current,
          start,
          toggleActions: "play none none reverse",
        },

        ...animations[animation],
        ease: "power3.out",
        delay,
        duration: 0.5,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className={`${className}`}>
      {children}
    </div>
  );
};

export default GSAPAnimation;
