import React, { useRef } from "react";
import ProjectSidebar from "./ProjectSidebar";
import ProjectCard from "./ProjectCard";
import ProjectAnimatedFolder from "./ProjectAnimatedFolder";

const Project = () => {
  const projectTwoRef = useRef(null);

  const popupData = [
    {
      Link: {
        LinkRef: "https://github.com/andranovia/smknusa-frontend",
        LinkStyle: "top-[16%] left-[28%] ",
      },
      Card: {
        Img: "/img/projectImg/smknusa.png",
        Title: "SMKNUSA",
        Description:
          "SMKN 1 Purwosari official website, build using modern stack",
        CardStyle: "-bottom-10 lg:right-[10%] top-[14%]",
        Tech: [
          {
            Name: "Next.Js",
            TechStyle: "bg-white",
          },
          {
            Name: "Tailwind",
            TechStyle: "bg-sky-200",
          },
          {
            Name: "Framer-motion",
            TechStyle: "bg-violet-200 col-span-2",
          },
        ],
      },
    },
    {
      Link: {
        LinkRef: "https://github.com/andranovia/smknusa-frontend",
        LinkStyle: " lg:bottom-[44%] right-[10%]",
      },
      Card: {
        Img: "/img/projectImg/smknusa.png",
        Title: "SMKNUSA 2",
        Description:
          "SMKN 1 Purwosari official website, build using modern stack",
        CardStyle: "lg:left-[20%] bottom-[35%] lg:bottom-[40%]",
        Tech: [
          {
            Name: "Next.Js",
            TechStyle: "bg-white",
          },
          {
            Name: "Tailwind",
            TechStyle: "bg-sky-200",
          },
          {
            Name: "Framer-motion",
            TechStyle: "bg-violet-200 col-span-2",
          },
        ],
      },
    },
    {
      Link: {
        LinkRef: "https://github.com/andranovia/smknusa-frontend",
        LinkStyle: "bottom-[8%] lg:left-[28%]",
      },
      Card: {
        Img: "/img/projectImg/smknusa.png",
        Title: "SMKNUSA 3",
        Description:
          "SMKN 1 Purwosari official website, build using modern stack",
        CardStyle: "lg:right-[10%] bottom-[10%] ",
        Tech: [
          {
            Name: "Next.Js",
            TechStyle: "bg-white",
          },
          {
            Name: "Tailwind",
            TechStyle: "bg-sky-200",
          },
          {
            Name: "Framer-motion",
            TechStyle: "bg-violet-200 col-span-2",
          },
        ],
      },
    },
  ];

  return (
    <>
      <div className="relative" ref={projectTwoRef}>
        <div className="sticky top-0  h-screen flex justify-center items-center overflow-hidden">
          <div className="relative w-screen">
            <div className="flex flex-col w-full px-2 lg:flex-row justify-center items-center gap-2">
              <ProjectSidebar />

              <div className="bg-primary w-full lg:w-[50%] h-[30rem] rounded-3xl  ">
                <div className=" py-6 px-10 font-semibold text-white text-lg">
                  <h1>Project</h1>
                </div>
                <ProjectAnimatedFolder projectTwoRef={projectTwoRef} />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {popupData.map((data, index) => (
            <React.Fragment key={index}>
              <ProjectCard CardData={data.Card} />
            </React.Fragment>
          ))}
        </div>
        <div className=" top-0 h-[150vw] z-20 pointer  pointer-events: none; flex justify-center items-center"></div>
      </div>
    </>
  );
};

export default Project;
