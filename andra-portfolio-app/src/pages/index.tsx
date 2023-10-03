import ExperienceApp from "@/components/ExperienceApp";

import dynamic from "next/dynamic";



const LayoutApp = dynamic(() => import('@/layouts/LayoutApp'))
const HeroApp = dynamic(() => import("@/components/HeroApp"));
const ProfileApp = dynamic(() => import("@/components/ProfileApp"));

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <LayoutApp>
          <HeroApp />
          <ProfileApp />
          <ExperienceApp />
        </LayoutApp>
      </div>
    </>
  );
}
