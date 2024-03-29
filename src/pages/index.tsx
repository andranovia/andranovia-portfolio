import SkillMarquee from "@/components/marquee/skill-marquee/Index";
import PersonalWork from "@/components/personal-work/Index";
import LayoutApp from "@/layouts/LayoutApp";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/about/Index"), {
  ssr: false,
});

const Hero = dynamic(() => import("@/components/hero/Index"), {
  ssr: false,
});

const Project = dynamic(() => import("@/components/project/Index"), {
  ssr: false,
});

const Faq = dynamic(() => import("@/components/faq/Index"), {
  ssr: false,
});

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
          <div className="">
            <Hero />
          </div>
          <div className="relative bottom-0 overflow-hidden ">
            <About />
            <PersonalWork />
            <SkillMarquee />
          </div>
          <div className="mb-[40%]">
            <Project />
            <Faq />
          </div>
        </div>
      </LayoutApp>
    </>
  );
}
