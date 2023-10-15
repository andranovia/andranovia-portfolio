import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface props {
  img: string;
  text: string;
  delay: number;

  isMobile: boolean;

}

const ProfileSkillCard = React.memo(({ img, text, delay, isMobile  }: props) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    

    const handleScroll = () => {
      const newScrollPosition = window.scrollY;

      if (newScrollPosition > scrollPosition) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setScrollPosition(newScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    const element = document.getElementById("profile-skill-card");

    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible) {
        controls.start("default");
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  }, [controls]);

  useEffect(() => {
    if (scrollDirection === "down") {
      controls.start("scrolled");
    } else {
      controls.start("default");
    }
  }, [scrollDirection, controls]);

  return (

      <motion.div
        id="profile-skill-card"
        initial={isMobile? "" : "default"}
        animate={controls}
        variants={{
          default: { x: isMobile? 0 : 650, y: isMobile? 150 : 0, opacity: 0 },
          scrolled: { x: isMobile? 0 : 0, y: isMobile? 0 : 0, opacity: 1 },
        }}
        transition={{ duration: 3, ease: "easeInOut", delay: delay }}
        className={`bg-white rounded-md shadow-ShadowCard w-16 p-2 sm:w-52 sm:p-2 flex justify-center sm:gap-4 `}
      >
        <Image src={img} alt="" width={34} height={34} className="w-6" />
        <div className="flex flex-col items-center justify-center">
        {isMobile ? "" : <h3 className="text-sm font-bold text-center text-gray-700">{text}</h3>}
        </div>
      </motion.div>

     

  );
});

export default ProfileSkillCard;
ProfileSkillCard.displayName = "ProfileSkillCard"
