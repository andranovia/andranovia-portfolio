import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FloatingImage from "./ProfileFloatingImageApp";
import Image from "next/image";

const tailwindLogo =
  "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg";
const jsLogo =
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";
const reactLogo =
  "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png";

const ProfileImage = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimated(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handleAnimationComplete(); 
        }
      },
      {
        threshold: 0.1,
      }
    );

    const container = document.getElementById("about-container");
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  const animation = {
    scale: isAnimated ? 1.5 : 1,
    transition: {
      duration: 0.4,
    },
  };

  return (
    <div
      id="about-container"
      className="relative sm:w-[42rem] sm:left-[18rem] flex justify-center sm:justify-start items-center bg-eeeeee  "
    >
      <div className="relative w-screen flex justify-center items-center sm:justify-start   ">
        <motion.div  animate={animation}>
        <Image
          src="/img/profile1.jpg"
          alt="Profile"
          width={420}
          height={420}
          className="w-[8rem] h-auto sm:w-[12rem] rounded-full left-10 cursor-pointer "
         
        />
        </motion.div>
      </div>

      {isAnimated && (
        <FloatingImage
          divClassName="absolute w-[10rem] h-full flex flex-row justify-start  "
          imgClassName="absolute w-[6rem] sm:w-[8rem] right-48 top-32 sm:top-40 sm:mr-32 h-auto rounded-full bg-white shadow-md"
          src={tailwindLogo}
        />
      )}

      {isAnimated && (
        <FloatingImage
          divClassName="absolute w-[10rem] h-full flex flex-row justify-end    "
          imgClassName="absolute w-[4.5rem] sm:w-[5.4rem]  right-56 sm:left-36 h-auto rounded-full bg-white shadow-md"
          src={jsLogo}
        />
      )}

      {isAnimated && (
        <FloatingImage
          divClassName="absolute w-[10rem] h-full sm:top-44 flex flex-row justify-end "
          imgClassName="absolute w-[6.5rem] left-12 sm:left-20 mb-[25rem] sm:w-[8rem] sm h-auto rounded-full bg-white shadow-md"
          src={reactLogo}
        />
      )}
    </div>
  );
};

export default ProfileImage;
