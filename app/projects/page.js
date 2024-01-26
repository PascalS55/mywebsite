import Image from "next/image";
import Link from "next/link";
import qualimePic from "../../public/Images/mobile_app.png";
import websitePic from "../../public/Images/website2.png";
import sciencePic from "../../public/Images/science.png";
import rpiLampPic from "../../public/Images/rpi_lamp.png";
import rpiWater from "../../public/Images/rpi_water1_bg.png";
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
  // change project class, not suiting for my needs
  // should be image, summary, title, Link optional; focus on dscription, nice text representation
  //   also show brief summary of projects on home, with link to this page
  return (
    <article className="w-3/5 h-full flex items-center justify-between rounded-3xl lg:flex-col lg:p-8 xs:rounded-2xl">
      <FlipCard
        frontSide={
          <div className="flex">
            <div className="w-1/2 flex flex-col self-start items-start justify-between pl-6">
              <div>
                <span className="text-primary text-xl font-medium">{type}</span>
                {link === "" ? (
                  <div className="hover:underline underline-offset-2 cursor-default">
                    <h2 className="my-2 w-full text-left text-4xl font-bold">
                      {title}
                    </h2>
                  </div>
                ) : (
                  <Link
                    className="hover:underline underline-offset-2 cursor-pointer"
                    target="_blank"
                    href={link}
                  >
                    <h2 className="my-2 w-full text-left text-4xl font-bold">
                      {title}
                    </h2>
                  </Link>
                )}
              </div>
              <div className="my-2">
                <BulletList text={shortSum} bulletColor={"rgb(106 0 255)"} />
              </div>
            </div>
            <div className="w-1/2 h-auto rounded-lg overflow-hidden">
              {link === "" ? (
                <Image
                  src={img}
                  alt={title}
                  className="w-full h-[400px] object-contain rounded-lg overflow-hidden"
                />
              ) : (
                <Link href={link} target="_blank">
                  {/* change height to auto for real pics */}
                  <Image
                    src={img}
                    alt={title}
                    className="w-full h-[400px] object-contain"
                  />
                </Link>
              )}
            </div>
          </div>
        }
        backSide={
          <div className="items-center justify-center mr-2">
            <span className="text-primary text-xl font-medium">{type}</span>
            {link === "" ? (
              <div className="hover:underline underline-offset-2 cursor-default">
                <h2 className="my-2 w-full text-left text-4xl font-bold">
                  {title}
                </h2>
              </div>
            ) : (
              <Link
                className="hover:underline underline-offset-2 cursor-pointer"
                target="_blank"
                href={link}
              >
                <h2 className="my-2 w-full text-left text-4xl font-bold">
                  {title}
                </h2>
              </Link>
            )}
            <p className="my-2 font-medium" style={{ whiteSpace: "pre-line" }}>
              {summary}
            </p>
          </div>
        }
        height={"h-[450px]"}
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
    <article className="w-full h-auto flex flex-col items-center justify-between p-5">
      <FlipCard
        frontSide={
          <div>
            <div className="w-full overflow-hidden rounded-lg">
              <Image
                src={img}
                alt={title}
                className="w-full h-48 object-contain"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-between mt-6">
              <span className="text-primary text-xl font-medium">{topic}</span>
              <div className="hover:underline underline-offset-2 cursor-default">
                {link === "" ? (
                  <div className="hover:underline underline-offset-2 cursor-default">
                    <h2 className="my-2 w-full text-left text-3xl font-bold">
                      {title}
                    </h2>
                  </div>
                ) : (
                  <Link
                    className="hover:underline underline-offset-2 cursor-pointer"
                    target="_blank"
                    href={link}
                  >
                    <h2 className="my-2 w-full text-left text-3xl font-bold">
                      {title}
                    </h2>
                  </Link>
                )}
              </div>
              <BulletList bulletColor={"rgb(106 0 255)"} text={shortSum} />
            </div>
          </div>
        }
        backSide={
          <div className="flex flex-col mr-2">
            <div className="hover:underline underline-offset-2 cursor-default">
              {link === "" ? (
                <div className="hover:underline underline-offset-2 cursor-default">
                  <h2 className="my-2 w-full text-left text-3xl font-bold">
                    {title}
                  </h2>
                </div>
              ) : (
                <Link
                  className="hover:underline underline-offset-2 cursor-pointer"
                  target="_blank"
                  href={link}
                >
                  <h2 className="my-2 w-full text-left text-3xl font-bold">
                    {title}
                  </h2>
                </Link>
              )}
            </div>
            <div className="scrollable-content overflow-y-auto">
              <p className="font-medium" style={{ whiteSpace: "pre-line" }}>
                {summary}
              </p>
            </div>
          </div>
        }
        height={height}
      />
    </article>
  );
};

