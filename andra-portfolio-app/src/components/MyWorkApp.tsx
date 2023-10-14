import React from "react";
import MyWorkProject from "./MyWorkProjectApp";

const techData = [
  {
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg",
  },
  {
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    imgSrc:
      "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
  },
  {
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
];

export default function MyWork() {
  return (
    <div>
      
      <MyWorkProject techData={techData} />
    </div>
  );
}
