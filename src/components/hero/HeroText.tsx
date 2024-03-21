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
            className="flex flex-col items-start lg:gap-8  relative z-10 mt-4  cursor-pointer"
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
