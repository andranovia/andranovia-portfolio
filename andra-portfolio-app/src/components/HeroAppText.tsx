import React from "react";
import { motion } from "framer-motion";

import AnimatedTextLetter from "./TextAnimationLetter";
import AnimatedTextWords from "./textAnimationWords";

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
