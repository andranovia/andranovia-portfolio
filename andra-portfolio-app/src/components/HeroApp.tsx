import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HeroAppText from "./HeroAppText";
import HeroCardContainer from "./HeroCardContainer";

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
    <div className="relative flex justify-center items-center h-[80vh] font-Poppins w-screen  sm:mt-28">
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
                duration: 0.4,
                ease: "easeInOut",
              },
            },
          }}
          className="text-2xl sm:text-2xl text-gray-500 mb-3 relative sm:right-28 "
        >
          <h2>Hello there, im</h2>
        </motion.div>
        <HeroAppText
          animate={controlsTwo}
          text={animatedTextOne}
          textTwo={animatedTextTwo}
        />
        

     <HeroCardContainer/>
      </div>
    </div>
  );
}

export default HeroApp;
