import React from "react";

interface props{
  text: string;
}



export default function PrimaryButton({ text }: props) {
  return (
    <div className="w-24 h-14 rounded-lg bg-cyan-400 p-1">
      <div className="my-3">
        <div className="text-[1rem] font-bold text-white text-center">{text}</div>
      </div>
    </div>
  );
}
