'use client';

import React, { useEffect, useRef } from "react";
import CircleType from "circletype";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroWaxSeal = () => {
  const circleTypeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const circleType = new CircleType(document.getElementById("textCircular"));

    const handleScroll = () => {
      const offset = window.scrollY * 0.2;

      if (circleType.element) {
        circleType.element.style.transform = `rotate(${offset}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex -ml-3 lg:-m-0 justify-start items-start font-blackFlag">
      <div
        className={
          " flex items-center  top-1 lg:top-0 left-0 justify-center text-center relative w-[11rem] sm:w-[13rem] ms:w-[16rem] md:w-[18rem] 1xl:w-auto"
        }
      >
        <div className="absolute left-0 -top-6 sm:-top-10 ms:-top-16 md:-top-12 1xl:top-0 saturate-[0.7]">
          <Image src="/img/hero/wax-seal.png" alt="wax" width={600} height={600} />

        </div>
        <div className="absolute  ">
          <Image src="/img/assets/logo.png" alt="logo" width={200} height={200} className="invert -mt-2 w-[10rem] sm:w-[14rem] md:w-[15rem]" />
        </div>

        <motion.div
          transition={{
            type: "spring",
            damping: 8,
            stiffness: 100,
            duration: 1,
          }}
          className=" p-2  lg:right-2 z-20  w-32 h-32 md:w-[12rem] md:h-[12rem] 1xl:w-[28rem] 1xl:h-[28rem] rounded-full  flex items-center justify-center text-[15px] sm:text-lg ms:text-xl md:text-2xl 1xl:text-[34px]  text-white  "
        >
          <div ref={circleTypeRef} id="textCircular">
            <div className={"flex items-center justify-center w-full   "}>
              <div ref={circleTypeRef} className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 1.8,
                  }}
                  className=" p-2 w-full  z-20 relative "
                >
                  <p className="block ">
                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroWaxSeal;
