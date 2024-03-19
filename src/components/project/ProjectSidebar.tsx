import Image from "next/image";
import React from "react";

const ProjectSidebar = () => {
  return (
    <>
      <div className="bg-primary w-[20%] h-[25rem] rounded-3xl">
        <div className="p-6 flex flex-col gap-6">
          <div className="flex gap-4">
            <Image
              src={"/img/assets/andra-logo.png"}
              alt=""
              width={40}
              height={40}
              className="bg-white rounded-full"
            />
            <h3 className="font-semibold text-white text-md">Andranovia</h3>
          </div>
          <div className="flex items-center gap-4 bg-zinc-800 p-2 rounded-md">
            <Image
              src={"https://img.icons8.com/ios/50/FFFFFF/pin--v1.png"}
              alt=""
              width={20}
              height={20}
              className="w-4 h-4"
            />
            <h3 className="font-thin text-white text-md">Pinned</h3>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4  p-2 rounded-md">
              <Image
                src={
                  "https://img.icons8.com/ios/50/FFFFFF/expand-arrow--v1.png"
                }
                alt=""
                width={20}
                height={20}
                className="w-4 h-4"
              />
              <h3 className="font-thin text-white text-md">Project</h3>
            </div>
            <div className="px-2">
              <div className="flex items-center gap-4  p-2 rounded-md">
                <Image
                  src={
                    "https://img.icons8.com/material-outlined/24/FFFFFF/folder-invoices--v1.png"
                  }
                  alt=""
                  width={20}
                  height={20}
                  className="w-4 h-4"
                />
                <h3 className="font-thin text-white text-md">SMKNUSA</h3>
              </div>

              <div className="flex items-center gap-4  p-2 rounded-md">
                <Image
                  src={
                    "https://img.icons8.com/material-outlined/24/FFFFFF/folder-invoices--v1.png"
                  }
                  alt=""
                  width={20}
                  height={20}
                  className="w-4 h-4"
                />
                <h3 className="font-thin text-white text-md">Noirythm</h3>
              </div>
              <div className="flex items-center gap-4  p-2 rounded-md">
                <Image
                  src={
                    "https://img.icons8.com/material-outlined/24/FFFFFF/folder-invoices--v1.png"
                  }
                  alt=""
                  width={20}
                  height={20}
                  className="w-4 h-4"
                />
                <h3 className="font-thin text-white text-md">Society</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSidebar;
