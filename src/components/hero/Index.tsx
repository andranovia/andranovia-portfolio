import React from "react";

import HeroText from "./HeroText";
import useMobileDetect from "@/utils/useMobileDetect";

function Hero() {
  const isMobile = useMobileDetect();

  const animatedTextTwo = isMobile ? "We Should Know Each " : "We Should Know";
  const animatedTextThree = isMobile ? " arrow ther" : "Each arrow ther";

  return (
    <>
      <div className=" relative flex justify-start sm:justify-center  items-center  lg:top-10  lg:mt-[4rem] font-bold  ">
        <HeroText textTwo={animatedTextTwo} textThree={animatedTextThree} />
      </div>
    </>
  );
}

export default Hero;
