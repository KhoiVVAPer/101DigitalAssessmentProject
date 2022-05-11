import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "src/interfaces/IUser";

interface SliceUserState {
  error: string;
  isLoading: boolean;
  isLoaded: boolean;
  userInfo?: IUser;
}

const initialState: SliceUserState = {
  error: "",
  userInfo: undefined,
  isLoaded: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    error: "",
    userInfo: {},
    isLoaded: false,
    isLoading: false,
  } as SliceUserState,
  reducers: {
    getUserInfoRequest: (state) => {
      state.error = "";
      state.isLoading = true;
      state.isLoaded = false;
    },
    getUserInfoSuccess: (state, action: PayloadAction<{ data: IUser }>) => {
      const { data } = action.payload;
      console.log("getUserInfoSuccess", data);
      if (data?.memberships && data?.memberships.length > 0) {
        AsyncStorage.setItem("org_token", data?.memberships[0].token);
      }
      state.userInfo = data;
      state.error = "";
      state.isLoading = false;
      state.isLoaded = true;
    },
    getUserInfoFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
      state.isLoaded = false;
    },
    reset() {
      return {
        ...initialState,
      };
    },
  },
});

export const {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailed,
  reset,
} = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
