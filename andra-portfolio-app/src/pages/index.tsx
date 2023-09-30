import ExperienceApp from "@/components/ExperienceApp";
import dynamic from "next/dynamic";

const HeroApp = dynamic(() => import('@/components/HeroApp'));
const Navbar = dynamic(() => import('@/components/NavbarApp'));
const ProfileApp = dynamic(() => import('@/components/ProfileApp'));


export default function Home() {
  return (
    <>
    <div className="overflow-hidden">
      <Navbar />
      <HeroApp />
      <ProfileApp/>
      <ExperienceApp/>
      </div>
    </>
  );
}
