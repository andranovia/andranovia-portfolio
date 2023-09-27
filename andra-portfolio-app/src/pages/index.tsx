import HeroApp from "@/components/HeroApp";
import Navbar from "@/components/NavbarApp";
import ProfileApp from "@/components/ProfileApp";


export default function Home() {
  return (
    <>
    <div className="overflow-hidden">
      <Navbar />
      <HeroApp />
      <ProfileApp/>
      </div>
    </>
  );
}
