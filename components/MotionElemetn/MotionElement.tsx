"use client";

import { motion, MotionProps } from "framer-motion";

interface Props extends MotionProps {
  elem: "div" | "p" | "img";
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
