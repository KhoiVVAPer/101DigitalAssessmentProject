import { RootState } from "../configureStore";

export const selectAuthState = (state: RootState) => state.auth;
export const selectIsLoadingState = (state: RootState) => state.auth.isLoading;
export const selectIsErrorState = (state: RootState) => state.auth.isError;
export const selectIsLoggedState = (state: RootState) => state.auth.isLogged;
