import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const GridCardAnimatedPhoneTime = () => {
  const texts = ["06:00", "15:00", "17:00", "21:00"];
  const notification = [
    "school🎒",
    "we go gym💪",
    "work and learn🧑‍💻",
    "sleep🛌",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [previousTextIndex, setPreviousTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousTextIndex(currentTextIndex);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentTextIndex, texts.length]);

  const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
  };

  const Time = () => {
    return (
      <div className="w-full h-20 overflow-hidden p-2 rounded-md flex flex-col justify-center items-center text-gray-950">
        {previousTextIndex !== null && (
          <motion.div
            key={`time-prev-${texts[previousTextIndex]}`}
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: -100, opacity: 1 }}
            transition={transition}
            className="-mt-10"
          >
            <p className="font-thin text-5xl">{texts[previousTextIndex]}</p>
          </motion.div>
        )}
        <motion.div
          key={`time-current-${texts[currentTextIndex]}`}
          initial={{ y: 100, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={transition}
        >
          <p className="font-thin text-5xl">{texts[currentTextIndex]}</p>
        </motion.div>
      </div>
    );
  };

  const Notification = () => {
    return (
      <>
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 30, opacity: 0 }}
          key={`notification-prev-${notification[previousTextIndex]}`}
          transition={transition}
          className="absolute w-[90%] bottom-0 h-12 overflow-hidden flex justify-start gap-4 px-4 items-center bg-primary  rounded-md -mt-6 text-white"
        >
          <Image
            src={
              "https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/FFFFFF/external-notification-bell-user-interface-anggara-basic-outline-anggara-putra.png"
            }
            alt="notification"
            width={20}
            height={40}
            className="w-4 h-4"
          />
          <p className="font-thin text-xs">{notification[previousTextIndex]}</p>
        </motion.div>
        <AnimatePresence>
          <motion.div
            key={`notification-current-${notification[currentTextIndex]}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
            exit={{ y: 30, opacity: 0 }}
            transition={transition}
            className="absolute w-[90%] bottom-0 h-12 overflow-hidden flex justify-start px-4 gap-4 items-center bg-primary  rounded-md -mt-6 text-white"
          >
            <Image
              src={
                "https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/FFFFFF/external-notification-bell-user-interface-anggara-basic-outline-anggara-putra.png"
              }
              alt="notification"
              width={20}
              height={40}
              className="w-4 h-4"
            />
            <p className="font-thin text-xs bg-primary">
              {notification[currentTextIndex]}
            </p>
          </motion.div>
        </AnimatePresence>
      </>
    );
  };

  return (
    <div className=" w-full bg-white overflow-hidden pb-10">
      <div className="relative flex flex-col items-center pb-16  p-4">
        {Time()}
        {Notification()}
      </div>
    </div>
  );
};

export default GridCardAnimatedPhoneTime;
