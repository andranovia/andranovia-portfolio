import LayoutApp from "@/layouts/LayoutApp";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "@/components/hero/Index";
import About from "@/components/about/Index";
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
        <div className="relative bg-white pb-20 rounded-b-xl ">
          <div id="Hero" className="p-3 overflow-hidden  lg:h-[55vw]">
            <Hero />
          </div>
          <div className="relative bottom-0 overflow-hidden lg:-mt-20">
    
            <div id="About">
              <About />
            
            </div>
    
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
