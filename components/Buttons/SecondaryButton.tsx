"use client";

import { motion } from "framer-motion";

interface Props {
  type: "submit" | "reset" | "button";
  className: string;
  children: string | React.ReactNode;
}

const SecondaryButton = ({ type, className, children }: Props) => {
  return (
    <motion.button
      type={type}
      className={`group relative z-20 text-[#f2f2f2] font-medium select-none
        cursor-pointer bg-gradient-to-t from-[#9565f5] via-[#a95bf3] to-[#6847f5] xl:text-lg ${className}`}
      style={{
        backgroundSize: "300% 300%",
        backgroundPosition: "0% 0%",
      }}
      whileHover={{
        backgroundPosition: "100% 100%",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="group-hover:opacity-0 transition duration-300 relative z-10 w-full h-full bg-[#04040c]"></div>
      <span className="absolute inset-0 z-20 flex items-center justify-center bg-transparent">
        {children}
      </span>
    </motion.button>
  );
};

export default SecondaryButton;
