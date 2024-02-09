import React from "react";

import Image from "next/image";


import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <div className="w-screen mb-[10rem] mt-52 sm:mt-0">
      <div className="relative top-[10rem] sm:justify-start sm:grid grid-cols-2 sm:mx-40">
        <div className="flex flex-col justify-start">
          <div className="sm:w-[30rem] font-poppins sm:mb-20 mx-10 text-left mt-12 sm:mt-0">
            <div className="sm:mt-48 items-center ">
              <div className="flex gap-4">
                <div className="relative sm:text-[2.5rem] text-4xl font-bold text-gray-700 flex   ">
                  <h1>Project</h1>
                </div>

                <Image
                  src={
                    "https://img.icons8.com/ios-glyphs/30/1A1A1A/circled-chevron-right.png"
                  }
                  width={100}
                  height={100}
                  className="w-5 h-5 relative top-2 sm:top-2 sm:-left-2 sm:w-6 sm:h-6 "
                  alt=""
                ></Image>
              </div>
              <div className="font-semibold text-[1rem] sm:text-xl text-gray-600 top-20 mt-10">
                <p>
                  Hi, This is my work list
                  <span className="text-gray-500 ">
                    {" "}
                    that i split into three section! im making big project such
                    as ecommerce,
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
        <div className="relative sm:top-64 top-10">
          <ProjectList/>
        </div>
      </div>
    </div>
  );
}