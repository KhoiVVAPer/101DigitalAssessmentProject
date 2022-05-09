export interface IInvoice {
  id: string;
  itemReference: string;
  description: string;
  quantity: number;
  amount: number;
  invoiceDate: string;
  invoiceNumber: string;
}
