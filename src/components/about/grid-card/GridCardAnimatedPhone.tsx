import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import GridCardAnimatedPhoneTime from "./GridCardAnimatedPhoneTime";

const TiltCard = () => {
  const ref = useRef<HTMLInputElement>(null);

  const shapeControls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      shapeControls.start("animate");
    }
  });

  return (
    <div className="md:h-full">
      <div className="w-fit lg:w-full h-full 1xl:h-96 overflow-hidden md:h-full  bg-white bg-dot-black/[0.2] relative rounded-xl mt-10 md:mt-0 lg:mt-0 ">
        <div className="absolute pointer-events-none inset-0 z-20 flex items-center justify-center rounded-xl  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
        <motion.div className="relative h-full w-full flex flex-col">
          <motion.div
            animate={shapeControls}
            initial="initial"
            variants={{
              initial: {
                y: -60,
                color: "#FFFFFF",
              },
              animate: {
                y:  0,
                color: "#000",
                transition: {
                  duration: 0.4,
                  type: "spring",
                  delay: 1.2,
                },
              },
            }}
            className="relative w-full shadow-sm z-30 flex justify-start m-2  items-center  rounded-xl bg-white "
          >
            <h1 className="text-xl xl:text-3xl font-thin w-full p-2 xl:p-4">
              Current Daily Activity.
            </h1>
            <Image
              src={"/img/assets/andra-logo.png"}
              alt=""
              width={100}
              height={100}
              className="mx-4 lg:m-2 w-1/4 lg:w-20"
            />
          </motion.div>

          <div
            ref={ref}
            className=" w-full h-full z-10 overflow-hidden  flex justify-center  items-center "
          >
            <h1 className="text-2xl xl:text-4xl absolute text-center -mt-40 md:-mt-48 text-primary font-bold w-full">
              Take Your Time
            </h1>
            <motion.div
              animate={shapeControls}
              initial="initial"
              variants={{
                initial: {
                  y: 240,
                },
                animate: {
                  y: 0,
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    delay: 1.5,
                  },
                },
              }}
              style={{
                boxShadow:
                  "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
              }}
              className="max-w-3xl  relative top-14 md:h-auto xl:h-[18rem] xl:top-[6rem] md:w-[14rem] h-[18rem] w-[17rem] border-4 border-[#6C6C6C] p-2 bg-[#222222] rounded-[30px] shadow-2xl"
            >
              <div className="bg-gray-100 h-full w-full rounded-2xl overflow-hidden p-2">
                <GridCardAnimatedPhoneTime />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const GridCardAnimatedPhone = () => {
  return (
    <div className="w-full  text-slate-900 md:h-full">
      <TiltCard />
    </div>
  );
};

export default GridCardAnimatedPhone;
