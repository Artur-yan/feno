import React from "react";
import './style.scss';
import {ButtonBase} from "../Button";
import {Link} from "react-router-dom";
import Paths from "../../../routes/paths";

interface IInput {
  disable?: boolean,
  classes?: string,
  label?: string,
  icon?: string,
  isSearch?: boolean,
  placeHolder?: string
  placeholder?: string
}
export function Input({classes, disable, label, icon, placeholder, isSearch}: IInput) {
  return (<div className='baseInput'>
      {label && <label>{label}</label>}
      <div className='inputSection'>
        {icon &&
	        <img className='inputIcon' src={icon} alt=""/>
        }
        {isSearch &&
        <ButtonBase classes='P-btn-primary sm searchBtn' onClick={() => {}} loading={false}>
		        Search
        </ButtonBase>
        }
        <input placeholder={placeholder} className={` ${classes ? classes : ''}`} disabled={disable} />
      </div>
    </div>
  );
}