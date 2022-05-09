import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  selectInvoicesState,
  selectIsLoadingState,
} from "@redux/selectors/invoice";
import { getInvoicesRequest } from "@redux/slices/invoice";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IInvoice } from "src/interfaces/IInvoice";
import { InvoiceStackParamList } from "..";
import DashboardView from "./Dashboard.view";

const DashboardScreen: FC = (): JSX.Element => {
  const { navigate } =
    useNavigation<StackNavigationProp<InvoiceStackParamList>>();
  const dispatch = useDispatch();
  const listInvoice = useSelector(selectInvoicesState);
  const isLoading = useSelector(selectIsLoadingState);

  useEffect(() => {
    dispatch(getInvoicesRequest());
  }, []);

  const onInvoiceSelect = (selectedInvoice: IInvoice) => {
    navigate("InvoiceDetails", { invoice: selectedInvoice });
  };

  const onPressAddBtn = () => {
    navigate("InvoiceDetails", { invoice: undefined });
  };

  const onRefresh = () => {
    dispatch(getInvoicesRequest());
  };

  return (
    <DashboardView
      onInvoiceSelect={onInvoiceSelect}
      invoiceData={listInvoice}
      isLoading={isLoading}
      onRefresh={onRefresh}
      onPressAddBtn={onPressAddBtn}
    />
  );
};

export default DashboardScreen;
