import React from "react";
import AnimatedCard from "./AnimatedCard";

const GridCard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen    ">
      <div className="font-bold text-5xl w-[30rem] text-center">
        <h1>Wait, did we met before?  Your look familliar!</h1>
      </div>
      <div className="container p-6 grid grid-cols-2  mt-32">
        <div className="flex flex-col justify-center w-[50rem] items-center gap-4">
          <div className="w-[38rem]  h-[11.5rem] rounded-xl">
            <div className="font-semibold text-3xl w-[24rem] rounded-xl text-start p-10">
              <h1>What about some talk in my social app 👏</h1>
            </div>
          </div>
          <div className="w-[38rem] border-2 h-[11.5rem] bg-gradient-to-br from-yellow-300 to-yellow-100 p-2 rounded-md">
            <div className="w-[38rem] border-2 h-[11.5rem] rounded-md bg-white"></div>
          </div>
        </div>
        <AnimatedCard />
      </div>
    </div>
  );
};
export default GridCard;
