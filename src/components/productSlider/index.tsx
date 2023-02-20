import React from "react";
import { Link } from "react-router-dom";
import './style.scss';
import {ProductCartSm} from "../carts";

interface IEmptyCart {
  products?: Array<{icon: string, name: string, details: string, price: string}>
  viewAllLink?: string
}
const ProductSlider = ({products, viewAllLink}: IEmptyCart) => {
  console.log(viewAllLink);
  return (
    <div className='productSlider'>
      <div className='slideHeader'>
        <span className="G-fs-20">Recent Order</span>
        <p className="G-fs-16 G-gray-400"><Link to={viewAllLink}>View all</Link></p>
      </div>
      <div className='slideItems'>
        {products && products.map((item, index) => {
          return <ProductCartSm key={index} {...item}/>
        })}
      </div>
    </div>
  )
}

export default ProductSlider