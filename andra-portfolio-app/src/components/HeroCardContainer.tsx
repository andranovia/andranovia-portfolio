import React from "react";
import HeroCard from "./HeroCard";

const HeroCardContainer = () => {
  return (
    <div className="mt-16 flex sm:justify-center gap-4">
      <HeroCard text="Github" />
    </div>
  );
};

export default HeroCardContainer;
