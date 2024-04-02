import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { debounce } from "lodash";
import { Link } from "react-scroll";

const NavbarLink = dynamic(() => import("./NavbarLink"), {
  ssr: false,
});

const Navbar: React.FC = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownControls = useAnimation();

  const handleOpenDropdown = () => {
    dropdownControls.start("animate");
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const linkData = [
    {
      linkName: "Home",
      linkRef: "Hero",
      linkLogo: "https://img.icons8.com/sf-regular-filled/48/home-page.png",
    },
    {
      linkName: "About",
      linkRef: "About",
      linkLogo: "https://img.icons8.com/material/24/person-male.png",
    },
    {
      linkName: "Project",
      linkRef: "Project",
      linkLogo: "https://img.icons8.com/sf-regular-filled/48/home-page.png",
    },
    {
      linkName: "FAQ",
      linkRef: "FAQ",
      linkLogo: "https://img.icons8.com/material/24/experience-skill.png",
    },
  ];

  return (
    <div className="w-full lg:h-12 lg:fixed sm:right-0 sm:left-0 pt-10 top-10  flex justify-center text-black z-50  ">
      <div className="w-full flex justify-center  items-center font-semibold ">
        <div className="w-full relative flex justify-center left-12 z-50">
          <div className="fixed lg:hidden   bottom-0 mb-6 left-16 overflow-hidden pt-52 rounded-lg">
            <div className="relative z-40 shadow-2xl overflow-y-hidden  bg-white rounded-full flex justify-between items-center gap-20 p-2">
              <h1 className="text-center mr-20 pl-4">MENU</h1>
              <button onClick={() => handleOpenDropdown()}>
                <Image
                  src={"https://img.icons8.com/ios/50/mail-filter.png"}
                  alt="Mail"
                  width={20}
                  height={20}
                  priority
                  className="w-8 h-8"
                />
              </button>
            </div>
            <AnimatePresence>
              {showDropdown && (
                <div className="absolute left-5 shadow-xl ">
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={{
                      initial: { opacity: 0, scale: 0.85, y: -200 },
                      animate: { opacity: 1, scale: 1, y: -310 },
                      exit: { opacity: 1, y: -100 },
                    }}
                    transition={{
                      type: "spring",
                      mass: 0.5,
                      damping: 11.5,
                      stiffness: 100,
                      restDelta: 0.001,
                      restSpeed: 0.001,
                    }}
                    className="w-[14rem] flex justify-center items-center mt-14 z-20 rounded-b-[10px] rounded-r-[10px] bg-white py-4  overflow-hidden"
                  >
                    <div className="flex justify-start px-4 items-center gap-4  w-full  py-2">
                      <div className="flex flex-col gap-4 items-start justify-center w-full">
                        {linkData.map((link, index) => (
                          <React.Fragment key={index}>
                            <Link
                              activeClass="active"
                              to={link.linkRef}
                              spy={true}
                              smooth={true}
                              className="flex justify-between items-center w-full"
                            >
                              <h2 className=" font-[600] text-[16px] ">
                                {link.linkName}
                              </h2>
                              <Image
                                src={link.linkLogo}
                                alt={link.linkLogo}
                                width={20}
                                height={40}
                                className="w-4 h-4 "
                              />
                            </Link>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            animate={{ y: show ? 1 : -110, opacity: show ? 1 : 1 }}
            className="hidden lg:block"
          >
            <div className="h-full w-full  shadow-[rgba(0.1,_0.1,_0.1,_0.1)_0px_30px_90px]  bg-white  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-full">
              <NavbarLink linkData={linkData} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
