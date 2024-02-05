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
    <div className="relative flex justify-center items-center h-[20vh]  font-Poppins w-screen mt-[4rem]  sm:mt-[15rem]">
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
        <div className="absolute -right-16 top-[5vh] sm:top-10 sm:-right-2 flex justify-center flex-col gap-[8vh] sm:gap-10">
          <div className="rotate-90 flex gap-4 items-center justify-center sm:mb-[7.5rem] ">
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
              "overflow-hidden flex items-center sm:mt-10 mt-20 justify-center text-center "
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
        <div className="h-24 relative top-[15vh] sm:top-[50vh]" >
           <HeroAppSvg/>
          </div>
        </div>
        <div className="sm:mt-20">
         
        </div>
      </div>
    </div>
  );
}

export default HeroApp;
