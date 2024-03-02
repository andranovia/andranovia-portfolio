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
  const {isMobile} = useResize();

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: any) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleHoverStart = useCallback(() => {
    controls.start({ scale: isMobile? 1.2 : 1.5, y: 30, height: "10rem", transition: {
      delay: isMobile? 1.4 : 0
    } });
  }, [controls, isMobile]);

  useEffect(() => {
    if (isInView && isMobile) {
      handleHoverStart();
    }
  }, [isInView, handleHoverStart, isMobile]);

  const handleHoverEnd = () => {
    controls.start({ scale: 1, y: 0 });
  };
  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <>
      <motion.div
        ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX,
            rotateY,
          }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        whileHover={{ scale: 1.05 }}
        className="relative h-80 w-80 lg:w-72 lg:h-96   cursor-pointer rounded-xl bg-primary mt-20 sm:mt-0 "
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-1 sm:inset-2 grid place-content-center rounded-xl bg-white "
        >
          <motion.div
            animate={controls}
            className="w-40 h-16 lg:w-40 lg:h-40  relative z-20 flex justify-center items-center left-20 lg:left-14 top-10 bottom-0 lg:top-10 rounded-full bg-invertPrimary mix-blend-difference"
          >
            <Image
              src={"/img/assets/andra-logo.png"}
              alt=""
              width={100}
              height={100}
            />
          </motion.div>
          <div className="flex flex-col justify-center items-center h-full  mix-blend-difference rounded-xl">
            <div className="font-semibold flex justify-center flex-col text-start p-9 -mt-4 lg:-mt-4">
              <div className="border-2 p-1 w-32 mb-4 text-gray-800 text-center lg:block hidden bg-white rounded-xl">
                <p className="text-white mix-blend-difference">Andranoviax</p>
              </div>
              <h1 className="text-3xl lg:text-2xl font-light text-white mix-blend-difference">
                If its hard, it is worth the price. But is it tho?
              </h1>
            </div>
          </div>
        </div>
      </motion.div>
    </>
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
