import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import HeroRoundedSpan from "./HeroRoundedSpan";
import { spring, useVariants } from "../animated/variant/CursorVariant";
import HeroAnimatedText from "./HeroAnimatedText";

interface props {
  animate: any;
  textTwo: string;
  text: string;
  textThree: string;
}

const HeroText = React.memo(({ animate, textTwo, text, textThree }: props) => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const ref = useRef(null);
  const variants = useVariants(ref);

  function textHover() {
    setCursorVariant("hover");
  }

  function textHoverLeave() {
    setCursorVariant("default");
  }

  return (
    <div className="lg:-mx-10 mx-10 sm:w-fit w-72 flex flex-col lg:mt-10   text-primary">
      <div
        ref={ref}
        onMouseEnter={() => textHover()}
        onMouseLeave={() => textHoverLeave()}
      >
        <motion.div
          variants={variants}
          className="circle bg-primary font-thin text-center"
          animate={cursorVariant}
          transition={spring}
        >
          <span className="  text-white ">andranovia</span>
        </motion.div>
        <div className="flex flex-col items-start lg:gap-8  relative z-10 mt-4 cursor-pointer">
          <motion.div
            variants={{
              hidden: { opacity: 1 },
              animate: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.04,
                  duration: 1,
                },
              },
            }}
            initial="hidden"
            animate={animate}
          >
            <HeroAnimatedText text={textTwo} charDelay={0.04} />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 1 },
              animate: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.04,
                  duration: 1,
                },
              },
            }}
            initial="hidden"
            animate={animate}
          >
            <HeroAnimatedText text={textThree} charDelay={0.04} />
          </motion.div>

          <div className="flex justify-start sm:justify-start relative -bottom-10  ">
            <HeroRoundedSpan />
          </div>
        </div>
      </div>
    </div>
  );
});

HeroText.displayName = "HeroText";

export default HeroText;
