import React from "react";
import AnimatedCard from "./AnimatedCard";
import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import ProfileSkillAnimation from "./ProfileSkillAnimation";

const textArray = [
  {
    text: "Work",
  },
  {
    text: "Travail",
  },
  {
    text: "Werk",
  },
  {
    text: "일하다",
  },
  {
    text: "Lavoro",
  },
];

const GridCard = () => {
  return (
    <div className="flex flex-col sm:items-center sm:justify-center w-screen  ">
      <div className=" flex flex-col justify-start lg:flex-row  sm:mx-0 gap-8 items-center lg:w-[48rem]">
        <div className="w-1/4">
          <div className="flex justify-center items-center gap-4 text-lg h-full w-fit">
            <div className="bg-black w-[4rem] hidden lg:block lg:w-[10rem] rounded-md h-1"></div>
          </div>
        </div>
        <div className=" flex justify-start flex-col mx-14 sm:mx-0 gap-4 items-center lg:w-2/4">
          <div className="flex justify-center w-full items-center gap-4">
          
            <h1 className="font-semibold text-2xl  sm:text-5xl">
              Somethin more about me!
            </h1>
            <div className="bg-black w-[8rem] block lg:hidden rounded-md h-1"></div>
          </div>
          <h1 className=" text-lg">
            Here, you can see my things that i really like or some of my
            information.
          </h1>
        </div>
      </div>
      <div className="container p-6 sm:w-[65rem] sm:flex justify-center items-center gap-10  mt-4 sm:mt-32">
        <div className="flex flex-col justify-center sm:w-full sm:items-end items-center gap-36 sm:gap-6">
          <div className="w-[38rem]  h-[11.5rem] rounded-xl">
            <div className="font-semibold text-2xl w-[38rem] rounded-xl items-center flex flex-col sm:flex-row justify-start  text-center sm:text-start gap-4 pt-4">
              <div className="flex justify-center items-center border-2 border-gray-900 h-32 overflow-hidden   w-1/2 rounded-lg  ">
                <motion.div className="font-normal  h-32 text-4xl w-full">
                  
             
                  <div className=" flex justify-end items-end rotate-6 w-full ">
                
                    <Marquee
                      autoFill={true}
                      direction="up"
                      className="p-20 flex justify-start h-20 text-start font-bold"
                    >
                      {textArray.map((text, index) => (
                        <h1
                          key={index}
                          className="leading-snug -mx-4 bg-black   p-2 rounded-md text-white  "
                        >
                          {text.text}
                        </h1>
                      ))}
                    </Marquee>
                  </div>
                </motion.div>
              </div>

              <div className="flex justify-center flex-col items-center border-2 w-1/2 py-6 rounded-lg bg-black">
                <Image
                  src={"/img/assets/folder-image.png"}
                  alt=""
                  width={180}
                  height={180}
                  className="w-32 rounded-xl opacity-60"
                />

                <motion.div
                  whileHover={{ y: 10, rotateX: 40 }}
                  className="w-28  h-20 -mt-20 rounded-md relative bg-yellow-400 z-20 text-gray-100 text-center"
                ></motion.div>
              </div>
            </div>
          </div>

          <div className="sm:w-[38rem] w-[19rem] bg-cover flex flex-col justify-end border-2  h-[11.5rem] rounded-lg bg-white">
            <div className="flex p-4 ">
              <div className="text-lg font-bold text-black ">
                What Did I Make ?{" "}
                <span className="text-base opacity-60">
                  Ecommerce, dashboard, portfolio, and more..
                </span>
              </div>
            </div>
          </div>
        </div>
        <AnimatedCard />
  
      </div>
      
    </div>
  );
};
export default GridCard;
