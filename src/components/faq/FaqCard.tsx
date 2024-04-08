import React, { useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

interface FaqCardProps {
  data: {
    textHead: string;
    textMsg: string;
    textDesc: string;
  };
}

const FaqCard = ({ data }: FaqCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverControls = useAnimation();

  const handleHover = () => {
    hoverControls.start("animate");
    setTimeout(() => {
      setIsHovered(true);
    }, 100);
  };

  const handleLeave = () => {
    hoverControls.start("initial");
    setTimeout(() => {
      setIsHovered(false);
    }, 100);
  };

  const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
  };

  return (
    <div
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleLeave()}
      className="w-full h-32  overflow-hidden   flex lg:flex-row flex-col justify-center lg:justify-between items-center  relative   cursor-pointer"
    >
      <motion.div
        animate={hoverControls}
        initial={"initial"}
        variants={{
          initial: {
            color: "#000",
          },
          animate: {
            color: "#FFFFFF",
          },
        }}
        className=" w-full px-10 flex lg:flex-row flex-col justify-between   lg:items-center relative z-40"
      >
        <h1
          className={`lg:text-2xl text-black font-thin text-lg ${
            isHovered ? "text-transparent lg:text-white" : "text-black "
          } `}
        >
          {data.textHead}
        </h1>
        <div className="flex justify-between lg:justify-center items-center gap-4">
          <motion.p
            animate={hoverControls}
            initial={"initial"}
            variants={{
              initial: {
                y: 0,
              },
              animate: {
                y: -120,
              },
            }}
            className=" font-semibold lg:text-3xl"
            transition={transition}
          >
            {data.textMsg}
          </motion.p>
          <motion.div
            animate={hoverControls}
            initial={"initial"}
            variants={{
              initial: {
                rotate: 0,
              },
              animate: {
                rotate: 90,
              },
            }}
          >
            <Image
              src={
                isHovered
                  ? "https://img.icons8.com/ios-filled/50/FFFFFF/long-arrow-right.png"
                  : "https://img.icons8.com/ios-filled/50/long-arrow-right.png"
              }
              alt=""
              width={20}
              height={20}
              className="w-4 h-4 lg:w-6 lg:h-6  -rotate-45"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={hoverControls}
        initial={"initial"}
        variants={{
          initial: {
            y: 140,
            opacity: 0,
          },
          animate: {
            y: -0,
            opacity: 1,
          },
        }}
        transition={transition}
        className="w-full h-32 absolute flex justify-end px-10 lg:pr-20 items-center text-white bg-primary"
      >
        {" "}
        <p className="lg:w-1/2 text-sm lg:text-base"> {data.textDesc}</p>
      </motion.div>
    </div>
  );
};

export default FaqCard;
