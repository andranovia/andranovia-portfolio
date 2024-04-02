import Image from "next/image";
import React from "react";

const RoundedSpanData = [
  {
    text: "Inovative",
    image: "https://img.icons8.com/ios-glyphs/30/FFFFFF/idea--v1.png",
  },
  {
    text: "Creative",
    image: "https://img.icons8.com/ios-glyphs/30/bright-mind.png",
  },
  {
    text: "Teamwork",
    image: "https://img.icons8.com/ios-glyphs/30/group-task.png",
  },
  {
    text: "Decision",
    image: "https://img.icons8.com/ios-filled/50/decision-making.png",
  },
  {
    text: " Thinking",
    image: "https://img.icons8.com/ios-glyphs/30/conflict.png",
  },
];

function HeroRoundedSpan() {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3  gap-3">
        {RoundedSpanData.map((data, index) => (
          <div
            className={
              index === 0
                ? `rounded-full border-2 flex justify-start gap-2 items-center border-white bg-primary text-secondary px-4 py-2`
                : `rounded-full border-2 flex justify-start gap-2 items-center border-gray-600 text-primary px-4 py-2`
            }
            key={index}
          >
            <p className="text-start text-sm sm:text-base font-semibold">
              {data.text}
            </p>
            <Image
              src={data.image}
              alt=""
              width={30}
              height={30}
              className="w-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroRoundedSpan;
