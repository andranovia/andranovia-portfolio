import React from "react";
import Image from "next/image";
import MyWorkProjectCard from "./MyWorkProjectCardApp";

interface TechDataItem {
  imgSrc: string;
}

interface MyWorkProps {
  techData: TechDataItem[];
}

const TechUsed = React.memo(({ imgSrc }: TechDataItem) => {
  return <Image src={imgSrc} alt="" width={34} height={34} />;
});

TechUsed.displayName = "TechUsed";

const MyWork = React.memo(({ techData }: MyWorkProps) => {
  const techUsed = techData.map((item, index) => (
    <TechUsed key={index} imgSrc={item.imgSrc} />
  ));

  return (
    <div className="w-screen h-screen relative  mb-40 bottom-0 ">
      <div className="flex justify-center flex-col ">
        <div className=" flex flex-col justify-center text-center mx-10 sm:text-left ">
          <h1 className="font-bold text-2xl text-gray-600">Work Project</h1>
          <p className="font-semibold text-[1rem] sm:text-xl text-gray-600 top-20 mt-4">
            this section provides a comprehensive
            <span className="text-gray-500 ">
              {" "}
              overview of my work project.
            </span>
          </p>
        </div>
        <div className="flex justify-center relative mt-10 sm:justify-start">
          <MyWorkProjectCard techUsed={techUsed} />
        </div>
      </div>
    </div>
  );
});

export default MyWork;
MyWork.displayName = "MyWork";
