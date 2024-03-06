import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import AnimatedTextLetter from "./AnimatedTextLetter";
import GridCardServices from "./GridCardServices";
import GridCardAnimatedHello from "./GridCardAnimatedHello";
import GridCardAnimatedCard from "./GridCardAnimatedCard";

const GridCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const TextControls = useAnimation();

  useEffect(() => {
    isInView && TextControls.start("animate");
  }, [isInView, TextControls]);

  return (
    <div className="relative flex justify-start sm:justify-center items-center   w-screen">
      <div className="flex flex-col  sm:items-start p-8 sm:justify-start lg:mt-20 ">
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
          <div className="flex flex-col justify-center sm:w-full sm:items-end items-center gap-36 sm:gap-0">
            <div className=" w-full  h-[11.5rem] rounded-xl">
              <div className="font-semibold text-2xl    rounded-xl items-start flex flex-col lg:flex-row justify-start  text-center sm:text-start gap-4 pt-2">
                <GridCardAnimatedHello />

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
            <GridCardServices />
          </div>
          <div className="w-full">
            <GridCardAnimatedCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default GridCard;
