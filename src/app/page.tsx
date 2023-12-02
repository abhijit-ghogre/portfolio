import Banner from "@/components/Banner";
import Timeline from "@/components/Timeline";
import SocialActions from "@/components/SocialActions";
import React from "react";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="px-5 md:px-20 md:w-[80vw] mx-auto">
        <Timeline />
        <Education />
      </div>
      <SocialActions className="mt-4 flex gap-6 justify-center py-4" />
    </main>
  );
}
