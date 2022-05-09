import { BASE_URL } from "@env";

const GET_TOKEN_URL = `${BASE_URL}token`;
const GET_USER_INFO_URL = `${BASE_URL}membership-service/1.2.0/users/me`;
const GET_INVOICE_URL = `${BASE_URL}invoice-service/1.0.0/invoices`;

export { GET_TOKEN_URL, GET_USER_INFO_URL, GET_INVOICE_URL };
