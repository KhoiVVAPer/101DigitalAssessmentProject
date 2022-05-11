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
    const { pageNum, pageSize, dateType, sortBy, ordering, keyword } =
      yield select((state: RootState) => state.invoice);
    action.payload = {
      keyword,
      pageNum,
      pageSize,
      dateType,
      sortBy,
      ordering,
    };

    const response = yield* call(getInvoices, action);

    if (response && response.status === 200) {
      yield put(getInvoicesSuccess(listInvoiceParser(response.data)));
    } else {
      yield put(getInvoicesFailed());
    }
  } catch (error) {
    yield put(getInvoicesFailed());
  }
}

export function* handlerCreateInvoices(action: IRequestAction) {
  try {
    const response = yield* call(createInvoices, action);
    if (response && response.status === 200) {
      yield put(
        createInvoiceSuccess(
          invoiceParser(response.data.data as IInvoiceResponse)
        )
      );
    } else {
      yield put(createInvoiceFailed(response.statusText));
    }
  } catch (error) {
    console.log("error", error);
  }
}
