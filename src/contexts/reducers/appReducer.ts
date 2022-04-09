import { actionType } from "contexts/actions";
import { ActionDispatchType } from "contexts/types";
import { OfflineData } from "constants/serviceurl";

export const initialAppState = {
  ShowNavigation: true,
  Sections: OfflineData.Sections,
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
