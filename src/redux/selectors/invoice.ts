import { RootState } from "../configureStore";

export const selectAuthState = (state: RootState) => state.invoice;
export const selectIsLoadingState = (state: RootState) =>
  state.invoice.isLoading;
export const selectIsErrorState = (state: RootState) => state.invoice.isError;
export const selectInvoicesState = (state: RootState) => state.invoice.invoices;
export const selectCreateInvoiceState = (state: RootState) =>
  state.invoice.createInvoiceState;
export const selectOrderInvoiceState = (state: RootState) =>
  state.invoice.ordering;
export const selectKeywordState = (state: RootState) => state.invoice.keyword;
