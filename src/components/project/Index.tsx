import React, { useRef } from "react";
import ProjectSidebar from "./ProjectSidebar";
import ProjectSlide from "./ProjectSlide";
import ProjectFolderAnimated from "./ProjectFolderAnimated";

const Project = () => {
  const projectTwoRef = useRef(null);

  const popupData = [
    {
      Slide: {
        Img: "/img/projectImg/smknusa.png",
        Title: "SMKNUSA",
        Description:
          "SMKN 1 Purwosari official website, build using modern stack",

        ProjectLink: "https://github.com/andranovia/smknusa-frontend",

        SlideStyle: "-bottom-10 lg:right-[10%] top-[14%] md:top-[24%]",
        Tech: [
          {
            Name: "Next.Js",
            TechStyle: "bg-white",
            TechIcons: "/img/techLogo/nextjs.png",
          },
          {
            Name: "Tailwind",
            TechStyle: "bg-sky-200",
            TechIcons: "/img/techLogo/tailwindcss.svg",
          },
          {
            Name: "Framer-motion",
            TechStyle: "bg-violet-200 col-span-2",
            TechIcons: "/img/techLogo/framer-motion.svg",
          },
        ],
      },
    },
    {
      Slide: {
        Img: "/img/projectImg/project-noirythm-four.jpeg",
        Title: "Noirythm",
        Description: "Noirythm ecommerce, first complex project.",

        ProjectLink: "https://github.com/andranovia/Noirythm-Ecommerce",

        SlideStyle: "lg:left-[20%] bottom-[35%] lg:bottom-[40%]",
        Tech: [
          {
            Name: "Next.Js",
            TechStyle: "bg-white",
            TechIcons: "/img/techLogo/nextjs.png",
          },
          {
            Name: "Tailwind",
            TechStyle: "bg-sky-200",
            TechIcons: "/img/techLogo/tailwindcss.svg",
          },
          {
            Name: "Laravel",
            TechStyle: "bg-red-200 col-span-2",
            TechIcons: "/img/techLogo/laravel.svg",
          },
          {
            Name: "React-Query",
            TechStyle: "bg-orange-200 col-span-2",
            TechIcons: "/img/techLogo/react-query.svg",
          },
        ],
      },
    },
    {
      Slide: {
        Img: "/img/projectImg/project-foodfinder.png",
        Title: "Foodfinder",
        Description: "Restaurant searcher app, my favourite stack.",
        SlideStyle: "lg:right-[10%] bottom-[10%] ",

        ProjectLink: "https://github.com/andranovia/restaurant-searcher",
        ProjectHost: "https://restaurant-searcher-foodfinder.vercel.app/",
        Tech: [
          {
            Name: "Next.Js",
            TechStyle: "bg-white",
            TechIcons: "/img/techLogo/nextjs.png",
          },
          {
            Name: "Tailwind",
            TechStyle: "bg-sky-200",
            TechIcons: "/img/techLogo/tailwindcss.svg",
          },
          {
            Name: "React-Query",
            TechStyle: "bg-orange-200 col-span-2",
            TechIcons: "/img/techLogo/react-query.svg",
          },
          {
            Name: "Laravel",
            TechStyle: "bg-red-200 col-span-2",
            TechIcons: "/img/techLogo/laravel.svg",
          },
        ],
      },
    },
  ];

  return (
    <>
      <div className="relative w-full h-full " ref={projectTwoRef}>
        <div className=" w-full h-full   bg-white  bg-dot-black/[0.4] relative rounded-xl mt-10 lg:mt-0 ">
          <div className="hidden absolute pointer-events-none inset-0 z-10 lg:flex items-center justify-center rounded-xl  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
          <div className="sticky top-0  h-full lg:h-screen flex justify-center items-center overflow-hidden ">
            <div className="relative w-screen">
              <div className="flex flex-col w-full px-2 md:flex-row lg:flex-row justify-center items-center gap-2">
                <ProjectSidebar />

                <div className="bg-primary w-full lg:w-[50%] h-[30rem] rounded-3xl  ">
                  <div className=" py-6 px-10 font-semibold text-white text-lg">
                    <h1>Project</h1>
                  </div>

                  <ProjectFolderAnimated projectTwoRef={projectTwoRef} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            {popupData.map((data, index) => (
              <React.Fragment key={index}>
                <ProjectSlide SlideData={data.Slide} />
              </React.Fragment>
            ))}
          </div>

          <div className=" top-0 h-[150vw] z-20 pointer  pointer-events: none; flex justify-center items-center">
            {/* add height to trigger sticky*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
