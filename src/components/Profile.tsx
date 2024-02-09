import React from "react";
import ProfileSkillAnimation from "@/components/ProfileSkillAnimation";
import ProfileImage from "@/components/ProfileImage";
import ProfileText from "@/components/ProfileText";

export default function Profile() {

  
  return (
    <div className="w-screen relative top-44 sm:top-0 ">
      <div className="w-screen flex justify-center items-center  bg-f2f2f2 text-b2b2b2 sm:mt-[10rem] mt-[20rem] ">
        <div className="text-start -mt-[10rem] sm:mt-20 sm:grid sm:grid-cols-2 gap-[2rem] ">
            
          {<ProfileImage />}
    
          <div className="relative flex justify-center border-2 w-[40rem] rounded-xl ">
            <ProfileText />
          </div>
          <ProfileSkillAnimation/>
        </div>
      </div>
    </div>
  );
}
