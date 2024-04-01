import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import useMobileDetect from "@/utils/useMobileDetect";

interface props {
  text: string;
  charDelay: number;
}

const AnimatedTextLetter = React.memo(({ text, charDelay }: props) => {
  const textControls = useAnimation();
  const isMobile = useMobileDetect();

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
