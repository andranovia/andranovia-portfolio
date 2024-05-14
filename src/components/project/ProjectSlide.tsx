import { cn } from "@/utils/cn";
import useMobileDetect from "@/utils/useMobileDetect";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import ProjectLink from "./ProjectLink";

type ProjectSlideProps = {
  SlideData: {
    Img: string;
    Title: string;
    Description: string;
    SlideStyle: string;
    ProjectLink: string;
    ProjectHost?: string;
    Tech: {
      Name: string;
      TechStyle: string;
      TechIcons: string;
    }[];
  };
};

const ProjectSlide = ({ SlideData }: ProjectSlideProps) => {
  const {isMobile, isTablet} = useMobileDetect();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, isMobile && isTablet  ? 0 : 0]);
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
        className="flex  items-start lg:items-start md:items-center lg:justify-start md:justify-center lg:gap-6 md:gap-20  gap-6 "
      >
        <div
          className={`w-fit h-full lg:h-full md:h-[30rem] overflow-hidden rounded-lg flex justify-center  flex-col items-center `}
        >
          <Image
            src={SlideData.Img}
            alt='slide-img'
            width={200}
            height={200}
            className="lg:-top-24 relative h-[24rem] lg:h-full md:h-full md:top-20 object-cover"
          />
          <div className="w-2/3 relative md:-top-32 -top-20 z-20  flex justify-center gap-2  lg:hidden py-2    rounded-xl bg-primary">
            <ProjectLink LinkRef={SlideData.ProjectLink} HostRef={SlideData.ProjectHost}/>
          </div>
        </div>
        <div className="w-1/2 h-full relative md:mt-0 mt-14 lg:mt-2 flex flex-col items-start  gap-4">
          <div className="flex items-center gap-2  lg:gap-4 ">
            <Image
              src={
                "https://img.icons8.com/material-outlined/24/FFFFFF/folder-invoices--v1.png"
              }
              alt=""
              width={20}
              height={20}
              className="w-4 h-4"
            />
            <h1 className="text-white font-semibold text-xs lg:text-base md:text-base">
              {SlideData.Title}
            </h1>
          </div>
          <p className="font-thin text-white md:w-52">{SlideData.Description}</p>
          <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-4 items-start gap-4 md:mt-4 lg:mt-0 text-primary">
            {SlideData.Tech.map((data, index) => (
              <div
                className={cn(
                  "rounded-xl  flex justify-center gap-2  bg-white  p-2 ",
                  data.TechStyle
                )}
                key={index}
              >
                <Image
                  src={data.TechIcons}
                  alt="tech-icons"
                  width={40}
                  height={40}
                  className="w-6 h-4 md:w-8 md:h-6 block lg:hidden"
                />
                <h2 className="hidden lg:block text-[0.7rem] lg:text-base">
                  {" "}
                  {data.Name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectSlide;
