import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import CircleType from "circletype";

const HeroAppText = dynamic(() => import("./HeroAppText"));
const HeroCardContainer = dynamic(() => import("./HeroCardContainer"));

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
    <div className="relative flex justify-center items-center h-[80vh] font-Poppins w-screen  sm:mt-[29vh]">
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
                ease: "linear"
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
        <div className="absolute -right-1 top-[20vh] sm:-right-20 sm:-bottom-[90%] flex justify-center flex-col gap-[8vh] sm:gap-32">
          <p className="rotate-90 font-semibold text-gray-700 sm:text-2xl sm:font-bold">my profile</p>
          <div className="bg-black w-24 sm:w-[42rem] h-0.5 rounded-md rotate-90 "></div>
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
              className=" rounded-full bg-white  absolute flex items-center -bottom-14 justify-center text-sm sm:text-2xl sm:-bottom-5   "
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
                      id="textCircular"
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
                        &#8226; look &#8226;
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          ease: "easeInOut",
                          duration: 1,
                          delay: 1.8,
                        }}
                      >
                        around
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute w-screen  right-0">
          <div className="bg-[#1ab8f2] h-24 relative top-[22vh] sm:top-[50vh] ">
            <div className="absolute w-screen -bottom-20 sm:-top-[43vh]">
              <div className="sm:mt-30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 500">
                  <path
                    fill="#1ab8f2"
                    fill-opacity="1"
                    d="M0,96L12.6,122.7C25.3,149,51,203,76,197.3C101.1,192,126,128,152,128C176.8,128,202,192,227,229.3C252.6,267,278,277,303,277.3C328.4,277,354,267,379,240C404.2,213,429,171,455,165.3C480,160,505,192,531,192C555.8,192,581,160,606,149.3C631.6,139,657,149,682,165.3C707.4,181,733,203,758,213.3C783.2,224,808,224,834,192C858.9,160,884,96,909,64C934.7,32,960,32,985,42.7C1010.5,53,1036,75,1061,85.3C1086.3,96,1112,96,1137,122.7C1162.1,149,1187,203,1213,197.3C1237.9,192,1263,128,1288,117.3C1313.7,107,1339,149,1364,154.7C1389.5,160,1415,128,1427,112L1440,96L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="sm:absolute w-screen sm:-mt-40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 420"
                  className=""
                >
                  <path
                    fill="#1ab8f2"
                    fill-opacity="1"
                    d="M0,96L12.6,122.7C25.3,149,51,203,76,197.3C101.1,192,126,128,152,128C176.8,128,202,192,227,229.3C252.6,267,278,277,303,277.3C328.4,277,354,267,379,240C404.2,213,429,171,455,165.3C480,160,505,192,531,192C555.8,192,581,160,606,149.3C631.6,139,657,149,682,165.3C707.4,181,733,203,758,213.3C783.2,224,808,224,834,192C858.9,160,884,96,909,64C934.7,32,960,32,985,42.7C1010.5,53,1036,75,1061,85.3C1086.3,96,1112,96,1137,122.7C1162.1,149,1187,203,1213,197.3C1237.9,192,1263,128,1288,117.3C1313.7,107,1339,149,1364,154.7C1389.5,160,1415,128,1427,112L1440,96L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
                  ></path>
                </svg>
              </div>
            </div>
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
