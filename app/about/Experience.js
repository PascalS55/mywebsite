"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import BulletList from "../components/BulletList/BulletList";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const iconRef = useRef(null);
  return (
    <li
      ref={iconRef}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'
    >
      <LiIcon reference={iconRef} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}&nbsp;
          <a href={companyLink} target='_blank' className='text-primary capitalize'>
            @{company}
          </a>{" "}
        </h3>
        <span className='capitalize font-medium text-dark/75 xs:text-sm'>
          {time} | {address}
        </span>
        <BulletList text={work} bulletColor={"rgb(106 0 255)"} />
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className='my-64 lg:my-32 xs:my-16'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>
      <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full' ref={ref}>
        {/* for scrolling line on the side */}
        <motion.div
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[10px] xs:left-[20px]'
          style={{ scaleY: scrollYProgress }}
        />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            company={"Siemens  AG"}
            position={"Working Student"}
            time={"December - March 2023 & now since December 2023"}
            companyLink={"https://www.siemens.com/global/en.html"}
            work={
              "Development and testing of new sensor technologies" +
              "\nImproving automation of systems and processes"
            }
            address={"Karlsruhe, Germany"}
          />
          <Details
            company={"UNC Charlotte"}
            position={"Research Scholar"}
            time={"April - October 2023"}
            companyLink={"https://www.charlotte.edu//"}
            work={
              "Semester abroad in Charlotte, North Carolina" +
              "\nResearch internship at the University of North Carolina Charlotte" +
              "\nModeling of a residential building with distributed energy resources (PV, battery, e-car, etc.)" +
              "\nDesign of an optimized control strategy with respect to grid stability and peak load reduction in MATLAB" +
              "\nImplementation and optimization of several demand flexibility events combined with model predictive control" +
              "\nPublication of a journal paper on the work carried out (Model Predictive Control for Demand Flexibility of a Residential Building with Multiple Distributed Energy Resources)"
            }
            address={"Charlotte, USA"}
          />
          <Details
            company={"QualiMe"}
            position={"Co-founder and Developer"}
            time={"Since November 2022"}
            companyLink={"https://apps.apple.com/be/app/qualime/id1668894822"}
            work={
              "Development of a mobile app" +
              "\nCoding experiences using state-of-the-art frameworks and technologies" +
              "\nFull stack development including UI/UX and basics in the backend" +
              "\nConceptualization for a user-friendly interface Focus on self-improvement and valuable use of your time" +
              "\nIncluding daily journaling and self-reflection methods" +
              "\nIncrease your productivity level and give you a guided way to establish routines"
            }
            address={"Karlsruhe, Germany"}
          />
          <Details
            company={"Bosch Thermotechnik"}
            position={"Research and Development Engineer"}
            time={"May - September 2022"}
            companyLink={"https://www.bosch-homecomfort.com/de/de/wohngebaeude/start/"}
            work={
              "Internship at Bosch Thermo Technologies" +
              "\nModeling and simulation of a ventilation system for residential buildings in MATLAB/Simulink" +
              "\nAutomation and development of component tests in MATLAB/Simulink" +
              "\nModeling of a heat exchanger and validation of the model with real measurement data in MATLAB/Simulink" +
              "\nCollaboration on the development of a new tightness concept for a ventilation unit" +
              "\nAutomation of data synchronization \nConducting various tightness measurements \nConducting a competitive research"
            }
            address={"Wernau, Germany"}
          />
          <Details
            company={"Institute for Automation and Applied Informatics (KIT - IAI)"}
            position={"Bachelor's Thesis"}
            time={"January - March 2022"}
            companyLink={"https://www.iai.kit.edu/"}
            work={
              "Control of buildings with a focus on thermal comfort" +
              "\nConsideration of user behavior and personal needs" +
              "\nMaking energy management in buildings more energy-efficient in terms of climate protection while maintaining at least the same level of comfort" +
              "\nDesign and implementation of various control concepts with a comparison of energy consumption and comfort, e.g. Model Predictive Control (MPC)"
            }
            address={"Karlsruhe, Germany"}
          />
          <Details
            company={"Institute of Fluid Dynamics (KIT - ISTM)"}
            position={"HiWi"}
            time={"June - December 2021"}
            companyLink={"https://www.istm.kit.edu/"}
            work={
              "Conducting a CFD simulation with ANSYS" +
              "\nCo-representative of the institute at the Mechanical Engineering Day" +
              "\nSupport in the research of plasma actuators for friction reduction" +
              "\nApplication of Stereo PIV for the evaluation of measurement results"
            }
            address={"Karlsruhe, Germany"}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
