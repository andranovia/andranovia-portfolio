import React from "react";
import NavbarLinkAnimated from "./NavbarLinkAnimated";

const NavbarLinkApp = () => {
  return (
    <div className="flex justify-center ml-28 items-center font-semibold ">
      <div className="relative flex justify-center ">
      <ul className="list-none flex gap-8 mr-20 text-lg ">
        <NavbarLinkAnimated
          imgLogo={"https://img.icons8.com/sf-regular-filled/48/home-page.png"}
          text={"Home"}
        />
        <NavbarLinkAnimated
          imgLogo={"https://img.icons8.com/material/24/person-male.png"}
          text={"About"}
        />
        <NavbarLinkAnimated
          imgLogo={"https://img.icons8.com/sf-regular-filled/48/home-page.png"}
          text={"Experience"}
        />
        <NavbarLinkAnimated
          imgLogo={"https://img.icons8.com/material/24/experience-skill.png"}
          text={"Project"}
        />
        </ul>
      </div>
    </div>
  );
};

export default NavbarLinkApp;
