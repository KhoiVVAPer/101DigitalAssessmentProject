import { RootState } from "../configureStore";

export const selectAuthState = (state: RootState) => state.invoice;
export const selectIsLoadingState = (state: RootState) =>
  state.invoice.isLoading;
export const selectErrorState = (state: RootState) => state.invoice.error;
export const selectInvoicesState = (state: RootState) => state.invoice.invoices;
