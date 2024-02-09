import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import CircleType from "circletype";
import Image from "next/image";
import HeroAppText from "./HeroAppText";
import { useResize } from "@/hooks/useResize";

function Hero() {
  const controlsTwo = useAnimation();
  const circleTypeRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useResize();

  useEffect(() => {
    const circleType = new CircleType(document.getElementById("textCircular"));

    const handleScroll = () => {
      const offset = window.scrollY * 0.4;

      if (circleType.element) {
        circleType.element.style.transform = `rotate(${offset}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controlsTwo.start("animate");
  }, [controlsTwo]);

  const animatedTextOne = "";
  const animatedTextTwo = !isMobile
    ? "We Should 🔆 Know "
    : "We Should Know Each Other🔆 ";

  const animatedTextThree = !isMobile ? "Each Other, Im Andra" : "Im Andra";

  return (
    <>
      <div className="relative flex justify-start sm:justify-start items-center h-[20vh] top-10 font-Poppins w-screen mt-[4rem]  sm:mt-[12rem]">
        <div className=" font-bold font-Poppins flex flex-col gap-20 sm:items-center justify-start text-#272828 z-1">
        <HeroAppText
            animate={controlsTwo}
            text={animatedTextOne}
            textTwo={animatedTextTwo}
            textThree={animatedTextThree}
          />
          <div className="sm:absolute  sm:top-[16vh]    sm:-right-2 flex justify-center sm:flex-col gap-[6vh] sm:-mt-20 sm:gap-10">
            <div className="rotate-0 sm:rotate-90 flex gap-4 items-center justify-center sm:mb-[7.5rem] ">
              <Image
                src={"https://img.icons8.com/ios-filled/50/search--v1.png"}
                width={32}
                height={32}
                alt=""
              />
              <p className=" font-semibold text-gray-700 sm:text-2xl sm:font-bold">
                my profile
              </p>
              <div className="bg-slate-600 w-24  sm:w-[10rem] h-0.5 rounded-md  relative sm:m-0"></div>
            </div>

            <div
              className={
                "overflow-hidden flex items-center sm:mt-10 justify-center text-center "
              }
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 1,
                }}
                className=" rounded-full bg-white  absolute flex items-center justify-center text-sm sm:text-2xl sm:-bottom-24   "
              >
                <div
                  className="circular-text"
                  ref={circleTypeRef}
                  id="textCircular"
                >
                  <div
                    className={
                      "overflow-hidden flex items-center justify-center text-center "
                    }
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        ease: "easeInOut",
                        duration: 1,
                      }}
                      className=" rounded-full  "
                    >
                      <div className="circular-text" ref={circleTypeRef}>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            ease: "easeInOut",
                            duration: 1,
                            delay: 1.8,
                          }}
                        >
                          &#8226; look &#8226; around
                        </motion.span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Hero;
