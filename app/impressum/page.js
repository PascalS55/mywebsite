import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

export const metadata = {
  title: "PS | Impressum",
};

const Page = () => {
  return (
    <main className="w-full mb-8 flex flex-col justify-center">
      <Layout className="pt-16 pb-10 overflow-hidden flex w-full">
        <div className="w-full text-lg lg:text-base md:text-sm xs:text-xs">
          <h1 className="text-left text-4xl">Impressum</h1>
          <div className="my-3">
            <div className="flex flex-col">
              <div className="flex items-start">
                <span className="font-bold w-32 md:w-24 sm:w-20 xs:w-16">
                  Name:
                </span>
                <span className="ml-2">Pascal Strauch</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold w-32 md:w-24 sm:w-20 xs:w-16">
                  Address:
                </span>
                <span className="ml-2">
                  Durlacher Allee 24, 76131 Karlsruhe, Germany
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-bold w-32 md:w-24 sm:w-20 xs:w-16">
                  Email:
                </span>
                <Link href={"mailto:pascals00@web.de"}>
                  <span className="ml-2">pascals00@web.de</span>
                </Link>
              </div>
              <div className="flex items-start">
                <span className="font-bold w-32 md:w-24 sm:w-20 xs:w-16">
                  Phone:
                </span>
                <span className="ml-2">+49 1515 7357048</span>
              </div>
            </div>
          </div>
          <div className="h-[2px] my-8 w-full bg-dark/50" />
          <div className="flex items-start">
            <span className="font-bold w-32 md:w-24 sm:w-20 xs:w-16">
              Privacy Policy:
            </span>
            <span className="ml-2">
              This Privacy Policy outlines how we handle personal information on
              our German website. As we prioritize transparency and user
              privacy, please be assured that we do not track any user data, use
              cookies, or engage in any form of data collection through our
              website. Our website is solely designed to display personal
              information and offer services to our customers without any
              intrusive data practices. We respect your privacy and are
              committed to maintaining a secure and trustworthy online
              environment. If you have any questions or concerns regarding our
              privacy practices, please feel free to contact us.
            </span>
          </div>
          <div className="h-[2px] my-8 w-full bg-dark/50" />
          <div className="flex">
            <span className="font-bold w-32 md:w-24 sm:w-20 xs:w-16">
              Copyright:
            </span>
            <p className="ml-2 flex-wrap">
              The content and works provided on these web pages are governed by
              the copyright laws of your country. Duplication, processing,
              distribution, or any form of commercialization of such material
              beyond the scope of the copyright law shall require the prior
              written consent of its respective author or creator.
            </p>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default Page;
