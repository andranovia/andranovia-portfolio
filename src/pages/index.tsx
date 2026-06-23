import LayoutApp from "@/layouts/LayoutApp";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "@/components/hero/Index";
import About from "@/components/about/Index";
import SkillMarquee from "@/components/marquee/skill-marquee/Index";
import Project from "@/components/project/Index";
import Faq from "@/components/faq/Index";
import { ClientOnly } from "@/utils/isClient";
import { useScrollContext } from "@/contexts/ActiveSectionContext";
import HeroAnimatedRoundText from "@/components/hero/HeroAnimatedRoundText";

export default function Home() {
  const { sectionRefs } = useScrollContext();
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <LayoutApp>
        <div className="relative bg-white pb-20 rounded-b-xl flex flex-col items-center">
          <div className="overflow-hidden flex flex-col items-center w-full">
            <div
              id="Hero"
              className="p-3 relative max-w-max-container"
              ref={sectionRefs[0]}
            >
              <div className="w-full flex flex-col items-center ">
                <div className="fixed w-full left-0 ">
                  <Hero />
                </div>
                <div className="lg:h-[40rem] " />

              </div>
            </div>
            <div
              id="About"
              ref={sectionRefs[1]}
              className="relative bottom-0 flex flex-col items-center  bg-primary w-full rounded-md pt-24 xs:pt-36 md:pt-0 1xl:pt-52 mt-32"
            >
              <div className=" relative flex flex-col items-center">
                <div className="absolute pointer-events-none -top-[24rem] ">
                  <HeroAnimatedRoundText />
                </div>
                <ClientOnly>
                  <About />
                </ClientOnly>
              </div>

              <SkillMarquee />
            </div>
          </div>
          <div
            id="Project"
            ref={sectionRefs[2]}
            className="w-full bg-white relative flex flex-col items-center"
          >
            <div className="pt-20 w-full max-w-base-content xs:max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-full xl:max-w-xl-content 1xl:max-w-max-container">
              <Project />
            </div>
          </div>
          <div
            id="FAQ"
            ref={sectionRefs[3]}
            className="w-full bg-white relative flex flex-col items-center"
          >
            <div className="w-full max-w-base-content xs:max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content ">
              <Faq />
            </div>

          </div>
        </div>
      </LayoutApp>
    </>
  );
}
