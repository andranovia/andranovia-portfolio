import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectFolder from "./ProjectFolder";
import { useMediaQuery } from "react-responsive";
import ProjectLink from "./ProjectLink";

const ProjectFolderAnimated: React.FC<{
  projectTwoRef: React.MutableRefObject<null>;
}> = ({ projectTwoRef }) => {
  const isMobileDevice = useMediaQuery({ query: "(max-width: 768px)" });

  const { scrollYProgress: folder2ScrollProgress } = useScroll({
    target: projectTwoRef,
    offset: ["center", "start"],
  });

  const { scrollYProgress: folder3ScrollProgress } = useScroll({
    target: projectTwoRef,
    offset: ["end", "center"],
  });

  const folder1And2EndPosition = useTransform(
    folder3ScrollProgress,
    [1, 0],
    [0, isMobileDevice ? 0 : 200]
  );

  const folder2XPosition = useTransform(
    folder2ScrollProgress,
    [0, 1],
    [isMobileDevice ? 0 : -80, 200]
  );
  const folder2YPosition = useTransform(
    folder2ScrollProgress,
    [0, 1],
    [0, isMobileDevice ? 400 : 700]
  );
  const cursorFolder2YPosition = useTransform(
    folder2ScrollProgress,
    [0, 1],
    [80, isMobileDevice ? 500 : 900]
  );
  const cursorFolder2Opacity = useTransform(
    folder2ScrollProgress,
    [0, 0.1, 1],
    [0, 1, 1]
  );
  const folder2Rotation = useTransform(folder2ScrollProgress, [0, 1], [0, -6]);

  const folder3XPosition = useTransform(
    folder3ScrollProgress,
    [0, 1],
    [0, -200]
  );
  const folder3YPosition = useTransform(
    folder3ScrollProgress,
    [0, 1],
    [isMobileDevice ? 0 : -150, isMobileDevice ? 400 : 700]
  );
  const cursorFolder3YPosition = useTransform(
    folder3ScrollProgress,
    [0, 1],
    [isMobileDevice ? 80 : -80, isMobileDevice ? 500 : 900]
  );
  const cursorFolder3Opacity = useTransform(
    folder3ScrollProgress,
    [0, 0.1, 1],
    [0, 1, 1]
  );

  const folder3Rotation = useTransform(folder3ScrollProgress, [0, 1], [0, -6]);

  return (
    <>
      <div className="grid grid-cols-2  items-center justify-center mt-4">
        <motion.div
          style={{
            y: folder1And2EndPosition,
          }}
        >
          <ProjectFolder />
        </motion.div>

        <motion.div
          className="block "
          style={{
            y: folder1And2EndPosition,
          }}
        >
          <motion.div
            className="flex gap-2  -right-[50%] relative z-10 pointer-events-none"
            style={{
              x: folder2XPosition,
              y: cursorFolder2YPosition,
              rotate: folder2Rotation,
              opacity: cursorFolder2Opacity,
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
              x: folder2XPosition,
              y: folder2YPosition,
              rotate: folder2Rotation,
            }}
          >
            <ProjectFolder />
          </motion.div>
        </motion.div>

        <div>
          <motion.div
            className="flex gap-2  -right-[50%] relative z-10 pointer-events-none"
            style={{
              x: folder3XPosition,
              y: cursorFolder3YPosition,
              rotate: folder3Rotation,
              opacity: cursorFolder3Opacity,
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
              x: folder3XPosition,
              y: folder3YPosition,
              rotate: folder3Rotation,
            }}
          >
            <ProjectFolder />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectFolderAnimated;
