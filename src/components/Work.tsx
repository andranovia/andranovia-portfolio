import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedImageWork from "./AnimatedImageWork";

const Work = () => {
  const work = useRef(null);

  const { scrollYProgress } = useScroll({
    target: work,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);


  return (
    <div className="w-screen p-10 h-full  flex justify-center ">
      <motion.div
        ref={work}
        style={{
          scale: scale,
          opacity,
        }}
        className="bg-base lg:w-[70vw] lg:h-[30vw] w-full rounded-xl overflow-hidden flex justify-center items-center text-white"
      >
        <div className="flex text-primary flex-col items-center justify-center my-24 lg:my-20   gap-4 w-full h-full overflow-hidden">
          <AnimatedImageWork/>
          <div className="flex flex-col items-center justify-center absolute w-full">
            <div className="flex lg:mb-8 mb-4 flex-row items-center justify-center gap-2 rounded-xl border-2 border-black p-2">
              <Image
                src={
                  "https://img.icons8.com/ios-glyphs/30/brains--v2.png"
                }
                alt=""
                width={20}
                height={20}
                className="w-4 lg:w-[1.25rem]"
              />
              <h3 className="font-normal text-sm lg:text-base">
                MIND CONNECTING
              </h3>
            </div>

            <h1 className="text-2xl lg:text-4xl font-normal">MY PERSONAL</h1>
            <h1 className="text-2xl lg:text-4xl font-normal">WORK</h1>
            <button className="bg-white px-2 py-1 mt-4 lg:mt-10 rounded-md font-normal text-black flex justify-center items-center gap-2">
              <Image
                width="25"
                height="25"
                src="https://img.icons8.com/windows/32/circled-right.png"
                alt="circled-right"
              />
              <p>See More</p>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
