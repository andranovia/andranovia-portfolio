import React from "react";
import dynamic from "next/dynamic";
import GridCard from "./GridCard";

const LayoutApp = dynamic(() => import("@/layouts/LayoutApp"));
const HeroApp = dynamic(() => import("@/components/HeroApp"));
const ProfileApp = dynamic(() => import("@/components/ProfileApp"));
const MyWork = dynamic(() => import("@/components/MyWorkApp"));

export default function HomeApp() {
  return (
    <LayoutApp>
      <div className="relative w-full max-w-lg  ">
        <div className="relative mt-32">
          <HeroApp />
        </div>
        <div className="relative bottom-0 top-64 mt-40">
        <GridCard/>
        <ProfileApp />
        </div>
        <MyWork />
      </div>
    </LayoutApp>
  );
}
