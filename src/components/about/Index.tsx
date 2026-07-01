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
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });

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

      <div className="relative md:mt-40 1xl:mt-4 max-w-base-content xs:max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content 1xl:max-w-max-container flex justify-center items-center lg:w-screen mt-0 xl:p-8 font-caveat text-primary">
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


          <div className="container flex flex-col mt-10 1xl:mt-20 gap-6">
            <div className="flex justify-center items-center gap-4 ">
              <div className="h-[2px] flex-1 bg-base rounded-md" />
              <p>Chapter  II</p>
            </div>
            <div className="-left-6 relative">
              <Image src="/img/about/q.png" alt="" width={120} height={120} className="float-left top-2 relative -right-10" />
              <Image src="/img/about/owl.png" alt="" width={200} height={400} className="float-right top-0 relative -mr-16" />
              <p className="font-blackFlag leading-10 relative -right-10 1xl:-right-8">
                uem antem quaa unte ecemantes uuta mate reurt Sed pellentesque volutpat nisl, sit amet vulputate mi porttitor vel. Integer in nisl nisi. Nullam fermentum feugiat sodales. Proin eget lacinia urna. Aliquam scelerisque efficitur vestibulum. Maecenas dignissim id leo nec aliquam. Donec sapien velit, vulputate quis scelerisque eget, tempus a nunc. Suspendisse suscipit ligula at euismod suscipit.
              </p>
                  <GridCardSkillAnimation/>
            </div>

           




            {/* <div className="md:grid grid-cols-2 1xl:flex justify-center  items-center  gap-10  ">
              {isTablet ? <GridCardAnimatedHello /> : null}
              <div className="flex flex-col justify-center w-full h-full 1xl:w-1/2 sm:items-end items-center gap-4">
                <div className=" w-full rounded-xl">
                  <div className="font-semibold text-2xl     rounded-xl items-start flex flex-col 1xl:flex-row justify-center  text-center sm:text-start gap-4 pt-2">
                    {!isTablet ? <GridCardAnimatedHello /> : null}

                    {/* <div className="flex relative justify-center text-start  bg-white flex-col items-center border w-full 1xl:w-1/3 1xl:h-40 py-6 rounded-lg gap-2 ">
                      <div className="flex justify-center items-center gap-4 1xl:gap-2">
                        <h1 className="font-semi bold text-5xl ">2</h1>
                        <div className="flex-col font-thin">
                          <h2>Years</h2>
                          <h3>Experience</h3>
                        </div>
                      </div>
                      <p className="1xl:text-xs text-base font-thin w-1/2 1xl:w-32 ">
                        Not that much init? but im still 17 years old!
                      </p>
                    </div>
                  </div>
                </div>
                <GridCardServices />
              </div>
              {/* <div className="1xl:w-1/2 md:h-full">
                <GridCardAnimatedPhone />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <AboutImages />
    </>
  );
};
export default About;
