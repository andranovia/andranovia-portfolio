import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLInputElement>(null);

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

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
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
      whileHover={{ scale: 1.05 }} 
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-gray-800 to-gray-200"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-2 grid place-content-center rounded-xl bg-white -right-10 shadow-lg"
      >
        <div className="flex flex-col justify-center items-center h-full">
          <div className="font-semibold flex justify-center flex-col text-start p-9 -mt-8">
            <div className="border-2 p-1  w-32 mb-4 text-gray-700 text-center bg-yellow-400 rounded-xl">
              <p>Mark Manson</p>
            </div>
            <h1 >
              &quot;Action isnt just the effect of motivation, its the cause of
              it.&quot;
            </h1>
          </div>
          <div className="">
          <Image
            src={"/img/heroImage.jpg"}
            alt=""
            width={200}
            height={200}
            className="w-full rounded-md "
          />
          </div>
        </div>
      </div>
    </motion.div>
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
