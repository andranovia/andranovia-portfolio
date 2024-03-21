import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface props {
  text: string;
  charDelay: number;
}

const AnimatedTextLetter = React.memo(({ text, charDelay }: props) => {
  const controls = useAnimation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

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
      {text.split(isMobile ? " " : "").map((char, charIndex) => (
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
          className="inline-block   lg:w-[2ch]  font-thin"
        >
          {char}
          <span className="lg:hidden">&nbsp;</span>
        </motion.span>
      ))}
    </motion.div>
  );
});

export default AnimatedTextLetter;
AnimatedTextLetter.displayName = "AnimatedTextLetter";
