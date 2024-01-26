"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const SlideIn = ({ children, direction = "left", height = "auto" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures animation is triggered only once
    rootMargin: "-150px 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, inView]);

  const offset = direction === "left" ? "-100%" : "100%";

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ x: offset, opacity: 0 }}
      transition={{
        type: "spring",
        duration: 1.5,
      }}
      className={` ${
        direction === "left" ? "left-0" : "right-0"
      } h-full w-full bg-light px-32 border-t-2 border-dark overflow-y-auto xl:px-16 lg:px-10 md:px-10 sm:px-2 xs:px-0`}
      style={{ height: height }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
