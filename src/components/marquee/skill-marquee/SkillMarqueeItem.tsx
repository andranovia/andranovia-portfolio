import React from "react";
import Image from "next/image";

interface props {
  img: string;
  text: string;
  delay: number;
}

const SkillMarqueeItem = ({ img, text }: props) => {
  return (
    <>
      <div
        id="profile-skill-card"
        className={` mx-2 rounded-md w-16 p-2 grayscale hover:grayscale-0 cursor-pointer  sm:w-52 sm:p-4 flex justify-center sm:gap-4 `}
      >
        <Image
          src={img}
          alt=""
          width={54}
          height={54}
          className="w-8 h-8 sm:w-11 "
        />
        <div className="flex flex-col items-center justify-center">
          <h3 className="hidden lg:block text-sm font-bold text-center ">
            {text}
          </h3>
        </div>
      </div>
    </>
  );
};

export default SkillMarqueeItem;
SkillMarqueeItem.displayName = "SkillMarqueeItem";
