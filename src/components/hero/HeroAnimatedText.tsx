import React from "react";
import { motion } from "framer-motion";

interface props {
  charDelay: number;
  text: string;
}

const HeroAnimatedText = ({ charDelay, text }: props) => {
  return (
    <motion.div
      className="inline-block"
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
          className="inline-flex text-6xl  lg:text-[10rem] 2xl:text-[7rem] "
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
