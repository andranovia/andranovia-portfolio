import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const AnimatedTextLetter = dynamic(() => import('./TextAnimationLetter'));
const AnimatedTextWords = dynamic(() => import('./textAnimationWords'));


interface props {
  animate: any;
  textTwo: string;
  text: string;
}

const HeroAppText = ({ animate, textTwo, text }: props) => {
  return (
    <div className="sm:text-center ">
      <motion.div
        className="text-5xl sm:text-9xl text-gray-800"
        variants={{
          hidden: { opacity: 1 },
          animate: {
            opacity: 1,
            transition: {
              staggerChildren: 0.04,
            },
          },
        }}
        initial="hidden"
        animate={animate}
      >
        <AnimatedTextLetter text={text} charDelay={0.04} />
      </motion.div>
      <div className="flex justify-start sm:justify-center">
        <motion.div
          className="bg-black sm:bg-gradient-to-r from-cyan-400 to-cyan-200 w-40 sm:w-[30rem] h-1 sm:mt-14 mt-4 rounded-md"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: 1,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            },
          }}
        />
      </div>
      <motion.div
        className="text-2xl sm:text-6xl text-gray-500 mt-4"
        variants={{
          hidden: { opacity: 1 },
          animate: {
            opacity: 1,
            transition: {
              staggerChildren: 0.04,
            },
          },
        }}
        initial="hidden"
        animate={animate}
      >
        <AnimatedTextWords text={textTwo} charDelay={0.04} />
      </motion.div>
    </div>
  );
};

export default HeroAppText;
