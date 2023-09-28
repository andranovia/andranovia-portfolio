import React from "react";
import dynamic from "next/dynamic";


const ProfileApptext = dynamic(() => import("@/components/ProfileTextApp"));
const ProfileImage = dynamic(() => import("@/components/ProfileImageApp"));

export default function ProfileApp() {
  return (
    <div className="w-screen ">
      <div className="w-screen flex justify-center items-center  bg-f2f2f2 text-b2b2b2 sm:mt-[10rem] mt-[20rem] ">
        <div className="text-start -mt-[10rem] sm:mt-20 sm:grid sm:grid-cols-2 gap-[2rem]">
          {<ProfileImage />}
          <div className="relative flex justify-center">
            <ProfileApptext />
          </div>
        </div>
      </div>
    </div>
  );
}
