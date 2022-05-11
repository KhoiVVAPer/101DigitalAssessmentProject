import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  selectInvoicesState,
  selectIsLoadingState,
  selectKeywordState,
  selectOrderInvoiceState,
} from "@redux/selectors/invoice";
import {
  getInvoicesRequest,
  setKeywordSearching,
  setOrdering,
} from "@redux/slices/invoice";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderingInvoiceState } from "../../interfaces/Enum";
import { IInvoice } from "src/interfaces/IInvoice";
import { InvoiceStackParamList } from "..";
import DashboardView from "./Dashboard.view";
import { logoutRequest } from "@redux/slices/auth";
import { selectIsLoggedState } from "@redux/selectors/auth";

const DashboardScreen: FC = (): JSX.Element => {
  const { navigate } =
    useNavigation<StackNavigationProp<InvoiceStackParamList>>();
  const dispatch = useDispatch();
  const listInvoice = useSelector(selectInvoicesState);
  const isLoading = useSelector(selectIsLoadingState);
  const ordering = useSelector(selectOrderInvoiceState);
  const keyword = useSelector(selectKeywordState);
  const isLogged = useSelector(selectIsLoggedState);

  useEffect(() => {
    if (isLogged) {
      dispatch(getInvoicesRequest());
    }
  }, [ordering, keyword]);

  const onInvoiceSelect = (selectedInvoice: IInvoice) => {
    navigate("InvoiceDetails", { invoice: selectedInvoice });
  };

  const onAddNewInvoice = () => {
    navigate("InvoiceDetails", { invoice: undefined });
  };

  const onLogout = () => {
    dispatch(logoutRequest());
  };

  const onRefresh = () => {
    if (ordering === OrderingInvoiceState.DESCENDING) {
      dispatch(getInvoicesRequest());
    } else {
      dispatch(setOrdering(OrderingInvoiceState.DESCENDING));
    }
  };

  const onSearchInvoice = (searchText: string) => {
    console.log("onSearchInvoice -> searchText", searchText);
    dispatch(setKeywordSearching(searchText));
  };

  const changeOrderingInvoice = () => {
    console.log("changeOrderingInvoice", ordering);
    dispatch(
      setOrdering(
        ordering === OrderingInvoiceState.ASCENDING
          ? OrderingInvoiceState.DESCENDING
          : OrderingInvoiceState.ASCENDING
      )
    );
  };

  return (
    <DashboardView
      onInvoiceSelect={onInvoiceSelect}
      invoiceData={listInvoice}
      isLoading={isLoading}
      onRefresh={onRefresh}
      onLogout={onLogout}
      onAddNewInvoice={onAddNewInvoice}
      onSearchInvoice={onSearchInvoice}
      changeOrderingInvoice={changeOrderingInvoice}
    />
  );
};

export default DashboardScreen;
