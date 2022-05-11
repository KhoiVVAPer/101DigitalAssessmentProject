import React, { FC, useEffect } from "react";
import { InvoiceStackParamList } from "../index";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import InvoiceDetailsView from "./InvoiceDetails.view";
import { useDispatch, useSelector } from "react-redux";
import {
  createInvoiceRequest,
  resetCreateInvoiceState,
} from "@redux/slices/invoice";
import { selectCreateInvoiceState } from "@redux/selectors/invoice";
import { CreateInvoiceState } from "../../interfaces/Enum";
import { StackNavigationProp } from "@react-navigation/stack";

type InvoiceDetailsNavigationProps = RouteProp<
  InvoiceStackParamList,
  "InvoiceDetails"
>;

const InvoiceDetailsScreen: FC = (): JSX.Element => {
  const route = useRoute<InvoiceDetailsNavigationProps>();
  const { goBack } =
    useNavigation<StackNavigationProp<InvoiceStackParamList>>();
  const createInvoiceState = useSelector(selectCreateInvoiceState);
  const { invoice } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    if (createInvoiceState === CreateInvoiceState.SUCCESS) {
      dispatch(resetCreateInvoiceState());
      goBack();
    }
  }, [createInvoiceState]);

  const onCreateInvoice = (
    itemRef: string,
    date: string,
    description: string,
    invoiceNumber: string
  ) => {
    dispatch(
      createInvoiceRequest({ itemRef, date, description, invoiceNumber })
    );
  };

  return (
    <InvoiceDetailsView
      isLoading={createInvoiceState === CreateInvoiceState.REQUESTING}
      data={invoice}
      onCreateInvoice={onCreateInvoice}
    />
  );
};

export default InvoiceDetailsScreen;
