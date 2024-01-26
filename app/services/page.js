import React from "react";
import Layout from "../components/Layout";
import SlideIn from "../components/SlideIn";
import AnimatedText from "../components/AnimatedText";
import Service from "./Service";

export const metadata = {
  title: "PS | Services",
};

const Page = () => {
  return (
    <main>
      <Layout className="pt-16 overflow-x-hidden">
        {/* Your page content */}
        <AnimatedText
          text={"Crafting Your Online Identity!"}
          className="mb-5 lg:!text-7xl md:!text-6xl xs:!text-4xl sm:mb-8"
        />
        <SlideIn direction="right" height="h-auto">
          <Service
            title="Website Design and Development"
            info="In our digital age, a well-designed website is essential for businesses and individuals alike. It's the virtual face of your brand, leaving a lasting impression on visitors. Professionally crafted design and robust development ensure an attractive and user-friendly platform, vital for credibility and success in the online landscape."
          />
        </SlideIn>
        <SlideIn direction="left" height="h-auto">
          <Service
            title="UI/UX Design"
            info="Effective UI/UX design is paramount for engaging online audiences. It entails creating a visually appealing and user-friendly interface that guides visitors seamlessly. A well-crafted design not only enhances accessibility but also fosters positive interactions, ensuring a memorable user experience. In the competitive digital landscape, prioritizing UI/UX is a strategic investment to make your website not only visually impressive but also functionally effective, contributing to overall online success."
          />
        </SlideIn>
        <SlideIn direction="right">
          <Service
            title="Web Application Development"
            info="Web Application Development offers tailored solutions using technologies like React, Angular, or Next.js. This service ensures your online platform is not only functional but also optimized for a seamless user experience, aligning with your business goals and providing a competitive edge in the digital landscape."
          />
        </SlideIn>
        <SlideIn direction="left">
          <Service
            title="Search Engine Optimization"
            info="SEO optimizes your online presence, making your business more discoverable, enhancing your website's visibility and improving user experience. With effective SEO, your website stands out, ensuring better rankings on search result pages and increased engagement with your target audience. It's the key to making your business easily accessible and competitive in the dynamic digital marketplace."
          />
        </SlideIn>
        <SlideIn direction="right">
          <Service
            title="Front End and Web Consultating"
            info="Already have a website? No problem! Elevate your digital presence with my specialized web and front-end consulting services. I offer strategic insights to enhance your existing platform, ensuring it aligns seamlessly with your business goals. From optimizing user interfaces to implementing cutting-edge technologies, my consulting services aim to improve functionality, aesthetics, and overall user experience. Stay ahead in the digital landscape with tailored guidance, making the most out of your online presence."
          />
        </SlideIn>
        <SlideIn direction="left">
          <Service
            title="Web Hosting and Domain Registration"
            info="Ensure your online home stays secure, reliable, and uniquely yours. From seamless domain setup to efficient hosting solutions, my services provide the essential foundation for a robust online presence. Let's simplify the technicalities, so you can focus on what matters most - your content and audience. Explore worry-free hosting and domain management to keep your digital space thriving."
          />
        </SlideIn>
        <div className="border-t-2 border-dark" />
      </Layout>
    </main>
  );
};

export default Page;
