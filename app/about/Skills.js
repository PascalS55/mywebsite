"use client";

import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-secondary text-dark py-3 px-6 shadow-dark 
      cursor-default absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-dark xs:font-semibold xs:text-xs"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-32 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg md:bg-circularLightMd sm:bg-circularLightSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-secondary text-dark p-8 shadow-dark cursor-default
          lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Engineering
        </motion.div>

        <Skill name={"CSS"} x={"30vw"} y={"15vw"} />
        <Skill name={"Python"} x={"-17vw"} y={"4vw"} />
        <Skill name={"Machine Learning"} x={"-25vw"} y={"-5vw"} />
        <Skill name={"Linux / RPi"} x={"-33vw"} y={"5vw"} />
        <Skill name={"JavaScript"} x={"23vw"} y={"6vw"} />
        <Skill name={"LaTeX"} x={"-15vw"} y={"12vw"} />
        <Skill name={"System Automation"} x={"8vw"} y={"14vw"} />
        <Skill name={"ReactJS"} x={"10vw"} y={"-18vw"} />
        <Skill name={"Thermodynamics"} x={"-16vw"} y={"-23vw"} />
        <Skill name={"Modeling & Simulation"} x={"20vw"} y={"-7vw"} />
        <Skill name={"Firebase"} x={"29vw"} y={"-15vw"} />
        <Skill name={"HTML"} x={"15vw"} y={"23vw"} />
        <Skill name={"NextJS"} x={"-24vw"} y={"20vw"} />
        <Skill name={"MATLAB/Simulink"} x={"-10vw"} y={"-13vw"} />
      </div>
    </>
  );
};

export default Skills;
