import { GET_INVOICE_URL } from "@constants/apiUrls";
import { IRequestAction } from "src/interfaces/IRequestAction";
import APIUtils from "@utils/apiUtils";

export async function getInvoices(action: IRequestAction) {
  console.log("get invoice request", GET_INVOICE_URL, action.payload);

  return APIUtils.get(GET_INVOICE_URL, { params: action.payload });
}

export async function createInvoices(action: IRequestAction) {
  console.log("get invoice request", GET_INVOICE_URL, action.payload);

  return APIUtils.get(GET_INVOICE_URL, { params: action.payload });
}
