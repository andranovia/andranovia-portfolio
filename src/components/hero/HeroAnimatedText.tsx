import React from "react";
import { motion } from "framer-motion";

interface props {
  charDelay: number;
}

const HeroAnimatedText = ({ charDelay }: props) => {

  const text = 'We should know each other'


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
          className="inline-block text-[44px] leading-10 xs:text-[3.2rem] xs:leading-[3.2rem] sm:text-6xl text-[#201D30] lg:text-[6rem] font-arcane 1xl:text-[10rem]  "
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
