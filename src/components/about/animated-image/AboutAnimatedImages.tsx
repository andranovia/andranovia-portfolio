
'use client'

import { useMediaQuery } from "@uidotdev/usehooks";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const AboutAnimatedImages = () => {
  const work = useRef(null);
  const isMobile = useMediaQuery("(max-width: 576px)");

  const { scrollYProgress } = useScroll({
    target: work,
    offset: ["start end", "end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [isMobile ? -50 : -200, -10]);
  const yTwo = useTransform(scrollYProgress, [0, 1], [isMobile ? 50 : 200, 1]);
  const yThree = useTransform(scrollYProgress, [0, 1], [isMobile ? 100 :400, 30]);
  const yFour = useTransform(scrollYProgress, [0, 1], [isMobile ? 40 :100, 1]);
  const yFive = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 100 :500, 40]
  );

  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);
  const rotateTwo = useTransform(scrollYProgress, [0, 1], [2, -2]);
  const rotateThree = useTransform(scrollYProgress, [0, 1], [-1, 2]);
  const rotateFour = useTransform(scrollYProgress, [0, 1], [-3, 4]);
  const rotateFive = useTransform(scrollYProgress, [0, 1], [2, -3]);



  const images = [
    {
      img: "/img/myselves/image-1.jpg",
      style: "xl:max-w-80 1xl:max-w-none max-w-28 xs:max-w-32 top-[6rem]  md:max-w-44 xs:top-[90%] md:top-[10%] xl:left-[6%] 1xl:left-0 lg:max-w-60 lg:top-[0%] xl:top-auto",
      y: y,
      rotate: rotate
    },
    {
      img: "/img/myselves/image-2.jpg",

      y: yTwo,
      style: " 1xl:-left-[36%] xl:-left-[48%] max-w-28  xs:max-w-36 md:max-w-52 -left-[24%] top-4 xs:-top-[10%] md:top-[20%] md:-left-[30%] 1xl:top-0 xl:top-[4%] xl:max-w-72 1xl:max-w-none lg:top-[4%] lg:-left-[40%] lg:max-w-64  ",
      rotate: rotateTwo
    },
    {
      img: "/img/myselves/image-3.jpg",

      y: yThree,
      style: "1xl:top-[27%] md:max-w-52 xs:max-w-32 max-w-28 -left-[14%] -top-[2rem] xs:-top-[80%] md:top-[40%] md:-left-[18%] 1xl:-left-[20%] lg:-left-[27%] lg:top-[20%] lg:max-w-56 xl:max-w-72  1xl:max-w-none  xl:top-[24%] xl:-left-[20%]",
      rotate: rotateThree
    },
    {
      img: "/img/myselves/image-4.jpg",

      y: yFour,
      style: " 1xl:left-[36%] max-w-24 xs:max-w-28 -top-[11rem] xs:-top-[14rem] left-[24%] md:max-w-40 md:top-[20%] md:left-[35%] lg:left-[44%] lg:max-w-44 lg:top-16 1xl:top-20  xl:left-[60%] xl:top-14 xl:max-w-52 1xl:max-w-none",
      rotate: rotateFour
    },
    {
      img: "/img/myselves/image-5.jpg",

      y: yFive,
      style:
        " 1xl:left-[6%] max-w-16 left-[12%] -top-[18rem] xs:-top-[21rem] md:max-w-24 md:top-[37%] md:left-[12%] lg:left-[10%] lg:max-w-28 lg:top-40  1xl:top-[26%] left-10 -top-[14rem] xl:max-w-40 1xl:max-w-40  xl:left-[30%] xl:top-[20%] ",
      rotate: rotateFive
    },
  ];


  return (
    <React.Fragment>


      {images.map((image, index) => (
        <motion.div
          style={{ y: image.y, rotate: image.rotate }}
          className="w-full h-full flex items-center justify-center md:absolute lg:absolute"
          key={index}
          ref={work}
        >
          <div
            className={` flex justify-center items-center lg:mb-0    w-full h-full `}
          >
            <Image
              src={image.img}
              alt="myselves-image"
              width={400}
              height={300}
              className={`md:relative relative rounded-sm  ${image.style}`}
            />
          </div>
        </motion.div>
      ))}


    </React.Fragment>
  );
};

export default AboutAnimatedImages;
