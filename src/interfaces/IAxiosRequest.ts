import { OrderingInvoiceState } from "./Enum";

export interface ICreateInvoiceRequest {
  itemRef: string;
  date: string;
  description: string;
  invoiceNumber: string;
}

export interface IGetInvoiceRequest {
  pageNum?: number;
  pageSize?: number;
  ordering?: OrderingInvoiceState;
  sortBy?: string;
  dateType?: string;
  keyword?: string;
}
