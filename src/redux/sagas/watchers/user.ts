import { takeLatest } from "@redux-saga/core/effects";
import { getUserInfoRequest } from "@redux/slices/user";
import { handlerGetUserInfo } from "../handlers/user";

export default function* watcherUser() {
  yield takeLatest(getUserInfoRequest.type, handlerGetUserInfo);
}
