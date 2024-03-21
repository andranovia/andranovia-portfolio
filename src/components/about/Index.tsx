import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import AnimatedTextLetter from "../animated/AnimatedTextLetter";
import GridCardServices from "./grid-card/GridCardServices";
import GridCardAnimatedPhone from "./grid-card/GridCardAnimatedPhone";
import GridCardAnimatedHello from "./grid-card/GridCardAnimatedHello";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const TextControls = useAnimation();

  useEffect(() => {
    isInView && TextControls.start("animate");
  }, [isInView, TextControls]);

  return (
    <div className="relative flex justify-start sm:justify-center items-center   w-screen ">
      <div className="flex flex-col  sm:items-center p-8 sm:justify-start lg:mt-20 ">
        <div className="flex justify-center lg:flex-row flex-col gap-10 items-center">
          <div className=" flex flex-col-reverse  justify-start lg:flex-row  sm:mx-0 items-center">
            <div className="w-1/4" ref={ref}>
              <div className="flex justify-center flex-col gap-10 lg:flex-row items-center lg:gap-4 mt-20 lg:mt-0 text-lg h-full w-fit">
                <div className="bg-gradient-to-r from-white to-black rotate-90 lg:rotate-0 w-[4rem] lg:w-[10rem] rounded-md h-1"></div>
                <Image
                  src={
                    "https://img.icons8.com/ios-filled/50/000000/circled-left-2.png"
                  }
                  alt=""
                  width={40}
                  height={40}
                  className="-rotate-90 lg:rotate-180"
                />
              </div>
            </div>
            <div className=" flex justify-start flex-col lg:mx-14 mx-4 gap-4  text-primary lg:w-full">
              <div className="flex justify-start w-full items-start gap-4 ">
                <div className=" font-semibold text-4xl lg:text-5xl  lg:whitespace-nowrap ">
                  <motion.div
                    variants={{
                      hidden: { opacity: 1 },
                      animate: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.04,
                          duration: 1,
                        },
                      },
                    }}
                    initial="hidden"
                    animate={TextControls}
                  >
                    <AnimatedTextLetter
                      text="Somethin more about me!"
                      charDelay={0.2}
                    />
                  </motion.div>
                </div>
              </div>
              <h1 className=" text-lg">
                Here, you can see my things that i really like or some of my
                information.
              </h1>
            </div>
          </div>
        </div>

        <div className="container sm:flex justify-center items-center  gap-10  mt-4 sm:mt-32">
          <div className="flex flex-col justify-center sm:w-full sm:items-end items-center gap-4">
            <div className=" w-full  rounded-xl">
              <div className="font-semibold text-2xl    rounded-xl items-start flex flex-col lg:flex-row justify-start  text-center sm:text-start gap-4 pt-2">
                <GridCardAnimatedHello />

                <div className="flex relative justify-center text-start flex-col items-center border w-full lg:w-1/2 h-40 py-6 rounded-lg gap-2 ">
                  <div className="flex justify-center items-center gap-4 lg:gap-2">
                    {" "}
                    <h1 className="font-semi bold text-5xl ">2</h1>
                    <div className="flex-col font-thin">
                      <h2>Years</h2>
                      <h3>Experience</h3>
                    </div>
                  </div>
                  <p className="lg:text-xs text-base font-thin w-1/2 lg:w-32 ">
                    Not that much init? but im still 17 years old!
                  </p>
                </div>
              </div>
            </div>
            <GridCardServices />
          </div>
          <div className="w-full">
            <GridCardAnimatedPhone />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
