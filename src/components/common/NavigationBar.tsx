import React from "react";
import "styles/Content.css";
import { NavLink } from "react-router-dom";

function NavigationBar(props: any) {
  return (
    <div className="navigationBarDiv">
      <NavLink
        to="/"
        className="navigationItem"
        exact={true}
        activeClassName="active"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="navigationItem"
        //exact={true}
        activeClassName="active"
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className="navigationItem"
        //exact={true}
        activeClassName="active"
      >
        Contact
      </NavLink>
    </div>
  );
}

export default NavigationBar;
