import React from "react";
import HeroText from "./HeroText";
import Image from "next/image";

function Hero() {

  return (
    <div className="bg-white h-[50rem]  lg:overflow-visible  lg:mt-0  rounded-xl relative flex flex-col justify-start lg:justify-center  items-center  font-bold  ">
      <div className="bg-white hidden absolute pointer-events-none inset-0 z-10 lg:flex items-center justify-center rounded-xl    [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
      <div className="h-[40rem] -mt-32 relative w-screen flex flex-col items-center justify-center">
        <HeroText />
        <div className="absolute -right-[6rem] -bottom-[5rem] rotate-[25deg] w-[40vw]">
          <Image src="/img/hero/quill-hand.svg" alt="Doodle Concepts for Hero" width={680} height={200} />
        </div>
        <div className="absolute -left-[5rem] -bottom-[15rem] rotate-[28deg] w-[30vw]">
          <Image src="/img/hero/flower.svg" alt="Doodle Concepts for Hero" width={450} height={200} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
