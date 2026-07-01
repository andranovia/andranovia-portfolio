
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
  const yThree = useTransform(scrollYProgress, [0, 1], [isMobile ? 100 : 400, 30]);
  const yFour = useTransform(scrollYProgress, [0, 1], [isMobile ? -20 : 100, 1]);
  const yFive = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 100 : 500, 40]
  );

  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);
  const rotateTwo = useTransform(scrollYProgress, [0, 1], [2, -2]);
  const rotateThree = useTransform(scrollYProgress, [0, 1], [-1, 2]);
  const rotateFour = useTransform(scrollYProgress, [0, 1], [8, 4]);
  const rotateFive = useTransform(scrollYProgress, [0, 1], [2, -3]);



  const images = [
    {
      id: 1,
      name: "Sonder",
      img: "/img/about/image-1.jpg",
      style: "max-w-32 xs:max-w-40 sm:max-w-40 md:max-w-44 lg:max-w-60 xl:max-w-80 1xl:max-w-none top-[4.5rem] xs:top-[36%] md:top-[10%] lg:top-[0%] xl:top-auto -left-[4%] md:left-2 xl:left-[6%] 1xl:left-0",
      desktop: { y, rotate },
      mobile: { initial: { y: -50, rotate: -3 }, animate: { y: -10, rotate: 3 } }
    },
    {
      id: 2,
      name: "Limerence",
      img: "/img/about/image-2.jpg",
      style: "max-w-36 xs:max-w-48 md:max-w-48 lg:max-w-56 xl:max-w-72 1xl:max-w-none top-10 xs:top-4 md:top-[20%] lg:top-[4%] xl:top-[4%] 1xl:top-0 -left-[24%] sm:-left-[30%] md:-left-[34%] lg:-left-[44%] xl:-left-[48%] 1xl:-left-[38%]",
      desktop: { y: yTwo, rotate: rotateTwo },
      mobile: { initial: { y: 50, rotate: 2 }, animate: { y: 1, rotate: -2 } }
    },
    {
      id: 3,
      name: "Vellichor",
      img: "/img/about/image-3.jpg",
      style: "max-w-28 xs:max-w-32 md:max-w-52 lg:max-w-56 xl:max-w-72 1xl:max-w-none -top-[4rem] xs:-top-[6rem] sm:-top-[6rem] md:top-[40%] lg:top-[20%] xl:top-[24%] 1xl:top-[30%] -left-[8%] xs:-left-[14%] sm:-left-[10%] md:-left-[18%] lg:-left-[27%] xl:-left-[20%] 1xl:-left-[20%]",
      desktop: { y: yThree, rotate: rotateThree },
      mobile: { initial: { y: 100, rotate: -1 }, animate: { y: 30, rotate: 2 } }
    },
    {
      id: 4,
      name: "Apricity",
      img: "/img/about/image-4.jpg",
      style: "max-w-28 xs:max-w-36 md:max-w-40 lg:max-w-44 xl:max-w-52 1xl:max-w-none -top-[15rem] xs:-top-[20rem] md:top-[20%] lg:top-16 xl:top-14 1xl:top-20 left-[22%] sm:left-[28%] md:left-[35%] lg:left-[44%] xl:left-[60%] 1xl:left-[38%]",
      desktop: { y: yFour, rotate: rotateFour },
      mobile: { initial: { y: -20, rotate: 8 }, animate: { y: 1, rotate: 4 } }
    },
    {
      id: 5,
      name: "Solitude",
      img: "/img/about/image-5.jpg",
      style: "max-w-16 md:max-w-24 lg:max-w-28 xl:max-w-40 1xl:max-w-40 -top-[27rem] xs:-top-[32rem] sm:-top-[33rem] md:top-[37%] lg:top-40 xl:top-[20%] 1xl:top-[28%] left-[12%] md:left-[12%] lg:left-[10%] xl:left-[30%] 1xl:left-[6%]",
      desktop: { y: yFive, rotate: rotateFive },
      mobile: { initial: { y: 100, rotate: 2 }, animate: { y: 40, rotate: -3 } }
    },
  ];

  return (
    <React.Fragment>


      {images.map((image, index) => {

        const mobileMotionProps = {
          initial: { opacity: 0, y: image.mobile.initial.y, rotate: image.mobile.initial.rotate },
          animate: { opacity: 1, y: image.mobile.animate.y, rotate: image.mobile.animate.rotate },
          viewport: { once: true, amount: 0.4 },
          transition: {
            duration: 0.6,
            delay: image.id * 0.04,
            ease: [0.22, 1, 0.36, 1],
          },
        };

        const desktopMotionProps = {
          style: { y: image.desktop.y, rotate: image.desktop.rotate },
        };

        return (
          <motion.div
            className="w-full h-full flex items-center justify-center md:absolute lg:absolute"
            key={image.id}
            ref={work}
            {...(isMobile ? mobileMotionProps : desktopMotionProps)}
          >
            <div
              className={` flex justify-center items-center lg:mb-0    w-full h-full `}
            >
              <div className={`rounded-sm bg-white p-1 1xl:p-3 pb-0 overflow-hidden shadow-sm relative ${image.style}`}>
                <Image
                  src={image.img}
                  alt="myselves-image"
                  width={400}
                  height={300}
                />
                <p className=" text-primary text-[0.6rem] 1xl:text-xs py-0.5 1xl:py-1">{image.name}</p>
              </div>
            </div>
          </motion.div>
        )
      }

      )}
    </React.Fragment>
  );
};

export default AboutAnimatedImages;
