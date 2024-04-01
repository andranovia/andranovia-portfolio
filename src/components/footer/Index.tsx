import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Marquee from "react-fast-marquee";

const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const footerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const socialData = ["Github", "LinkedIn", "Instagram"];

  return (
    <>
      <motion.div style={{ scale }}>{children}</motion.div>
      <motion.div
        style={{ y }}
        className="bg-primary overflow-hidden flex flex-col items-center"
        ref={footerRef}
      >
        <Marquee autoFill>
          <div className="flex justify-center items-center ">
            <h1 className="text-[14rem] font-semibold text-white">
              ANDRANOVIA
            </h1>
            <Image
              src={"/img/assets/star-image.png"}
              alt="arrow-right"
              width={200}
              height={200}
              className="mx-4"
            />
          </div>
        </Marquee>
        <div className="px-[10%] mt-10 w-full flex justify-start gap-[14%] items-start">
          <div className="flex flex-col items-start gap-4 text-3xl font-thin text-gray-300 pb-4">
            {socialData.map((text, index) => (
              <React.Fragment key={index}>
                <h1
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`cursor-pointer p-1 rounded-md relative transition-all w-min-content
                        before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-secondary before:transition-all before:duration-500
                        ${
                          isHovered
                            ? "hover:before:w-full hover:before:left-0 hover:before:before:bg-secondary"
                            : ""
                        }
                       `}
                >
                  {text}
                </h1>
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-col items-start gap-4 text-3xl font-thin text-gray-300 pb-4">
            <h1 className="font-semibold">Say Some</h1>
            <h1 className="cursor-pointer">yeromrenandra07@gmail.com</h1>
          </div>
          <div className="flex flex-col items-start gap-4 text-3xl font-thin text-gray-300 pb-4">
            <h1 className="font-semibold">Say More</h1>
            <h1 className="cursor-pointer">+62 823 3039 0858</h1>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
