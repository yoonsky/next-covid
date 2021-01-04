import produce from "immer";

export const createReducer = (initialState, handlerMap) => {
  return function (state = initialState, action) {
    const handler = handlerMap[action.type];
    if (handler) {
      return produce(state, (draft) => {
        const handler = handlerMap[action.type];
        handler(draft, action);
      });
    } else {
      return state;
    }
  };
};

export const createSetValueAction = (type) => {
  return (key, value) => ({ type, key, value });
};

export const setValueReducer = (state, action) => {
  state[action.key] = action.value;
};
