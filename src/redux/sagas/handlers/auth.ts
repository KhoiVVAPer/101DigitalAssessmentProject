import { put, call } from "typed-redux-saga";
import { loginSuccess, loginFailed } from "@redux/slices/auth";
import { IRequestAction } from "interfaces/IRequestAction";
import { login } from "services/apis/auth";

export function* handlerLogin(action: IRequestAction) {
  try {
    console.log("handlerLogin");
    const response = yield* call(login, action);
    if (response && response.status === 200) {
      console.log('response', response);
      yield put(loginSuccess(response.data));
    } else {
      yield put(loginFailed(response.statusText));
    }
  } catch (error) {
    console.log("error", error);
  }
}