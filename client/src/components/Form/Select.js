import React from "react";

export const Select = props =>
  <div className="form-group">
    <select className="form-control" {...props} >
    	<option value="" disabled >Location</option>
    	{props.children.map(choice =>
    		<option>{choice}</option>	
		)}
    </select>
  </div>;
