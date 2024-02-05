"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const FlipCard = ({ frontSide, backSide, height }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAIimated, setIsAnimated] = useState(false);

  const flipCard = () => {
    if (!isAIimated) {
      setIsFlipped(!isFlipped);
      setIsAnimated(true);
    }
  };

  return (
    <article
      className={`w-full max-h-[80vh] rounded-3xl cursor-pointer shadow-dark flex hover:bg-dark hover:text-light duration-500
      flip-card border border-solid border-dark p-6 shadow-lg overflow-x-hidden overflow-y-hidden`}
      onClick={flipCard}
    >
      <motion.div
        className="flip-card-inner h-auto flex-1"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.3, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimated(false)}
      >
        <div
          className="w-full h-full flex-col flip-card-front overflow-y-auto scrollbar-hidden"
          style={{ maxHeight: "80vh" }}
        >
          {frontSide}
        </div>
        <div
          className="w-full h-full flex flip-card-back overflow-y-auto"
          style={{ maxHeight: "80vh" }}
        >
          {backSide}
        </div>
      </motion.div>
    </article>
  );
};

export default FlipCard;
