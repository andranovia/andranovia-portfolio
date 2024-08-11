import React from "react";

import HeroText from "./HeroText";
import HeroAnimatedRoundText from "./HeroAnimatedRoundText";

function Hero() {



  return (
      <div className="bg-white  lg:overflow-visible  lg:mt-0  rounded-xl relative flex flex-col justify-start bg-dot-black/[0.3] lg:justify-center  items-center    lg:pt-[4rem] font-bold  ">
        <div className="bg-white hidden absolute pointer-events-none inset-0 z-10 lg:flex items-center justify-center rounded-xl    [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
        <HeroText />
        <div className="absolute pointer-events-none -bottom-[30%] xs:-bottom-[30%] md:-bottom-[40%] lg:-bottom-[28%]   1xl:-bottom-1/2 left-auto">
          <HeroAnimatedRoundText />
        </div>
      </div>
  );
}

export default Hero;
