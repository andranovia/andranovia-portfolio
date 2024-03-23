import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import HeroRoundedSpan from "./HeroRoundedSpan";
import { spring, useVariants } from "../animated/variant/CursorVariant";
import HeroAnimatedText from "./HeroAnimatedText";

interface props {
  textTwo: string;
  textThree: string;
}

const HeroText = React.memo(({ textTwo, textThree }: props) => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const ref = useRef(null);
  const variants = useVariants(ref);

  function textHover() {
    setCursorVariant("hover");
  }

  function textHoverLeave() {
    setCursorVariant("default");
  }
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <div className="lg:-mx-10 mx-10  lg:w-fit w-72 lg:h-[35rem]  lg:mt-10   text-primary">
      <motion.div
        variants={variants}
        className=" h-full bg-white mix-blend-difference absolute z-40 font-thin text-center pointer-events-none"
        animate={cursorVariant}
        transition={spring}
      >
        <motion.div
          animate={{
            y: cursorVariant === "hover" ? 80 : 0,
          }}
          className=" text-black h-full "
        >
          andranovia
        </motion.div>
      </motion.div>

      <div
        ref={ref}
        onMouseEnter={() => textHover()}
        onMouseLeave={() => textHoverLeave()}
      >
        <div className="flex flex-col gap-10">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
              },
              animate: {
                opacity: 1,
              },
            }}
            initial="hidden"
            animate={controls}
            className="flex flex-col items-start lg:gap-8  relative z-10 mt-10  cursor-pointer"
          >
            <HeroAnimatedText charDelay={0.04} text={textTwo} />
            <HeroAnimatedText charDelay={0.04} text={textThree} />
          </motion.div>

          <div className="flex justify-start sm:justify-start relative ">
            <HeroRoundedSpan />
          </div>
        </div>
      </div>
    </div>
  );
});

HeroText.displayName = "HeroText";

export default HeroText;
