import LayoutApp from "@/layouts/LayoutApp";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "@/components/hero/Index";
import About from "@/components/about/Index";
import PersonalWork from "@/components/personal-work/Index";
import SkillMarquee from "@/components/marquee/skill-marquee/Index";
import Project from "@/components/project/Index";
import Faq from "@/components/faq/Index";

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
        <div className="relative bg-white pb-20">
          <div id="Hero">
            <Hero />
          </div>
          <div className="relative bottom-0 overflow-hidden ">
            <div id="About">
              <About />
            </div>
            <PersonalWork />
            <SkillMarquee />
          </div>
          <div id="Project">
            <Project />
          </div>
          <div id="FAQ">
            <Faq />
          </div>
        </div>
      </LayoutApp>
    </>
  );
}
