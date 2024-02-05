import Image from "next/image";
import Link from "next/link";
import qualimePic from "../../public/Images/mobile_app.png";
import rpiLampPic from "../../public/Images/rpi_lamp.png";
import rpiWater from "../../public/Images/rpi_water3.png";
import sciencePic from "../../public/Images/science.png";
import websitePic from "../../public/Images/website2.png";
import BulletList from "../components/BulletList/BulletList";
import FlipCard from "../components/FlipCard";
import Layout from "../components/Layout";

export const metadata = {
  title: "PS | Projects",
};

const FeaturedProject = ({
  type,
  title,
  shortSum,
  summary,
  img,
  link = "",
}) => {
  return (
    <article className="w-3/5 xl:w-5/6 lg:w-full">
      <FlipCard
        frontSide={
          <div className="flex lg:flex-col-reverse">
            <div
              className="w-1/2 flex flex-col self-start items-start justify-between pl-6
              lg:w-full lg:pl-0 lg:pt-6"
            >
              <div>
                <span className="text-primary text-xl font-bold xs:text-base">
                  {type}
                </span>
                {link === "" ? (
                  <div className="hover:underline underline-offset-2 cursor-default">
                    <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
                      {title}
                    </h2>
                  </div>
                ) : (
                  <Link
                    className="hover:underline underline-offset-2 cursor-pointer"
                    target="_blank"
                    href={link}
                  >
                    <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
                      {title}
                    </h2>
                  </Link>
                )}
              </div>
              <div className="my-2">
                <BulletList text={shortSum} className={"!text-xl"} />
              </div>
              <button
                className="border-dark border-2 p-1.5 px-4 group-hover:text-light rounded-lg text-base font-semibold md:p-1 md:px-2 md:text-sm
              group-hover:border-light align-baseline lg:self-center mt-5 lg:mt-1"
              >
                Click Me!
              </button>
            </div>
            <div className="w-1/2 h-full rounded-lg overflow-hidden justify-center self-center">
              {link === "" ? (
                <Image
                  src={img}
                  alt={title}
                  className="w-full object-contain overflow-hidden"
                />
              ) : (
                <Link href={link} target="_blank">
                  {/* change height to auto for real pics */}
                  <Image
                    src={img}
                    alt={title}
                    className="w-full h-auto object-contain"
                  />
                </Link>
              )}
            </div>
          </div>
        }
        backSide={
          <div className="items-center justify-center mr-2">
            <span className="text-primary text-xl font-bold xs:text-base">
              {type}
            </span>
            {link === "" ? (
              <div className="hover:underline underline-offset-2 cursor-default">
                <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-base">
                  {title}
                </h2>
              </div>
            ) : (
              <Link
                className="hover:underline underline-offset-2 cursor-pointer"
                target="_blank"
                href={link}
              >
                <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-base">
                  {title}
                </h2>
              </Link>
            )}
            <p
              className="my-2 font-medium sm:text-sm"
              style={{ whiteSpace: "pre-line" }}
            >
              {summary}
            </p>
          </div>
        }
      />
    </article>
  );
};

const SmallProject = ({
  title,
  summary,
  img,
  topic,
  link = "",
  shortSum,
  height,
}) => {
  return (
    <article className="w-full p-5">
      <FlipCard
        frontSide={
          <div className="flex flex-col group">
            {/* <div className="w-full h-full overflow-hidden rounded-lg self-center lg:w-1/2"> */}
            <div className="w-1/2 h-full rounded-lg overflow-hidden self-center">
              <Image
                src={img}
                alt={title}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-between mt-6">
              <span className="text-primary text-xl font-bold xs:text-base">
                {topic}
              </span>
              <div className="hover:underline underline-offset-2 cursor-default">
                {link === "" ? (
                  <div className="hover:underline underline-offset-2 cursor-default">
                    <h2 className="my-2 w-full text-left text-3xl font-bold xl:text-xl sm:text-sm">
                      {title}
                    </h2>
                  </div>
                ) : (
                  <Link
                    className="hover:underline underline-offset-2 cursor-pointer"
                    target="_blank"
                    href={link}
                  >
                    <h2 className="my-2 w-full text-left text-3xl font-bold xl:text-xl sm:text-sm">
                      {title}
                    </h2>
                  </Link>
                )}
              </div>
              <BulletList bulletColor={"rgb(106 0 255)"} text={shortSum} />
            </div>
            <div className="self-center">
              <button
                className="border-dark border-2 p-1.5 px-4 group-hover:text-light rounded-lg text-base font-semibold md:p-1 md:px-2 md:text-sm
              group-hover:border-light align-baseline"
              >
                Click Me!
              </button>
            </div>
          </div>
        }
        backSide={
          <div className="flex flex-col mr-2">
            <div className="hover:underline underline-offset-2 cursor-default">
              {link === "" ? (
                <div className="hover:underline underline-offset-2 cursor-default">
                  <h2 className="my-2 w-full text-left text-3xl font-bold sm:text-base">
                    {title}
                  </h2>
                </div>
              ) : (
                <Link
                  className="hover:underline underline-offset-2 cursor-pointer"
                  target="_blank"
                  href={link}
                >
                  <h2 className="my-2 w-full text-left text-3xl font-bold sm:text-base">
                    {title}
                  </h2>
                </Link>
              )}
            </div>
            <p
              className="font-medium sm:text-sm"
              style={{ whiteSpace: "pre-line" }}
            >
              {summary}
            </p>
          </div>
        }
      />
    </article>
  );
};

