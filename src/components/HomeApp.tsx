import React from "react";
import dynamic from "next/dynamic";
import GridCard from "./GridCard";
import Work from "./Work";
import SkillMarqueContainer from "./SkillMarqueContainer";

const LayoutApp = dynamic(() => import("@/layouts/LayoutApp"));
const Hero = dynamic(() => import("@/components/Hero"));

export default function HomeApp() {
  return (
    <LayoutApp>
      <div className="relative w-full max-w-lg bg ">
        <div className="relative lg:mt-32">
          <Hero />
        </div>

        <div className="relative bottom-0   lg:top-64  mt-52 mb-96">
          <Work />

          <GridCard />
          <div className="w-screen  sm:h-[10vh] my-10  sm:mt-20  ">
      <SkillMarqueContainer/>
    </div>
       
        </div>
      </div>
    </LayoutApp>
  );
}
