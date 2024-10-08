import Image from "next/image";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import ProjectLink from "./ProjectLink";

interface ProjectFolderProps {
  children: React.ReactNode;
  LinkRef: string;
  HostRef?: string;
}

const ProjectFolder = ({ children, LinkRef, HostRef }: ProjectFolderProps) => {
  const hoverControls = useAnimation();

  const handleHover = () => {
    hoverControls.start("animate");
  };

  const handleLeave = () => {
    hoverControls.start("initial");
  };

  return (
    <>
      <div className="flex flex-col items-center  gap-4 ">
        <div
          className=" flex justify-center flex-col items-center cursor-pointer"
          onMouseEnter={() => handleHover()}
          onMouseLeave={() => handleLeave()}
        >
          <Image
            src={"/img/assets/folder-image.png"}
            alt=""
            width={180}
            height={180}
            className="w-32 rounded-xl opacity-60 relative"
          />
          <motion.div
            initial={"initial"}
            animate={hoverControls}
            variants={{ initial: { y: 0 }, animate: { y: -60 } }}
            className="flex justify-center absolute items-center   bg-white p-2 rounded-md gap-4"
          >
            <ProjectLink LinkRef={LinkRef} HostRef={HostRef}/>
          </motion.div>

          <motion.div
            initial={"initial"}
            animate={hoverControls}
            variants={{ initial: { y: 0 }, animate: { y: 20 } }}
            className="w-28 z-40   h-20 -mt-20 rounded-md relative bg-yellow-400  text-gray-100 text-center"
          ></motion.div>
        </div>
        {children}
      </div>
    </>
  );
};

export default ProjectFolder;
