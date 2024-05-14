import React from "react";
import { motion } from "framer-motion";

interface props {
  charDelay: number;
}

const HeroAnimatedText = ({ charDelay }: props) => {

  const text = 'We should know each other'


  return (
    <motion.div
      className="lg:w-[60rem] md:w-[40rem] space-y-4 lg:text-center"
      variants={{
        hidden: { opacity: 0, y: 60 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 8,
            stiffness: 100,
            staggerChildren: charDelay,
            duration: 1,
          },
        },
      }}
    >
      {text.split(" ").map((word, wordIndex) => (
        <motion.div
          key={wordIndex}
          variants={{
            hidden: { opacity: 0, y: 60 },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 8,
                stiffness: 100,
              },
            },
          }}
          className="inline-block text-6xl md:text-[6rem]  lg:text-[10rem] 2xl:text-[7rem] "
        >
          {word}
          {wordIndex < text.split(" ").length - 1 && <>&nbsp;</>}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroAnimatedText;
HeroAnimatedText.displayName = "HeroAnimatedText";
