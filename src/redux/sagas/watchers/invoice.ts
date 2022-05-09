import { takeLatest } from "@redux-saga/core/effects";
import {
  getInvoicesRequest,
  createInvoiceRequest,
} from "@redux/slices/invoice";
import { handlerGetInvoices, handlerCreateInvoices } from "../handlers/invoice";

export default function* watcherInvoice() {
  yield takeLatest(getInvoicesRequest.type, handlerGetInvoices);
  yield takeLatest(createInvoiceRequest.type, handlerCreateInvoices);
}
