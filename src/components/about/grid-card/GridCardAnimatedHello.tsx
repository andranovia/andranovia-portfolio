import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const GridCardAnimatedHello = () => {
  const textArray = [
    {
      text: "Hello",
    },
    {
      text: "Hola",
    },
    {
      text: "G'day",
    },
    {
      text: "Ni hao",
    },

    {
      text: "Bonjour",
    },
    {
      text: "Czesc",
    },
    {
      text: "Ciao",
    },
  ];
  return (
    <React.Fragment>
      <div className="bg-base h-40 1xl:w-[65%] overflow-hidden w-full rounded-lg  col-span-2 1xl:col-span-1">
        <motion.div className="relative border  rounded-md flex lg:justify-start    items-center h-full  lg:px-10 px-6 w-full text-start">
          <div className="absolute bg-gradient-to-b from-white to-transparent z-20 top-0 left-0 w-full rounded-b-md h-10"></div>
          <div className="w-2/3">
            <h1 className="font-semibold">Hi There.</h1>
            <p className="text-sm w-40">
              Programmers learn language dont they?
            </p>
          </div>

          <div className="flex justify-center absolute flex-col items-center  h-36 overflow-hidden -right-8 lg:-right-12  w-48 text-4xl">
            <Marquee
              autoFill={true}
              speed={25}
              direction="up"
              className="p-48 flex justify-start w-full   "
            >
              {textArray.map((text, index) => (
                <h1
                  key={index}
                  className="text-3xl font-thin w-32 -ml-20 text-end lg:text-start p-2 rounded-md text-primary "
                >
                  {text.text}
                </h1>
              ))}
            </Marquee>
          </div>
          <div className="absolute bg-gradient-to-b from-transparent to-white z-20 bottom-0 left-0 w-full rounded-t-md h-full"></div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default GridCardAnimatedHello;
