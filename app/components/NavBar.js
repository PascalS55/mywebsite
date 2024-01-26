"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GithubIcon, LinkedInIcon } from "./Icons";
import Logo from "./Logo/Logo";
import { useEffect, useState } from "react";

const CustomLink = ({ href, title, className = "", scrolled }) => {
  const router = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
    ${router === href ? "w-full" : "w-0"} ${scrolled ? "bg-light" : "bg-dark"}`}
      >
        &nbsp;{" "}
      </span>
    </Link>
  );
};

const CustomMobileLink = ({
  href,
  title,
  className = "",
  scrolled,
  toggle,
}) => {
  const router = useRouter();
  const path = usePathname();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} relative group text-light my-2`}
    >
      {title}

      <span
        className={`h-[1px] inline-block absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
    ${path === href ? "w-full" : "w-0"} ${scrolled ? "bg-light" : "bg-dark"}`}
      >
        &nbsp;{" "}
      </span>
    </button>
  );
};

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`w-full px-32 py-8 font-medium flex items-center justify-between sticky top-0 z-20 xl:px-24 lg:px-16 md:px-12 sm:px-8 
    ${
      scrolled ? "bg-dark scale-95 text-light rounded-md" : "bg-light text-dark"
    } transform transition-all duration-500`}
      >
        {/* mobile nav bar */}
        <button
          className="flex-col justify-center items-center hidden lg:flex"
          onClick={handleClick}
        >
          <span
            className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            } ${scrolled ? "bg-light" : "bg-dark"}`}
          ></span>
          <span
            className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            } ${scrolled ? "bg-light" : "bg-dark"}`}
          ></span>
          <span
            className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            } ${scrolled ? "bg-light" : "bg-dark"}`}
          ></span>
        </button>

        {/* web view, laptop */}
        <div className="w-full flex justify-between items-center lg:hidden">
          <nav>
            <CustomLink
              href="/"
              title="Home"
              className="mr-4"
              scrolled={scrolled}
            />
            <CustomLink
              href="/about"
              title="About Me"
              className="mx-4"
              scrolled={scrolled}
            />
            <CustomLink
              href="/projects"
              title="Projects"
              className="mx-4"
              scrolled={scrolled}
            />
            <CustomLink
              href="/services"
              title="Services"
              className="ml-4"
              scrolled={scrolled}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              href="https://www.linkedin.com/in/pascal-strauch-656657245/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/PascalS55"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <GithubIcon />
            </motion.a>
          </nav>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Logo scrolled={scrolled} />
        </div>
      </header>
      {/* mobile nav bar */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
      bg-dark/75 rounded-lg backdrop-blur-md py-32 z-30"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              scrolled={true}
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About Me"
              scrolled={true}
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              scrolled={true}
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/services"
              title="Services"
              scrolled={true}
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-4">
            <motion.a
              href="https://www.linkedin.com/in/pascal-strauch-656657245/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/PascalS55"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 text-light"
            >
              <GithubIcon />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}
    </>
  );
};

export default NavBar;
