import bgImage from "@/app/bg.jpeg";
import textImage from "@/app/text-bg.png";
import SocialActions from "@/components/SocialActions";
import Image from "next/image";
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
          Head of Engineering{" "}
          <a href="https://rancelab.com" target="_blank" className="text-link">
            @RanceLab
          </a>
        </div>
        <div className="mt-4 leading-normal text-lg">
          Currently spearheading the creation of a thoughtfully crafted,
          next-generation cloud suite that reimagines how food & beverage and
          hospitality businesses manage operations, grow, and thrive. I have{" "}
          <span className="font-bold">10+ years of experience</span> building
          backend, frontend and infrastructure for various applications and
          platforms in e-commerce - storefronts, seller portals and live
          commerce. I have built multiple{" "}
          <span className="font-bold">0-1 products</span> in early stage
          startups as well as managed products at{" "}
          <span className="font-bold">scale</span>. I like to take up
          challenging problems and convert them into beautiful solutions. I am a
          strong enforcer of good coding standards and writing beautiful code. I
          am a fan of using <span className="font-bold">Javascript</span> based
          systems for creating applications{" "}
          <span className="font-bold">
            (Node.js, React.js, Next.js, React Native)
          </span>
          . Along with E-Commerce, I have built products in Financial Services,
          GRC and Fleet Management.
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
