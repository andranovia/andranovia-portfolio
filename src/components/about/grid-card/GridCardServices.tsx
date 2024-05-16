import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

import Image from "next/image";
import useMobileDetect from "@/utils/useMobileDetect";

const GridCardServices = () => {
  const {isMobile, isTablet} = useMobileDetect();
  const serviceRef = useRef(null);
  const isInView = useInView(serviceRef, { once: true });
  const hoverControls = useAnimation();

  const handleMouseEnterServices = () => {
    hoverControls.start("hover");
  };

  const handleMouseLeaveServices = () => {
    hoverControls.start("initial");
  };

  useEffect(() => {
    isMobile || isTablet 
      isInView &&
      hoverControls.start("hover", {
        delay: isInView && 1.2,
      });
  }, [hoverControls, isMobile, isInView]);

  const { scrollYProgress } = useScroll({
    target: serviceRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yTwo = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const yThree = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.div
      ref={serviceRef}
      animate={hoverControls}
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
      className="w-full bg-100% flex flex-col justify-end border-2   h-[11.5rem] rounded-lg  "
    >
      <div className="flex relative justify-center gap-4 items-center w-full overflow-hidden">
        <div className="absolute pointer-events-none inset-0 z-20 flex items-center justify-center   bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white)]"></div>
        <motion.div style={{ y }} className="relative -top-[45%]">
          <Image
            src={"/img/projectImg/project-noirythm-three.png"}
            alt=""
            width={200}
            height={200}
          />
        </motion.div>
        <motion.div
          style={{ y: yTwo }}
          className="relative -top-[25%] flex flex-col items-center gap-10"
        >
          <Image
            src={"/img/projectImg/project-society-one.png"}
            alt=""
            width={200}
            height={200}
          />
          <Image
            src={"/img/projectImg/project-heroio.png"}
            alt=""
            width={200}
            height={200}
          />
        </motion.div>
        <motion.div style={{ y: yThree }} className="relative -top-[15%]">
          <Image
            src={"/img/projectImg/project-smknusa.jpeg"}
            alt=""
            width={200}
            height={200}
          />
        </motion.div>
      </div>
      <div className="flex justify-center items p-4 absolute z-20">
        <div className=" flex flex-col lg:flex-row lg:justify-center w-full lg:items-center text-primary ">
          <div className="flex flex-col w-72 items-start justify-center ">
            <motion.h1
              animate={hoverControls}
              variants={{
                hover: {
                  y: -80,
                },
                initial: {
                  y: 0,
                },
              }}
              className="text-lg font-semibold bg-white p-2 rounded-md"
            >
              What can I do for you ?
            </motion.h1>
            <motion.p
              animate={hoverControls}
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
              initial="initial"
              className="-mb-10 font-thin bg-white p-2 rounded-md"
            >
              Build, make, optimize, improve web application using modern stack
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GridCardServices;
