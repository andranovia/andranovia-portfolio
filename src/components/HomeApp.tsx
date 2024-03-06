import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import GridCard from "./GridCard";
import SkillMarqueContainer from "./SkillMarqueContainer";
import PersonalWork from "./PersonalWork";
const LayoutApp = dynamic(() => import("@/layouts/LayoutApp"));
const Hero = dynamic(() => import("@/components/Hero"));
import Lenis from "@studio-freight/lenis";

export default function HomeApp() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <LayoutApp>
      <div className="relative w-full max-w-lg ">
        <Hero />

        <div className="relative bottom-0     lg:mt-52 mb-96">
          <PersonalWork />
          <GridCard />
          <SkillMarqueContainer />
        </div>
      </div>
    </LayoutApp>
  );
}
