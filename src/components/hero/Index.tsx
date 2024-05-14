import React from "react";

import HeroText from "./HeroText";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], display: 'swap', adjustFontFallback: false});

function Hero() {



  return (
    <div className={bebasNeue.className}> 
      <div className="bg-primary rounded-xl relative flex justify-start bg-dot-white/[0.3] lg:justify-center  items-center    lg:pt-[4rem] font-bold  ">
      <div className="bg-primary hidden absolute pointer-events-none inset-0 z-10 lg:flex items-center justify-center rounded-xl   [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
        <HeroText/>
      </div>
    </div>
  );
}

export default Hero;
