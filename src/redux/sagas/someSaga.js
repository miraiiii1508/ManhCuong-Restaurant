import { takeLatest, put } from "redux-saga/effects";
import { actions } from "../reducers/someSlice";

function* fetchSomeData(action) {
  try {
    console.log("test saga");
    const data = 10;
    yield put(actions.someActionSuccess(data));
  } catch (error) {
    yield put(actions.someActionFailure(error.message));
  }
}

export default function* someSaga() {
  yield takeLatest("someSlice/someAction", fetchSomeData);
}
