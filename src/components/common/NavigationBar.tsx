import React from "react";
import "styles/content.css";
import { NavLink } from "react-router-dom";

export function NavigationBar(props: any) {
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
      <NavLink
        to="/tools"
        className="navigationItem"
        //exact={true}
        activeClassName="active"
      >
        Tools
      </NavLink>
    </div>
  );
}
