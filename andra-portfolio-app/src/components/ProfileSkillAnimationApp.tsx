import React, { useState } from "react";
import ProfileSkillCard from "./ProfileSkillCardApp";

export default function ProfileSkillAnimation() {
  const [isAnimating, setIsAnimating] = useState(false);


  return (
    <div className="w-screen h-[30vh] mt-20">
     
      <div className="flex flex-col justify-center">
        <div className="flex justify-center gap-4">
          <ProfileSkillCard
            img={"/img/techLogo/framer-motion-Icon.svg"}
            text={"Framer-motion"}
            delay={0.2}
            isAnimating={isAnimating}
     
          />
          <ProfileSkillCard
            img={"/img/techLogo/Laravel-Icon.svg"}
            text={"Laravel"}
            delay={0.3}
            isAnimating={isAnimating}
       
          />
          <ProfileSkillCard
            img={"/img/techLogo/mysql-Icon.svg"}
            text={"MySQL"}
            delay={0.4}
            isAnimating={isAnimating}
    
          />
          <ProfileSkillCard
            img={"/img/techLogo/PHP-logo.svg"}
            text={"PHP"}
            delay={0.5}
            isAnimating={isAnimating}
    
          />
        </div>
        <div className="relative right-[10rem] top-6 flex justify-center gap-4">
          <ProfileSkillCard
            img={"/img/techLogo/React-icon.svg"}
            text={"ReactJs"}
            delay={0.5}
            isAnimating={isAnimating}
      
          />
          <ProfileSkillCard
            img={"/img/techLogo/tailwindcss-Icon.svg"}
            text={"Tailwind"}
            delay={0.4}
            isAnimating={isAnimating}
       
          />
          <ProfileSkillCard
            img={"/img/techLogo/Typescript_Icon.svg"}
            text={"Typescript"}
            delay={0.3}
            isAnimating={isAnimating}
      
          />
        </div>
      </div>
    </div>
  );
}
