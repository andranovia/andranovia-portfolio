import React, { useState } from "react";
import dynamic from "next/dynamic";
import GridCard from "./GridCard";
import Work from "./Work";
import SkillMarqueContainer from "./SkillMarqueContainer";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";
const LayoutApp = dynamic(() => import("@/layouts/LayoutApp"));
const Hero = dynamic(() => import("@/components/Hero"));

export default function HomeApp() {


  return (
    <LayoutApp>
      <div className="relative w-full max-w-lg bg ">
        
        <Hero />


        <div className="relative bottom-0     mt-52 mb-96">
          <Work />

          <GridCard />
          <div className="w-screen  sm:h-[10vh] my-10  sm:mt-20  ">
            <SkillMarqueContainer />
          </div>
        </div>
      </div>
    </LayoutApp>
  );
}
