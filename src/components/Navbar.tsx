import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useResize } from "@/hooks/useResize";
import NavbarLink from "./NavbarLink";
import { motion } from "framer-motion";
import { debounce } from "lodash";

const Navbar: React.FC = () => {
  const { isMobile } = useResize();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = debounce(() => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }, [100]);

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className="h-12 sm:fixed sm:right-0 sm:left-0 pt-10 top-10  flex justify-center text-black z-50  ">
      <div className="flex justify-center  items-center font-semibold ">
        <div className="relative flex justify-center left-12 z-50">
          {isMobile && (
            <div className="fixed  bottom-0 mb-6 left-16 shadow-2xl bg-white rounded-full flex justify-between items-center gap-20 p-2">
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
            <motion.div animate={{ y: show ? 1 : -110, opacity: show ? 1 : 1 }}>
              <div className="h-full w-full  shadow-[rgba(0.1,_0.1,_0.1,_0.1)_0px_30px_90px]  bg-white  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-full">
                <NavbarLink />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
