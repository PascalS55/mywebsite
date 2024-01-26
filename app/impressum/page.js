import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

export const metadata = {
  title: "PS | Impressum",
};

const Page = () => {
  return (
    <main className="w-full mb-16 flex flex-col justify-center">
      <Layout className="pt-16 pb-10 overflow-hidden flex w-full">
        <div className="w-full">
          <h1 className="text-left text-4xl">Impressum</h1>
          <div className="text-lg my-3">
            <div className="flex flex-col">
              <div className="flex items-start">
                <span className="font-bold w-32">Name:</span>
                <span className="ml-2">Pascal Strauch</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold w-32">Address:</span>
                <span className="ml-2">
                  Durlacher Allee 24, 76131 Karlsruhe, Germany
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-bold w-32">Email:</span>
                <Link href={"mailto:pascals00@web.de"}>
                  <span className="ml-2">pascals00@web.de</span>
                </Link>
              </div>
              <div className="flex items-start">
                <span className="font-bold w-32">Phone:</span>
                <span className="ml-2">+49 1515 7357048</span>
              </div>
            </div>
          </div>
          <div className="h-[2px] my-8 w-full bg-dark/50" />
          <div className="flex items-start">
            <span className="font-bold w-32">Privacy Policy:</span>
            <span className="ml-2">Link to Privacy Policy</span>
          </div>
          <div className="h-[2px] my-8 w-full bg-dark/50" />
          <div className="flex">
            <span className="font-bold w-32">Copyright:</span>
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
