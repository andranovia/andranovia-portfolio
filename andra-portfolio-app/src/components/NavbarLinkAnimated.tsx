import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";

interface props {
  imgLogo: string;
  text: string;
  isMobile: boolean;
}

const NavbarLinkAnimated = ({ imgLogo, text, isMobile }: props) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.li className={`cursor-pointer text-center     `}>
      <motion.div
        initial={false}
        animate={{ y: isHovered ? 0 : 10, scale: isHovered ? 1.2 : 1 }}
      >
        <div className="flex justify-center opacity-70 relative  hover:opacity-100 bottom-2 sm:bottom-0 ">
          <motion.div
            initial={
              isMobile
                ? {
                    y: 0,
                    scale: 0,
                  }
                : {}
            }
            animate={
              isMobile
                ? {
                    y: 10,
                    scale: 2,
                  }
                : {
                    y: isHovered ? 0 : 10,
                    scale: isHovered ? 1.2 : 1,
                    opacity: isHovered ? 1 : 0,
                  }
            }
          >
            <Image width={24} height={24} src={imgLogo} alt="home-page" className="w-4" />
          </motion.div>
        </div>
        <Link
          activeClass="active"
          to="Navbar"
          spy={true}
          smooth={true}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`p-1 rounded-md relative transition-all w-min-content
                        before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-cyan-300 before:transition-all before:duration-500
                        ${
                          isHovered
                            ? "hover:before:w-full hover:before:left-0 hover:before:bg-cyan-400"
                            : ""
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
