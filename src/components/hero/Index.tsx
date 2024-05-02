import React from "react";

import HeroText from "./HeroText";
import useMobileDetect from "@/utils/useMobileDetect";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], display: 'swap', adjustFontFallback: false});

function Hero() {
  const isMobile = useMobileDetect();

  const animatedTextOne = isMobile ? "We Should" : "We Should Know";
  const animatedTextTwo = isMobile ? "Know Each" : "Each Other";
  const animatedTextThree = isMobile ? "Other" : "";

  return (
    <div className={bebasNeue.className}>
      <div className=" relative flex justify-start sm:justify-center  items-center  lg:top-10  lg:mt-[4rem] font-bold  ">
        <HeroText
          textTwo={animatedTextTwo}
          textThree={animatedTextThree}
          textOne={animatedTextOne}
        />
      </div>
    </div>
  );
}

export default Hero;
