import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectFolder from "./ProjectFolder";
import { useMediaQuery } from "react-responsive";

const ProjectAnimatedFolder: React.FC<{
  projectTwoRef: React.MutableRefObject<null>;
}> = ({ projectTwoRef }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { scrollYProgress: scrollYFolder2 } = useScroll({
    target: projectTwoRef,
    offset: ["center center", "start start"],
  });

  const { scrollYProgress: scrollYFolder3 } = useScroll({
    target: projectTwoRef,
    offset: ["end", "center"],
  });

  const yFolder1And2End = useTransform(
    scrollYFolder3,
    [1, 0],
    [0, isMobile ? 0 : 200]
  );

  const xFolder2 = useTransform(
    scrollYFolder2,
    [0, 1],
    [isMobile ? 0 : -80, 200]
  );
  const yFolder2 = useTransform(
    scrollYFolder2,
    [0, 1],
    [0, isMobile ? 400 : 700]
  );
  const yCursorFolder2 = useTransform(
    scrollYFolder2,
    [0, 1],
    [80, isMobile ? 500 : 900]
  );
  const opacityCursorFolder2 = useTransform(
    scrollYFolder2,
    [0, 0.1, 1],
    [0, 1, 1]
  );
  const rotateFolder2 = useTransform(scrollYFolder2, [0, 1], [0, -6]);

  const xFolder3 = useTransform(scrollYFolder3, [0, 1], [0, -200]);
  const yFolder3 = useTransform(
    scrollYFolder3,
    [0, 1],
    [isMobile ? 0 : -150, isMobile ? 400 : 700]
  );
  const yCursorFolder3 = useTransform(
    scrollYFolder3,
    [0, 1],
    [isMobile ? 80 : -80, isMobile ? 500 : 900]
  );
  const opacityCursorFolder3 = useTransform(
    scrollYFolder3,
    [0, 0.1, 1],
    [0, 1, 1]
  );

  const rotateFolder3 = useTransform(scrollYFolder3, [0, 1], [0, -6]);

  return (
    <>
      <div className="grid grid-cols-2  items-center justify-center mt-4">
        <motion.div
          style={{
            y: yFolder1And2End,
          }}
        >
          <ProjectFolder />
        </motion.div>

        <motion.div
          className="block "
          style={{
            y: yFolder1And2End,
          }}
        >
          <motion.div
            className="flex gap-2  -right-[50%] relative z-10 pointer-events-none"
            style={{
              x: xFolder2,
              y: yCursorFolder2,
              rotate: rotateFolder2,
              opacity: opacityCursorFolder2,
            }}
          >
            <Image
              src={
                "https://img.icons8.com/material-two-tone/24/FFFFFF/blue-pointer.png"
              }
              alt="cursor"
              width={40}
              height={40}
              className="w-4 h-4"
            />
            <div className="bg-white p-2 rounded-md">Andranovias</div>
          </motion.div>
          <motion.div
            style={{
              x: xFolder2,
              y: yFolder2,
              rotate: rotateFolder2,
            }}
          >
            <ProjectFolder />
          </motion.div>
        </motion.div>

        <div>
          <motion.div
            className="flex gap-2 - -right-[50%] relative z-10 pointer-events-none"
            style={{
              x: xFolder3,
              y: yCursorFolder3,
              rotate: rotateFolder3,
              opacity: opacityCursorFolder3,
            }}
          >
            <Image
              src={
                "https://img.icons8.com/material-two-tone/24/FFFFFF/blue-pointer.png"
              }
              alt="cursor"
              width={40}
              height={40}
              className="w-4 h-4"
            />
            <div className="bg-white p-2 rounded-md">Andranovia</div>
          </motion.div>

          <motion.div
            style={{
              x: xFolder3,
              y: yFolder3,
              rotate: rotateFolder3,
            }}
          >
            <ProjectFolder />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectAnimatedFolder;
