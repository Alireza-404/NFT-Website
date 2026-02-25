"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

export default function NotFound() {
  const zeroRef = useRef<HTMLDivElement | null>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothX = useSpring(rotateX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(rotateY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!zeroRef.current) return;
      const rect = zeroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (centerY - e.clientY) / 30;
      const y = (e.clientX - centerX) / 30;
      rotateX.set(x);
      rotateY.set(y);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#04040c] text-[#f2f2f2] flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(169,91,243,0.10),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(103,71,245,0.10),transparent_50%)]" />

      <div className="relative z-10 text-center max-w-6xl w-full">
        <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-8 mb-4 lg:mb-10 flex-wrap select-none">
          <span className="text-[100px] sm:text-[120px] md:text-[180px] font-extrabold tracking-tight leading-none">
            4
          </span>

          <div className="perspective-[1200px]">
            <motion.div
              ref={zeroRef}
              style={{ rotateX: smoothX, rotateY: smoothY }}
              className="relative w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] rounded-full"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#04040c] via-[#04040c] to-[#04040c] blur-2xl opacity-70" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#9565f5] via-[#a95bf3] to-[#6847f5] shadow-[0_0_120px_20px_rgba(165,92,246,0.6)]" />

              <div className="absolute inset-[18%] rounded-full bg-[#0a0a14] flex items-center justify-center">
                <div className="flex gap-2 sm:gap-3 md:gap-4">
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-white rounded-full shadow-[0_0_6px_rgba(255,255,255,0.7)]"
                  />
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-white rounded-full shadow-[0_0_6px_rgba(255,255,255,0.7)]"
                  />
                </div>
              </div>

              <div className="absolute inset-0 rounded-full bg-[linear-gradient(120deg,rgba(255,255,255,0.4),transparent_40%)] opacity-40 mix-blend-overlay" />
            </motion.div>
          </div>

          <span className="text-[100px] sm:text-[120px] md:text-[180px] font-extrabold tracking-tight leading-none">
            4
          </span>
        </div>

        <motion.h1
          style={{ backgroundSize: "200% 200%" }}
          className="bg-clip-text text-transparent bg-gradient-to-r from-[#9565f5] via-[#4758f5] to-[#9565f5] leading-normal font-bold text-4xl lg:text-5xl mb-2 md:mb-6"
          animate={{ backgroundPosition: ["0% 200%", "200% 0%"] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          メタ次元で迷子になりました
        </motion.h1>

        <p className="text-[#d5d5d5] max-w-xl mx-auto mb-10 text-sm sm:text-base md:text-lg leading-9">
          お探しのページは別のチェーンに移動しました。ポータルが崩壊する前に戻りましょう。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <PrimaryButton type="button" className="w-full sm:w-48 h-12 lg:h-14">
            <Link
              href="/"
              className="w-full h-full flex items-center justify-center"
            >
              ホームに戻る
            </Link>
          </PrimaryButton>

          <SecondaryButton
            type="button"
            click={() => window.history.back()}
            className="w-full sm:w-48 h-12 lg:h-14 p-px"
          >
            戻る
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
