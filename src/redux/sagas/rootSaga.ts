import { all, fork } from "@redux-saga/core/effects";
import watcherAuth from "./watchers/auth";
import watcherInvoice from "./watchers/invoice";
import watcherUser from "./watchers/user";

export default function* rootSaga() {
  yield all([fork(watcherAuth)]);
  yield all([fork(watcherInvoice)]);
  yield all([fork(watcherUser)]);
}
