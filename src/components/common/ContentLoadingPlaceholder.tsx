import React from "react";
import { useGlobalContext } from "contexts/store";

const ContentLoadingPlaceholderCss = {
  marginTop: "1.5rem",
};

export function ContentLoadingPlaceholder() {
  const { state } = useGlobalContext();

  return (
    <div style={state.Theme.ShowDarkTheme ? { opacity: "0.4" } : {}}>
      <div
        className="animated-background"
        style={{ height: "3rem", width: "40vw" }}
      />
      <br />
      <br />
      <br />
      <div
        className="animated-background"
        style={{ ...ContentLoadingPlaceholderCss, width: "50vw" }}
      />
      <div
        className="animated-background"
        style={{ ...ContentLoadingPlaceholderCss, width: "50vw" }}
      />
      <div
        className="animated-background"
        style={ContentLoadingPlaceholderCss}
      />
      <div
        className="animated-background"
        style={ContentLoadingPlaceholderCss}
      />
      <div
        className="animated-background"
        style={ContentLoadingPlaceholderCss}
      />
    </div>
  );
}
