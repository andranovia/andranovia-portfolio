import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const HeroButtons = () => {
  return (
    <div className="mt-16 flex sm:justify-center gap-4">
      <PrimaryButton text="Interested?" />
      <SecondaryButton text="See More" />
    </div>
  );
};

export default HeroButtons;
