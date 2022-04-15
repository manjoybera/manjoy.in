import React from "react";
import { useGlobalContext } from "contexts/store";

export function NavigationLoadingPlaceholder() {
  const { state } = useGlobalContext();

  const navigationItemPlaceholderCss = {
    height: "3rem",
    width: "100%",
    opacity: state.Theme.ShowDarkTheme ? "0.4" : "unset",
  };

  return (
    <>
      <div
        className="animated-background"
        style={navigationItemPlaceholderCss}
      />
      <div
        className="animated-background"
        style={navigationItemPlaceholderCss}
      />
      <div
        className="animated-background"
        style={navigationItemPlaceholderCss}
      />
    </>
  );
}
