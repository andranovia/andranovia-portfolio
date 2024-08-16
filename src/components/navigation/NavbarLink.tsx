import React, { useEffect } from "react";
import NavbarLinkAnimated from "./NavbarLinkAnimated";
import {motion, useAnimation} from "framer-motion"
import { useScrollContext } from "@/contexts/ActiveSectionContext";
import { defaultTransition } from "@/utils/transition";

type NavbarLinkProps = {
  linkData: {
    linkName: string;
    linkRef: string;
    linkLogo: string;
  }[];
};

const NavbarLink = ({ linkData }: NavbarLinkProps) => {
  const { activeSection } = useScrollContext();
  const navHighlight = useAnimation()

  useEffect(() => {
    
   switch(activeSection){
    case "Hero":
      navHighlight.start({x: 0})
      break;
    case "About":
      navHighlight.start({x: 122.15})
      break;
    case "Project":  
      navHighlight.start({x: 247.3})
      break;
    case "FAQ":
      navHighlight.start({x: 358.6})
      break;
    default:
      navHighlight.start({x: 0})
   }

  }, [activeSection]);

  return (
    <div className="flex justify-center  w-full  items-center font-semibold  rounded-full p-1 ">
      <div className="relative flex justify-center w-full h-ful backdrop-filter bg-opacity-25 rounded-lg ">
        <ul className=" list-none flex gap-2 items-center  text-lg relative ">
        <motion.div initial={false} animate={navHighlight} transition={defaultTransition} className="w-[6.384rem] h-[2.475rem] bg-[#e5e7eb] absolute left-1 rounded-md"/>
          {linkData.map((link, index) => (
            <React.Fragment key={index}>
              <NavbarLinkAnimated
                imgLogo={link.linkLogo}
                text={link.linkName}
                linkTo={link.linkRef}
              />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarLink;
NavbarLink.displayName = "NavbarLink";
