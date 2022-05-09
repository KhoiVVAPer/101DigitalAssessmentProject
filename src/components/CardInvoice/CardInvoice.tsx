import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { RNText } from "../index";
import { IInvoice } from "interfaces/IInvoice";

type CardInvoiceProps = {
  data: IInvoice;
  onSelect: (item: IInvoice) => void;
};

export const CardInvoice: FC<CardInvoiceProps> = ({
  data,
  onSelect,
}): JSX.Element => {
  const renderInfoRow = (title: string, content: string | number) => (
    <View style={styles.rowInfo}>
      <RNText style={styles.title} text={`${title}: `} />
      <RNText text={`${content}`} />
    </View>
  );

  return (
    <TouchableOpacity onPress={() => onSelect(data)}>
      <View style={styles.container}>
        {renderInfoRow("invoiceNumber", data.invoiceNumber)}
        {renderInfoRow("references", data.itemReference)}
        {renderInfoRow("invoiceDate", data.invoiceDate)}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    padding: 10,
  },
  rowInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    fontWeight: "bold",
  },
});
