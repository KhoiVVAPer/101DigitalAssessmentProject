import { CREATE_INVOICE_URL, GET_INVOICE_URL } from "@constants/apiUrls";
import { IRequestAction } from "src/interfaces/IRequestAction";
import APIUtils from "@utils/apiUtils";

export async function getInvoices(action: IRequestAction) {
  console.log("get invoice request", GET_INVOICE_URL, action.payload);

  return APIUtils.get(GET_INVOICE_URL, { params: action.payload });
}

export async function createInvoices(action: IRequestAction) {
  console.log("create invoice request", CREATE_INVOICE_URL, action.payload);
  const { itemRef, date, description, invoiceNumber } = action.payload;

  return APIUtils.post(CREATE_INVOICE_URL, {
    headers: {
      "Operation-Mode": "SYNC",
    },
    body: {
      listOfInvoices: [
        {
          bankAccount: {
            bankId: "",
            sortCode: "09-01-01",
            accountNumber: "12345678",
            accountName: "John Terry",
          },
          customer: {
            firstName: "Nguyen",
            lastName: "Dung 2",
            contact: {
              email: "nguyendung2@101digital.io",
              mobileNumber: "+6597594971",
            },
            addresses: [
              {
                premise: "CT11",
                countryCode: "VN",
                postcode: "1000",
                county: "hoangmai",
                city: "hanoi",
              },
            ],
          },
          documents: [
            {
              documentId: "96ea7d60-89ed-4c3b-811c-d2c61f5feab2",
              documentName: "Bill",
              documentUrl: "http://url.com/#123",
            },
          ],
          invoiceReference: itemRef,
          invoiceNumber: invoiceNumber,
          currency: "GBP",
          invoiceDate: date,
          dueDate: "2021-06-04",
          description: description,
          customFields: [
            {
              key: "invoiceCustomField",
              value: "value",
            },
          ],
          extensions: [
            {
              addDeduct: "ADD",
              value: 10,
              type: "PERCENTAGE",
              name: "tax",
            },
            {
              addDeduct: "DEDUCT",
              type: "FIXED_VALUE",
              value: 10.0,
              name: "discount",
            },
          ],
          items: [
            {
              itemReference: "itemRef",
              description: "Honda RC150",
              quantity: 1,
              rate: 1000,
              itemName: "Honda Motor",
              itemUOM: "KG",
              customFields: [
                {
                  key: "taxiationAndDiscounts_Name",
                  value: "VAT",
                },
              ],
              extensions: [
                {
                  addDeduct: "ADD",
                  value: 10,
                  type: "FIXED_VALUE",
                  name: "tax",
                },
                {
                  addDeduct: "DEDUCT",
                  value: 10,
                  type: "PERCENTAGE",
                  name: "tax",
                },
              ],
            },
          ],
        },
      ],
    },
  });
}
