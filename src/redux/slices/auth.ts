import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SliceAuthState {
  error: string;
  isLogged: boolean;
  isLoading: boolean;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    error: "",
    isLogged: false,
    isLoading: false,
  } as SliceAuthState,
  reducers: {
    loginRequest: (
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) => {
      state.error = "";
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
      const {access_token, refresh_token, token_type  } = action.payload;
      AsyncStorage.setItem('access_token', access_token);
      AsyncStorage.setItem('refresh_token', refresh_token);
      AsyncStorage.setItem('token_type', token_type);
      state.error = "";
      state.isLogged = true;
      state.isLoading = false;
    },
    loginFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLogged = false;
      state.isLoading = false;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailed } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
