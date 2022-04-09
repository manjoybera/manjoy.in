export type ActionDispatchType = {
  type: string;
  payload?: any;
}

export type GlobalContextType = {
  state: any;
  dispatch: (params: ActionDispatchType) => void;
};
