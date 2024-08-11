import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import AnimatedTextLetter from "../animated/AnimatedTextLetter";
import GridCardServices from "./grid-card/GridCardServices";
import GridCardAnimatedPhone from "./grid-card/GridCardAnimatedPhone";
import GridCardAnimatedHello from "./grid-card/GridCardAnimatedHello";
import AboutImages from "./animated-image/Index";
import { useMediaQuery } from "react-responsive";
import useMobileDetect from "@/utils/useMobileDetect";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const TextControls = useAnimation();
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    isInView && TextControls.start("animate");
  }, [isInView, TextControls]);

  return (
    <>
     <AboutImages/>
      <div className="relative max-w-base-content xs:max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-max-container flex justify-center items-center lg:w-screen mt-0 xl:p-8 font-arcane text-primary">
        <div className="xl:w-[80%] w-full flex flex-col  items-center  sm:justify-start  ">
          <div className="w-full flex flex-col-reverse  justify-start md:flex-row lg:flex-row  sm:mx-0 items-center">
            <div className="w-1/4" ref={ref}>
            
              <div className="flex justify-center flex-col xl:gap-10 gap-4 md:flex-row lg:flex-row items-center lg:gap-4 mt-20 md:mt-0 lg:mt-0 text-lg h-full w-fit">
                <div className="bg-gradient-to-r from-[#021526] to-white md:rotate-0 rotate-90 lg:rotate-0 w-[4rem] lg:w-[10rem] rounded-md h-1"></div>
                <Image
                  src={
                    "https://img.icons8.com/ios-filled/50/FFFFFF/circled-left-2.png"
                  }
                  alt=""
                  width={40}
                  height={40}
                  className="-rotate-90 lg:rotate-180 md:rotate-180"
                />
              </div>
            </div>
            <div className=" flex justify-start flex-col lg:mx-14 mx-4 gap-4  text-white lg:w-full">
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
                    <AnimatedTextLetter text="About Me!" charDelay={0.2} />
                  </motion.div>
                </div>
              </div>
              <h1 className="text-sm xl:text-lg">
                Slightly some things about me or my life.
              </h1>
            </div>
          </div>

          <div className="container md:grid grid-cols-2 1xl:flex justify-center  items-center  gap-10  mt-32">
          {isTablet ?    <GridCardAnimatedHello /> : null}
            <div className="flex flex-col justify-center w-full h-full 1xl:w-1/2 sm:items-end items-center gap-4">
              <div className=" w-full rounded-xl">
                <div className="font-semibold text-2xl     rounded-xl items-start flex flex-col 1xl:flex-row justify-center  text-center sm:text-start gap-4 pt-2">
                  {!isTablet ?     <GridCardAnimatedHello /> : null}
          
                  <div className="flex relative justify-center text-start  bg-white flex-col items-center border w-full 1xl:w-1/3 1xl:h-40 py-6 rounded-lg gap-2 ">
                    <div className="flex justify-center items-center gap-4 1xl:gap-2">
                      <h1 className="font-semi bold text-5xl ">2</h1>
                      <div className="flex-col font-thin">
                        <h2>Years</h2>
                        <h3>Experience</h3>
                      </div>
                    </div>
                    <p className="1xl:text-xs text-base font-thin w-1/2 1xl:w-32 ">
                      Not that much init? but im still 17 years old!
                    </p>
                  </div>
                </div>
              </div>
              <GridCardServices />
            </div>
            <div className="1xl:w-1/2 md:h-full">
              <GridCardAnimatedPhone />
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};
export default About;
