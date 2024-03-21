import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ProjectFolder = () => {
  return (
    <>
      <div className="flex flex-col items-center  gap-4">
        <div className=" flex justify-center flex-col items-center ">
          <Image
            src={"/img/assets/folder-image.png"}
            alt=""
            width={180}
            height={180}
            className="w-32 rounded-xl opacity-60 relative"
          />

          <motion.div
            whileHover={{
              y: 20,
            }}
            className="w-28  h-20 -mt-20 rounded-md relative bg-yellow-400  text-gray-100 text-center"
          ></motion.div>
        </div>
        <h3 className="font-thin text-white "></h3>
      </div>
    </>
  );
};

export default ProjectFolder;
