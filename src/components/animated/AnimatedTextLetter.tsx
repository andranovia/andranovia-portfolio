import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface props {
  text: string;
  charDelay: number;
}

const AnimatedTextLetter = ({ text, charDelay }: props) => {
  const textControls = useAnimation();


  useEffect(() => {
    textControls.start("animate");
  }, [textControls]);

  return (
    <motion.div
      className="inline-block"
      variants={{
        hidden: { opacity: 0, y: 20 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 8,
            stiffness: 100,
            staggerChildren: charDelay,
          },
        },
      }}
    >
      {text.split("").map((char, charIndex) => (
        <motion.span
          key={charIndex}
          variants={{
            hidden: { opacity: 0, y: 50 },
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
          className="inline-block   lg:w-[1.8ch]  font-thin"
        >
          {char}
          <span className="lg:hidden">&nbsp;</span>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextLetter;
AnimatedTextLetter.displayName = "AnimatedTextLetter";
