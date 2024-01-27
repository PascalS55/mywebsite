import Image from "next/image";
import profilePic from "../../public/Images/profilePic2.jpeg";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Numbers from "./numbers";

export const metadata = {
  title: "PS | About",
};

export default function Page() {
  return (
    <main className="flex flex-col">
      <Layout className="pt-16 z-10">
        <AnimatedText
          text={"Curiosity and Ingenuity!"}
          className="mb-16 lg:!text-7xl md:!text-6xl xs:!text-4xl sm:mb-8"
        />
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          <div className="col-span-5 flex flex-col items-start justify-start md:order-2 md:col-span-8">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Biography
            </h2>
            <div className="text-base lg:text-sm xs:text-xs">
              <p className="font-medium">
                Embarking on my academic journey in mechanical engineering, I
                initially focused on the intricate workings of physical systems.
                My fascination for technical solutions first went beyond the
                mechanical field during my bachelor thesis. Here, I took the
                plunge into the world of programming, developing
                state-of-the-art solutions for building control and evaluating
                individual strengths and weaknesses. Subsequently, I was drawn
                to the prospect of creating solutions that exceeded the
                limitations of traditional engineering.
              </p>
              <p className="pt-4 font-medium">
                Delving into programming evolved from a scholarly exploration
                into a personal passion, opening new worlds and propelling me
                beyond my academic foundation. Eager to apply my skills, I
                collaborated with my roommate on developing a mobile app,
                immersing myself in the practical aspects of software
                development. This endeavour testified to the synergy between
                theoretical knowledge and practical application, reinforcing my
                commitment to mastering software intricacies while fostering
                teamwork, problem-solving, and creative thinking.
              </p>
              <p className="pt-4 font-medium">
                Complementing my academic and personal ventures, my professional
                journey has included impactful internships, including Bosch
                Thermo Technologies and a recent one in Charlotte, USA. During
                the latter experience, I engaged in scientific research focused
                on control systems in buildings, utilizing advanced modelling
                and simulation techniques. This immersive work resulted in my
                first publication, a testament to my dedication to pushing the
                boundaries of knowledge and contributing to cutting-edge
                advancements in the field.
              </p>
            </div>
          </div>
          <div
            className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-4 
          md:order-1 md:col-span-8"
          >
            {/* The second div with a negative z-index */}
            <div className="absolute top-0 -right-3 rounded-[2rem] bg-dark w-[102%] h-[102%] -z-10" />

            {/* The main content */}
            <Image
              src={profilePic}
              alt="PascalS"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          {/* <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
            <Numbers />
          </div> */}
        </div>
        <Skills />
        <Experience />
        <Education />
      </Layout>
    </main>
  );
}
