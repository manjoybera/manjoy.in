import React, { useState, useEffect } from "react";
import { NavigationBar } from "./NavigationBar";
import { Route, Routes } from "react-router-dom";
import { GenericPage } from "components/pages/GenericPage";
import { useMediaQuery } from "react-responsive";
import { useGlobalContext } from "contexts/store";
import { ServiceUrl } from "constants/serviceurl";
import { actionType } from "contexts/actions";
import { ErrorDiv } from "./ErrorDiv";

// CSS Styles
const contentWrapperDivCss = {
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100vw",
};

export function ContentWrapper(props: any) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const [isLoaded, setIsLoaded] = useState(false);
  const { state, dispatch } = useGlobalContext();

  const contentPlaceholderCss = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundImage: `radial-gradient(
        rgba(40, 44, 52, 0.5) -50%,
        ${state.Theme.BackgroundColor} 68%
      ),
      url("manjoybera-bg.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "2rem",
    minHeight: isTabletOrMobile && isPortrait ? "80vh" : "70vh",
  } as React.CSSProperties;

  const routeSwitches = (sections: Array<any>) =>
    sections.map((section: any) => (
      <Route
        path={section.SectionName === "@Me" ? "/" : "/" + section.SectionName}
        element={<GenericPage SectionNane={section.SectionName} {...props} />}
        key={section.SectionName}
      />
    ));

  useEffect(() => {
    fetch(ServiceUrl.SectionUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);

          // Set the Sections
          dispatch({ type: actionType.SetAppSections, payload: result });
        },
        (error) => {
          setIsLoaded(true);

          // Set the error message
          dispatch({ type: actionType.SetAppError, payload: error });
        }
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <>
        <NavigationBar isLoaded={isLoaded} />
        <div style={contentPlaceholderCss}>
          {isLoaded && state.App.Sections.length > 0 ? (
            <Routes>{routeSwitches(state.App.Sections)}</Routes>
          ) : isLoaded ? (
            <ErrorDiv />
          ) : (
            <GenericPage isLoaded={isLoaded} />
          )}
        </div>
      </>
    </div>
  );
}

export default ContentWrapper;
