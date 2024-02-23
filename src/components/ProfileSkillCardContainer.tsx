import React from "react";
import ProfileSkillCard from "@/components/ProfileSkillCard";
import Marquee from "react-fast-marquee";

const ProfileSkillCardContainer = () => {
  const SkillData = [
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
    <>
      <div className="flex justify-center items-center  sm:px-0 px-14">
        <Marquee>
          <div className="flex flex-col  justify-center items-center ">
            <div className="flex  justify-center ">
              {SkillData.map((skill, index) => (
                <ProfileSkillCard
                  key={index}
                  img={skill.img}
                  text={skill.text}
                  delay={skill.delay}
                />
              ))}
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default ProfileSkillCardContainer;
ProfileSkillCardContainer.displayName = "ProfileSkillCardContainer";
