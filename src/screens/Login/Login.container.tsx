import React, { useState, useEffect, FC } from "react";
import LoginView from "./Login.view";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsErrorState,
  selectIsLoadingState as selectIsLoadingTokenState,
  selectIsLoggedState,
} from "@redux/selectors/auth";
import { loginRequest } from "@redux/slices/auth";
import { getUserInfoRequest } from "@redux/slices/user";
import {
  selectIsLoadedUserInfoState,
  selectIsLoadingState as selectIsLoadingUserInfoState,
} from "@redux/selectors/user";

const LoginScreen: FC = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const isLogged = useSelector(selectIsLoggedState);
  const isLoadedUserInfo = useSelector(selectIsLoadedUserInfoState);
  const isLoadingToken = useSelector(selectIsLoadingTokenState);
  const isLoadingUserInfo = useSelector(selectIsLoadingUserInfoState);
  const isError = useSelector(selectIsErrorState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      if (isLoadedUserInfo) {
        setUsername("");
        setPassword("");
      } else {
        dispatch(getUserInfoRequest());
      }
    }
  }, [isLogged, isLoadedUserInfo]);

  const onSubmitLogin = () => {
    dispatch(
      loginRequest({
        username: username,
        password: password,
      })
    );
  };

  return (
    <LoginView
      username={username}
      password={password}
      setUserName={setUsername}
      setPassword={setPassword}
      onSubmitLogin={onSubmitLogin}
      isLoading={isLoadingToken || isLoadingUserInfo}
      isError={isError}
    />
  );
};

export default LoginScreen;
