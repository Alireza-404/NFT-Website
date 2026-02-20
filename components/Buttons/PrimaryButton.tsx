"use client";

import { motion } from "framer-motion";

interface Props {
  type: "submit" | "reset" | "button";
  className: string;
  children: string | React.ReactNode;
  disabled?: boolean;
}

const PrimaryButton = ({ type, className, children, disabled }: Props) => {
  return (
    <motion.button
      type={type}
      className={`flex justify-center items-center text-[#f2f2f2] font-medium select-none
        bg-gradient-to-t from-[#9565f5] via-[#a95bf3] to-[#6847f5] cursor-pointer xl:text-lg ${className}`}
      style={{
        backgroundSize: "300% 300%",
        backgroundPosition: "0% 0%",
      }}
      whileHover={{
        backgroundPosition: "100% 100%",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default PrimaryButton;
