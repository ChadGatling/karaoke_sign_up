import React from "react";
import './Select.css';

export const Select = props =>
  <div className="form-group">
    <select className="form-control" {...props} >
    	<option value="" disabled selected hidden >Location</option>
    	{props.locations.map((choice, i) =>
    		<option key={i} value={i + 1}>{choice}</option>	
		)}
    </select>
  </div>;
