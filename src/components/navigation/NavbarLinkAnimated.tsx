import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";
import useMobileDetect from "@/utils/useMobileDetect";
import { useScrollContext } from "@/contexts/ActiveSectionContext";

interface props {
  imgLogo: string;
  text: string;
  linkTo: string;
}

const NavbarLinkAnimated = ({ imgLogo, text, linkTo }: props) => {
  const { activeSection } = useScrollContext();

  const { isMobile } = useMobileDetect();

  return (
    <motion.li

      className={` cursor-pointer text-center flex justify-center items-center gap-4`}
    >
    
      <motion.div
        initial={{ scale: 1 }}
        className="flex justify-center items-center flex-row-reverse bg-transparent gap-2 px-4 py-1 rounded-lg"
        animate={{ scale: activeSection === linkTo ? 0.9 : 1}}

      >
        <div className="flex justify-center opacity-70 relative hover:opacity-100 ">
          <motion.div
            initial={isMobile ? { y: 0, scale: 0 } : {}}
            animate={
              isMobile
                ? { y: 10, scale: 2 }
                : {
                  x: activeSection === linkTo ? 0 : 20,
                  scale: activeSection === linkTo ? 0.9 : 1,
                  opacity: activeSection === linkTo ? 1 : 0,
                }
            }
          >
            <Image
              width={24}
              height={24}
              src={imgLogo}
              alt="home-page"
              className="w-4"
            />
          </motion.div>
        </div>
        <Link
          activeClass="active"
          to={linkTo}
          spy={true}
          smooth={true}
          className={` p-1 rounded-md relative transition-all w-min-content
                        before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0  before:bg-transparent before:transition-all before:duration-500
                        ${activeSection === linkTo
              ? "before:w-full hover:before:left-0 before:bg-primary text-[#021526]"
              : "text-gray-500"
            }
                        ${isMobile ? "hidden" : ""}`}
        >
          {text}
        </Link>
      </motion.div>

    </motion.li>
  );
};

export default NavbarLinkAnimated;
NavbarLinkAnimated.displayName = "NavbarLinkAnimated";
