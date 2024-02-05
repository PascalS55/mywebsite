import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div
      className="fixed left-0 bottom-0 flex items-center justify-center overflow-hidden
    md:right-0 md:left-auto md:top-10 md:z-30 md:bottom-auto md:absolute"
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText className={"fill-dark animate-spin-slow"} />
        <Link
          href={"mailto:contact@pascalstrauch.de"}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-light 
          shadow-md border border-solid border-dark bg-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
          md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