const TopProject = ({ title, children }) => {
  return (
    <div className="flex justify-center col-span-12">
      <div className="col-span-12 flex-col flex w-11/12 items-center border-t-2 border-dark/50 pb-5 xl:w-full">
        <div className="text-3xl font-semibold w-full text-left text-primary my-4 lg:text-2xl md:text-xl sm:text-lg">
          {title}
        </div>
        <div className="items-start justify-evenly w-full flex flex-wrap">
          {children.map((child) => (
            <div className="w-5/12 my-3 lg:w-full" key={child.title}>
              <SmallProject
                img={child.img}
                summary={child.summary}
                title={child.title}
                topic={title}
                link={child.link}
                shortSum={child.shortSum}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <Layout className="pt-16 pb-10 overflow-hidden">
        <div
          className="text-5xl inline-block w-full text-transparent bg-gradient-to-r from-primDark to-dark bg-clip-text font-bold capitalize
        lg:!text-4xl sm:mb-8 sm:!text-3xl xs:!text-2xl"
        >
          "The best way to predict the future is to create it." - Peter Drucker
        </div>
        <div className="grid grid-cols-12 gap-12 mt-12 border-t-2 border-dark/50 pt-6 xl:gap-x-4 md:gap-y-24 lg:mt-6 md:mt-5 sm:mt-3 xs:mt-1">
          <div className="col-span-12 justify-center flex items-center">
            <FeaturedProject
              title={"QualiMe"}
              shortSum={
                "Software Development \nCreative Thinking and Custom Solutions \nUI/UX Desing \nBasic Backend Skills \nTeamwork"
              }
              summary={`Starting off an exciting journey of self-learning and collaboration, my roommate and I decided to venture into the world of app development, determined to master React, front-end development, and UI/UX design. The result of our efforts is the app "QualiMe."
              \nOur collaborative effort materialized into an app we proudly named QualiMe. The concept behind QualiMe is simple yet powerful - dedicating just a few minutes a day to holistic routines can significantly elevate one\'s energy levels. The app offers a diverse range of exercises across sports, health, sleep, nutrition, relaxation, and mindset, ensuring a comprehensive approach to well-being.
              \nQualiMe isn't just about providing routines; it's designed to cultivate habits. Motivating users to stay on track, the app delivers clear information about each routine and guides them through execution with concise texts and engaging graphics. Our aim is to empower users, allowing them to focus on what truly matters for an improved quality of life.
              \nCurrently, we're in the process of establishing our business, eager to refine and expand Qualime further. Join us in this venture by downloading the app and taking the first step towards a more energized and fulfilling life. Your journey to a better quality of life begins now with QualiMe!`}
              type={"Team Project"}
              link={"https://apps.apple.com/be/app/qualime/id1668894822"}
              img={qualimePic}
            />
          </div>
          <div className="col-span-12 h-full justify-center flex">
            <FeaturedProject
              title={"My Website"}
              type={"Personal Project"}
              shortSum={
                "Hands-On Learning \nUI/UX Desing \nState of the Art Framework Development \nAnimation and Web Design \nUnderstanding Web Technologies"
              }
              summary={`Creating a personal website was a deliberate effort to gain hands-on experience in web development and showcase myself online. By coding, I crafted a space that showcases my skills and achievements while offering a user-friendly interface for visitors to learn more about me. This project presented an excellent opportunity to showcase my technical skills, design aesthetics, and dedication to continuous growth. 
              \nInspired by my experience, I'm extending this service to help others create a professional online presence. Whether you are an individual, entrepreneur, or professional, I offer tailored website development services to assist you in presenting yourself or your business effectively in the digital realm. Let's collaborate to create a website aligning with your vision while standing out in the competitive online landscape.`}
              link={""}
              img={websitePic}
            />
          </div>
          <TopProject
            title={"Scientific Research"}
            children={[
              {
                title:
                  "Model predictive control for demand flexibility of a residential building with multiple distributed energy resources",
                link: "https://authors.elsevier.com/a/1iQIS1M7zHCQj7",
                summary: `One of the major challenges with increasing penetration of renewable energy sources (e.g., solar and wind) is to maintain grid stability. Grid-interactive efficient buildings are regarded as a promising approach to advance the role buildings can play in energy system operations and planning. This paper evaluates the demand flexibility in a residential building located in Karlsruhe, Germany, incorporating multiple distributed energy resources, including a photovoltaic and battery system, an electric vehicle, an electric water heater and a heat pump. A multi-criteria optimization problem is formulated with model predictive control (MPC) for five cases of demand flexibility. The simulation results of five winter days show that the peak power during the peak periods can be reduced by 92%, 69%, 100%, and 100% for real-time pricing, demand limiting, load shedding, and load shifting, respectively. For the power tracking scenario, the MPC tracked the reference power profile successfully for 70% of the simulation time. Achieving demand flexibility does not necessarily cause an increase in energy costs.`,
                img: sciencePic,
                shortSum: `Distributed energy resources include thermostatic loads, PV, battery, and electric vehicle. \nReal-time pricing, load shedding, shifting, and power tracking are considered. \nAn approach to maximize load sheaving and shifting is proposed. \nProviding demand flexibility does not necessarily increase energy cost.`,
              },
              {
                title:
                  "Occupant-oriented economic model predictive control for demand response in buildings",
                link: "https://www.researchgate.net/publication/361609964_Occupant-oriented_economic_model_predictive_control_for_demand_response_in_buildings",
                summary: `The present paper develops an Economic Model Predictive Control (EMPC) framework to provide Demand-Response (DR) for supporting the power grid stability while also maintaining Occupants' Thermal Satisfaction (OTS) in buildings. Our controller combines economic and occupant-oriented aspects by simultaneously optimizing two conflicting control goals, namely grid stability and OTS in buildings. We represent grid stability with Grid Costs (GC) based on a real-world dynamic electricity price and OTS with a reference indoor temperature, respectively. In the literature, there exists no study about occupant-oriented DR where the Model Predictive Control (MPC) is based on Resistor-Capacitor (RC) models identified from real measurements that also includes an attendance schedule for DR. For this, the EMPC uses a grey-box thermal building model that is designed, identified, and validated with real-world measurement data. For evaluation, we compare the EMPC with a well-tuned conventional Proportional-Integral (PI) controller. The results show that the EMPC significantly outperforms the PI controller in terms of GC, while it respects OTS.`,
                img: sciencePic,
                shortSum: `Develops EMPC framework for Demand-Response (DR) to balance power grid stability and occupants' thermal satisfaction (OTS) in buildings. \nSimultaneously optimizes conflicting goals of grid stability and OTS, integrating economic and occupant-oriented aspects. \nIntroduces occupant-oriented DR using MPC based on RC models identified from real measurements, including an attendance schedule for DR. \nEMPC outperforms conventional PI controller, demonstrating superior performance in GC while respecting OTS.`,
              },
            ]}
          />
          <TopProject
            title={"My Smart Home"}
            children={[
              {
                title: "My Own Smart Lamp",
                summary: `I've started working on making my home a bit smarter, and I've opted for the reliable Raspberry Pi as my tech tool. My initial project involves delving into home automation by enabling control of one of my lamps through my phone and a custom website hosted on the Raspberry Pi.
                \nPicture not just flipping a switch on my lamp, but being able to do it with a simple tap on my phone or a click on a website I've created. More than just a cool feature, this is my way of smoothly incorporating technology into my daily routine.
                \nWorking on the code for my smart lamp project feels like a series of small wins, and each new connection teaches me a thing or two. While having a lamp I can control from my phone is handy, the real satisfaction comes from the learning process — understanding how things operate, tackling problems, and feeling accomplished.
                \nSure, having a smart lamp makes daily life a bit more high-tech, but it's not only about illuminating a room. It's an opportunity to dive into the world of home automation, pick up some insights, and see how things work in the real world.`,
                img: rpiLampPic,
                shortSum: `Raspberry Pi as Central Home Automation Component \nWeb Development \nBasic Server Hosting \nInnovative Integration and Satisfaction \nGained hands-on experience in IoT to the digital world for remote control.`,
              },
              {
                title: "Upcoming: Water System",
                summary: `For my next home project I'm aiming to make sure my plants stay happy and well-watered. It's a simple water system that keeps an eye on their hydration levels and adds water when needed.
                \nThe idea came from wanting to mix a bit of technology with some greenery. Using sensors, my Raspberry Pi setup checks the water levels in each plant pot and waters them when they're thirsty.
                \nThis project is more than just about keeping my plants healthy; it's a chance to learn about sensors and irrigation systems. I'm stepping into unfamiliar territory and enjoying the process. Turns out, combining soil and code can be quite interesting.
                \nWhile my plants benefit, I'm exploring a new side of DIY smart home projects - one step at a time. Even the plants are getting in on the smart home action in my place!`,
                img: rpiWater,
                shortSum: `Sensor Technology Implementation \nInnovative Problem-Solving \nInterdisciplinary Learning`,
              },
            ]}
          />
        </div>
      </Layout>
    </main>
  );
}
