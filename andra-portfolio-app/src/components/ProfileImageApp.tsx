import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cssLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png";
const jsLogo =
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";
const reactLogo =
  "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png";

const ProfileImage = () => {
  const [isInView, setIsInView] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimated(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
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

  const floatingImageAnimation = {
    floating: {
      x: {
        type: "spring",
        from: "-100%",
        to: 0,
      },
      opacity: {
        type: "spring",
        from: 0,
        to: 1,
      },
      transition: {
        duration: 3,
        repeat: isInView ? Infinity : 0,
        repeatType: "mirror",
      },
    },
  };

  return (
    <div
      id="about-container"
      className="w-screen h-screen flex justify-center items-center bg-eeeeee "
    >
      <div className="relative w-screen h-auto flex justify-center items-center  ">
        <AnimatePresence>
          {isInView && (
            <motion.img
              src="/img/profile1.jpg"
              alt="Profile"
              className="w-[8rem] h-auto sm:w-[12rem] rounded-full left-10 cursor-pointer bg-blue-500 text-white"
              animate={animation}
              onAnimationComplete={handleAnimationComplete}
            />
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
      {isAnimated && (
        <motion.div
          className="absolute w-[10rem] h-full flex flex-row perspective-800 justify-end items-center mb-[20rem] "
          initial={{ opacity: 0, y: "150%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: "100%" }}
        >
          <motion.img
            className="absolute w-[4.5rem] sm:w-[8rem]  right-56 sm:left-40 h-auto rounded-full bg-white shadow-md"
            src={jsLogo}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ ...floatingImageAnimation, opacity: 1 }}
            style={{ padding: "2px" }}
          />
        </motion.div>
           )}
      </AnimatePresence>

      <AnimatePresence>
      {isAnimated && (
        <motion.div
          className="absolute w-[10rem] h-full flex flex-row justify-start items-center mt-350 ml-40 sm:ml-0 sm:left-64"
          initial={{ opacity: 0, y: "150%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: "100%" }}
        >
          <motion.img
            className="absolute sm:w-[4rem] w-[3.5rem] left-24 mb-40 sm:left-0   h-auto rounded-full bg-white shadow-md"
            src={cssLogo}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ ...floatingImageAnimation, opacity: 1 }}
            style={{ padding: "2px" }}
          />
        </motion.div>
      )}
      </AnimatePresence>

      <AnimatePresence>
      {isAnimated && (
        <motion.div
          className="absolute w-[10rem] h-full flex flex-row justify-start items-center"
          initial={{ opacity: 0, y: "150%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: "100%" }}
        >
          <motion.img
            className="absolute w-[6.5rem] left-14 sm:left-72 mb-[25rem] sm:w-[17rem] sm:top-64 h-auto rounded-full bg-white shadow-md"
            src={reactLogo}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ ...floatingImageAnimation, opacity: 1 }}
            style={{ padding: "2px" }}
          />
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileImage;
