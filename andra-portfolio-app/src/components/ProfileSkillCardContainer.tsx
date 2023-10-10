import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";

const ProfileSkillCard = dynamic(
  () => import("@/components/ProfileSkillCardApp")
);

export default function ProfileSkillCardContainer({ isMobile }: any) {
  const topSkillData = [
    {
      img: "/img/techLogo/framer-motion-Icon.svg",
      text: "Framer-motion",
      delay: 0.2,
    },
    {
      img: "/img/techLogo/Laravel-Icon.svg",
      text: "Laravel",
      delay: 0.3,
    },
    {
      img: "/img/techLogo/mysql-Icon.svg",
      text: "MySQL",
      delay: 0.4,
    },
    {
      img: "/img/techLogo/PHP-logo.svg",
      text: "PHP",
      delay: 0.5,
    },
  ];

  const bottomSkillData = [
    {
      img: "/img/techLogo/React-icon.svg",
      text: "ReactJs",
      delay: 0.5,
    },
    {
      img: "/img/techLogo/tailwindcss-Icon.svg",
      text: "Tailwind",
      delay: 0.4,
    },
    {
      img: "/img/techLogo/Typescript_Icon.svg",
      text: "Typescript",
      delay: 0.3,
    },
    {
        img: "/img/techLogo/Nextjs-logo.svg",
        text: "NextJs",
        delay: 0.2,
      },
  ];

  return (
    <div className="flex flex-col justify-center sm:ml-[10rem]">
      <div className="flex justify-center gap-4">
        {topSkillData.map((skill, index) => (
          <ProfileSkillCard
            key={index}
            img={skill.img}
            text={skill.text}
            delay={skill.delay}
            isMobile={isMobile}
          />
        ))}
      </div>
      <div className="relative sm:right-[8rem] top-6 flex justify-center gap-4">
        {bottomSkillData.map((skill, index) => (
          <ProfileSkillCard
            key={index}
            img={skill.img}
            text={skill.text}
            delay={skill.delay}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}
