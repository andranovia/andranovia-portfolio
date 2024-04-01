import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import Marquee from "react-fast-marquee";

const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <>
      <motion.div style={{ scale }}>{children}</motion.div>
      <motion.div
        style={{ y }}
        className="bg-primary overflow-hidden "
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
      </motion.div>
    </>
  );
};

export default Footer;
