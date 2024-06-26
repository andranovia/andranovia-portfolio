
import React from "react";
import AboutAnimatedImages from "./AboutAnimatedImages";

const AboutImages = () => {


  return (
    <div className="relative flex justify-start md:justify-center lg:justify-center    w-screen p-8 bg-white   h-full   ">
      <div
        className="relative -top-20 w-full lg:w-[80%] md:my-20 lg:my-0   md:h-[60vw]  lg:h-[70vw] h-full   rounded-xl  flex justify-center items-center text-white"
      >
        <div className="flex relative   flex-col mt-20 lg:mt-0    gap-4 w-full h-full">
          <AboutAnimatedImages/>
          <div className="flex flex-col md:items-center lg:items-center md:top-[60%] top-[40%] pointer-events-none lg:top-[60%] uppercase mix-blend-difference justify-center absolute w-full">

            <h1 className="text-2xl md:text-6xl lg:text-6xl font-thin">Whereas</h1>
            <h1 className="text-2xl md:text-6xl lg:text-6xl font-thin">Myself</h1>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImages;
