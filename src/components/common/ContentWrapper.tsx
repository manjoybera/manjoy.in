import React from "react";
import { NavigationBar } from "./NavigationBar";
import { Route, Switch } from "react-router";
import { GenericPage } from "components/pages/GenericPage";
import { useMediaQuery } from "react-responsive";
import { useGlobalContext } from "../../contexts/store";

// CSS Styles
const contentWrapperDivCss = {
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100vw",
};

function ContentWrapper(props: any) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const { state } = useGlobalContext();

  const contentPlaceholderCss = {
    flexGrow: 1,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundImage: `radial-gradient(
        rgba(40, 44, 52, 0.5) -50%,
        ${state.Theme.BackgroundColor} 68%
      ),
      url("manjoybera-bg.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "2rem",
    minHeight: isTabletOrMobile && isPortrait ? "80vh" : "70vh",
  };

  const routeSwitches = state.App.Sections.map((section: any) => (
    <Route
      path={section.SectionName == "@Me" ? "/" : "/" + section.SectionName}
      exact={section.SectionName == "@Me"}
      render={(props) => (
        <GenericPage SectionNane={section.SectionName} {...props} />
      )}
    />
  ));

  return (
    <div
      style={
        isTabletOrMobile && isPortrait
          ? {
              ...contentWrapperDivCss,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "unset",
            }
          : contentWrapperDivCss
      }
    >
      <NavigationBar />
      <div style={contentPlaceholderCss}>
        <Switch>{routeSwitches}</Switch>
      </div>
    </div>
  );
}

export default ContentWrapper;
