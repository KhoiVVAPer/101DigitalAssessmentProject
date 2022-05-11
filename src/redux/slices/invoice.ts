import { LIMIT_RECORD_LOAD_LIST_DATA } from "@constants/common";
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
  isError: boolean;
  isLoading: boolean;
  invoices: IInvoice[];
  pageNum: number;
  pageSize: number;
  dateType: string;
  sortBy: string;
  keyword: string;
  ordering: OrderingInvoiceState;
  createInvoiceState: CreateInvoiceState;
}

const initialState: SliceInvoiceState = {
  isError: false,
  invoices: [],
  isLoading: false,
  pageNum: 1,
  pageSize: LIMIT_RECORD_LOAD_LIST_DATA,
  dateType: "INVOICE_DATE",
  sortBy: "CREATED_DATE",
  keyword: "",
  ordering: OrderingInvoiceState.DESCENDING,
  createInvoiceState: CreateInvoiceState.WAIT,
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    getInvoicesRequest: (state) => {
      state.isError = false;
      state.isLoading = true;
    },

    getInvoicesSuccess: (state, action: PayloadAction<IInvoice[]>) => {
      state.invoices = action.payload;
      state.pageNum = 1;
      state.isLoading = false;
    },

    getInvoicesFailed: (state) => {
      state.isError = true;
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
      state.isLoading = true;
      state.createInvoiceState = CreateInvoiceState.REQUESTING;
    },

    createInvoiceSuccess: (state, action: PayloadAction<IInvoice>) => {
      state.invoices = [action.payload, ...state.invoices];
      state.isLoading = false;
      state.createInvoiceState = CreateInvoiceState.SUCCESS;
    },

    createInvoiceFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.createInvoiceState = CreateInvoiceState.FAILED;
    },

    resetCreateInvoiceState: (state) => {
      state.createInvoiceState = CreateInvoiceState.WAIT;
    },
    reset() {
      return {
        ...initialState,
      };
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
  reset,
  resetCreateInvoiceState,
} = invoiceSlice.actions;
const invoiceReducer = invoiceSlice.reducer;
export default invoiceReducer;
