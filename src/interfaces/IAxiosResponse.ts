export interface IInvoiceResponse {
  balanceAmount: number;
  createdAt: string;
  currency: string;
  customFields: [];
  referenceNo: string;
  customer: {};
  description: string;
  dueDate: string;
  extensions: [];
  invoiceDate: string;
  invoiceId: string;
  invoiceNumber: string;
  invoiceSubTotal: number;
  isInsured: boolean;
  isRegulated: boolean;
  merchant: {};
  numberOfDocuments: number;
  purchaseOrderMatched: boolean;
  status: [];
  subStatus: [];
  totalAmount: number;
  totalDiscount: number;
  totalPaid: number;
  totalTax: number;
  type: string;
  version: string;
}
