import React from "react";

export const FormBtn = props =>
  <button className="btn btn-success" {...props}>
    {props.children}
  </button>;
