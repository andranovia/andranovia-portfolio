import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HeroAppText from "./HeroAppText";
import HeroButtons from "./HeroButtons";

function HeroApp() {
  const textControls = useAnimation();
  const controlsTwo = useAnimation();

  useEffect(() => {
    textControls.start("visible");
    controlsTwo.start("animate");
  }, [textControls, controlsTwo]);

  const animatedTextOne = "ANDRA";
  const animatedTextTwo = "we should know each other👋";

  return (
    <div className="relative flex justify-center items-center h-[80vh] font-Poppins w-screen mt-8">
      <div className="mx-10   font-bold font-Poppins flex flex-col sm:items-center justify-center text-#272828 z-1">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { y:30, opacity: 0  },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            },
          }}
          className="text-2xl sm:text-3xl text-gray-500 mb-3 "
        >
          <h2>Hello there, im</h2>
        </motion.div>
        <HeroAppText
          animate={controlsTwo}
          text={animatedTextOne}
          textTwo={animatedTextTwo}
        />

        <motion.div
          className="bg-gradient-to-r from-cyan-400 to-cyan-200 w-80 sm:w-[40rem] h-2 mt-14 rounded-md"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: 1,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            },
          }}
        />
        <HeroButtons />
      </div>
    </div>
  );
}

export default HeroApp;
