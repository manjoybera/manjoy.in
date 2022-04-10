import { actionType } from "contexts/actions";
import { ActionDispatchType } from "contexts/types";

export const initialAppState = {
  ShowNavigation: true,
  Sections: [],
  Experience: [],
  Projects: [],
  Contacts: [],
  Error: {},
};

export const appReducer = (state: any, action: ActionDispatchType) => {
  let newState = { ...state };
  switch (action.type) {
    case actionType.ToggleNavigation:
      newState = { ...newState, ShowNavigation: !newState.ShowNavigation };
      break;
    case actionType.SetAppSections:
      newState = { ...newState, Sections: action.payload };
      break;
    case actionType.SetExperience:
      newState = { ...newState, Experience: action.payload };
      break;
    case actionType.SetProjects:
      newState = { ...newState, Projects: action.payload };
      break;
    case actionType.SetContacts:
      newState = { ...newState, Contacts: action.payload };
      break;
    case actionType.SetAppError:
      newState = { ...newState, Error: action.payload };
      break;
  }
  return newState;
};
