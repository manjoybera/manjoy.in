import React, { useContext } from "react";
import {useGlobalContext} from "contexts/store"
import {actionType} from "contexts/actions"

export function About(props: any) {
  const {state, dispatch}  = useGlobalContext();
  return <div className="aboutDiv">About Me? 😀 Well lets think.  
  <button onClick={() => dispatch({type: actionType.ToggleDarkTheme})}>Test</button></div>;
}

