import React, { useState } from "react";
import dynamic from "next/dynamic";
import techData from "./MyWorkTechData";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import MyWorkProject from "@/components/MyWorkProjectApp";

const MyWorkRoadmap = dynamic(() => import('@/components/MyWorkRoadmap'));
const MyWorkBlog = dynamic(() => import('@/components/MyWorkBlog'));

export default function MyWork() {
  const sections = ["project", "blog", "roadmap"];
  const [activeSection, setActiveSection] = useState("project");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextSection = () => {
    setIsModalOpen(true);
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const currentSection = sections.indexOf(activeSection);

  return (
    <div className="w-screen">
      <div className="relative top-[20rem] sm:justify-start sm:mx-40">
        <div className="flex flex-col justify-start">
          <div className="  justify-center gap-4 items-center opacity-80 sm:mr-20 flex flex-col sm:flex-row">
            <div className="flex justify-center relative -left-10 gap-2 sm:left-0">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-500">
              My Worklist
            </h1>
            <button onClick={handleNextSection}>
              <Image
                src={
                  "https://img.icons8.com/ios-glyphs/30/1A1A1A/drag-list-down.png"
                }
                width={32}
                height={32}
                alt=""
                className="relative top-1 -rotate-90 w-6 h-5 sm:w-10 sm:h-auto"
              />
            </button>
            </div>
            <AnimatePresence>
              {isModalOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-[20rem] left-[7rem] sm:-top-[20rem] sm:left-[2rem] w-screen h-screen bg-opacity-50 flex justify-center items-center z-20"
                  onClick={handleModalClose}
                >
                  <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    exit={{ x: -100 }}
                    className="p-4 rounded-lg text-center"
                  >
                    <div className="flex flex-col justify-center gap-3">
                      <button onClick={handleModalClose}>
                        <h2 className="text-sm font-bold text-gray-800">
                          Close
                        </h2>
                      </button>
                      <Button
                        onClicked={() => handleSectionChange("project")}
                        text={"Project"}
                      ></Button>
                      <Button
                        onClicked={() => handleSectionChange("blog")}
                        text={"Blog"}
                      ></Button>
                      <Button
                        onClicked={() => handleSectionChange("roadmap")}
                        text={"Roadmap"}
                      ></Button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="sm:w-[30rem] font-poppins mb-20 mx-10 text-center sm:text-left mt-12 sm:mt-0">
              <div className="sm:mt-20 items-center ">
                <div className="flex gap-4">
                <div className="relative sm:text-[2.5rem] text-2xl font-bold text-gray-700 flex   ">
                    <h1>{sections[currentSection]}</h1>
                  </div>
                  {isModalOpen && (
                  <Image
                    src={
                      "https://img.icons8.com/ios-glyphs/30/1A1A1A/circled-chevron-right.png"
                    }
                    width={100}
                    height={100}
                    className="w-5 h-5 relative top-2 sm:top-2 sm:-left-2 sm:w-6 sm:h-6 "
                    alt=""
                  ></Image>
                  )}
                  
                </div>
                <div className="font-semibold text-[1rem] sm:text-xl text-gray-600 top-20 mt-10">
                  <p>
                    Hi, This is my work list
                    <span className="text-gray-500 ">
                      {" "}
                      that i split into three section!  im making big project such as ecommerce,
                    </span>
                    <span className="text-gray-400 ">
                      {" "}
                      and some blog about programming, also some roadmap!
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative sm:top-20">
          {sections[currentSection] === "project" && (
            <MyWorkProject techData={techData} />
          )}
          {sections[currentSection] === "blog" && (
            <MyWorkBlog techData={techData} />
          )}
          {sections[currentSection] === "roadmap" && (
            <MyWorkRoadmap techData={techData} />
          )}
        </div>
      </div>
    </div>
  );
}
