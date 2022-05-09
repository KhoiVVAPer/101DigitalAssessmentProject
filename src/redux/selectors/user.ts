import { RootState } from "../configureStore";

export const selectAuthState = (state: RootState) => state.user;
export const selectIsLoadingState = (state: RootState) => state.user.isLoading;
export const selectErrorState = (state: RootState) => state.user.error;
export const selectIsLoadedUserInfoState = (state: RootState) =>
  state.user.isLoaded;
