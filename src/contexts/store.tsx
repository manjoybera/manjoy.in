import { createContext, useReducer, useMemo } from "react";

import {
  responsiveReducerInitialState,
  responsiveReducer,
} from "contexts/reducers/responsiveReducer";
//import b from "./Reducer2";

// Combine reducer function
const combineReducers = (slices: any) => (state: any, action: any) =>
  Object.keys(slices).reduce(
    // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

// Combine the intial states
const initialState = {};
const Store = createContext(initialState);

// Create a global reducer from sliced states
const rootReducer = combineReducers(responsiveReducer);

// Create the store
export const StoreProvider = ({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  // Important(!): memoize array value. Else all context consumers update on *every* render
  const store = useMemo(() => [state, dispatch], [state]);
  return (
    <Store.Provider value={{ store, dispatch }}> {children} </Store.Provider>
  );
};
