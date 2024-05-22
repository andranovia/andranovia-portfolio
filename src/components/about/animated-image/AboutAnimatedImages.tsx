import useMobileDetect from "@/utils/useMobileDetect";
import {
  useScroll,
  useTransform,
  motion,
  PanInfo,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const AboutAnimatedImages = () => {
  const work = useRef(null);
  const { isMobile, isTablet } = useMobileDetect();

  const { scrollYProgress } = useScroll({
    target: work,
    offset: ["start end", "end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 1]);
  const yTwo = useTransform(scrollYProgress, [0, 1], [200, 1]);
  const yThree = useTransform(scrollYProgress, [0, 1], [400, 1]);
  const yFour = useTransform(scrollYProgress, [0, 1], [100, 1]);
  const yFive = useTransform(
    scrollYProgress,
    [0, 1],
    [500, 1]
  );

  const images = [
    {
      img: "/img/myselves/image-1.jpg",
   
      y: y,
    },
    {
      img: "/img/myselves/image-2.jpg",
  
      y: yTwo,
      style: " lg:-left-[36%] md:-left-[22%]",
    },
    {
      img: "/img/myselves/image-3.jpg",
 
      y: yThree,
      style: "lg:top-[27%] lg:-left-[20%]  md:top-[44%] md:-left-[14%]",
    },
    {
      img: "/img/myselves/image-4.jpg",
   
      y: yFour,
      style: " lg:left-[36%] lg:top-20  md:left-[22%] md:top-14  ",
    },
    {
      img: "/img/myselves/image-5.jpg",
   
      y: yFive,
      style:
        " lg:left-[10%]  lg:top-[24%] left-10 -top-[14rem] max-w-40  md:left-[10%] md:mt-20 ",
    },
  ];
  const startIndex = 0;
  const dragThreshold = 30;
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
      {isMobile && !isTablet ? (
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
              style={{  y: image.y }}
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
                  className={`md:relative lg:relative rounded-sm  ${image.style}`}
                />
              </div>
            </motion.div>
          ))}
        </>
      )}
    </React.Fragment>
  );
};

export default AboutAnimatedImages;
