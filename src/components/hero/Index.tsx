import React from "react";

import HeroText from "./HeroText";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], display: 'swap', adjustFontFallback: false});

function Hero() {



  return (
    <div className={bebasNeue.className}>
      <div className=" relative flex justify-start sm:justify-center  items-center  lg:top-10  lg:mt-[4rem] font-bold  ">
        <HeroText/>
      </div>
    </div>
  );
}

export default Hero;
