import React, { useEffect, useRef} from "react";
import { useAnimation } from "framer-motion";
import { Signature } from "../animated/SignatureText";

const HeroText = () => {

  const ref = useRef(null);

  const textControls = useAnimation();

  useEffect(() => {
    textControls.start("animate");
  }, [textControls]);

  return (
    <div className="flex flex-col  md:w-fit  h-[16rem] xs:h-[18rem] md:h-[16rem] lg:h-[26rem] 1xl:h-[36.5rem] relative -rotate-[5deg] -ml-10">
      <div
        ref={ref}
        className=" h-full flex flex-col justify-center items-center"
      >
        <div className="flex flex-col gap-10">
            <Signature text="Good morrow !" fontSize={120} duration={0.2} className="relative -mt-20" color="#303841" lastSpecial={true} />
        </div>
      </div>
      <div
        ref={ref}
        className=" absolute bottom-32"
      >
        <div className="flex flex-col gap-10">
          <Signature text="Prithee, what brings thee here?" fontSize={48} duration={0.2} className="relative -mt-40" color="#303841" />
        </div>
      </div>
    </div>
  );
};

HeroText.displayName = "HeroText";

export default HeroText;
