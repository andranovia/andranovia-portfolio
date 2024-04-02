import { cn } from "@/utils/cn";
import useMobileDetect from "@/utils/useMobileDetect";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import ProjectLink from "./ProjectLink";

type ProjectSlideProps = {
  SlideData: {
    Img: string;
    Title: string;
    Description: string;
    SlideStyle: string;
    ProjectLink: string;
    Tech: {
      Name: string;
      TechStyle: string;
    }[];
  };
};

const ProjectSlide = ({ SlideData }: ProjectSlideProps) => {
  const isMobile = useMobileDetect();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 2]);
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scale, rotate }}
      className={`w-4/5 lg:w-[30%] p-4 h-[20rem] absolute z-40 overflow-hidden flex justify-center lg:items-start items-center lg:justify-start gap-6 -bottom-10 rounded-3xl bg-zinc-800 bg-opacity-90 backdrop-blur-lg ${SlideData.SlideStyle}`}
    >
      <motion.div
        style={{
          opacity,
          y,
        }}
        className="flex  items-start  gap-6 "
      >
        <div
          className={`w-fit h-[20rem] lg:h-full overflow-hidden rounded-lg `}
        >
          <Image
            src={SlideData.Img}
            alt="asd"
            width={200}
            height={200}
            className="lg:-top-24 relative "
          />
          <div className="absolute flex justify-center gap-2 lg:hidden bottom-4 ml-2 py-2 px-10 rounded-xl bg-primary">
            <ProjectLink LinkRef={SlideData.ProjectLink} />
          </div>
        </div>
        <div className="w-1/2 h-full  mt-4 lg:mt-2 flex flex-col items-center  lg:items-start  gap-4">
          <div className="flex items-center  gap-4">
            <Image
              src={
                "https://img.icons8.com/material-outlined/24/FFFFFF/folder-invoices--v1.png"
              }
              alt=""
              width={20}
              height={20}
              className="w-4 h-4"
            />
            <h1 className="text-white font-semibold">{SlideData.Title}</h1>
          </div>
          <p className="font-thin text-white">{SlideData.Description}</p>
          <div className="grid grid-cols-2 items-start gap-4 text-primary">
            {SlideData.Tech.map((data, index) => (
              <div
                className={cn(
                  "rounded-xl  flex justify-center gap-2  bg-white  p-2 text-[0.7rem] lg:text-base",
                  data.TechStyle
                )}
                key={index}
              >
                {data.Name}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectSlide;
