import React from "react";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/signUP" className="navbar-brand">
          Sign Up
        </a>
        <a href="/singers" className="navbar-brand">
          Singers
        </a>
        <a href="/songs" className="navbar-brand">
          Song List
        </a>
        <a href="/locations" className="navbar-brand">
          Location
        </a>
      </div>
    </div>
  </nav>;

export default Nav;
