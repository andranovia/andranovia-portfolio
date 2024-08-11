import React, { useEffect, useRef } from "react";
import CircleType from "circletype";
import { motion } from "framer-motion";

const HeroAnimatedRoundText = () => {
  const circleTypeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const circleType = new CircleType(document.getElementById("textCircular"));

    const handleScroll = () => {
      const offset = window.scrollY * 0.2;

      if (circleType.element) {
        circleType.element.style.transform = `rotate(${offset}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex -ml-3 lg:-m-0 justify-start items-start  font-arcane">
      {" "}
      <div
        className={
          " flex items-center top-1 lg:top-0 left-0   relative  justify-center text-center "
        }
      >
        <motion.div
          transition={{
            type: "spring",
            damping: 8,
            stiffness: 100,
            duration: 1,
          }}
          className="bg-primary p-2 bg-cover overflow-hidden  lg:right-2 z-20  w-32 h-32 md:w-[12rem] md:h-[12rem] 1xl:w-[28rem] 1xl:h-[28rem] rounded-full  flex items-center text-white justify-center text-sm sm:text-lg lg:text-2xl 1xl:text-5xl    "
        >
          <div ref={circleTypeRef} id="textCircular">
            <div className={"flex items-center justify-center w-full   "}>
              <div ref={circleTypeRef} className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 1.8,
                  }}
                  className=" p-2 w-full  z-20 relative "
                >
                  <p className="block ">
                  look -&gt;Around -&gt; <span className="lg:block hidden">look -&gt; Around -&gt; </span>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroAnimatedRoundText;
