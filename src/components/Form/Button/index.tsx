import React from "react";
import Arrow from '../../../assets/icons/Vector.svg'
import './style.scss';
interface IButtonBase {
  disable?: boolean,
  classes?: string
  onClick?: any,
  loading?: boolean,
  showArrow?: boolean,
  children: string | JSX.Element
}
export function ButtonBase(props: IButtonBase) {
  return (
    <button className={`P-btn ${props.classes ? props.classes : ''}`} disabled={props.disable} onClick={() => props.onClick && props.onClick()}>
      {props.children}{props.showArrow && <img src={Arrow} alt=""/>}
    </button>
  );
}