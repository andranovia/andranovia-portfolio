import { MotionValue, useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react'

const AnimatedImageWork = () => {

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

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  function useParallaxRotate(
    value: MotionValue<number>,
    distance: number,
    range: number[]
  ) {
    return useTransform(value, range, [-distance, distance]);
  }

  const translateY = useParallax(scrollYProgress, -80, [0, 1]);
  const translateYTwo = useParallax(scrollYProgress, -20, [0, 1]);
  const rotate = useParallaxRotate(scrollYProgress, -4, [1, -1]);
  const rotateTwo = useParallaxRotate(scrollYProgress, -4, [-1, 1]);


  return (
    <React.Fragment>
      <motion.div
            ref={work}
            style={{ y: translateY, opacity: scrollYProgress, rotate, scale }}
            className=" flex justify-start items-end -mb-10 lg:mb-0 mr-20 lg:mr-16 rotate-6 w-full h-full"
          >
            <Image
              src={"/img/projectImg/project-three.png"}
              alt=""
              width={400}
              height={300}
              className="absolute rounded-sm w-36 lg:w-[25rem]"
            />
          </motion.div>
          <motion.div
            ref={work}
            style={{
              y: translateYTwo,
              opacity: scrollYProgress,
              rotate: rotateTwo,
              scale
            }}
            className=" flex justify-end items-start ml-20 lg:ml-16 rotate-6  w-full h-full"
          >
            <Image
              src={"/img/projectImg/project-one.png"}
              alt=""
              width={400}
              height={300}
              className="absolute rounded-sm w-36 lg:w-[25rem]"
            />
          </motion.div>
    </React.Fragment>
  )
}

export default AnimatedImageWork