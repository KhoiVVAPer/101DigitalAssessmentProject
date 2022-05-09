import { put, call } from "typed-redux-saga";
import { getUserInfoSuccess, getUserInfoFailed } from "@redux/slices/user";
import { IRequestAction } from "interfaces/IRequestAction";
import { getUserInfo } from "services/apis/user";

export function* handlerGetUserInfo(action: IRequestAction) {
  try {
    console.log("handlerGetUserInfo", action);
    const response = yield* call(getUserInfo, action);
    if (response && response.status === 200) {
      yield put(getUserInfoSuccess(response.data));
    } else {
      yield put(getUserInfoFailed(response.statusText));
    }
  } catch (error) {
    console.log("error2", error);
    yield put(getUserInfoFailed());
  }
}
