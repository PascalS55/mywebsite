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
    <div
      className={`w-full ${height} rounded-3xl cursor-pointer shadow-dark flex hover:bg-dark hover:text-light duration-500
        border border-solid border-dark p-6 shadow-lg`}
      onClick={flipCard}
    >
      <div className="flip-card flex-1 w-full" onClick={flipCard}>
        <motion.div
          className="flip-card-inner h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.3, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimated(false)}
        >
          <div className="flip-card-front flex-1 w-full h-full overflow-y-auto">
            {frontSide}
          </div>
          <div className="flip-card-back flex-1 w-full h-full overflow-y-auto">
            {backSide}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FlipCard;
