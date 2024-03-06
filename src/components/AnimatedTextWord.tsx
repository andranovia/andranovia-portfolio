import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import AnimatedRoundText from "./AnimatedRoundText";
import { useResize } from "@/hooks/useResize";
import useMousePosition from "@/hooks/useMousePosition";

interface props {
  text: string;
  charDelay: number;
}

const AnimatedTextWords = React.memo(({ text, charDelay }: props) => {
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
                duration: 1,
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
              className="inline-flex text-5xl lg:text-[6rem] 2xl:text-[7rem] "
            >
              {word !== "arrow" && word}
              {word === "arrow" && (
                <div className="lg:relative  right-4 lg:-right-2  lg:flex-col lg:gap-10">
                  <AnimatedRoundText />
                </div>
              )}

              {wordIndex < text.split(" ").length - 1 && <>&nbsp;</>}
            </motion.div>
          ))}
        </motion.div>

  );
});

export default AnimatedTextWords;
AnimatedTextWords.displayName = "AnimatedTextWord";
