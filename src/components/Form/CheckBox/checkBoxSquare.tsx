import React from "react";
import PropTypes from "prop-types";
import "./checkBoxSquare.scss";

const CheckBoxSquare = (props) => {
  const id = `checkbox-${Math.random()}`;

	return (
	  <label id={id} className='checkboxContainer'>
		  <span className='checkboxLabel'>{props.label}</span>
		  <input type="checkbox" checked={props.value} onChange={props.onChange}/>
			  <span className='checkmark'/>
	  </label>
  );
};

export default CheckBoxSquare;

CheckBoxSquare.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
