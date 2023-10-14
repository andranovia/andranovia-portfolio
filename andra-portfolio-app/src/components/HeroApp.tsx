import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import CircleType from "circletype";
import Image from "next/image";
import HeroAppSvg from "./HeroAppSvg";
import HeroAppText from "./HeroAppText";
import HeroCardContainer from "./HeroCardContainerApp";

function HeroApp() {
  const controlsTwo = useAnimation();
  const circleTypeRef = useRef<HTMLDivElement>(null);

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

  const animatedTextOne = "ANDRA";
  const animatedTextTwo = "we should know each other👋";

  return (
    <div className="relative flex justify-center items-center h-[80vh] font-Poppins w-screen mt-[10rem]  sm:mt-[15rem]">
      <div className="mx-10   font-bold font-Poppins flex flex-col sm:items-center justify-center text-#272828 z-1">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.8,
                ease: "linear",
              },
            },
          }}
          className="text-2xl sm:text-2xl text-gray-500 mb-3 relative sm:right-28 "
        >
          <h2>Hello there, im</h2>
        </motion.div>
        <HeroAppText
          animate={controlsTwo}
          text={animatedTextOne}
          textTwo={animatedTextTwo}
        />
        <div className="absolute -right-10 top-[2vh]  sm:-right-44 sm:-bottom-[70%] flex justify-center flex-col gap-[8vh] sm:gap-48">
          <div className="rotate-90 flex gap-4 items-center justify-center sm:mb-[12rem] ">
            <Image
              src={"https://img.icons8.com/ios-filled/50/search--v1.png"}
              width={32}
              height={32}
              alt=""
            />
            <p className=" font-semibold text-gray-700 sm:text-2xl sm:font-bold">
              my profile
            </p>
          </div>
          <div className="bg-black w-24 sm:w-[38rem] h-0.5 rounded-md rotate-90 m-10 sm:m-0 relative "></div>
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
              className=" rounded-full bg-white  absolute flex items-center -bottom-8 justify-center text-sm sm:text-2xl sm:-bottom-24   "
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
                    className=" rounded-full  absolute flex items-center justify-center  mr-40  "
                  >
                    <div
                      className="circular-text"
                      ref={circleTypeRef}
                
                    >
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

        <div className="absolute w-screen  right-0">
        <div className="h-24 relative top-[22vh] sm:top-[50vh]" style={{ background: "linear-gradient(to right, #ac5bbe, #00FFFF)" }}>
           <HeroAppSvg/>
          </div>
        </div>
        <div className="sm:mt-20">
          <HeroCardContainer />
        </div>
      </div>
    </div>
  );
}

export default HeroApp;
