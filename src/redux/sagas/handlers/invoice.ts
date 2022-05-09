import { put, call, select } from "typed-redux-saga";
import {
  getInvoicesSuccess,
  getInvoicesFailed,
  createInvoiceSuccess,
  createInvoiceFailed,
} from "@redux/slices/invoice";
import { IRequestAction } from "interfaces/IRequestAction";
import { getInvoices, createInvoices } from "services/apis/invoice";
import { RootState } from "@redux/configureStore";
import { invoiceParser, listInvoiceParser } from "../parser/invoice";
import { IInvoiceResponse } from "src/interfaces/IAxiosResponse";

export function* handlerGetInvoices(action: IRequestAction) {
  try {
    const { pageNum, pageSize } = yield select(
      (state: RootState) => state.invoice
    );

    action.payload = {
      ...action.payload,
      pageNum,
      pageSize,
      dateType: "INVOICE_DATE",
      sortBy: "CREATED_DATE",
      ordering: "ASCENDING",
    };

    const response = yield* call(getInvoices, action);

    if (response && response.status === 200) {
      console.log("response", response);
      yield put(getInvoicesSuccess(listInvoiceParser(response.data)));
    } else {
      yield put(getInvoicesFailed(response.statusText));
    }
  } catch (error) {
    console.log("error", error);
  }
}

export function* handlerCreateInvoices(action: IRequestAction) {
  try {
    console.log("handlerCreateInvoices", action);
    const response = yield* call(createInvoices, action.payload);

    if (response && response.status === 200) {
      console.log("response", response);
      yield put(
        createInvoiceSuccess(invoiceParser(response.data as IInvoiceResponse))
      );
    } else {
      yield put(createInvoiceFailed(response.statusText));
    }
  } catch (error) {
    console.log("error", error);
  }
}
