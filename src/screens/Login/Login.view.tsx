import React, { FC } from "react";
import { StatusBar, View } from "react-native";
import { RNText, RNTextInput, RNButton, RNLoadingSpinner } from "components";
import styles from "./Login.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { RNHeader } from "components/Header/Header";

type LoginProps = {
  username: string;
  password: string;
  isError: boolean;
  isLoading: boolean;
  onSubmitLogin: (userName: string, password: string) => void;
  setUserName: (username: string) => void;
  setPassword: (password: string) => void;
};

const LoginView: FC<LoginProps> = ({
  username,
  password,
  isError,
  isLoading,
  onSubmitLogin,
  setUserName,
  setPassword,
}): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <RNHeader title={"Login"} testId={"header-login"} />
      <View testID={"login-container"} style={styles.contentWrapper}>
        <RNTextInput
          testID={"login-username-input"}
          value={username}
          onChangeText={setUserName}
          placeholder={"username"}
          style={styles.input}
        />
        <RNTextInput
          testID={"login-password-input"}
          value={password}
          onChangeText={setPassword}
          placeholder={"password"}
          style={styles.input}
          isSecure={true}
        />
        {isError ? (
          <RNText
            testID={"login-error"}
            text={"Login Failed"}
            style={styles.errorText}
          />
        ) : null}
        <RNButton
          testID={"login-button-login"}
          onPress={() => onSubmitLogin(username, password)}
        >
          <RNText text="Login" style={styles.btnText} />
        </RNButton>
      </View>
      {isLoading && <RNLoadingSpinner />}
    </SafeAreaView>
  );
};

export default LoginView;
