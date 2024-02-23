import React from "react";

export default function ProfileText() {
  return (
    <div className="sm:w-[30rem] font-poppins mb-20  text-center sm:text-left mt-20 sm:mt-0">
      <div className="sm:mt-20 items-center">
        <div className="relative flex justify-start gap-4 items-center text-[2.5rem] font-semibold text-gray-700 ">
        <div className="bg-black w-[6rem] rounded-md h-1"></div>
          <h1 className="text-[2rem]">My Profile</h1>
        </div>
        <div className="font-semibold text-[1rem] text-start sm:text-xl text-gray-600 top-20 mt-10">
          <p>
            Hi, Im Andra - a web explorer. I design and build digital wonders
            <span className="text-gray-500 ">
                {" "}
               that marry style and functionality. Lets bring your ideas to life
            </span>
            <span className="text-gray-400 "> and make the web a little more awesome together!</span>
          </p>
        </div>
      </div>
    </div>
  );
}
