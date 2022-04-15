import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "contexts/store";
import { Navigation } from "styled-icons/fluentui-system-filled";
import { useMediaQuery } from "react-responsive";
import { NavigationLoadingPlaceholder } from "./NavigationLoadingPlaceholder";
import { actionType } from "contexts/actions";

const navigationBarDivCss = {
  minWidth: "10rem",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  padding: "2rem 2rem 0",
} as React.CSSProperties;

export function NavigationBar(props: any) {
  const { state, dispatch } = useGlobalContext();
  const [showMenu, setShowmenu] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

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

  const NavigationIconCss = {
    color: state.Theme.TextColor,
    height: "2rem",
    margin: "5px",
    alignSelf: "flex-start",
    cursor: "pointer",
  };

  function NavigationIcon() {
    return (
      <div style={{ width: "100%" }}>
        <Navigation
          style={NavigationIconCss}
          className={"navigationIcon"}
          onClick={() => setShowmenu(!showMenu)}
        />
        {props.isLoaded ? state.App.ActiveSectionName : ""}
      </div>
    );
  }

  const MenuItems = state.App.Sections.map((section: any) => (
    <NavLink
      to={section.SectionName === "@Me" ? "/" : "/" + section.SectionName}
      style={({ isActive }) => {
        return isActive
          ? { ...navigationItemCss, backgroundColor: "#bcd346" }
          : navigationItemCss;
      }}
      className={"navigationItem"}
      onClick={() =>
        dispatch({
          type: actionType.SetActiveSectionName,
          payload: section.SectionName,
        })
      }
      key={section.SectionName}
    >
      {section.SectionName}
    </NavLink>
  ));

  return (
    <div style={navigationBarDivCss}>
      {isTabletOrMobile && isPortrait ? (
        showMenu ? (
          <>
            <NavigationIcon />
            {MenuItems}{" "}
          </>
        ) : (
          <NavigationIcon />
        )
      ) : props.isLoaded ? (
        MenuItems
      ) : (
        <NavigationLoadingPlaceholder />
      )}
    </div>
  );
}
