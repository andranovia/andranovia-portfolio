import React from "react";
import HeroText from "./HeroText";
import Image from "next/image";
import { ClientOnly } from "@/utils/isClient";

function Hero() {

  return (
    <div className="bg-white h-[40rem] 1xl:h-[50rem]  lg:overflow-visible  lg:mt-0  rounded-xl relative flex flex-col justify-start lg:justify-center  items-center  font-bold  ">
      <div className="bg-white  absolute pointer-events-none inset-0 z-10 flex items-center justify-center rounded-xl    [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
      <div className="h-[24rem] ms:h-[28rem] md:h-[36rem] lg:h-[40rem] -mt-32 relative w-screen flex flex-col items-center justify-center">
        <ClientOnly>
          <HeroText />
        </ClientOnly>
        <div className="absolute -right-[3rem] xs:-right-[2rem] ms:-right-[3rem] md:-right-[4rem] 1xl:-right-[5rem] 3xl:-right-[10rem] -bottom-0 xs:-bottom-[1rem] ms:-bottom-[2rem] md:-bottom-[0rem] 1xl:-bottom-[5rem] rotate-[25deg] w-[45vw] xl:w-[40vw]">
          <Image src="/img/hero/quill-hand.svg" alt="Doodle Concepts for Hero" width={680} height={200} />
        </div>
        <div className="absolute -left-[1rem] xs:-left-[1.5rem] ms:-left-[2rem] lg:-left-[5rem] -bottom-[2rem] xs:-bottom-[4rem] ms:-bottom-[6rem] lg:-bottom-[6rem]  1xl:-bottom-[15rem] rotate-[28deg] w-[30vw]">
          <Image src="/img/hero/flower.svg" alt="Doodle Concepts for Hero" width={450} height={200} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
