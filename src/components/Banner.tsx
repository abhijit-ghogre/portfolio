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
        <div className="text-primary-foreground relative font-light text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]">
          Abhijit Ghogre
        </div>
        <div className="text-secondary-foreground relative font-semibold text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]">
          Full-stack Developer
        </div>
        <div className="mt-4 leading-normal text-lg">
          I develop web and mobile applications using{" "}
          <span className="font-bold">
            React.js, ReactNative, Vue.js or Svelte{" "}
          </span>
          for front end and{" "}
          <span className="font-bold">Node.js, Laravel or Adonis.js</span> for
          backend. I work with a team of talented developers and collaborate
          with and consult for <span className="font-bold">global clients</span>{" "}
          to deliver <span className="font-bold">high-quality</span>,{" "}
          <span className="font-bold">user friendly</span> and{" "}
          <span className="font-bold">scalable</span> products. I like to take
          up challenging problems and convert them into beautiful solutions.{" "}
          <br />I am a strong enforcer of good coding standards and writing
          beautiful code.
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
