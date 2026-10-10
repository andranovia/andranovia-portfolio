import React from "react";
import HeroText from "./HeroText";
import { ClientOnly } from "@/utils/isClient";
import HeroWaxSeal from "./HeroWaxSeal";

function Hero() {

  return (
    <div className=" h-screen rounded-xl relative flex flex-col justify-start lg:justify-center items-center font-bold ">
      <div className="relative w-screen flex flex-col items-center justify-center">
        <ClientOnly>
          <HeroText />
        </ClientOnly>
      </div>
      <div className="absolute pointer-events-none -bottom-[25vh]">
        <HeroWaxSeal />
      </div>
    </div>
  );
}

export default Hero;
