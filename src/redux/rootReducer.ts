import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import invoiceReducer from "./slices/invoice";
import userReducer from "./slices/user";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  invoice: invoiceReducer,
});

export default rootReducer;
