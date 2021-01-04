import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from "../../../common/redux-helper";

// 타입, 액션, 초기값, 리듀서

export const Types = {
  SetValue: "main/SetValue",
  FetchTotalData: "main/FetchTotalData",
  FetchSidoData: "main/FetchSidoData",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  fetchTotalData: ({ today, eigthDayAgo }) => ({
    type: Types.FetchTotalData,
    today,
    eigthDayAgo,
  }),
  fetchSidoData: ({ today, yesterday }) => ({
    type: Types.FetchSidoData,
    today,
    yesterday,
  }),
};

const INITIAL_STATE = {
  totalData: [],
  sidoData: [],
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
});

export default reducer;
