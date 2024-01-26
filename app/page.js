import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "./components/Layout";
import Image from "next/image";
import profilePic from "../public/Images/mech_software2.png";
import AnimatedText from "./components/AnimatedText";
import { LinkArrow } from "./components/Icons";
import HireMe from "./components/HireMe";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <>
      <main
        className={`flex w-full flex-col items-center text-dark bg-light ${inter.variable} font-sans`}
      >
        <Layout className="pt-0 pb-5 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                alt="Pascal"
                src={profilePic}
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Mechanical Engineering meets Software Development."
                className="!text-6xl text-left xl:!text-5xl lg:text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full stakc developer, I will make your wildest
                dreams come true. Find out ebaut me, myself and I and I will
                also come to bang your mom.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Lebenslauf.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light
                  hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:pascals00@web.de"
                  target="_blank"
                  className="ml-4 text-lg font-medium text-dark underline capitalize md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="border-4 border-solid border-dark my-10 p-4">
            <p>
              Short text about each project, bullet points Maybe image or
              drawing
            </p>
            <div className="mt-2 flex items-center">
              <Link
                href={"/projects"}
                className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
              >
                Visit Project
              </Link>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
