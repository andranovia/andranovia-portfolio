import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useResize } from "@/hooks/useResize";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLInputElement>(null);

  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });
  const { isMobile } = useResize();

  return (
    <div>
      <div className=" h-80 w-80 lg:w-full lg:h-96   bg-[url('/img/assets/card-background-image.avif')] rounded-xl mt-10 lg:mt-0 ">
        <motion.div ref={ref} className="relative h-full w-full flex flex-col">
          <div className="relative  z-20 flex justify-start m-2 items-center  rounded-xl bg-white ">
            <Image
              src={"/img/assets/andra-logo.png"}
              alt=""
              width={100}
              height={100}
              className="mx-4 lg:m-10 w-1/4"
            />
            <h1 className="text-2xl lg:text-4xl font-thin w-full">Create fluid creativity.</h1>
            <motion.div
              animate={controls}
              className="w-40 h-16 lg:w-40 lg:h-40  relative z-20 flex justify-center items-center left-20 lg:left-14 top-10 bottom-0 lg:top-10 rounded-full"
            ></motion.div>
          </div>
          <div className="w-full p-2 h-full  bg-gradient-to-t from-black rounded-md to-transparent  ">

          </div>
        </motion.div>
      </div>
    </div>
  );
};

const AnimatedCard = () => {
  return (
    <div className="flex w-full  place-content-center text-slate-900">
      <TiltCard />
    </div>
  );
};

export default AnimatedCard;
