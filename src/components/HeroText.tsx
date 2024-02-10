import React from "react";
import { motion } from "framer-motion";
import AnimatedTextLetter from "./TextAnimationLetter";
import AnimatedTextWords from "./textAnimationWords";
import HeroRoundedSpan from "./HeroRoundedSpan";

interface props {
  animate: any;
  textTwo: string;
  text: string;
  textThree: string;
}

const HeroText = React.memo(
  ({ animate, textTwo, text, textThree }: props) => {
    return (
      <div className="sm:mx-20 mx-10 sm:w-fit w-72   sm:-mt-20">
        <motion.div
          className="text-5xl sm:text-9xl text-center mb-10 text-gray-500"
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
          className="text-4xl sm:text-8xl mt-4  "
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
        <motion.div
          className="text-4xl sm:text-8xl  sm:flex justify-center items-center gap-4"
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
          <AnimatedTextWords text={textThree} charDelay={0.04} />
        </motion.div>

        <div className="flex justify-start sm:justify-start relative -bottom-10 sm:mt-10 ">
          <HeroRoundedSpan/>
        </div>
      </div>
    );
  }
);

HeroText.displayName = "HeroText";

export default HeroText;
