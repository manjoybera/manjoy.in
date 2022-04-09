import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../contexts/store";

const navigationBarDivCss = {
  minWidth: "10rem",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  padding: "2rem",
} as React.CSSProperties;

// const navigationItem.active = {
//   background-color: #bcd346,
// }

export function NavigationBar(props: any) {
  const { state } = useGlobalContext();

  const navigationItemCss = {
    height: "3rem",
    margin: "5px",
    border: "1px solid #b9da08",
    backgroundColor: "#dfe4c6",
    textDecoration: "unset",
    color: "#4e4e4e",
    borderRadius: "5px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  };

  return (
    <div style={navigationBarDivCss}>
      <NavLink
        to="/"
        style={navigationItemCss}
        className={"navigationItem"}
        exact={true}
        activeStyle={{
          backgroundColor: "#bcd346",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={navigationItemCss}
        className={"navigationItem"}
        activeStyle={{
          backgroundColor: "#bcd346",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        style={navigationItemCss}
        className={"navigationItem"}
        activeStyle={{
          backgroundColor: "#bcd346",
        }}
      >
        Contact
      </NavLink>
      <NavLink
        to="/tools"
        style={navigationItemCss}
        className={"navigationItem"}
        activeStyle={{
          backgroundColor: "#bcd346",
        }}
      >
        Tools
      </NavLink>
    </div>
  );
}
