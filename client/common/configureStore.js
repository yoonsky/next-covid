import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

import mainReducer from "../components/main/state/";
import mainSaga from "../components/main/state/saga";

import roomReducer from "../components/room/state/";
import roomSaga from "../components/room/state/saga";

export const reducer = combineReducers({
  main: mainReducer,
  room: roomReducer,
});

export function* rootSaga() {
  yield all([mainSaga(), roomSaga()]);
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
