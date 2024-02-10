import React from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import techData from "./TechData";

interface TechDataItem {
  imgSrc: string;
}

const TechUsed = React.memo(({ imgSrc }: TechDataItem) => {
  return <Image src={imgSrc} alt="" width={34} height={34} className="w-8 h-8"/>;
});

TechUsed.displayName = "TechUsed";

const ProjectList = () => {
  const techUsed = techData.map((item, index) => (
    <TechUsed key={index} imgSrc={item.imgSrc} />
  ));

  return (
    <div className="w-screen h-screen relative  mb-40 bottom-0 ">
      <div className="flex justify-center flex-col  mx-4 sm:mx-0">
        <div className=" flex flex-col justify-center text-left mx-16 sm:mx-10  ">
          <h1 className="font-bold text-2xl text-gray-600">My Project</h1>
          <p className="font-semibold text-[1rem] sm:text-xl text-gray-600 top-20 mt-4">
            this section provides a comprehensive
            <span className="text-gray-500 "> 

              overview of my work project.
            </span>
          </p>
        </div>
        <div className="flex justify-center relative mt-10 sm:justify-start">
          <ProjectCard techUsed={techUsed} />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
ProjectList.displayName = "ProjectList";
