import Link from "next/link";
import React from "react";
import "./Logo.css";

const Logo = ({ scrolled }) => {
  return (
    <div
      className="flex self-center items-center justify-center
    transition-transform transform hover:scale-125 duration-700"
    >
      <Link
        href="/"
        className={`w-16 h-16 ${
          scrolled ? "bg-light text-dark" : "bg-dark text-light"
        } flex items-center justify-center rounded-full text-2xl font-bold spin-animation`}
      >
        PS
      </Link>
    </div>
  );
};

export default Logo;
