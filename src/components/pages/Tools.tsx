import { Route, Switch } from "react-router";
import { ToolsMap } from "constants/ToolsConstants";
import { NavLink } from "react-router-dom";
import {Calculator} from "components/tools/Calculator"
import "styles/content.css";

export function Tools(props: any) {
  return (
    <>
       <div>
        <li>
          <NavLink to="/calculator">Calc</NavLink>
          <NavLink to="/calculator1">Calc1</NavLink>
        </li>
      </div>
      <div>
        <Switch>
          {/* {ToolsMap.map((tool) => {
            <Route path={tool.Path} component={tool.Component} />;
          })}  */}
          <Route path="/calculator" component={Calculator}/>
          <Route path="/calculator1" component={Calculator}/>
        </Switch>
        
      </div> 
      Tools
      </>
  );
}
