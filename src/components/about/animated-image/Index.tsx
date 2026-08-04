import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ReactCurvedText from "react-curved-text";

interface AnimatedImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  initial: { x?: number; y?: number };
}

const animatedImages: AnimatedImage[] = [
  {
    src: "/img/about/theFool/tower.png",
    alt: "Tower",
    width: 160,
    height: 100,
    className: "absolute -mb-[9.2rem] w-[10rem]",
    initial: { y: 50 },
  },
  {
    src: "/img/about/theFool/fool.png",
    alt: "Fool",
    width: 120,
    height: 100,
    className: "absolute w-[5rem] -mr-[4rem] -mb-[10rem]",
    initial: { y: -80 },
  },
  {
    src: "/img/about/theFool/sun.png",
    alt: "Sun",
    width: 120,
    height: 100,
    className: "absolute -mt-[13rem] -ml-12 w-[6rem]",
    initial: { x: 30 },
  },
  {
    src: "/img/about/theFool/trumpet.png",
    alt: "Trumpet",
    width: 100,
    height: 80,
    className: "absolute -mt-[13rem] -mr-20 w-[4rem]",
    initial: { y: 30 },
  },
];

const AboutImages = () => {
  return (
    <div className="relative flex flex-col max-w-base-content xs:max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-max-container w-full xl:w-[80%] mb-32 xl:px-8">

      <div className="flex items-center">
        <Image
          src="/img/about/theFool/frame-fool.png"
          alt="Letter Border"
          width={250}
          height={100}
          className="w-[20rem]"
        />
        <div className="flex flex-col font-blackFlag text-[#0F3040] gap-10 text-5xl -ml-14 -mt-8">
          <h2>The</h2>
          <h2 className="relative -ml-10">ool's <span className="text-[#A08963]">J</span>ourney</h2>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-center items-center font-caveat text-3xl">
        <p className="text-right relative -right-28 w-[20rem]">begin, as one always must, at zero. Not because there is nothing to say, but because everything worth telling starts before the first step is taken — before the bag is packed, before the road is chosen, before anyone can tell you it's a foolish thing to do</p>
        <div className="flex justify-center items-center">

          <Image
            src="/img/about/theFool/border.jpg"
            alt="Letter Border"
            width={250}
            height={100}
            className="w-[15rem]"
          />

          {animatedImages.map((img, index) => (
            <motion.div
              key={index}
              initial={img.initial}
              whileInView={{ x: 0, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={img.className}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
              />
            </motion.div>
          ))}

        </div>
        <p className="text-left -ml-14 w-[20rem]">I have made a habit of walking toward the edge of what I know. Some would call it recklessness. I've come to think of it as the only honest way to learn anything — by not yet knowing what happens next, and choosing to go and find out anyway.</p>

      </div>
    </div>
  );
};

export default AboutImages;