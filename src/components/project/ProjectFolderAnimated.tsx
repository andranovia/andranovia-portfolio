import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectFolder from "./ProjectFolder";
import Image from "next/image";
import useMobileDetect from "@/utils/useMobileDetect";

type ProjectFolderAnimatedProps = {
  projectTwoRef: React.MutableRefObject<null>;
};

const ProjectFolderAnimated: React.FC<ProjectFolderAnimatedProps> = ({
  projectTwoRef,
}) => {
  const {isMobile} = useMobileDetect();

  const { scrollYProgress: folder2ScrollProgress } = useScroll({
    target: projectTwoRef,
    offset: ["center", "start"],
    layoutEffect: false,
  });

  const { scrollYProgress: folder3ScrollProgress } = useScroll({
    target: projectTwoRef,

    offset: ["end", "center"],
    layoutEffect: false,
  });

  const folder1And2EndPosition = useTransform(
    folder3ScrollProgress,
    [1, 0],
    [0, isMobile ? 0 : 200]
  );
  const folder2XPosition = useTransform(
    folder2ScrollProgress,
    [0, 1],
    [isMobile ? 0 : -80, 200]
  );
  const folder2YPosition = useTransform(
    folder2ScrollProgress,
    [0, 1],
    [0, isMobile ? 400 : 700]
  );
  const cursorFolder2YPosition = useTransform(
    folder2ScrollProgress,
    [0, 1],
    [-80, isMobile ? 500 : 0]
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
    [isMobile ? 0 : -150, isMobile ? 400 : 700]
  );
  const cursorFolder3YPosition = useTransform(
    folder3ScrollProgress,
    [0, 1],
    [-80, 40]
  );
  const cursorFolder3Opacity = useTransform(
    folder3ScrollProgress,
    [0, 0.1, 1],
    [0, 1, 1]
  );
  const folder3Rotation = useTransform(folder3ScrollProgress, [0, 1], [0, -6]);

  const folders = [
    {
      name: "SMKNUSA",
      x: 0,
      y: folder1And2EndPosition,
      projectLink: "https://github.com/andranovia/smknusa-frontend",
    },
    {
      name: "Noirythm",
      x: folder2XPosition,
      y: folder2YPosition,
      cursorY: cursorFolder2YPosition,
      opacity: cursorFolder2Opacity,
      rotation: folder2Rotation,
      projectLink: "https://github.com/andranovia/Noirythm-Ecommerce",
    },
    {
      name: "Foodfinder",
      x: folder3XPosition,
      y: folder3YPosition,
      cursorY: cursorFolder3YPosition,
      opacity: cursorFolder3Opacity,
      rotation: folder3Rotation,
      projectLink: "https://github.com/andranovia/restaurant-searcher",
      hostLink: 'https://restaurant-searcher-foodfinder.vercel.app/'
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 items-center justify-center mt-4">
        {folders.map((folder, index) => (
          <motion.div
            key={index}
            style={{
              x: folder.x,
              y: folder.y,
              rotate: folder.rotation,
            }}
          >
            <ProjectFolder LinkRef={folder.projectLink} HostRef={folder.hostLink}>
              <h3 className="font-thin text-white ">{folder.name}</h3>
            </ProjectFolder>
            {index !== 0 && (
              <motion.div
                className="flex gap-2 -right-[50%] relative z-50 pointer-events-none"
                style={{
                  y: folder.cursorY,
                  opacity: folder.opacity,
                }}
              >
                <Image
                  src="https://img.icons8.com/material-two-tone/24/FFFFFF/blue-pointer.png"
                  alt="cursor"
                  width={40}
                  height={40}
                  className="w-4 h-4"
                />
                <div className="bg-white p-2 rounded-md">Andranovia</div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ProjectFolderAnimated;
ProjectFolderAnimated.displayName = "ProjectFolderAnimated";
