import useMobileDetect from "@/utils/useMobileDetect";
import { useScroll, useTransform, motion, useAnimation, PanInfo, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const HeroAnimatedImages = () => {
  const work = useRef(null);
  const isMobile = useMobileDetect();

  const { scrollYProgress } = useScroll({
    target: work,
    offset: ["start end", "end"],
  });


  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scaleTwo = useTransform(scrollYProgress, [0, 1], [3, 1]);
  const scaleThree = useTransform(scrollYProgress, [0, 1], [4, 1]);
  const scaleFour = useTransform(scrollYProgress, [0, 1], [2.4, 1]);
  const scaleFive = useTransform(scrollYProgress, [0, 1], [0.8, 0.4]);

  const y = useTransform(scrollYProgress, [0, 1], [-200, 1]);
  const yTwo = useTransform(scrollYProgress, [0, 1], [200, 1]);
  const yThree = useTransform(scrollYProgress, [0, 1], [100, 1]);
  const yFour = useTransform(scrollYProgress, [0, 1], [140, 1]);
  const yFive = useTransform(
    scrollYProgress,
    [0, 1],
    [300, isMobile ? 1 : 200]
  );

  
  const images = [
    {
      img: "/img/myselves/image-1.jpg",
      scale: scale,
      y: y,
    },
    {
      img: "/img/myselves/image-2.jpg",
      scale: scaleTwo,
      y: yTwo,
      style: " lg:-left-[36%]",
    },
    {
      img: "/img/myselves/image-3.jpg",
      scale: scaleThree,
      y: yThree,
      style: "lg:top-[27%] lg:-left-[20%]  ",
    },
    {
      img: "/img/myselves/image-4.jpg",
      scale: scaleFour,
      y: yFour,
      style: " lg:left-[36%] lg:top-20  ",
    },
    {
      img: "/img/myselves/image-5.jpg",
      scale: scaleFive,
      y: yFive,
      style: " lg:left-[20%] lg:top-[20%] left-10 -top-[14rem] ",
    },
  ];
  const startIndex = 0;
  const dragThreshold = 50;
  const fallbackWidth = 100;
  const containerRef = useRef<HTMLDivElement>(null);
  const canScrollPrev = startIndex > 0;
  const canScrollNext = startIndex < images.length - 1;
  const maxLeftSlide = -280;
  const maxRightSlide = 280;
  const xValue = 350;
  const offsetX = useMotionValue(xValue);
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 150,
  });

  function handleDragSnap(
    _: MouseEvent,
    { offset: { x: dragOffset } }: PanInfo
  ) {
    containerRef.current?.removeAttribute("data-dragging");

    animatedX.stop();

    const currentOffset = animatedX.get();

    if (
      Math.abs(dragOffset) < dragThreshold ||
      (!canScrollPrev && dragOffset > 0) ||
      (!canScrollNext && dragOffset < 0)
    ) {
      if (currentOffset > maxRightSlide) {
        animatedX.set(maxRightSlide);
      } else {
        animatedX.set(currentOffset);
      }
    } else {
      animatedX.set(maxLeftSlide);
    }
  }
  

  return (
    <React.Fragment>
      {isMobile ? (
        <>
        <motion.div
        ref={containerRef}
        style={{
          x: animatedX,
        }}
        drag="x"
        onDragStart={() => {
          containerRef.current?.setAttribute("data-dragging", "true");
        }}
        onDragEnd={handleDragSnap}
        dragConstraints={{
          left: -(fallbackWidth * (images.length - 1)),
          right: fallbackWidth,
        }}
            className={`lg:relative flex gap-4  justify-center items-center lg:mb-0    w-full h-full `}
            >
          {images.map((image, index) => (
              <React.Fragment key={index}>
              <Image
                src={image.img}
                alt="myselves-image"
                width={400}
                height={300}
                className="rounded-sm max-w-40 lg:max-w-none  lg:w-fit"
              />
              </React.Fragment>
          ))}
             </motion.div>
        </>
      ) : (
        <>
          {images.map((image, index) => (
            <motion.div
              style={{ scale: image.scale, y: image.y }}
              className="w-full h-full flex items-center justify-center lg:absolute"
              key={index}
              ref={work}
            >
              <div
                className={`lg:relative flex justify-center items-center lg:mb-0    w-full h-full ${image.style}`}
              >
                <Image
                  src={image.img}
                  alt="myselves-image"
                  width={400}
                  height={300}
                  className="rounded-sm max-w-40 lg:max-w-none"
                />
              </div>
            </motion.div>
          ))}
        </>
      )}
    </React.Fragment>
  );
};

export default HeroAnimatedImages;
