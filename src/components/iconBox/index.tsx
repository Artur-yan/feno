import React from "react";
import './style.scss';

interface IEmptyCart {
  icon: string,
  borderRadius: number,
  backgroundColor: string,
  size: number
}
const IconBox = ({icon, borderRadius, backgroundColor, size}: IEmptyCart) => {
  return (
    <div className='iconBox' style={{borderRadius: `${borderRadius}%`, backgroundColor: backgroundColor, height: `${size}px`, width: `${size}px`}}>
      <img src={icon} alt=""/>
    </div>
  )
}

export default IconBox