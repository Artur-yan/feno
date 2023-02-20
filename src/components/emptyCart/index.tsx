import React from "react";
import './style.scss';

interface IEmptyCart {
  children: string | JSX.Element
  useBorders?: boolean,
  title?: string,
  className?: string
}
const EmptyCart = ({className, children, useBorders, title}: IEmptyCart) => {
  return (
    <div className={`${className} emptyCart ${useBorders ? 'cartBorder' : ''}`} >
      {title && (
        <div className='G-with-100'>
          <span className="G-fs-20 G-white">{title}</span>
          <div className='G-line G-mt-16 G-mb-16'/>
        </div>
      )}
      {children}
    </div>
  )
}

export default EmptyCart