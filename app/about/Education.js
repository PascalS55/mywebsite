"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import BulletList from "../components/BulletList/BulletList";

const Details = ({ type, time, place, info, companyLink }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}&nbsp;
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {place}
        </span>
        <BulletList text={info} bulletColor={"rgb(106 0 255)"} />
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 lg:my-32 xs:my-28">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
        {/* for scrolling line on the side */}
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[10px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            place={"Karlsruhe Institute for Technoloy (KIT)"}
            type={"M.Sc. Mechanical Engineering"}
            time={"Since October 2022"}
            info={
              "Specializing in Automation Technology and Medical technology"
            }
          />
          <Details
            place={"Karlsruhe Institute for Technoloy (KIT)"}
            type={"B.Sc. Mechanical Engineering"}
            time={"2018 - 2022"}
            info={
              "Specializing in Energy Technology \n Final grade: 1.7 \nBachelor's thesis: User-oriented building control for thermal comfort - grade: 1.0"
            }
          />
          <Details
            place={"Scheffel Gymnasium, Bad Säckingen"}
            type={"Abitur"}
            time={"2010 - 2018"}
            info={"Final Grade 1.5"}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
