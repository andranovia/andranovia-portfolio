import React from "react";
import NavbarLinkAnimated from "./NavbarLinkAnimated";

type NavbarLinkProps = {
  linkData: {
    linkName: string;
    linkRef: string;
    linkLogo: string;
  }[];
};

const NavbarLink = ({ linkData }: NavbarLinkProps) => {
  return (
    <div className="flex justify-center  w-full  items-center font-semibold  rounded-full p-1 ">
      <div className="relative flex justify-center w-full h-full  bg-white backdrop-filter backdrop-blur-sm  bg-opacity-25 rounded-full ">
        <ul className="px-4 list-none flex gap-8 items-center  text-lg relative bottom-4  ">
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
