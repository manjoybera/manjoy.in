import React from "react";
import { NavigationBar } from "./NavigationBar";
import { Route, Switch } from "react-router";
import { Home } from "components/pages/Home";
import { Contact } from "components/pages/Contact";
import { About } from "components/pages/About";
import { Tools } from "components/pages/Tools";
import { Calculator } from "components/tools/Calculator";
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
    //minHeight: "70vh",
    backgroundImage: `radial-gradient(
        rgba(40, 44, 52, 0.5) -50%,
        ${state.Theme.BackgroundColor} 68%
      ),
      url("manjoybera-bg.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "2rem",
    minHeight: isTabletOrMobile && isPortrait ? "unset" : "70vh",
  };

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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/tools" component={Tools} />
          {/* {ToolsMap.map((tool) => {
            <Route path={tool.Path} component={tool.Component} />;
          })}  */}
        </Switch>
      </div>
    </div>
  );
}

export default ContentWrapper;
