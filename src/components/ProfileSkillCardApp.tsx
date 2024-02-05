import { motion, useAnimation } from "framer-motion";
import React from "react";
import Image from "next/image";

interface props {
  img: string;
  text: string;
  delay: number;
  isMobile: boolean;
}

const ProfileSkillCard = React.memo(({ img, text, delay, isMobile }: props) => {
 
  return (
 
    <div
      id="profile-skill-card"
      className={`bg-white rounded-md w-16 p-2  sm:w-52 sm:p-2 flex justify-center sm:gap-4 `}
    >
      <Image src={img} alt="" width={54} height={54} className="w-11" />
      <div className="flex flex-col items-center justify-center">
        {isMobile ? (
          ""
        ) : (
          <h3 className="text-sm font-bold text-center text-gray-700">
            {text}
          </h3>
        )}
      </div>
    </div>

  
  

  );
});

export default ProfileSkillCard;
ProfileSkillCard.displayName = "ProfileSkillCard";
