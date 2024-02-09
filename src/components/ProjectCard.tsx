import React from "react";
import Image from "next/image";

const ProjectCard = ({ techUsed }: any) => {
  return (
    <div className="mx-10 w-[20rem] sm:w-[28rem] flex flex-col   items-center justify-center h-auto sm:h-full bg-gradient-to-r from-cyan-700 to-cyan-500 rounded-md p-1  ">
           
       
      <div className="h-full w-full bg-white ">
        <Image
          src="/img/projectImg/project-noirythm.webp"
          alt=""
          width={450}
          height={450}
          className="w-full"
        />
        <div className="">
          <div className="text-gray-600 sm:mx-10 mx-5 ">
            <h1 className=" mt-4 font-bold text-2xl ">Noirythm</h1>

            <p className="font-semibold text-sm ">
              e-commerce website using NextJs, laravel, tailwindCSS, ....
            </p>
          </div>
        </div>
        <div className="relative mb-5">
          <div className="mt-10 text-1xl font-medium text-gray-700 sm:mx-10  "></div>
          <div className="mt-7 flex flex-col justify-center sm:mx-10 mx-5 ">
            <h3 className="font-bold text-gray-500">tech used:</h3>
            <div className="flex justify-start gap-4 mt-3 w-14">{techUsed}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
