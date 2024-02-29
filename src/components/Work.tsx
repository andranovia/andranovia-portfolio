import Image from "next/image";
import React, { useRef } from "react";
import {
  MotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const Work = () => {
  const work = useRef(null);

  const { scrollYProgress } = useScroll({
    target: work,
    offset: ["start end", "start start"],
  });

  function useParallax(
    value: MotionValue<number>,
    distance: number,
    range: number[]
  ) {
    return useTransform(value, range, [-distance, distance]);
  }

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  function useParallaxRotate(
    value: MotionValue<number>,
    distance: number,
    range: number[]
  ) {
    return useTransform(value, range, [-distance, distance]);
  }

  const translateY = useParallax(scrollYProgress, -80, [1, 0]);
  const translateYTwo = useParallax(scrollYProgress, -20, [0, 1]);
  const rotate = useParallaxRotate(scrollYProgress, -4, [1, -1]);
  const rotateTwo = useParallaxRotate(scrollYProgress, -4, [-1, 1]);


  

  return (
    <div className="w-screen p-10 h-full flex justify-center ">
      <motion.div ref={work} style={
        {
          scale: scale, opacity
        }
      } className="bg-primary lg:w-[70vw] lg:h-[30vw] w-full rounded-xl overflow-hidden flex justify-center items-center text-white">
        <div className="flex flex-col items-center justify-center my-20 gap-4 w-full h-full overflow-hidden">
          <motion.div
            ref={work}
            style={{ y: translateY, opacity: scrollYProgress, rotate }}
            className=" flex justify-start items-end lg:mr-16 rotate-6 w-full h-full"
          >
            <Image
              src={"/img/projectImg/project-three.png"}
              alt=""
              width={400}
              height={300}
              className="absolute rounded-xl"
            />
          </motion.div>
          <motion.div
            ref={work}
            style={{
              y: translateYTwo,
              opacity: scrollYProgress,
              rotate: rotateTwo,
            }}
            className=" flex justify-end items-start lg:ml-16 rotate-6  w-full h-full"
          >
            <Image
              src={"/img/projectImg/project-one.png"}
              alt=""
              width={400}
              height={300}
              className="absolute rounded-sm"
            />
          </motion.div>
          <div className="flex flex-col items-center justify-center absolute w-full">
            <div className="flex mb-8 flex-row items-center justify-center gap-2 rounded-xl border-2 border-white p-2">
              <Image
                src={
                  "https://img.icons8.com/ios-glyphs/30/FFFFFF/brains--v2.png"
                }
                alt=""
                width={20}
                height={20}
              />
              <h3 className="font-normal">MIND CONNECTING</h3>
            </div>

            <h1 className="text-4xl font-normal">WHAT AM I DO? </h1>
            <h1 className="text-4xl font-normal">&quot;WORK&quot; </h1>
            <button className="bg-white px-2 py-1 mt-10 rounded-md font-normal text-black">
              See More
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
