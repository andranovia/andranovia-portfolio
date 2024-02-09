import React from "react";
import AnimatedCard from "./AnimatedCard";
import Image from "next/image";
import { motion } from "framer-motion";

const GridCard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen    ">
      <div className="font-bold text-2xl sm:text-5xl w-52 sm:w-[30rem] sm:text-center">
        <h1>Wait, did we met before? Your look familliar!</h1>
      </div>
      <div className="container p-6 sm:grid grid-cols-2 mt-4 sm:mt-32">
        <div className="flex flex-col justify-center sm:w-[50rem] items-center gap-36 sm:gap-6">
          <div className="w-[38rem]  h-[11.5rem] rounded-xl">
            <div className="font-semibold text-2xl w-[38rem] rounded-xl items-center flex flex-col sm:flex-row justify-start  text-center sm:text-start gap-4 pt-4">
              <h1 className="w-1/2 rounded-lg border-gray-800 border-2 p-7 sm:p-4">
                What about <br className="hidden sm:block" /> some talk in <br className="hidden sm:block"/> my social app👏
              </h1>
              <div className="flex justify-center flex-col items-center border-2 w-1/2 py-6 rounded-lg bg-gray-800">
                <Image
                  src={"/img/folder-image.png"}
                  alt=""
                  width={180}
                  height={180}
                  className="w-32 rounded-xl opacity-60"
                />

                <motion.div
                  whileHover={{ y: 10, rotateX: 40 }}
                  className="w-28  h-20 -mt-20 rounded-md relative bg-yellow-400 z-20 text-gray-100 text-center"
                >
                  
                </motion.div>

              
              </div>
            </div>
          </div>

          <div className="sm:w-[38rem] w-[19rem] m border-2 h-[11.5rem]   rounded-lg bg-white"></div>
        </div>
        <AnimatedCard />
      </div>
    </div>
  );
};
export default GridCard;
