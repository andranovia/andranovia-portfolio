import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

interface props {
  img: string;
  text: string;
  delay: number;
  className?: string;
}

const SkillMarqueeItem = ({ img, text, className }: props) => {
  return (
    <>
      <div
        id="profile-skill-card"
        className={cn(` mx-2 rounded-md bg-white  p-2 lg:grayscale hover:grayscale-0 cursor-pointer  w-28 lg:w-52 sm:p-4 flex justify-center sm:gap-4 ${className}`)}
      >
        <Image
          src={img}
          alt=""
          width={54}
          height={54}
          className="w-8 h-8 sm:w-11 "
        />
        <div className="lg:flex flex-col items-center justify-center hidden">
          <h3 className=" text-sm font-bold text-center ">
            {text}
          </h3>
        </div>
      </div>
    </>
  );
};

export default SkillMarqueeItem;
SkillMarqueeItem.displayName = "SkillMarqueeItem";
