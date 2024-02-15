import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useResize } from "@/hooks/useResize";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLInputElement>(null);

  const controls = useAnimation();
  const { isMobile } = useResize();

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

  const handleHoverStart = () => {
    controls.start({ scale: 1.5, y: 40 });
  };

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
      {!isMobile ? (
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
          className="relative h-96 w-72  cursor-pointer rounded-xl bg-gradient-to-br from-gray-800 mt-20 sm:mt-0 to-gray-900"
        >
          <div
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-1 sm:inset-2 grid place-content-center rounded-xl bg-white sm:-right-10 "
          >
            <motion.div
              animate={controls}
              className="w-40 h-40 relative z-20 left-14 bottom-0 top-20 rounded-full bg-white mix-blend-difference"
            ></motion.div>
            <div className="flex flex-col justify-center items-center h-full bg-black mix-blend-difference rounded-xl">
              <div className="font-semibold flex justify-center flex-col text-start p-9 -mt-4">
                <div className="border-2 p-1 w-32 mb-4 text-gray-800 text-center bg-white rounded-xl">
                  <p className="text-white mix-blend-difference">Mark Manson</p>
                </div>
                <h1 className="text-2xl text-white mix-blend-difference">
                  Action isnt just the effect of motivation, its the cause of
                  it.
                </h1>
              </div>
              <div>{/* Additional content */}</div>
            </div>
          </div>
        </motion.div>
      ) : (
        <>
          <div className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-gray-800 mt-20 sm:mt-0 to-gray-200">
            <div className="absolute inset-1 sm:inset-2  grid place-content-center rounded-xl bg-white sm:-right-10 shadow-lg">
              <div className="flex flex-col justify-center items-center h-full">
                <div className="font-semibold flex justify-center flex-col text-start p-9 -mt-4">
                  <div className="border-2 p-1  w-32 mb-4 text-gray-700 text-center bg-yellow-400 rounded-xl">
                    <p>Mark Manson</p>
                  </div>
                  <h1>
                    &quot;Action isnt just the effect of motivation, its the
                    cause of it.&quot;
                  </h1>
                </div>
                <div className="">
                  <Image
                    src={"/img/assets/quote-image.jpg"}
                    alt=""
                    width={200}
                    height={200}
                    className="w-full sm:px-8 p-4 -mt-6 rounded-md "
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const AnimatedCard = () => {
  return (
    <div className="grid w-full  place-content-center text-slate-900">
      <TiltCard />
    </div>
  );
};

export default AnimatedCard;
