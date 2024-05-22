import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import AnimatedTextLetter from "../animated/AnimatedTextLetter";
import FaqCard from "./FaqCard";

const Faq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const TextControls = useAnimation();

  useEffect(() => {
    isInView && TextControls.start("animate");
  }, [isInView, TextControls]);

  const faqData = [
    {
      textHead: "How can we communicate?",
      textMsg: "Way to understand indeed.",
      textDesc: "You can always contact me at yeromrenandra07@gmail.com!",
    },
    {
      textHead: "Where am i currently work?",
      textMsg: "Work...",
      textDesc:
        "I'm currently a student, but if we can collaborate, please let me know!",
    },
    {
      textHead: "What type of projects did you do?",
      textMsg: "Anything I could.",
      textDesc:
        "From dynamic e-commerce platforms to interactive web applications.",
    },
  ];

  return (
    <>
      <div className="w-full px-[10%] flex flex-col items-center  mt-[20%] lg:mt-[10%] ">
        <div className="w-full flex flex-col-reverse  justify-start md:flex-row lg:flex-row  sm:mx-0 items-center">
          <div className="w-1/4" ref={ref}>
            <div className="flex justify-center flex-col gap-10 md:flex-row lg:flex-row items-center lg:gap-4 mt-20 md:mt-0 lg:mt-0 text-lg h-full w-fit">
              <div className="bg-gradient-to-r from-white to-black md:rotate-0 rotate-90 lg:rotate-0 w-[4rem] lg:w-[10rem] rounded-md h-1"></div>
              <Image
                src={
                  "https://img.icons8.com/ios-filled/50/000000/circled-left-2.png"
                }
                alt=""
                width={40}
                height={40}
                className="-rotate-90 lg:rotate-180 md:rotate-180"
              />
            </div>
          </div>
          <div className=" flex justify-start flex-col lg:mx-14 mx-4 gap-4  text-primary lg:w-full">
            <div className="flex justify-start w-full items-start gap-4 ">
              <div className=" font-semibold text-4xl lg:text-5xl  lg:whitespace-nowrap ">
                <motion.div
                  variants={{
                    hidden: { opacity: 1 },
                    animate: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.04,
                        duration: 1,
                      },
                    },
                  }}
                  initial="hidden"
                  animate={TextControls}
                >
                  <AnimatedTextLetter
                    text="Frequently Asked!"
                    charDelay={0.2}
                  />
                </motion.div>
              </div>
            </div>
            <h1 className=" text-lg">
              Slightly some things about me or my life.
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4  w-full mt-[20%] lg:mt-[10%]">
          {faqData.map((data, index) => (
            <React.Fragment key={index}>
              <FaqCard data={data} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
