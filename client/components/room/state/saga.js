import { all, call, put, takeLatest } from "redux-saga/effects";
import { Types, actions } from "./index";
import { callApi } from "../../../common/api/callApi";

function* fetchRoomData({ page, spclKey, count }) {
  //요청한 페이지가 내가 접근했던 페이지가 아니라면 api요청
  const { Success, data } = yield call(callApi, {
    method: "post",
    url: "/api/room",
    data: { page, spclKey, count },
  });
  console.log("Success is", Success);
  if (Success && data) {
    yield put(actions.setValue("dataLength", data.body.totalCount._text));
    yield put(actions.setValue("roomData", data.body.items.item));
    yield put(actions.setValue("loading", false));
  }
}

export default function* roomSaga() {
  yield all([takeLatest(Types.FetchRoomData, fetchRoomData)]);
}
