import React from "react";
import { useResize } from "@/hooks/useResize";
import HeroText from "./HeroText";

function Hero() {
  const { isMobile } = useResize();

  const animatedTextTwo = !isMobile ? "We Should Know " : "We Should Know Each";
  const animatedTextThree = !isMobile ? "Each arrow ther" : " arrow ther";

  return (
    <>
      <div className="relative flex justify-start sm:justify-center items-center  lg:top-10  w-screen lg:mt-[4rem]  ">
        <div className=" font-bold font-Poppins flex flex-col-reverse lg:flex-row lg:gap-10 gap-20 lg:items-center justify-start z-1">
          <HeroText textTwo={animatedTextTwo} textThree={animatedTextThree} />
        </div>
      </div>
    </>
  );
}

export default Hero;
