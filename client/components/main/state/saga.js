import { all, call, put, takeLatest } from "redux-saga/effects";
import { Types, actions } from "./index";
import { callApi } from "../../../common/api/callApi";

function* fetchTotalData({ today, eigthDayAgo }) {
  const { Success, data } = yield call(callApi, {
    method: "post",
    url: "/api/covid",
    data: { today, eigthDayAgo },
  });
  console.log("Success is", Success);
  if (Success && data) {
    yield put(actions.setValue("totalData", data.body.items.item));
  }
}

function* fetchSidoData({ today, yesterday }) {
  const { Success, data } = yield call(callApi, {
    method: "post",
    url: "/api/sido",
    data: { today, yesterday },
  });
  console.log("Success is", Success);
  if (Success && data) {
    yield put(actions.setValue("sidoData", data.body.items.item));
  }
}

export default function* mainSaga() {
  yield all([
    takeLatest(Types.FetchTotalData, fetchTotalData),
    takeLatest(Types.FetchSidoData, fetchSidoData),
  ]);
}
