import { AxiosResponse } from "axios";
import { IInvoiceResponse } from "src/interfaces/IAxiosResponse";
import { IInvoice } from "src/interfaces/IInvoice";

export const invoiceParser = (item: IInvoiceResponse): IInvoice => {
  return {
    id: item.invoiceId,
    invoiceDate: item.invoiceDate,
    itemReference: item.referenceNo ?? "empty",
    description: item.description,
    quantity: Math.round(Math.random() * 10),
    amount: item.balanceAmount,
    invoiceNumber: item.invoiceNumber,
  };
};

export const listInvoiceParser = (responses: AxiosResponse): IInvoice[] => {
  return responses.data.map((item: IInvoiceResponse) => invoiceParser(item));
};
