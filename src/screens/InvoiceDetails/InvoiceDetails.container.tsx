import React, { FC } from "react";
import { InvoiceStackParamList } from "../index";
import { RouteProp, useRoute } from "@react-navigation/native";
import InvoiceDetailsView from "./InvoiceDetails.view";

type InvoiceDetailsNavigationProps = RouteProp<
  InvoiceStackParamList,
  "InvoiceDetails"
>;

const InvoiceDetailsScreen: FC = (): JSX.Element => {
  const route = useRoute<InvoiceDetailsNavigationProps>();
  const { invoice } = route.params;
  return <InvoiceDetailsView data={invoice} />;
};

export default InvoiceDetailsScreen;
