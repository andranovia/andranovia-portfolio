import React from "react";
import { motion } from "framer-motion";
import HeroAnimatedRoundText from "./HeroAnimatedRoundText";

interface props {
  charDelay: number;
  text: string;
}

const HeroAnimatedText = React.memo(({ charDelay, text }: props) => {
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
          className="inline-flex text-5xl  lg:text-[8rem] 2xl:text-[7rem] "
        >
          {word !== "arrow" && word}
          {word === "arrow" && (
            <div className="lg:relative  right-4 lg:-right-2  lg:flex-col lg:gap-10">
              <HeroAnimatedRoundText />
            </div>
          )}

          {wordIndex < text.split(" ").length - 1 && <>&nbsp;</>}
        </motion.div>
      ))}
    </motion.div>
  );
});

export default HeroAnimatedText;
HeroAnimatedText.displayName = "HeroAnimatedText";
