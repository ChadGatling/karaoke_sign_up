import React from "react";
import './Select.css';

export const Select = props =>
  <div className="form-group">
    <select className="form-control" required {...props} >
    	<option value="" disabled selected hidden >Location</option>
    	{props.children.map(choice =>
    		<option>{choice}</option>	
		)}
    </select>
  </div>;
