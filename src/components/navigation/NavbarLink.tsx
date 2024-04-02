import React from "react";
import NavbarLinkAnimated from "./NavbarLinkAnimated";

const NavbarLink = () => {
  return (
    <div className="flex justify-center  w-full  items-center font-semibold  rounded-full p-1 ">
      <div className="relative flex justify-center w-full h-full bg-white backdrop-filter backdrop-blur-sm  bg-opacity-25 rounded-full ">
        <ul className="px-4 list-none flex gap-8 items-center text-lg relative bottom-4 text-primary ">
          <NavbarLinkAnimated
            imgLogo={
              "https://img.icons8.com/sf-regular-filled/48/home-page.png"
            }
            text={"Home"}
            linkTo="Hero"
          />
          <NavbarLinkAnimated
            imgLogo={"https://img.icons8.com/material/24/person-male.png"}
            text={"About"}
            linkTo="About"
          />
          <NavbarLinkAnimated
            imgLogo={
              "https://img.icons8.com/sf-regular-filled/48/home-page.png"
            }
            text={"Project"}
            linkTo="Project"
          />
          <NavbarLinkAnimated
            imgLogo={"https://img.icons8.com/material/24/experience-skill.png"}
            text={"FAQ"}
            linkTo="FAQ"
          />
        </ul>
      </div>
    </div>
  );
};

export default NavbarLink;
NavbarLink.displayName = "NavbarLink";
