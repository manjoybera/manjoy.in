import React from "react";
import "styles/content.css";
import {NavigationBar} from "./NavigationBar";
import { Route, Switch } from "react-router";
import { Home } from "components/pages/Home";
import { Contact } from "components/pages/Contact";
import { About } from "components/pages/About";
import { Tools } from "components/pages/Tools";
import {Calculator} from "components/tools/Calculator"

function ContentWrapper(props: any) {
  return (
    <div className="contentWrapperDiv">
      <NavigationBar />
      <div className="contentPlaceholder">
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
