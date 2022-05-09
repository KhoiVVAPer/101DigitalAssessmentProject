import { RNText } from "components";
import { RNHeader } from "components/Header/Header";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IInvoice } from "src/interfaces/IInvoice";

type InvoiceDetailsViewProps = {
  data?: IInvoice;
};

const InvoiceDetailsView: FC<InvoiceDetailsViewProps> = ({
  data,
}): JSX.Element => {
  console.log("data", data);
  const isEdit = !!data;
  console.log("isEdit", isEdit);
  return (
    <SafeAreaView>
      <RNHeader
        title={isEdit ? "Invoice Details" : "Create Invoice"}
        canGoBack={true}
      />
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default InvoiceDetailsView;
