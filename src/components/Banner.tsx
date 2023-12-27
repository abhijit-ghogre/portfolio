import React from "react";
import Image from "next/image";
import bgImage from "@/app/bg.jpeg";
import textImage from "@/app/text-bg.png";
import SocialActions from "@/components/SocialActions";
import { IoIosSend } from "react-icons/io";

function Banner() {
  return (
    <div className="lg:flex items-stretch px-10 justify-center">
      <div className="flex-1 flex justify-center">
        <Image src={bgImage} alt="Abhijit Ghogre" />
      </div>
      <div className="relative leading-none flex-1 flex flex-col justify-center">
        <Image
          src={textImage}
          alt=""
          className="absolute -z-10 top-0 opacity-[0.15]"
        />
        <div className="text-primary-foreground relative text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]">
          Abhijit Ghogre
        </div>
        <div className="mt-2 text-secondary-foreground relative font-medium text-[20px] md:text-[30px]">
          Head of Engineering @ Stealth Startup
        </div>
        <div className="mt-4 leading-normal text-lg">
          I am currently spearheading the creation of a global{" "}
          <span className="font-bold">B2B e-commerce</span> marketplace. I have{" "}
          <span className="font-bold">10+ years</span> of experience building
          backend, frontend and infrastructure for various applications and
          platforms in e-commerce, fleet management and GRC (governance, risk
          and compliance) domains. I have experience working with{" "}
          <span className="font-bold">zero-to-one</span> fast paced startups as
          well as managing SDLC for products running at{" "}
          <span className="font-bold">scale</span>. I like to take up
          challenging problems and convert them into beautiful solutions. I am a
          strong enforcer of good coding standards and writing beautiful code. I
          mainly use{" "}
          <span className="font-bold">
            React.js, Next.js, ReactNative, Vue.js or Svelte
          </span>{" "}
          for front end and{" "}
          <span className="font-bold">Node.js, Laravel or Adonis.js</span> for
          backend.
        </div>
        <SocialActions className="mt-4 flex gap-6" />
        <a
          className="flex text-link gap-1 text-lg items-center mt-4 hover:underline"
          href="mailto:abhijitghogre@gmail.com"
          target="_blank"
        >
          <IoIosSend className="text-xl" /> abhijitghogre@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Banner;
