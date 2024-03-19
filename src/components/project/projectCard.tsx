import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  return (
    <>
      <div className="w-[30%] p-4 h-[20rem] absolute right-[10%] overflow-hidden flex justify-start gap-6 -bottom-10 rounded-3xl bg-zinc-800 bg-opacity-90 backdrop-blur-lg">
        <div className="w-fit h-full overflow-hidden rounded-lg">
          <Image
            src={"/img/projectImg/smknusa.png"}
            alt="asd"
            width={200}
            height={200}
            className="-top-24 relative "
          />
        </div>
        <div className="w-1/2 h-full mt-2 flex flex-col items-start gap-4">
          <div className="flex items-center  gap-4">
            <Image
              src={
                "https://img.icons8.com/material-outlined/24/FFFFFF/folder-invoices--v1.png"
              }
              alt=""
              width={20}
              height={20}
              className="w-4 h-4"
            />
            <h1 className="text-white font-semibold">SMKNUSA</h1>
          </div>
          <p className="font-thin text-white">
            SMKN 1 Purwosari official website, build using modern stack
          </p>
          <div className="grid grid-cols-2 items-start gap-4 text-primary">
            <div className="rounded-xl  flex justify-center gap-2  bg-white  p-2">
              Next.Js
            </div>
            <div className="rounded-xl  flex justify-center gap-2  bg-sky-200  p-2">
              Tailwind
            </div>
            <div className="rounded-xl col-span-2  flex justify-center gap-2  bg-violet-200 p-2">
              Framer-motion
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
