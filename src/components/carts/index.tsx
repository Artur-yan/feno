import React from "react";
import './styles.scss';

interface IProductCartSm {
  icon?: string,
  name?: string,
  details?: string,
  price?: string,
}
export const ProductCartSm = (item: IProductCartSm) => {
 return <div className="cartItem">
    <img src={item.icon} alt=""/>
    <div className="itemDetails">
      <span className="G-fs-18 G-white">{item.name}</span>
      <span className="G-fs-14 G-gray-400">{item.details}</span>
      <span className="G-fs-20 sliderItemPrice">{item.price}</span>
    </div>
  </div>
}