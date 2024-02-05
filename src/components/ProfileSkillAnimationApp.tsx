import React from "react";
import ProfileSkillCardContainer from "@/components/ProfileSkillCardContainerApp";

export default function ProfileSkillAnimation() {
  const [isMobile, setIsMobile] = React.useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-screen  sm:h-[30vh] sm:mt-20 h-[10rem]">
      <ProfileSkillCardContainer isMobile={isMobile} />
    </div>
  );
}
