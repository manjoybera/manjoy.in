export const responsiveReducerInitialState = {};

export const responsiveReducer = (
  state: any = responsiveReducerInitialState,
  action: { type: string; payload: any }
) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_RESOLUTION":
      newState = { ...newState, re: action.payload };
      break;
    default:
      return newState;
  }
};
