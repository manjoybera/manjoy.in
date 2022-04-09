import { actionType } from "contexts/actions";
import { ActionDispatchType } from "contexts/types";

export const initialThemeState = {
  ShowDarkTheme: true,
  TextColor: "white",
  BackgroundColor: "282c34",
};

export const themeReducer = (state: any, action: ActionDispatchType) => {
  let newState = { ...state };
  switch (action.type) {
    case actionType.ToggleDarkTheme:
      let newShowDarkTheme = !newState.ShowDarkTheme;
      newState = {
        ...newState,
        ShowDarkTheme: newShowDarkTheme,
        TextColor: newShowDarkTheme ? "white" : "#4e4e4e",
        BackgroundColor: newShowDarkTheme ? "#282c34" : "#f3f3f3",
      };
      break;
  }
  return newState;
};
