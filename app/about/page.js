import Image from "next/image";
import profilePic from "../../public/Images/profilePic2.jpeg";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Numbers from "./numbers";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

export const metadata = {
  title: "PS | About",
};

export default function Page() {
  return (
    <main className="flex flex-col">
      <Layout className="pt-16 z-10">
        <AnimatedText
          text={"Curiosity and Ingenuity!"}
          className="mb-16 lg:!text-7xl md:text-6xl xs:text-4xl sm:mb-8"
        />
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Biography
            </h2>
            <p className="font-medium">
              Hi, Im aoihasajdas hlashd asdh lrem uoiassd{" "}
            </p>
            <p className="py-4 font-medium">
              Loradaod jasljdhsakdjga kbjdasi dhashd
            </p>
            <p className="font-medium">dahsudjk asl d</p>
          </div>
          <div
            className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-4 
          xl:col-span-4 md:order-1 md:col-span-8"
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
          <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
            <Numbers />
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </Layout>
    </main>
  );
}
