import React, { useCallback, useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";
import { Signature } from "../animated/SignatureText";
import { useMediaQuery } from "@uidotdev/usehooks";

const HeroText = () => {
  const ref = useRef(null);
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 499px)");

  const getFontSize = useCallback(() => {
    if (isMobile) {
      return {
        fontSize: 56,
        lastFontSize: 26,
      };
    } else if (isTablet) {
      return {
        fontSize: 86,
        lastFontSize: 36,
      };
    }
    return {
      fontSize: 120,
      lastFontSize: 48,
    };
  }, [isMobile, isTablet]);

  const textControls = useAnimation();

  useEffect(() => {
    textControls.start("animate");
  }, [textControls]);

  return (
    <div className="flex flex-col  md:w-fit h-[36.5rem] relative -rotate-[5deg] -ml-4 sm:-ml-10 mt-24 lg:mt-0 ">
      <div
        ref={ref}
        className=" h-full flex flex-col justify-center items-center"
      >
        <div className="flex flex-col gap-10">
          <Signature text="Good Morrow !" fontSize={getFontSize().fontSize} duration={0.2} className="relative -mt-20" color="#303841" lastSpecial={true} />
        </div>
      </div>
      <div
        ref={ref}
        className="absolute bottom-6 ms:bottom-8 md:bottom-24 lg:bottom-32"
      >
        <div className="flex flex-col gap-10">
          <Signature text="Prithee, what brings thee here?" fontSize={getFontSize().lastFontSize} duration={0.2} className="relative -mt-40" color="#303841" />
        </div>
      </div>
    </div>
  );
};

HeroText.displayName = "HeroText";

export default HeroText;
