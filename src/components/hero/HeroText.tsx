import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { spring, useVariants } from "../animated/variant/CursorVariant";
import HeroAnimatedText from "./HeroAnimatedText";
import useMobileDetect from "@/utils/useMobileDetect";



const HeroText = () => {
  const {isMobile, isTablet} = useMobileDetect();
  const [cursorVariant, setCursorVariant] = useState("default");
  const ref = useRef(null);
  const variants = useVariants(ref);

  function textHover() {
    !isMobile && !isTablet ? setCursorVariant("hover") : null;
  }

  function textHoverLeave() {
    setCursorVariant("default");
  }
  const textControls = useAnimation();

  useEffect(() => {
    textControls.start("animate");
  }, [textControls]);

  return (
    <div className="flex flex-col mx-10 my-10 lg:my-0  lg:w-fit w-72 h-full lg:h-[36.5rem]  lg:mt-10   text-white">
      <motion.div
        variants={variants}
        className="h-full lg:mx-10 bg-white mix-blend-difference absolute z-40 font-thin text-center pointer-events-none"
        animate={cursorVariant}
        transition={spring}
        initial={["default", "initial"]}
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
        className="mt-6 h-full"
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
            animate={textControls}
            className="flex flex-col lg:items-center lg:gap-8  relative z-10 mt-10  cursor-pointer"
          >
            <HeroAnimatedText charDelay={0.04}  />
       
          </motion.div>
        </div>
      </div>
    </div>
  );
};

HeroText.displayName = "HeroText";

export default HeroText;
