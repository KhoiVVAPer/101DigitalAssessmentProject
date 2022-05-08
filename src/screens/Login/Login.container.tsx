import React, { useState, useEffect, FC } from "react";
import LoginView from "./Login.view";
import { useDispatch, useSelector } from "react-redux";
import {
  selectErrorState,
  selectIsLoadingState,
  selectIsLoggedState,
} from "@redux/selectors/auth";
import { loginRequest } from "@redux/slices/auth";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../index";

import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen: FC = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const isLogged = useSelector(selectIsLoggedState);
  const isLoading = useSelector(selectIsLoadingState);
  const error = useSelector(selectErrorState);
  const dispatch = useDispatch();
  const { navigate } = useNavigation<StackNavigationProp<MainStackParamList>>();

  useEffect(() => {
    if (isLogged) {
      console.log("????????");
      setUsername("");
      setPassword("");
      AsyncStorage.getItem("access_token").then((rs) => console.log(rs));
      navigate("Dashboard");
    }
  }, [isLogged]);

  const onSubmitLogin = () => {
    dispatch(loginRequest({ username, password }));
  };

  return (
    <LoginView
      username={username}
      password={password}
      setUserName={setUsername}
      setPassword={setPassword}
      onSubmitLogin={onSubmitLogin}
      error={error}
    />
  );
};

export default LoginScreen;