const TopProject = ({ title, children }) => {
  return (
    <div className="flex justify-center col-span-12">
      <div className="col-span-12 flex-col flex w-11/12 items-center border-t-2 border-dark/50 pb-5">
        <div className="text-3xl font-semibold w-full text-left text-primary my-4">
          {title}
        </div>
        <div className="items-start justify-evenly w-full flex flex-wrap">
          {children.map((child) => (
            <div className="w-5/12 my-3" key={child.title}>
              <SmallProject
                img={child.img}
                summary={child.summary}
                title={child.title}
                topic={title}
                link={child.link}
                shortSum={child.shortSum}
                height={child.height}
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
        lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
        >
          "The best way to predict the future is to create it." - Peter Drucker
        </div>
        <div className="grid grid-cols-12 gap-12 mt-12 border-t-2 border-dark/50 pt-6">
          <div className="col-span-12 h-full justify-center flex">
            <FeaturedProject
              title={"QualiMe"}
              shortSum={
                "UI/UX Desing \nBasic Backend \nSoftware Development and Teamwork"
              }
              summary={`Starting off an exciting journey of self-learning and collaboration, my roommate and I decided to venture into the world of app development, determined to master React, front-end development, and UI/UX design. The result of our efforts is the app "QualiMe."
              \nOur collaborative effort materialized into an app we proudly named QualiMe. The concept behind QualiMe is simple yet powerful - dedicating just a few minutes a day to holistic routines can significantly elevate one\'s energy levels. The app offers a diverse range of exercises across sports, health, sleep, nutrition, relaxation, and mindset, ensuring a comprehensive approach to well-being.
              \nQualiMe isn't just about providing routines; it's designed to cultivate habits. Motivating users to stay on track, the app delivers clear information about each routine and guides them through execution with concise texts and engaging graphics. Our aim is to empower users, allowing them to focus on what truly matters for an improved quality of life.
              \nCurrently, we're in the midst of our business founding journey, eager to refine and expand Qualime further. Join us in this venture by downloading the app and taking the first step towards a more energized and fulfilling life. Your journey to a better quality of life begins now with QualiMe!`}
              type={"Team Project"}
              link={"https://apps.apple.com/be/app/qualime/id1668894822"}
              img={qualimePic}
            />
          </div>
          <div className="col-span-12 h-full justify-center flex">
            <FeaturedProject
              title={"This Website"}
              shortSum={
                "UI/UX Desing \nDedication \nState of the Art Framework Development \nAnimation and Web Design"
              }
              summary={`Starting off an exciting journey of self-learning and collaboration, my roommate and I decided to venture into the world of app development, determined to master React, front-end development, and UI/UX design. The result of our efforts is the app "QualiMe."
              \nOur collaborative effort materialized into an app we proudly named QualiMe. The concept behind QualiMe is simple yet powerful - dedicating just a few minutes a day to holistic routines can significantly elevate one\'s energy levels. The app offers a diverse range of exercises across sports, health, sleep, nutrition, relaxation, and mindset, ensuring a comprehensive approach to well-being.
              \nQualiMe isn't just about providing routines; it's designed to cultivate habits. Motivating users to stay on track, the app delivers clear information about each routine and guides them through execution with concise texts and engaging graphics. Our aim is to empower users, allowing them to focus on what truly matters for an improved quality of life.
              \nCurrently, we're in the midst of our business founding journey, eager to refine and expand Qualime further. Join us in this venture by downloading the app and taking the first step towards a more energized and fulfilling life. Your journey to a better quality of life begins now with QualiMe!`}
              type={"Personal Project"}
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
                height: "h-[660px]",
                img: sciencePic,
                shortSum: `Distributed energy resources include thermostatic loads, PV, battery, and electric vehicle. \nReal-time pricing, load shedding, shifting, and power tracking are considered. \nAn approach to maximize load sheaving and shifting is proposed. \nProviding demand flexibility does not necessarily increase energy cost.`,
              },
              {
                title:
                  "Occupant-oriented economic model predictive control for demand response in buildings",
                link: "https://www.researchgate.net/publication/361609964_Occupant-oriented_economic_model_predictive_control_for_demand_response_in_buildings",
                summary: `The present paper develops an Economic Model Predictive Control (EMPC) framework to provide Demand-Response (DR) for supporting the power grid stability while also maintaining Occupants' Thermal Satisfaction (OTS) in buildings. Our controller combines economic and occupant-oriented aspects by simultaneously optimizing two conflicting control goals, namely grid stability and OTS in buildings. We represent grid stability with Grid Costs (GC) based on a real-world dynamic electricity price and OTS with a reference indoor temperature, respectively. In the literature, there exists no study about occupant-oriented DR where the Model Predictive Control (MPC) is based on Resistor-Capacitor (RC) models identified from real measurements that also includes an attendance schedule for DR. For this, the EMPC uses a grey-box thermal building model that is designed, identified, and validated with real-world measurement data. For evaluation, we compare the EMPC with a well-tuned conventional Proportional-Integral (PI) controller. The results show that the EMPC significantly outperforms the PI controller in terms of GC, while it respects OTS.`,
                height: "h-[650px]",
                img: sciencePic,
                shortSum: `Distributed energy resources include thermostatic loads, PV, battery, and electric vehicle. \nReal-time pricing, load shedding, shifting, and power tracking are considered. \nAn approach to maximize load sheaving and shifting is proposed. \nProviding demand flexibility does not necessarily increase energy cost.`,
              },
            ]}
          />
          <TopProject
            title={"My Smart Home"}
            children={[
              {
                title: "My Own Smart Lamp",
                summary: `Embarking on the journey to make my home a bit smarter, I've chosen the trusty Raspberry Pi as my tech companion. For my first project, I'm diving into the world of home automation by making one of my lamps controllable through my phone and a custom website hosted on the Raspberry Pi.
                \nImagine flipping the switch on my lamp not with a button, but with a tap on my phone or a click on a website I put together. Beyond the cool factor, this is my way of seamlessly blending tech into my daily life
                \nEvery line of code feels like a small victory, and each connection teaches me something. Sure, having a lamp at my digital beck and call is handy, but what's truly rewarding is the learning process. It's about understanding how things work, tackling challenges, and feeling that sense of accomplishment.
                \nNo doubt, having a smart lamp will make daily life a bit more futuristic, but this isn't just about lighting up a room; it's about shedding light on the world of home automation.`,
                img: rpiLampPic,
                height: "h-[550px]",
                shortSum: `Raspberry Pi as Central Home Automation Component \nWeb Development \nBasic Server Hosting \nInnovative Integration and Satisfaction \nGained hands-on experience in IoT by connecting a physical device (lamp) to the digital world for remote control.`,
              },
              {
                title: "Upcoming: Water System",
                summary: `Venturing into my next DIY smart home project, and this time, it's all about keeping my leafy companions happy and hydrated! Picture this: a nifty water system for my plants that not only monitors their hydration levels but also springs into action, topping up their pots when needed.
                \nThe idea sprouted from a desire to blend technology with a touch of greenery. Armed with sensors, my Raspberry Pi-powered system will keep a watchful eye on the water levels in each plant pot. When the thirst kicks in, it'll kick into action, ensuring my plants never experience a parched moment.
                \nThis project is more than just a way to keep my plants happy; it's a chance to delve into the intricacies of sensor tech, irrigation systems, and maybe a bit of machine learning to make it even smarter. I'm diving into uncharted waters (quite literally) and enjoying every bit of it. Who knew combining dirt and code could be this exciting?
                \nSo, while my plants thrive,  I'm exploring a new world of DIY smart home projects - one sensor, one water droplet at a time. Because, in my home, even the plants are part of the smart revolution!`,
                img: rpiWater,
                height: "h-[550px]",
                shortSum: `Sensor Technology Implementation \nInnovative Problem-Solving \nMachine Learning Exploration \nInterdisciplinary Learning`,
              },
            ]}
          />
        </div>
      </Layout>
    </main>
  );
}
