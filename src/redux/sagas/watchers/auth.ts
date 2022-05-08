import { takeLatest } from "@redux-saga/core/effects";
import { loginRequest } from "@redux/slices/auth";
import { handlerLogin } from "../handlers/auth";

export default function* watcherAuth() {
  yield takeLatest(loginRequest.type, handlerLogin);
}
