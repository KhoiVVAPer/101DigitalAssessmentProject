import { all, fork } from "@redux-saga/core/effects";
import watcherAuth from "./watchers/auth";

export default function* rootSaga() {
  yield all([fork(watcherAuth)]);
}
