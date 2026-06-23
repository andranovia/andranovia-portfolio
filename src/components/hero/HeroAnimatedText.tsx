import React from "react";
import { motion } from "framer-motion";

interface props {
  charDelay: number;
  text: string;
  textStyle: string;  
}

const HeroAnimatedText = ({ charDelay, text, textStyle }: props) => {


  return (
    <motion.div
      className="1xl:w-[72rem] lg:w-[44rem] md:w-[30rem] sm:max-w-[321px] md:max-w-fit  space-y-4 md:text-center"
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
            duration: 4,
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
          className={textStyle}
        >
          {word === "!" ? (
            <span className="text-special">{word}</span>
          ) : (
          word
          )}
          {wordIndex < text.split(" ").length - 1 && <>&nbsp;</>}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroAnimatedText;
HeroAnimatedText.displayName = "HeroAnimatedText";
