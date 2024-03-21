import About from "@/components/about/Index";
import Hero from "@/components/hero/Index";
import SkillMarquee from "@/components/marquee/skill-marquee/Index";
import PersonalWork from "@/components/personal-work/Index";
import LayoutApp from "@/layouts/LayoutApp";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Project from "@/components/project/Index";

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
        <div className="relative   ">
          <div className="overflow-hidden">
            <Hero />
          </div>
          <div className="relative bottom-0 overflow-hidden ">
            <PersonalWork />
            <About />
            <SkillMarquee />
          </div>
          <div className="mb-[40%]">
            <Project />
          </div>
        </div>
      </LayoutApp>
    </>
  );
}
