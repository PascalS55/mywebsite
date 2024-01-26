import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark text-dark font-medium text-lg lg:text-base md:text-sm xs:text-xs">
      <Layout className="py-8 flex items-center justify-between h-auto lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center lg:py-2">
          Build by&nbsp;
          <Link
            href={"mailto:pascals00@web.de"}
            target="_blank"
            className="underline underline-offset-2"
          >
            Pascal Strauch
          </Link>
        </div>
        <Link href={"/impressum"} className="group relative">
          Impressum
          <span
            className={`h-[1px] inline-block bg-dark absolute left-0 bottom-0 
          group-hover:w-full w-0 transition-[width] ease duration-300`}
          >
            &nbsp;{" "}
          </span>
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
