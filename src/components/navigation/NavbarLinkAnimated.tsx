import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

interface props {
  imgLogo: string;
  text: string;
}

const NavbarLinkAnimated = React.memo(({ imgLogo, text }: props) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setTimeout(() => {
      setHovered(false);
    }, 1000);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <motion.li
      className={` cursor-pointer text-center flex justify-center items-center gap-4`}
    >
      <motion.div
        initial={false}
        animate={{ y: isHovered ? 0 : 10, scale: isHovered ? 1.2 : 1 }}
      >
        <div className="flex justify-center opacity-70 relative hover:opacity-100 bottom-2 sm:bottom-3">
          <motion.div
            initial={isMobile ? { y: 0, scale: 0 } : {}}
            animate={
              isMobile
                ? { y: 10, scale: 2 }
                : {
                    y: isHovered ? 0 : 10,
                    scale: isHovered ? 1.2 : 1,
                    opacity: isHovered ? 1 : 0,
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
          to="Navbar"
          spy={true}
          smooth={true}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`p-1 rounded-md relative transition-all w-min-content
                        before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-secondary before:transition-all before:duration-500
                        ${
                          isHovered
                            ? "hover:before:w-full hover:before:left-0 hover:before:bg-primary"
                            : ""
                        }
                        ${isMobile ? "hidden" : ""}`}
        >
          {text}
        </Link>
      </motion.div>
      <Image
        src={"https://img.icons8.com/ios-filled/50/long-arrow-right.png"}
        alt=""
        width={10}
        height={10}
        className="w-4 h-4 translate-y-5"
      />
    </motion.li>
  );
});

export default NavbarLinkAnimated;
NavbarLinkAnimated.displayName = "NavbarLinkAnimated";
