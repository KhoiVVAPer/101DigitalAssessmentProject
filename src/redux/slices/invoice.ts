import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICreateInvoiceRequest,
  IGetInvoiceRequest,
} from "interfaces/IAxiosRequest";
import { IInvoice } from "interfaces/IInvoice";
import {
  CreateInvoiceState,
  OrderingInvoiceState,
} from "../../interfaces/Enum";

interface SliceInvoiceState {
  error: string;
  isLoading: boolean;
  invoices: IInvoice[];
  pageNum: number;
  pageSize: number;
  dateType: string;
  sortBy: string;
  keyword: string;
  ordering: OrderingInvoiceState;
  createInvoiceState: CreateInvoiceState;
  requestParams: IGetInvoiceRequest;
}

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    error: "",
    invoices: {},
    isLoading: false,
    pageNum: 1,
    pageSize: 100,
    dateType: "INVOICE_DATE",
    sortBy: "CREATED_DATE",
    keyword: "",
    ordering: OrderingInvoiceState.DESCENDING,
    createInvoiceState: CreateInvoiceState.WAIT,
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

    setKeywordSearching: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },

    setOrdering: (state, action: PayloadAction<OrderingInvoiceState>) => {
      state.ordering = action.payload;
    },

    createInvoiceRequest: (
      state,
      action: PayloadAction<ICreateInvoiceRequest>
    ) => {
      state.error = "";
      state.isLoading = true;
      state.createInvoiceState = CreateInvoiceState.REQUESTING;
    },

    createInvoiceSuccess: (state, action: PayloadAction<IInvoice>) => {
      state.error = "";
      state.invoices = [action.payload, ...state.invoices];
      state.isLoading = false;
      state.createInvoiceState = CreateInvoiceState.SUCCESS;
    },

    createInvoiceFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
      state.createInvoiceState = CreateInvoiceState.FAILED;
    },

    resetCreateInvoiceState: (state) => {
      state.createInvoiceState = CreateInvoiceState.WAIT;
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
  setKeywordSearching,
  setOrdering,
  resetCreateInvoiceState,
} = invoiceSlice.actions;
const invoiceReducer = invoiceSlice.reducer;
export default invoiceReducer;
