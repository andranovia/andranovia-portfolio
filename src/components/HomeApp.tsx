
import React from "react";
import dynamic from "next/dynamic";


const LayoutApp = dynamic(() => import("@/layouts/LayoutApp"));
const HeroApp = dynamic(() => import("@/components/HeroApp"));
const ProfileApp = dynamic(() => import("@/components/ProfileApp"));
const MyWork = dynamic(() => import('@/components/MyWorkApp'));


export default function HomeApp() {
  return (
    
      <LayoutApp>
        <div className="relative w-full max-w-lg ">
            <div className="absolute left-[32rem] -top-20 opacity-25">
          <div className="absolute top-0 left-0 right-0 bottom-0 w-96 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-0 left-[14rem] w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl  animate-blob animation-delay-2000"></div>
          
          </div>
          <div className="relative">
            <HeroApp />
          </div>
          <ProfileApp />
          <MyWork />
        </div>
      </LayoutApp>
    
  );
}
