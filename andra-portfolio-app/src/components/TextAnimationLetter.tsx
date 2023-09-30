import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";


interface props{
    text: string;
    charDelay: number;
}



const AnimatedTextLetter = ({ text, charDelay }:props) => {
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
            className="inline-block w-[1.2ch]"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  export default AnimatedTextLetter;