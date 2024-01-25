import React from "react";

const Button = ({ text, onClicked }: any) => {
  return (
    <button onClick={onClicked} className="w-20 h-10 sm:w-40 rounded-md  bg-white shadow-ShadowCard cursor-pointer">
      <h1 className="font-semibold text-sm text-gray-600">{text}</h1>
    </button>
  );
};
export default Button;
