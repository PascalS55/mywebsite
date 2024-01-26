"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedNumbers = ({ number }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(number);
    }
  }, [isInView, number, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= number) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, number]);

  return <span ref={ref}></span>;
};

const Numbers = () => {
  return (
    <>
      <div className="flex flex-col items-end justify-center xl:items-center">
        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
          <AnimatedNumbers number={50} />+
        </span>
        <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
          Projects completed
        </h2>
      </div>
      <div className="flex flex-col items-end justify-center xl:items-center">
        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
          <AnimatedNumbers number={40} />+
        </span>
        <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
          Projects completed
        </h2>
      </div>
      <div className="flex flex-col items-end justify-center xl:items-center">
        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
          <AnimatedNumbers number={60} />+
        </span>
        <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
          Projects completed
        </h2>
      </div>
    </>
  );
};

export default Numbers;
