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
import AboutAnimatedRoundText from "@/components/hero/HeroWaxSeal";
import NoiseGrain from "@/components/about/NoiseGrain";

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
        <div className="relative bg-white  rounded-b-xl flex flex-col items-center">
          <div className="overflow-hidden flex flex-col items-center w-full">
            <div
              id="Hero"
              className="relative z-20 bg-white"
              ref={sectionRefs[0]}
            >
              <div className="w-full flex flex-col items-center ">
                <div className=" w-full left-0 ">
                  <Hero />
                </div>
              </div>
            </div>
            <div className="isolate bg-gradient-to-b from-white  to-[#f4ebd0]  w-full overflow-hidden">
              <NoiseGrain/>
              <div
                id="About"
                ref={sectionRefs[1]}
                className="relative bottom-0 flex flex-col items-center"
              >
                <div className=" relative flex flex-col items-center">

                  <ClientOnly>
                    <About />
                  </ClientOnly>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutApp>
    </>
  );
}
