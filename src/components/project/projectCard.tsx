import { cn } from "@/utils/cn";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

type ProjectCardProps = {
  CardData: {
    Img: string;
    Title: string;
    Description: string;
    CardStyle: string;
    Tech: {
      Name: string;
      TechStyle: string;
    }[];
  };
};

const ProjectCard = ({ CardData }: ProjectCardProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
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
      className={`w-4/5 lg:w-[30%] p-4 h-[20rem] absolute z-40 overflow-hidden flex justify-center lg:items-start items-center lg:justify-start gap-6 -bottom-10 rounded-3xl bg-zinc-800 bg-opacity-90 backdrop-blur-lg ${CardData.CardStyle}`}
    >
      <motion.div
        style={{
          opacity,
          y,
        }}
        className="flex  lg:items-start items-center gap-6 "
      >
        <div className={`w-fit h-full overflow-hidden rounded-lg `}>
          <Image
            src={CardData.Img}
            alt="asd"
            width={200}
            height={200}
            className="lg:-top-24 relative "
          />
        </div>
        <div className="w-1/2 h-full   lg:mt-2 flex flex-col items-center  lg:items-start  gap-4">
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
            <h1 className="text-white font-semibold">{CardData.Title}</h1>
          </div>
          <p className="font-thin text-white">{CardData.Description}</p>
          <div className="grid grid-cols-2 items-start gap-4 text-primary">
            {CardData.Tech.map((data, index) => (
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

export default ProjectCard;
