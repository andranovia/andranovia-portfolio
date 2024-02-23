import React from "react";
import dynamic from "next/dynamic";
import GridCard from "./GridCard";
import Projects from "./Projects";
import Profile from "@/components/Profile";
import ProfileSkillAnimation from "./ProfileSkillAnimation";

const LayoutApp = dynamic(() => import("@/layouts/LayoutApp"));
const Hero = dynamic(() => import("@/components/Hero"));


export default function HomeApp() {
  return (
    
    <LayoutApp>
      <div className="relative w-full max-w-lg bg- ">
        <div className="relative mt-32">
          <Hero />
        </div>
        <div className="relative bottom-0 top-64 mt-52 sm:mb-40">
        
        <Profile />
        <GridCard/>
        <ProfileSkillAnimation />
        </div>
        {/* <Projects /> */}
      </div>
    </LayoutApp>
  );
}
