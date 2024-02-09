import React, { useState } from "react";
import Image from "next/image";
import { useResize } from "@/hooks/useResize";
import NavbarLink from "./NavbarLink";

const Navbar: React.FC = () => {
  const {isMobile} = useResize();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);


  return (
    <div className="h-12 sm:fixed sm:right-0 sm:left-0 pt-10 top-10  flex justify-center text-black z-50  ">
      <div className="flex justify-center  items-center font-semibold ">
        <div className="relative flex justify-center left-12 z-20 ">
          {isMobile && (
            <div className="fixed bottom-0 mb-6 left-16 shadow-2xl bg-white rounded-full flex justify-between items-center gap-20 p-2">
              
              <p className="text-center mr-20 pl-4">MENU</p>
              <button>
                <Image
                  src={"https://img.icons8.com/ios/50/mail-filter.png"}
                  alt=""
                  width={20}
                  height={20}
                  className="w-8"
                />
              </button>
            </div>
          )}

          {!isMobile && (
            <div>
              <NavbarLink isMobile={isMobile} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
