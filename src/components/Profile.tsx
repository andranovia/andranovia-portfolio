import React from "react";
import ProfileSkillAnimation from "@/components/ProfileSkillAnimation";
import ProfileImage from "@/components/ProfileImage";
import ProfileText from "@/components/ProfileText";

export default function Profile() {
  return (
    <div className="w-screen relative top-44 sm:top-0 mb-40  ">
      <div className="w-screen flex justify-center items-center  bg-f2f2f2 text-b2b2b2 sm:mt-[10rem] mt-[20rem] ">
        <div className="text-start -mt-[10rem] sm:mt-20 sm:flex flex-col gap-[2rem] sm:w-screen">
        <div className="relative flex justify-center  mx-16 lg:mx-0  gap-20  rounded-xl ">
          {<ProfileImage />}

        
            <ProfileText />
       
          </div>
          
        </div>
      </div>
    </div>
  );
}
