import { actionType } from "contexts/actions";
import { ActionDispatchType } from "contexts/types";

export const initialAppState = {
  ShowNavigation: true,
};

export const appReducer = (state: any, action: ActionDispatchType) => {
  let newState = { ...state };
  switch (action.type) {
    case actionType.ToggleNavigation:
      newState = { ...newState, ShowNavigation: !newState.ShowNavigation };
      break;
  }
  return newState;
};
