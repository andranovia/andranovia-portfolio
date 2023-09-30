import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";


interface props{
    text: string;
    charDelay: number;
}


const AnimatedTextWords = ({ text, charDelay }:props) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

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
      {text.split(" ").map((word, wordIndex) => (
        <motion.div
          key={wordIndex}
          variants={{
            hidden: { opacity: 0, y: 20 },
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
          className="inline-block"
        >
          {word}
          {wordIndex < text.split(" ").length - 1 && <>&nbsp;</>}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWords;
