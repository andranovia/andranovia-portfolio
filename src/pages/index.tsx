import About from "@/components/about/Index";
import Hero from "@/components/hero/Index";
import SkillMarquee from "@/components/marquee/skill-marquee/Index";
import PersonalWork from "@/components/personal-work/Index";
import LayoutApp from "@/layouts/LayoutApp";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

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
        <div className="relative w-full max-w-lg ">
          <Hero />

          <div className="relative bottom-0     lg:mt-52 mb-96">
            <PersonalWork />
            <About />
            <SkillMarquee />
          </div>
        </div>
      </LayoutApp>
    </>
  );
}
