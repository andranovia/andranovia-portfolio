import React from "react";
import dynamic from "next/dynamic";
import GridCard from "./GridCard";
import ProfileSkillAnimation from "./ProfileSkillAnimation";
import Work from "./Work";

const LayoutApp = dynamic(() => import("@/layouts/LayoutApp"));
const Hero = dynamic(() => import("@/components/Hero"));

export default function HomeApp() {
  return (
    <LayoutApp>
      <div className="relative w-full max-w-lg bg- ">
        <div className="relative lg:mt-32">
          <Hero />
        </div>

        <div className="relative bottom-0 lg:top-64 mt-52 mb-96">
          <GridCard />

          <ProfileSkillAnimation />
          <Work />
        </div>
      </div>
    </LayoutApp>
  );
}
