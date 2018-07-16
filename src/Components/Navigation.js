import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div>
      <nav className="nav-bar-padding">
        <NavLink to="/">
          <button className="button-style">Home</button>
        </NavLink>

        <NavLink to="/Work">
          <button className="button-style">Work Experience </button>
        </NavLink>

        <NavLink to="/About">
          <button className="button-style">About </button>
        </NavLink>

        <NavLink to="/Contact">
          <button className="button-style">Contacts </button>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
