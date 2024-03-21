import React from "react";

import HeroText from "./HeroText";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const animatedTextTwo = !isMobile ? "We Should Know " : "We Should Know Each";
  const animatedTextThree = !isMobile ? "Each arrow ther" : " arrow ther";

  return (
    <>
      <div className="relative flex justify-start sm:justify-center  items-center  lg:top-10  lg:mt-[4rem] font-bold  ">
        <HeroText textTwo={animatedTextTwo} textThree={animatedTextThree} />
      </div>
    </>
  );
}

export default Hero;
