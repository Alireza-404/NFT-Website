"use client";

import { motion, MotionProps } from "framer-motion";

interface Props extends MotionProps {
  elem: "div" | "p" | "img" | "h2" | "h3";
  text?: string;
  className?: string;
  src?: string;
  alt?: string;
  children?: React.ReactNode;
}

const MotionElement = ({
  elem,
  text,
  className,
  src,
  alt,
  children,
  ...props
}: Props) => {
  const MotionElem = {
    p: motion.p,
    div: motion.div,
    h2: motion.h2,
    h3: motion.h3,
    button: motion.button,
    img: motion.img,
  }[elem];

  return elem === "img" ? (
    <MotionElem
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      {...props}
    >
      {text || children}
    </MotionElem>
  ) : (
    <MotionElem className={className} {...props}>
      {text || children}
    </MotionElem>
  );
};

export default MotionElement;
