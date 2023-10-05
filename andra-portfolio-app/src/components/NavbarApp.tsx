import React from "react";
import NavbarLinkApp from "./NavbarLinkApp";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-12 sm:fixed sm:right-0 sm:left-0 pt-10  flex justify-center text-black z-20  ">
      <div className="flex justify-center  items-center font-semibold ">
        <div className="relative flex justify-center ">
          {isMobile && (
            <div className="">
              <NavbarLinkApp isMobile={isMobile} />
            </div>
          )}

          {!isMobile && (
            <div>
              <NavbarLinkApp isMobile={isMobile} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
