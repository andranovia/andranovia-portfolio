import React from "react";
import NavbarLinkAnimated from "./NavbarLinkAnimated";
import { useResize } from "@/hooks/useResize";

const NavbarLink = () => {
  const { isMobile } = useResize();

  return (
    <div className="flex justify-center sm:w-[30rem] w-0  items-center font-semibold  rounded-full p-1 ">
      <div className="relative flex justify-center w-full h-full bg-white backdrop-filter backdrop-blur-sm  bg-opacity-25 rounded-full ">
        {!isMobile && (
          <ul className="list-none flex gap-8 items-center text-lg relative bottom-4 text-primary ">
            <NavbarLinkAnimated
              imgLogo={
                "https://img.icons8.com/sf-regular-filled/48/home-page.png"
              }
              text={"Home"}
            />
            <NavbarLinkAnimated
              imgLogo={"https://img.icons8.com/material/24/person-male.png"}
              text={"About"}
            />
            <NavbarLinkAnimated
              imgLogo={
                "https://img.icons8.com/sf-regular-filled/48/home-page.png"
              }
              text={"Experience"}
            />
            <NavbarLinkAnimated
              imgLogo={
                "https://img.icons8.com/material/24/experience-skill.png"
              }
              text={"Project"}
            />
          </ul>
        )}

      </div>
    </div>
  );
};

export default NavbarLink;
NavbarLink.displayName = "NavbarLink";
