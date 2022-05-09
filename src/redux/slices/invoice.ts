import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInvoice } from "src/interfaces/IInvoice";

interface SliceInvoiceState {
  error: string;
  isLoading: boolean;
  invoices: IInvoice[];
  pageNum: number;
  pageSize: number;
}

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    error: "",
    invoices: {},
    isLoading: false,
    pageNum: 1,
    pageSize: 10,
  } as SliceInvoiceState,
  reducers: {
    getInvoicesRequest: (state) => {
      state.error = "";
      state.isLoading = true;
    },
    getInvoicesSuccess: (state, action: PayloadAction<IInvoice[]>) => {
      state.error = "";
      state.invoices = action.payload;
      state.isLoading = false;
    },
    getInvoicesFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    createInvoiceRequest: (state) => {
      state.error = "";
      state.isLoading = true;
    },
    createInvoiceSuccess: (state, action: PayloadAction<IInvoice>) => {
      state.error = "";
      state.invoices = [action.payload, ...state.invoices];
      state.isLoading = false;
    },
    createInvoiceFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  getInvoicesRequest,
  getInvoicesSuccess,
  getInvoicesFailed,
  createInvoiceRequest,
  createInvoiceSuccess,
  createInvoiceFailed,
} = invoiceSlice.actions;
const invoiceReducer = invoiceSlice.reducer;
export default invoiceReducer;
