import { createContext, useReducer, useMemo, useContext } from "react";
import {
  initialThemeState,
  themeReducer,
} from "contexts/reducers/themeReducer";
import { initialAppState, appReducer } from "contexts/reducers/appReducer";
import { GlobalContextType, ActionDispatchType } from "contexts/types";

// Combine reducers
const combineReducers = (slices: any) => (prevState: any, action: any) =>
  Object.keys(slices).reduce(
    (nextState, nextProp) => ({
      ...nextState,
      [nextProp]: slices[nextProp](prevState[nextProp], action),
    }),
    prevState
  );

// Combine the intial states
const rootIntialState = { Theme: initialThemeState, App: initialAppState };

// Create a global reducer from sliced states
const rootReducer = combineReducers({ Theme: themeReducer, App: appReducer });
export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

// Create the store
export const StoreProvider = ({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element => {
  // Creating combined REDUX style state. dispatch pair
  const [state, setState] = useReducer(rootReducer, rootIntialState);

  // Do something with the dispatch before actual dispatch, like middle layer
  const setCurrentData = (params: ActionDispatchType) => {
    // Log to console and Local Storage
    console.log(params.type);
    console.log(state);
    window.localStorage.setItem("currentData", JSON.stringify(state));

    // Use current stae if not provided
    setState({
      type: params.type,
      payload: Object.assign({}, params.payload),
    });
  };

  // Memomize to improve rerender performance
  const storeValue = useMemo(
    () => ({
      state,
      dispatch: setCurrentData,
    }),
    [state]
  );

  return (
    <GlobalContext.Provider value={storeValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext) as GlobalContextType;
};
