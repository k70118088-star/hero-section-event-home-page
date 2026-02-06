import React from "react";

const Button = ({
  type = "button",
  text,
  bgColor,
  textColor,
  font,
  padding,
  rounded,
  textSize,
  margin,
  onClick
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer hover:bg-[#1e38d8] hover:text-white  ${font} ${bgColor} ${textColor} ${padding} ${rounded} ${textSize} ${margin}`}
    >
      {text}
    </button>
  );
};

export default Button;
