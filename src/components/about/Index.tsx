import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { useAnimation, useInView } from "framer-motion";
import { GridCardSkillAnimation } from "./grid-card/GridCardSkillAnimation"
import AboutImages from "./animated-image/Index";
import { useMediaQuery } from "react-responsive";
import { Signature } from "../animated/SignatureText";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const TextControls = useAnimation();
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 424px)" });

  useEffect(() => {
    isInView && TextControls.start("animate");
  }, [isInView, TextControls]);

  const getFontSize = useCallback(() => {
    if (isMobile) {
      return 27;
    } else if (isTablet) {
      return 37;
    }
    return 47;
  }, [isMobile, isTablet]);




  return (
    <>
      <div className="relative md:mb-40 mt-0 md:mt-32 1xl:mt-0 max-w-base-content xs:max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-max-container flex justify-center items-center lg:w-screen xl:p-8 font-caveat text-primary">
        <div className="xl:w-[80%] w-full flex flex-col  items-center  sm:justify-start  ">
          <div className="w-full flex flex-col-reverse  justify-start md:flex-row lg:flex-row  sm:mx-0 items-center">
            <div className="w-1/4 " ref={ref}>
              <div className="absolute -left-16 sm:-left-20  lg:-left-32 -top-4 lg:-top-8 xl:-left-16 xl:-top-6 1xl:left-0 1xl:top-0">
                <Image
                  src={
                    "/img/assets/drarrow.png"
                  }
                  alt=""
                  width={260}
                  height={260}
                  className="w-[16rem] md:w-[12rem] lg:w-[16rem] xl:w-[20rem] 1xl:w-[25vw] max-w-[360px]"
                />
              </div>
            </div>
            <div className=" flex justify-start flex-col lg:mx-14 mx-4  text-primary lg:w-full">
              <div className="flex justify-start w-full items-start gap-4 ">
                <div className="">
                  <Signature text="The Portrait of My Soul" fontSize={getFontSize()} duration={0.2} className="relative -left-6 -bottom-[72px] md:bottom-6 1xl:-bottom-4" color="#303841" />
                </div>
              </div>
              <h1 className="text-sm xl:text-lg relative -bottom-14 md:bottom-0  md:-mt-8 1xl:mt-0">
                Allow me to present a brief chronicle of who I am.
              </h1>
            </div>
          </div>


          <div className="container flex flex-col gap-0 mt-16 md:mt-10 ">
            <div className="flex justify-center items-center gap-4 mb-6 ">
              <div className="flex-1 h-[2px] bg-base rounded-md" />
              <p>Chapter II</p>
            </div>

            <div className="relative -left-[4vw] xs:-left-6">
              <Image
                src="/img/about/q.png"
                alt=""
                width={120}
                height={120}
                className="relative float-left top-2 -right-2 xs:-right-0 lg:-right-10  w-[100px] sm:w-auto"
              />
              <Image
                src="/img/about/owl.png"
                alt=""
                width={230}
                height={400}
                className="absolute float-right top-0 -right-32 md:-right-28 lg:-right-10 xl:right-0 -mr-6 md:-mr-[30%] 1xl:-mr-20 w-[13rem] md:w-[20rem] 1xl:w-[16rem]"
              />
              <p className="relative -right-2 xs:-right-0 lg:-right-10 1xl:-right-8 mb-10 max-w-[calc(100%-30px)] md:max-w-fit lg:max-w-[calc(100%-100px)] 1xl:max-w-[calc(100%-200px)] font-blackFlag text-[10px] sm:text-xs !leading-6 md:text-base md:!leading-10">
                uem antem quaa unte ecemantes uuta mate reurt Sed pellentesque volutpat nisl, sit amet vulputate mi porttitor vel. Integer in nisl nisi. Nullam fermentum feugiat sodales. Proin eget lacinia urna. Aliquam scelerisque efficitur vestibulum. Maecenas dignissim id leo nec aliquam. Integer in nisl nisi. Nullam fermentum feugiat sodales. Proin eget lacinia urna. Aliquam scelerisque efficitur vestibulum. Maecenas dignissim id leo nec aliquam. Donec velit, vulputate quis scelerisque eget, tempus a nunc.
              </p>
            </div>

            <div className="flex justify-center relative -top-8 md:-top-0 left-[1px] xs:-left-2">
              <Image
                src="/img/about/text.png"
                alt=""
                width={600}
                height={400}
                className="absolute hidden 1xl:flex -top-16 -left-2 mt-8 w-[275px] min-w-[275px] object-cover"
              />
              <div className="relative -left-[25px] 1xl:left-0">
                <div className="relative md:float-left -top-4 1xl:-top-10 2xl:-top-6 -left-4 1xl:-left-12 -ml-20 lg:ml-0 1xl:ml-[26%] w-[20rem]">
                  <GridCardSkillAnimation />
                </div>
                <Image
                  src="/img/about/knot.png"
                  alt=""
                  width={230}
                  height={400}
                  className="absolute float-right -top-[4.9rem] md:-top-20 lg:-top-10 xl:top-[3vw] 1xl:top-[1rem] -right-[8.2rem] md:-right-[7.1rem] lg:-right-10 xl:right-0 -mr-[1.8rem] md:-mr-[31%] 1xl:-mr-[4.3rem] w-[13rem] md:w-[20rem] 1xl:w-[16.5rem]"
                />
                <Image
                  src="/img/about/knot.png"
                  alt=""
                  width={230}
                  height={400}
                  className="absolute float-right top-[42%] -right-[8.2rem] -mr-[1.7rem] w-[13rem] md:hidden"
                />
                <p className="relative -top-7 -right-5 xs:-right-2 md:-right-6 1xl:-right-0 max-w-[calc(100%-30px)] md:max-w-[calc(100%-50px)] lg:max-w-[calc(100%-100px)] 1xl:max-w-[calc(100%-200px)] font-blackFlag text-[10px] sm:text-xs !leading-6 md:text-base md:!leading-10 md:text-right">
                  uem antem quaa unte ecemantes uuta mate reurt Sed pellentesque volutpat nisl, sit amet vulputate mi porttitor vel. Integer in nisl nisi. Nullam fermentum feugiat sodales. Proin eget lacinia urna. Aliquam scelerisque efficitur vestibulum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutImages />
    </>
  );
};
export default About;
