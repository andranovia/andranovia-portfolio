import LayoutApp from "@/layouts/LayoutApp";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "@/components/hero/Index";
import About from "@/components/about/Index";
import SkillMarquee from "@/components/marquee/skill-marquee/Index";
import Project from "@/components/project/Index";
import Faq from "@/components/faq/Index";
import { ClientOnly } from "@/utils/isClient";


export default function Home() {
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
            <div id="Hero" className="p-3 relative max-w-max-container">
              <Hero />
            </div>
            <div className="relative bottom-0 flex flex-col items-center overflow-hidden bg-primary w-full rounded-md pt-24 xs:pt-36 md:pt-0 1xl:pt-52">

              <div id="About" className=" relative flex flex-col items-center">
                <ClientOnly>
                <About />
                </ClientOnly>

              </div>

              <SkillMarquee />
            </div>
          </div>
          <div id="Project" className="pt-20 max-w-base-content xs:max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-fit xl:max-w-xl-content 1xl:max-w-max-container">
            <Project />
          </div>
          <div id="FAQ" className="w-full max-w-base-content xs:max-w-xs-content sm:max-w-sm-content md:max-w-md-content lg:max-w-lg-content xl:max-w-xl-content ">
            <Faq />
          </div>
        </div>
      </LayoutApp>
    </>
  );
}
