import Image from "next/image";
import React from "react";
import ProjectSidebar from "./ProjectSidebar";
import { motion } from "framer-motion";
import ProjectCard from "./projectCard";
import Link from "next/link";

const Project = () => {
  return (
    <>
      <div className="relative w-screen">
        <div className="flex justify-center items-center gap-2">
          <div className="w-fit p-2 rounded-xl bg-opacity-70 backdrop-blur-lg absolute z-20 h-fit bg-zinc-800 bottom-10 left-[30%] text-white">
            <Link href={"https://github.com/andranovia/smknusa-frontend"}>
              <div className="flex justify-center items-center text-blue-400 gap-2">
                <Image
                  src={"https://img.icons8.com/ios/50/FFFFFF/search--v1.png"}
                  alt="search"
                  width={40}
                  height={40}
                  className="w-4 h-4"
                />
                <p> https://github.com/andranovia/smknusa-frontend</p>
              </div>
            </Link>
          </div>
          <ProjectSidebar />

          <div className="bg-primary w-[50%] h-[25rem] rounded-3xl ">
            <div className=" py-6 px-10 font-semibold text-white text-lg">
              <h1>Project</h1>
            </div>

            <div className="grid grid-cols-4 px-12 py-4">
              <div className="flex flex-col items-center  gap-4">
                <div className="flex justify-center flex-col items-center overflow-hidden ">
                  <Image
                    src={"/img/assets/folder-image.png"}
                    alt=""
                    width={180}
                    height={180}
                    className="w-32 rounded-xl opacity-60"
                  />

                  <motion.div
                    whileHover={{
                      y: 20,
                    }}
                    className="w-28  h-20 -mt-20 rounded-md relative bg-yellow-400 z-20 text-gray-100 text-center"
                  ></motion.div>
                </div>
                <h3 className="font-thin text-white ">SMKNUSA</h3>
              </div>
            </div>

            <ProjectCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
