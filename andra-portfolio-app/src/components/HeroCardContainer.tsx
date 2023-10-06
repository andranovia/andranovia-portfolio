import React from "react";
import HeroCard from "./HeroCard";

const HeroCardContainer = () => {
  const heroData = [
    {
      text: "Github",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
        position: "top-10"
    },
    {
      text: "LinkedIn",
      imgSrc:
        "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg",
      position: "20px"
    },
  ];
  const heroCards = heroData.map((item, index) => (
    <HeroCard key={index} text={item.text} imgSrc={item.imgSrc} position={item.position} />
  ));

  return (
    <div className="mt-16 grid grid-cols-2 sm:justify-center gap-10">
      {heroCards}
    </div>
  );
};

export default HeroCardContainer;
