import React from "react";
import "styles/Content.css";
import NavigationBar from "./NavigationBar";
import { Route, Switch } from "react-router";
import Home from "components/pages/Home";
import Contact from "components/pages/Contact";
import About from "components/pages/About";

function ContentWrapper(props: any) {
  return (
    <div className="contentWrapperDiv">
      <NavigationBar />
      <div className="contentPlaceholder">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/post/:slug" component={Post} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default ContentWrapper;
