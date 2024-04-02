import React from "react";
import Marquee from "react-fast-marquee";
import SkillMarqueeItem from "@/components/marquee/skill-marquee/SkillMarqueeItem";
import Image from "next/image";

const SkillMarquee = () => {
  const skillDataRowOne = [
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

  const skillDataRowTwo = [
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
      img: "/img/techLogo/nextjs-icon.png",
      text: "NextJs",
      delay: 0.2,
    },
  ];

  return (
    <>
      <div className="relative  w-screen my-20 lg:my-32">
        <div className="flex flex-col gap-10 justify-center items-center ">
          <Marquee autoFill={true} speed={10}>
            <div className="flex flex-col  justify-center items-center ">
              <div className="flex  justify-center ">
                {skillDataRowOne.map((skill, index) => (
                  <div key={index} className="flex justify-center items-center">
                    <SkillMarqueeItem
                      key={index}
                      img={skill.img}
                      text={skill.text}
                      delay={skill.delay}
                    />
                    <Image
                      src={"/img/assets/star-image.png"}
                      alt="star"
                      width={40}
                      height={40}
                      className="w-8 h-8"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Marquee>
          <Marquee autoFill={true} direction="right" speed={10}>
            <div className="flex flex-col  justify-center items-center ">
              <div className="flex  justify-center ">
                {skillDataRowTwo.map((skill, index) => (
                  <div key={index} className="flex justify-center items-center">
                    <SkillMarqueeItem
                      key={index}
                      img={skill.img}
                      text={skill.text}
                      delay={skill.delay}
                    />
                    <Image
                      src={"/img/assets/star-image.png"}
                      alt="star"
                      width={40}
                      height={40}
                      className="w-8 h-8"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default SkillMarquee;
SkillMarquee.displayName = "SkillMarquee";
