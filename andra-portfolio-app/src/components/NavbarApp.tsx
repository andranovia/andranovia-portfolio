import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleItemHover = (index: number | null) => {
    setHoveredItem(index);
  };

  return (
    <div className="h-12  pt-10 ml-10 flex justify-center text-black">
      <div className="flex items-center font-semibold ">
        <div className="flex-1 relative">
          <ul className="list-none flex gap-8 mr-20 text-lg">
            <li
              onMouseEnter={() => handleItemHover(0)}
              onMouseLeave={() => handleItemHover(null)}
              className={`transition-all duration-300 relative ${
                hoveredItem === 0 ? "text-hovertext" : "opacity-80"
              }`}
            >
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
              {hoveredItem === 0 && (
                <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-full h-2 bg-hovertext opacity-0 transition-all duration-300"></div>
              )}
            </li>
            <li
              onMouseEnter={() => handleItemHover(1)}
              onMouseLeave={() => handleItemHover(null)}
              className={`transition-all duration-300 relative ${
                hoveredItem === 1 ? "text-hovertext" : "opacity-80"
              }`}
            >
              <Link to="services" spy={true} smooth={true}>
                About
              </Link>
              {hoveredItem === 1 && (
                <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-full h-2 bg-hovertext opacity-0 transition-all duration-300"></div>
              )}
            </li>
            <li
              onMouseEnter={() => handleItemHover(2)}
              onMouseLeave={() => handleItemHover(null)}
              className={`transition-all duration-300 relative ${
                hoveredItem === 2 ? "text-hovertext" : "opacity-80"
              }`}
            >
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
              {hoveredItem === 2 && (
                <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-full h-2 bg-hovertext opacity-0 transition-all duration-300"></div>
              )}
            </li>
            <li
              onMouseEnter={() => handleItemHover(3)}
              onMouseLeave={() => handleItemHover(null)}
              className={`transition-all duration-300 relative ${
                hoveredItem === 3 ? "text-hovertext" : "opacity-80"
              }`}
            >
              <Link to="portfolio" smooth={true}>
                Services
              </Link>
              {hoveredItem === 3 && (
                <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-full h-2 bg-hovertext opacity-0 transition-all duration-300"></div>
              )}
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="flex-2 mr-10">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
