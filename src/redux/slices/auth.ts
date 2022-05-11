import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SliceAuthState {
  isError: boolean;
  isLogged: boolean;
  isLoading: boolean;
}

const initialState: SliceAuthState = {
  isError: false,
  isLogged: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) => {
      state.isError = false;
      state.isLogged = false;
      state.isLoading = true;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{
        access_token: string;
        refresh_token: string;
        token_type: string;
      }>
    ) => {
      const { access_token, refresh_token, token_type } = action.payload;
      AsyncStorage.setItem("access_token", access_token);
      AsyncStorage.setItem("refresh_token", refresh_token);
      AsyncStorage.setItem("token_type", token_type);
      state.isError = false;
      state.isLogged = true;
      state.isLoading = false;
    },
    logoutRequest: () => {
      AsyncStorage.removeItem("access_token");
      AsyncStorage.removeItem("refresh_token");
      AsyncStorage.removeItem("token_type");
      return {
        ...initialState,
      };
    },
    loginFailed: (state) => {
      state.isError = true;
      state.isLogged = false;
      state.isLoading = false;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailed, logoutRequest } =
  authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
