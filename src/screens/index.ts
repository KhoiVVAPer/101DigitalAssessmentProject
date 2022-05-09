import LoginScreen from "./Login/Login.container";
import { StackNavigationOptions } from "@react-navigation/stack";
import DashboardScreen from "./Dashboard/Dashboard.container";
import InvoiceDetailsScreen from "./InvoiceDetails/InvoiceDetails.container";
import { IInvoice } from "src/interfaces/IInvoice";

export const options: StackNavigationOptions = {
  headerShown: false,
  headerBackTitleVisible: false,
};

export type MainStackParamList = {
  AuthStack: undefined;
  MainStack: undefined;
};

// ========= AUTH STACK
export type AuthStackParamList = {
  Login: undefined;
};

export const authStackScreens = {
  Login: { component: LoginScreen, options },
};

// ========= MAIN STACK

// Invoice
export type InvoiceStackParamList = {
  Dashboard: undefined;
  InvoiceDetails: { invoice?: IInvoice };
};

export const invoiceStackScreens = {
  Dashboard: { component: DashboardScreen, options },
  InvoiceDetails: { component: InvoiceDetailsScreen, options },
};
