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
    <div className="flex flex-col mx-10 mb-10 lg:mb-0  lg:w-fit w-72 h-full lg:h-[36.5rem]  lg:mt-10    text-white">
    

      <div
        ref={ref}
        onMouseEnter={() => textHover()}
        onMouseLeave={() => textHoverLeave()}
        className="lg:mt-6 h-full"
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
            className="flex flex-col  lg:items-center lg:gap-8 z-40  relative  mt-10  "
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
