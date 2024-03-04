import React, { useEffect, useRef } from "react";
import AnimatedCard from "./AnimatedCard";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import AnimatedRoundText from "./AnimatedRoundText";
import AnimatedHello from "./AnimatedHello";
import { useResize } from "@/hooks/useResize";

const GridCard = () => {
  const { isMobile } = useResize();
  const serviceRef = useRef(null);
  const isInView = useInView(serviceRef, { once: true });
  const controls = useAnimation();

  const handleMouseEnterServices = () => {
    controls.start("hover");
  };

  const handleMouseLeaveServices = () => {
    controls.start("initial");
  };

  useEffect(() => {
    isMobile &&
      isInView &&
      controls.start("hover", {
        delay: isInView && isMobile && 1.2,
      });
  }, [controls, isMobile, isInView]);

  return (
    <div className="flex flex-col  sm:items-start p-8 sm:justify-start w-screen lg:mt-20 ">
      <div className="flex justify-start lg:flex-row flex-col gap-10 items-center">
        <div className=" flex flex-col justify-start lg:flex-row  sm:mx-0 gap-8 items-center lg:w-[48rem]">
        
          <div className=" flex justify-start flex-col lg:mx-14 mx-4 gap-4 items-center text-primary lg:w-2/4">
            <div className="flex justify-center w-full items-center gap-4 ">
              <h1 className="font-semibold text-2xl  sm:text-5xl">
                Somethin more about me!
              </h1>
              <div className="bg-primary w-[8rem] block lg:hidden rounded-md h-1"></div>
            </div>
            <h1 className=" text-lg">
              Here, you can see my things that i really like or some of my
              information.
            </h1>
          </div>
          <div className="w-1/4">
            <div className="flex justify-center items-center gap-4 text-lg h-full w-fit">
              <div className="bg-primary w-[4rem] hidden lg:block lg:w-[10rem] rounded-md h-1"></div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="container sm:flex justify-center items-start gap-10  mt-4 sm:mt-32">
        <div className="flex flex-col justify-center sm:w-full sm:items-end items-center gap-36 sm:gap-6">
          <div className=" w-full  h-[11.5rem] rounded-xl">
            <div className="font-semibold text-2xl    rounded-xl items-start flex flex-col lg:flex-row justify-start  text-center sm:text-start gap-4 pt-4">
              <AnimatedHello />

              <div className="flex justify-center flex-col items-center border-2 w-full lg:w-1/2 py-6 rounded-lg bg-primary">
                <Image
                  src={"/img/assets/folder-image.png"}
                  alt=""
                  width={180}
                  height={180}
                  className="w-32 rounded-xl opacity-60"
                />

                <motion.div
                  whileHover={{ y: 10, rotateX: 40 }}
                  className="w-28  h-20 -mt-20 rounded-md relative bg-yellow-400 z-20 text-gray-100 text-center"
                ></motion.div>
              </div>
            </div>
          </div>

          <motion.div
            animate={controls}
            ref={serviceRef}
            initial="initial"
            onMouseEnter={() => handleMouseEnterServices()}
            onMouseLeave={() => handleMouseLeaveServices()}
            variants={{
              hover: {
                backgroundSize: "120%",
              },
              initial: {
                backgroundSize: "100%",
              },
            }}
            className="w-full bg-100% flex flex-col justify-end border-2  h-[11.5rem] rounded-lg bg-[url('/img/assets/service-background-image.jpg')] "
          >
            <div className="flex p-4 ">
              <div className=" flex flex-col lg:flex-row lg:justify-between w-full lg:items-center text-white ">
                <div className="flex flex-col w-72 items-start justify-center">
                  <motion.h1
                    animate={controls}
                    variants={{
                      hover: {
                        y: -80,
                      },
                      initial: {
                        y: 0,
                      },
                    }}
                    className="text-lg font-semibold"
                  >
                    What can I do for you ?
                  </motion.h1>
                  <motion.p
                    animate={controls}
                    variants={{
                      hover: {
                        y: -60,
                        visibility: "visible",
                        opacity: 1,
                        
                      },
                      initial: {
                        y: 60,
                        visibility: "hidden",
                        opacity: 0,
                      },
                    }}
                    initial='initial'
                    className="-mb-10 font-thin"
                  >
                    Build, make, optimize, improve web application using modern
                    stack
                  </motion.p>
                </div>
                <span className="visible opacity-60">Website Development</span>
              </div>
            </div>
          </motion.div>
        </div>
        <AnimatedCard />
      </div>
    </div>
  );
};
export default GridCard;
