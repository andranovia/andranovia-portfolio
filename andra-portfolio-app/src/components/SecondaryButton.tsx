import React from "react";

interface props{
  text: string;
}



export default function SecondaryButton({ text }: props) {
  return (
    <div className="w-24 h-14 rounded-lg bg-white shadow-md p-1">
      <div className="my-3">
        <div className="text-[1rem] font-bold text-black text-center">{text}</div>
      </div>
    </div>
  );
}
