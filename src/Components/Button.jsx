import React from 'react'

const Button = ({text,bgColor,textColor,font,padding,rounded,textSize,margin}) => {
  return (
    <div> 
        <button className={`cursor-pointer hover:scale-105 ${font} ${bgColor} ${textColor} ${padding} ${rounded} ${textSize} ${margin}`}>{text}</button>
    </div>
  )
}

export default Button