import React from "react";
import HeroCard from "@/components/HeroCardApp";

const HeroCardContainer = () => {
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
  const heroData = [
    {
      text: "Github",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
        position: isMobile? "top-16" : "top-28 right-20"
    },
    {
      text: "LinkedIn",
      imgSrc:
        "/img/socialLogo/linkedin-icon.svg",
      position: isMobile? "top-12" : "right-10"
    },
    {
      text: "Gmail",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
      position: isMobile? "" :"top-[6rem]"
    },
    {
      text: "Whatsapp",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
        position: isMobile? "bottom-12" :"left-10 top-32"
    },
  ];
  const heroCards = heroData.map((item, index) => (
    <HeroCard key={index} text={item.text} imgSrc={item.imgSrc} position={item.position} />
  ));

  return (
    <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 sm:justify-center gap-10">
      {heroCards}
    </div>
  );
};

export default HeroCardContainer;
